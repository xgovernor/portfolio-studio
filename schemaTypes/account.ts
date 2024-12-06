import {defineField, defineType} from 'sanity'

export const account = defineType({
  name: 'account',
  title: 'Account',
  type: 'document',
  initialValue: () => ({
    publishedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  }),
  fields: [
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      hidden: false, // Show this field by default; change if necessary
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Active', value: 'active'},
          {title: 'Inactive', value: 'inactive'},
          {title: 'Pending', value: 'pending'},
          {title: 'Suspended', value: 'suspended'},
          {title: 'Deleted', value: 'deleted'},
        ],
      },
      validation: (Rule) => Rule.required(), // Ensure status is always set
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(255).warning('Title should not exceed 255 characters'),
    }),
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.uri({allowRelative: false}),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) =>
        Rule.max(500).warning('Descriptions longer than 500 characters may be truncated'),
    }),
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required().max(56),
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required().max(56),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'password',
      title: 'Password',
      type: 'string',
      validation: (Rule) =>
        Rule.required().min(8).error('Password must be at least 8 characters long'),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(/^\+?\d{10,15}$/, {name: 'phone'}).error('Invalid phone number format'),
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      validation: (Rule) => Rule.max(255).warning('Address should not exceed 255 characters'),
    }),
    defineField({
      name: 'securityQuestion',
      title: 'Security Question',
      type: 'array',
      of: [
        {
          name: 'question',
          type: 'object',
          title: 'Question',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'note',
      title: 'Note',
      type: 'text',
      validation: (Rule) =>
        Rule.max(1000).warning('Notes longer than 1000 characters may be truncated'),
    }),
  ],
})
