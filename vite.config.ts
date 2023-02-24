import { fileURLToPath, URL } from 'node:url'
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
export default defineConfig({
  build:{
    cssCodeSplit:false,
    lib:{
      entry:resolve(__dirname,"./src/components/index.ts"),
      name:"cc-comp",
      fileName:"cc-comp"
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    }
  },
  plugins: [vue(), vueJsx(),dts(),cssInjectedByJsPlugin()],
  resolve: {
    dedupe: [
      'vue'
    ],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
