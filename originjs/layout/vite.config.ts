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
      port: Number(env.LAYOUT_PORT),
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
  }
})
