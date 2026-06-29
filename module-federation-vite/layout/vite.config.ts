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
      port: Number(env.LAYOUT_PORT),
      origin: env.ORIGIN,
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
        remotes: {
          host_a: {
            type: 'module',
            name: 'host_a',
            entry: env.HOST_A_URL,
          },
          host_b: {
            type: 'module',
            name: 'host_b',
            entry: env.HOST_B_URL,
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
  }
})
