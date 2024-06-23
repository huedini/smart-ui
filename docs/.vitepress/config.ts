/*
 * @Description:
 * @Author: Ni Jianhun
 * @Date: 2023-10-13 16:21:37
 * @LastEditors: Hu Yilin
 * @LastEditTime: 2024-06-23 15:48:28
 */
import { defineConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'
export default defineConfig({
  title: '通用组件文档',
  description: '业务组件',
  lang: 'cn-ZH',
  base: '/',
  lastUpdated: true,
  themeConfig: {
    logo: '/favicon.ico',
    siteTitle: '组件库',
    outline: 3,

    nav: [
      {
        text: '安装指南',
        link: '/components/',
      },
      { text: '基础组件', link: '/components/app-card/base.md' },
    ],
    sidebar: {
      '/components': [
        {
          text: '常用组件',
          items: [
           
            
            { text: 'app卡片', link: '/components/app-card/base.md' },
            {
              text: '带分类筛选的app卡片列表',
              link: '/components/app-card-list-classified/base.md',
            },
            {
              text: '滚动分页加载Select',
              link: '/components/select-infinite-scroll/base.md',
            },
            { text: '上传文件', link: '/components/upload/base.md' },
            { text: '文件预览', link: '/components/SFilePreview/base.md' },
            {
              text: '图文拖拽组件',
              link: '/components/image-text-draggable/base.md',
            },
          ],
        },
      ],
    },
  },
  markdown: {
    headers: {
      level: [0, 0],
    },
    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: 'github-light', dark: 'github-dark' },
    config: (md) => mdPlugin(md),
  },
})
