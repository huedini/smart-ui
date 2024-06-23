import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueSetupExtend from 'vite-plugin-vue-setup-extend' // 设置neme属性
export default defineConfig({
  plugins: [vueJsx(), vueSetupExtend()],
  server: {
    host: '0.0.0.0',
    port: 2222,
    open: true,
    https: false,
    proxy: {
      '^/mes': {
        target: `http://10.0.10.243:5000/mesv2/`,
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/mes/, ''),
      },
      '/sc/th': {
        target: 'https://private-dev.ictsoft.cn',
        ws: false,
        changeOrigin: true,
      },
    }
  },
})
