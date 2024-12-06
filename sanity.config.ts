import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {codeInput} from '@sanity/code-input'
import {media} from 'sanity-plugin-media'
import {mermaid} from 'sanity-plugin-mermaid-input'
import {table} from '@sanity/table'

export default defineConfig({
  name: 'default',
  title: 'Abu Taher Muhammad',

  projectId: '1at06ab8',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    media(),
    codeInput(),
    mermaid({
      theme: 'dark',
    }),
    table(),
  ],

  schema: {
    types: schemaTypes,
  },
})
