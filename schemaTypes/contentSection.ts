import {defineField, defineType} from 'sanity'

export const projectContent = defineType({
  name: 'projectContent',
  title: 'Project Section',
  type: 'object',
  fields: [
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      description: 'A small subheading text (e.g., "The Making of the Simulator").',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description:
        'The main heading text (e.g., "From Product Engineering to Interactive Experience").',
    }),
    defineField({
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [{type: 'text'}],
      validation: (Rule) => Rule.max(4).error('You can only add up to 4 paragraphs.'),
      description: 'Add up to 4 paragraphs. Each paragraph will be rendered in the design layout.',
    }),
  ],
})
