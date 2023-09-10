import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'
import pluginRewriteAll from 'vite-plugin-rewrite-all';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  //  basicSsl(),
    pluginRewriteAll()
  ],
  server:{
    port: 3000,
    https: false
  }
})
