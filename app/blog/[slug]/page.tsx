import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getAllPosts, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, Calendar, User } from "lucide-react";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts?.map((post: any) => ({
    slug: post.slug.current,
  })) || [];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  
  if (!post) return {};

  const authorName = typeof post.author === 'string' ? post.author : post.author?.name || 'Unique Greek Tours';
  
  return {
    title: `${post.title} | Unique Greek Tours Blog`,
    description: post.metaDescription || post.excerpt || `Read about ${post.title}`,
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [authorName],
      images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : [],
    },
  };
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8 relative h-[400px] rounded-xl overflow-hidden">
        <Image
          src={urlFor(value).width(1200).url()}
          alt={value.alt || 'Blog image'}
          fill
          className="object-cover"
        />
      </div>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a href={value.href} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
  block: {
    h2: ({ children }: any) => <h2 className="text-3xl font-display text-primary mt-8 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-display text-primary mt-6 mb-3">{children}</h3>,
    normal: ({ children }: any) => <p className="mb-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-accent pl-6 my-6 italic text-gray-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
  },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Handle author - could be string or object
  const authorName = typeof post.author === 'string' ? post.author : post.author?.name || 'Unique Greek Tours';

  // Default Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription || post.excerpt,
    "datePublished": post.publishedAt,
    "image": post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": "Unique Greek Tours",
      "url": "https://uniquegreektours.com"
    }
  };

  return (
    <article className="flex flex-col">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: post.schemaMarkup || JSON.stringify(articleSchema)
        }}
      />

      {/* Hero Image */}
      <section className="relative h-[60vh] min-h-[500px]">
        {post.mainImage ? (
          <Image
            src={urlFor(post.mainImage).width(1920).height(1080).url()}
            alt={post.title}
            fill
            className="object-cover brightness-50"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-primary" />
        )}
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom pb-12 text-white">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-accent-light hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 max-w-4xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <time>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              {authorName && (
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>{authorName}</span>
                </div>
              )}
              {post.categories && post.categories.length > 0 && (
                <div className="flex gap-2">
                  {post.categories.map((category: string) => (
                    <span key={category} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                      {category}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {post.excerpt && (
              <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                {post.excerpt}
              </p>
            )}
            
            <div className="prose prose-lg max-w-none text-gray-700">
              {post.body && (
                <PortableText value={post.body} components={portableTextComponents} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Ready to Experience Greece?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us help you plan your perfect Greek adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tours" 
              className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-accent hover:text-white transition-all"
            >
              Explore Tours
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
