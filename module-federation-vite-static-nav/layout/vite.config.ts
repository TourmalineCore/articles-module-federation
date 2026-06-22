/* eslint-disable @typescript-eslint/quotes */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

const LAYOUT_PORT = process.env.NODE_ENV === 'production' 
  ? 30091 
  : 4000

const ORIGIN = process.env.NODE_ENV === 'production' 
  ? '/' 
  : `http://localhost:${LAYOUT_PORT}`

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  server: {
    port: LAYOUT_PORT,
    origin: ORIGIN,
  },
  base: '/layout',
  plugins: [
    react(),
    federation({
      name: 'layout',
      filename: 'remoteEntry.js',
      exposes: {
        './layout': './src/Layout.tsx',
      },
      shared: {
        react: {
          singleton: true,
        },
      },
    }),
  ],
  build: {
    target: 'esnext',
  },
})
