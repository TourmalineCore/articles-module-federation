/* eslint-disable @typescript-eslint/quotes */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

const HOST_PORT = process.env.NODE_ENV === 'production'
  ? 30091
  : 4002

const LAYOUT_PORT = 4000

const LAYOUT_URL =
  process.env.NODE_ENV === 'production'
    ? '/layout/assets/layout.js'
    : `http://localhost:${LAYOUT_PORT}/layout/assets/layout.js`

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  server: {
    port: HOST_PORT,
  },
  base: '/host-b',
  plugins: [
    react(),
    federation({
      name: 'host_b',
      remotes: {
        layout: LAYOUT_URL,
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
