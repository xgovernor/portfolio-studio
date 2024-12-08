import React from 'react'
import {defineField, defineType} from 'sanity'

export const dualImage = defineType({
  name: 'dualImage',
  title: 'Dual Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image1',
      title: 'Image 1',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'image2',
      title: 'Image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string',
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Dual Image',
        media: 'image1',
      }
    },
  },
})
