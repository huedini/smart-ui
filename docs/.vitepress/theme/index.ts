/*
 * @Description:
 * @Author: Ni Jianhun
 * @Date: 2023-10-13 16:21:37
 * @LastEditors: Ni Jianhun
 * @LastEditTime: 2024-04-30 14:37:11
 */
import DefaultTheme from 'vitepress/theme'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import { VPDemo } from '../vitepress'
// 基于antd二次封装基础组件
import TuiPlus from '../../../packages'
import '../../public/css/index.css'
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    // 注册antd
    ctx.app.use(Antd)
    // 全局注册基础组件
    ctx.app.use(TuiPlus)

    ctx.app.component('Demo', VPDemo)
  },
}
