/* eslint-disable @typescript-eslint/quotes */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

const HOST_PORT = process.env.NODE_ENV === 'production'
  ? 30091
  : 4002

const LAYOUT_PORT = 4000

const LAYOUT_URL = process.env.NODE_ENV === 'production'
  ? '/layout/remoteEntry.js'
  : `http://localhost:${LAYOUT_PORT}/layout/remoteEntry.js`

const ORIGIN = process.env.NODE_ENV === 'production'
  ? '/'
  : `http://localhost:${HOST_PORT}`

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  server: {
    port: HOST_PORT,
    origin: ORIGIN,
  },
  base: '/host-b',
  plugins: [
    react(),
    federation({
      name: 'host_b',
      remotes: {
        layout: {
          type: 'module',
          name: 'layout',
          entry: LAYOUT_URL,
        },
      },
      exposes: {
        './nav': './src/nav.ts',
      },
      filename: 'remoteEntry.js',
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
