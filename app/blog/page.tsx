import Link from "next/link";
import Image from "next/image";
import { getAllPosts, urlFor } from "@/lib/sanity";
import { ArrowRight, Calendar } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Blog | Unique Greek Tours",
  description: "Discover travel tips, guides, and stories about Greece and the Peloponnese.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/images/destination-nafplio.jpg"
          alt="Travel Blog"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container-custom relative z-10 text-center text-white">
          <p className="text-accent-light uppercase tracking-widest text-sm mb-4">Our Stories</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">
            Travel Blog
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
            Stories, guides, and insider tips for exploring Greece
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {posts && posts.length > 0 ? (
            <>
              {/* Featured Post */}
              {posts[0] && (
                <div className="mb-16">
                  <Link href={`/blog/${posts[0].slug.current}`} className="group">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="relative h-[400px] rounded-2xl overflow-hidden">
                        {posts[0].mainImage ? (
                          <Image
                            src={urlFor(posts[0].mainImage).width(800).height(600).url()}
                            alt={posts[0].title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-400">No image</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="text-accent font-semibold uppercase tracking-wider text-sm">Featured</span>
                        <h2 className="font-display text-3xl md:text-4xl text-primary mt-2 mb-4 group-hover:text-accent transition-colors">
                          {posts[0].title}
                        </h2>
                        <div className="flex items-center gap-2 text-gray-500 mb-4">
                          <Calendar className="h-4 w-4" />
                          <time>
                            {new Date(posts[0].publishedAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </time>
                        </div>
                        {posts[0].excerpt && (
                          <p className="text-gray-600 text-lg mb-6 line-clamp-3">
                            {posts[0].excerpt}
                          </p>
                        )}
                        <span className="inline-flex items-center text-accent font-semibold">
                          Read Article
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Rest of Posts */}
              {posts.length > 1 && (
                <>
                  <h2 className="font-display text-3xl text-primary mb-8">Latest Articles</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.slice(1).map((post: any) => (
                      <article key={post._id} className="group">
                        <Link href={`/blog/${post.slug.current}`}>
                          <div className="relative h-56 rounded-xl overflow-hidden mb-4">
                            {post.mainImage ? (
                              <Image
                                src={urlFor(post.mainImage).width(600).height(400).url()}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            ) : (
                              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-400">No image</span>
                              </div>
                            )}
                          </div>
                          
                          <h3 className="font-display text-xl text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                            <Calendar className="h-4 w-4" />
                            <time>
                              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </time>
                          </div>
                          
                          {post.excerpt && (
                            <p className="text-gray-600 line-clamp-2 mb-3 text-sm">
                              {post.excerpt}
                            </p>
                          )}
                          
                          <span className="inline-flex items-center text-accent font-semibold text-sm">
                            Read More
                            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </Link>
                      </article>
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-sand-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-12 w-12 text-primary/50" />
              </div>
              <h2 className="text-2xl font-display text-primary mb-4">Coming Soon</h2>
              <p className="text-gray-600 max-w-md mx-auto">
                We're working on exciting travel stories and guides. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Ready to Explore Greece?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Turn these travel inspirations into reality with our expertly guided tours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tours" 
              className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-accent hover:text-white transition-all"
            >
              Explore Our Tours
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
    </div>
  );
}
