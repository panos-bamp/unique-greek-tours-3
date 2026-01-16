import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Sanity client configuration
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

// Image URL builder for Sanity images
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Fetch all blog posts
export async function getAllPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage,
      "categories": categories[]->title,
      "author": author
    }
  `);
}

// Fetch single post by slug
export async function getPostBySlug(slug: string) {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      metaDescription,
      schemaMarkup,
      body,
      mainImage,
      "categories": categories[]->title,
      "author": author
    }
  `, { slug });
}

// Fetch posts by category
export async function getPostsByCategory(category: string) {
  return client.fetch(`
    *[_type == "post" && $category in categories[]->slug.current] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage
    }
  `, { category });
}

// Fetch recent posts
export async function getRecentPosts(limit: number = 3) {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc)[0...$limit] {
      _id,
      title,
      slug,
      publishedAt,
      mainImage
    }
  `, { limit });
}
