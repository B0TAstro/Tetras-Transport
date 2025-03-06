import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: "sanity-nextjs-site",
  title: 'Tetras-Transport Sanity Next.js website',

  projectId: 'wks8w1ug',
  dataset: 'production',
  basePath: "/studio",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})