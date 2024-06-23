/*
 * @Description: 
 * @Author: Hu Yilin
 * @Date: 2024-03-29 13:47:48
 * @LastEditors: Hu Yilin
 * @LastEditTime: 2024-06-19 14:58:11
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import vueSetupExtend from 'vite-plugin-vue-setup-extend' // 设置neme属性
import viteCompression from 'vite-plugin-compression' // 静态资源压缩
import DefineOptions from 'unplugin-vue-define-options/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    DefineOptions(),
    vueJsx(),
    vueSetupExtend(),
    viteCompression({
      verbose: true,
      disable: false, // 不禁用压缩
      deleteOriginFile: false, // 压缩后是否删除原文件
      threshold: 10240, // 压缩前最小文件大小
      algorithm: 'gzip', // 压缩算法
      ext: '.gz', // 文件类型
    }),
  ],
  resolve: {
    // 配置别名
    alias: {
      // '@': resolve(__dirname, 'examples'),
      '@': resolve(__dirname, 'packages'),
    },
    // 类型： string[] 导入时想要省略的扩展名列表。
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs'],
  },
  build: {
    outDir: 'lib/umd',
    // cssCodeSplit: true, // 强制内联CSS
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {
      // entry: resolve(__dirname, 'packages/index.ts'),
      entry: './packages/index.ts',
      name: 'SmartCityUI',
      formats: ['umd'],
      fileName: 'smart-city-ui',
    },
  }
})
