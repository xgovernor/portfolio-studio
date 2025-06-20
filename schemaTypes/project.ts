import {defineType, defineField} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'technology',
      title: 'Technology',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'category',
      title: 'Category',
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
      name: 'role',
      title: 'Role',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'removed',
      title: 'Removed',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      date: 'publishedAt',
      media: 'thumbnail',
    },
    prepare({title, subtitle, date, media}) {
      return {
        title: `${title} - ${subtitle}`, // Name - Title
        subtitle: date ? new Date(date).toLocaleDateString() : 'No date', // Last edit date
        media: media || {asset: {url: 'https://via.placeholder.com/150'}},
      }
    },
  },
})
