/* eslint-disable @typescript-eslint/quotes */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

const LAYOUT_PORT = process.env.NODE_ENV === 'production'
  ? 30091
  : 4000

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  server: {
    port: LAYOUT_PORT,
  },
  base: '/layout',
  plugins: [
    react(),
    federation({
      name: 'layout',
      filename: 'layout.js',
      exposes: {
        './layout': './src/Layout.tsx',
      },
      shared: [
        'react',
        'react-dom',
        'react-router-dom',
      ],
    }),
  ],
  build: {
    target: 'esnext',
  },
})
