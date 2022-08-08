import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import getUrl from './plugins/get-url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), getUrl()],
})
