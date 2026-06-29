/* eslint-disable @typescript-eslint/quotes */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// eslint-disable-next-line import/no-default-export
export default defineConfig(({
  mode, 
}) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    server: {
      port: Number(env.HOST_PORT),
    },
    base: '/host-a',
    plugins: [
      react(),
      federation({
        name: 'host_a',
        remotes: {
          layout: env.LAYOUT_URL,
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
  }
})
