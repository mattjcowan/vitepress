import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      './VPNavBarSearch.vue': path.join(
        __dirname,
        'components/search/VPNavBarSearch.vue'
      )
    }
  }
})
