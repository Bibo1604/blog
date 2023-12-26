import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import StudioNavbar from './components/StudioNavbar';
import { getDefaultDocumentNode } from './structure';
import {theme} from 'https://themer.sanity.build/api/hues?default=978071&primary=dca488;400&transparent=978071&positive=43d675;300&caution=fbd024;200&lightest=fdfcfc&darkest=14110e'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: 'Personal_Blog',
  title: 'Personal Blog',
  projectId,
  dataset,
  theme,
  plugins: [deskTool({
    defaultDocumentNode: getDefaultDocumentNode,
  }), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: StudioNavbar
    }
  }
  
})
