/*
 * @Description:
 * @Author: Hu Yilin
 * @Date: 2024-03-29 13:47:48
 * @LastEditors: Hu Yilin
 * @LastEditTime: 2024-06-20 23:28:06
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import vueSetupExtend from 'vite-plugin-vue-setup-extend' // 设置neme属性
import viteCompression from 'vite-plugin-compression' // 静态资源压缩
import dts from 'vite-plugin-dts'
import DefineOptions from 'unplugin-vue-define-options/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    DefineOptions(),
    dts(),
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
    // visualizer({
    //   open:true,  //注意这里要设置为true，否则无效
    //   gzipSize:true,
    //   brotliSize:true
    // })
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
    outDir: 'lib/es',
    // cssCodeSplit: true, // 强制内联CSS
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: [
        'vue',
        '@ant-design/icons-vue',
        '@purge-icons/generated',
        'ant-design-vue',
        'dayjs',
        'html2canvas',
        'js-base64',
        'resize-observer-polyfill',
        'vue-cropper',
        'vue-types',
      ],
    },
    lib: {
      // entry: resolve(__dirname, 'packages/index.ts'),
      entry: './packages/index.ts',
      name: 'SmartCityUI',
      formats: ['es'],
      fileName: 'smart-city-ui',
    },
  },
})
