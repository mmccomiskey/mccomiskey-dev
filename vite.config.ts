import path from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { profile } from './src/data/profile-data.ts'
import { profileToMarkdown } from './src/lib/profile-markdown.ts'

// The page renders client-side, so agents get this Markdown copy instead.
function profileMarkdown(): Plugin {
  return {
    name: 'profile-markdown',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'index.md',
        source: profileToMarkdown(profile),
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), profileMarkdown()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
