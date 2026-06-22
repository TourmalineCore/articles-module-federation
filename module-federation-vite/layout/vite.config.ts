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

const HOST_A_URL = process.env.NODE_ENV === 'production'
  ? '/host-a/remoteEntry.js'
  : 'http://localhost:4001/host-a/remoteEntry.js'

const HOST_B_URL = process.env.NODE_ENV === 'production'
  ? '/host-b/remoteEntry.js'
  : 'http://localhost:4002/host-b/remoteEntry.js'

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
      remotes: {
        host_a: {
          type: 'module',
          name: 'host_a',
          entry: HOST_A_URL,
        },
        host_b: {
          type: 'module',
          name: 'host_b',
          entry: HOST_B_URL,
        },
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
