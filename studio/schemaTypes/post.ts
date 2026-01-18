export default {
  name: 'post',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string'
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'SEO meta description (150-160 characters recommended)',
      validation: (Rule: any) => Rule.max(160).warning('Keep under 160 characters for best SEO')
    },
    {
      name: 'schemaMarkup',
      title: 'Schema Markup (JSON-LD)',
      type: 'text',
      rows: 500,
      description: 'Optional: Custom JSON-LD structured data for this post'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        { 
          type: 'image',
          options: { hotspot: true }
        }
      ]
    }
  ]
}
