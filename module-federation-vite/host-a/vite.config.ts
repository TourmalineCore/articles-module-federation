/* eslint-disable @typescript-eslint/quotes */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// eslint-disable-next-line import/no-default-export
export default defineConfig(({
  mode,
}) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    server: {
      port: Number(env.HOST_PORT),
      origin: env.VITE_ORIGIN,
    },
    base: '/host-a',
    plugins: [
      react(),
      federation({
        name: 'host_a',
        remotes: {
          layout: {
            type: 'module',
            name: 'layout',
            entry: env.LAYOUT_URL,
          },
        },
        exposes: {
          './nav': './src/nav.ts',
        },
        filename: 'host-a.js',
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
  }
})
