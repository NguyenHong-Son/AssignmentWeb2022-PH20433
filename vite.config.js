const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        works: resolve(__dirname, 'works.html'),
        work: resolve(__dirname, 'work.html'),
        blog: resolve(__dirname, 'blog.html'),
      }
    }
  }
})