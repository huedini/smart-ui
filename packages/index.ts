/*
 * @Description:
 * @Author: Ni Jianhun
 * @Date: 2023-10-13 16:21:37
 * @LastEditors: Hu Yilin
 * @LastEditTime: 2024-06-23 15:51:34
 */
import type { App, Component } from 'vue'
import LayoutPage from './layout-page'
import LayoutPageItem from './layout-page-item'
import AppCard from './app-card'
import AppCardList from './app-card-list'
import AppCardListClassified from './app-card-list-classified'
import FilePreview from './file-preview'
import FileUpload from './file-upload'
import SelectInfiniteScroll from './select-infinite-scroll'
// import ImageTextDraggable from './image-text-draggable'

// 存储组件列表;l
const components: {
  [propName: string]: Component
} = {
  SLayoutPage: LayoutPage,
  SLayoutPageItem: LayoutPageItem,
  SFileUpload: FileUpload,
  SAppCard: AppCard,
  SAppCardList: AppCardList,
  SAppCardListClassified: AppCardListClassified,
  SFilePreview: FilePreview,
  SSelectInfiniteScroll: SelectInfiniteScroll,
  // SImageTextDraggable: ImageTextDraggable,
}
// 插件声明：声明所有插件
// 插件注册：在 Vue 项目的入口文件中，通过 ( app.use(插件) ) 进行注册
const installComponents: any = (app: App) => {
  // components.forEach((comp: any) => {
  //   app.component(comp.name as string, comp)
  // })

  for (const key in components) {
    app.component(key, components[key])
  }
}
// vue插件
// - install：每个插件都有一个 install 方法
// - 参数：是通过 Vue.createApp() 创建的 app 实例
const install: any = (app: any, router?: any) => {
  // !router && installRouter(app);
  installComponents(app)
}

// 按需引入
export {
  AppCard,
  AppCardList,
  AppCardListClassified,
  FilePreview,
  FileUpload,
  SelectInfiniteScroll,
  // ImageTextDraggable,
}
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
}
