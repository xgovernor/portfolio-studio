import {defineField, defineType} from 'sanity'

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export const blockContent = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
        {title: 'H6', value: 'h6'},
        {title: 'Preformatted', value: 'pre'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              defineField({
                title: 'URL',
                name: 'href',
                type: 'url',
              }),
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      options: {
        hotspot: true,
        imageHotspot: {
          // see `Image and description path` setup below
          imagePath: `featureImage`,
          descriptionPath: `details`,
          // see `Custom tooltip` setup below
          tooltip: undefined,
        },
      },
      fields: [
        defineField({
          name: 'caption',
          type: 'string',
          title: 'Caption',
        }),
        defineField({
          // Editing this field will be hidden behind an "Edit"-button
          name: 'attribution',
          type: 'text',
          title: 'Attribution',
        }),
      ],
    },
    defineField({
      name: 'code',
      type: 'code',
      title: 'Code',
      options: {
        withFilename: true,
      },
    }),
    defineField({
      name: 'dualImage',
      type: 'dualImage',
      title: 'Dual Image',
    }),
    defineField({
      name: 'projectContent',
      type: 'projectContent',
      title: 'Project Section',
    }),
    // defineField({
    //   type: 'mermaid',
    //   name: 'chart',
    //   title: 'Flowchart',
    // }),
    defineField({
      name: 'sizeChart',
      title: 'Size Chart',
      type: 'table',
    }),
  ],
})
