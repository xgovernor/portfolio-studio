import {defineField, defineType} from 'sanity'

export const post = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      title: 'Thumbnail',
      name: 'image',
      type: 'image',
      // fields: [
      //   defineField({
      //     title: 'Alt',
      //     name: 'alt',
      //     type: 'string',
      //   }),
      // ],
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),

    defineField({
      title: 'Excerpt',
      name: 'excerpt',
      type: 'text',
      validation: (rule) => rule.required().min(130).max(250),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'To show a content in featured section.',
    }),
    defineField({
      name: 'category',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'topic',
      title: 'Topic',
      type: 'array',
      of: [{type: 'reference', to: {type: 'topic'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'references',
      title: 'References',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'importantLinks',
      title: 'Important Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
            }),
          ],
        },
      ],
    }),
    defineField({
      title: 'Report',
      name: 'report',
      type: 'object',
      fields: [
        defineField({
          name: 'status',
          title: 'Status',
          type: 'boolean',
        }),
        defineField({
          name: 'message',
          title: 'Message',
          type: 'string',
        }),
      ],
      description: 'This switche truned on if this content get reported.',
    }),
    defineField({
      name: 'removed',
      title: 'Removed',
      type: 'boolean',
      description: 'This switche truned on if this content deleted by user.',
    }),
  ],
  initialValue: () => ({
    report: {
      status: false,
    },
    approved: false,
    featured: false,
    publishedAt: new Date().toISOString(),
    removed: false,
  }),
  preview: {
    select: {
      title: 'title',
      category: 'category.title',
      media: 'image',
    },
    prepare(selection) {
      const {category} = selection
      return Object.assign({}, selection, {
        subtitle: category && `by ${category}`,
      })
    },
  },
})
