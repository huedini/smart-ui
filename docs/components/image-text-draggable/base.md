<!--
 * @Author: dozening
 * @Date: 2024-06-17 15:14:14
 * @LastEditors: dozening
 * @LastEditTime: 2024-06-19 09:42:37
 * @Description: file content
 * @FilePath: \component-library-pc\docs\components\image-text-draggable\base.md
-->
# 图文拖拽组件

### 基础用法

::: demo
image-text-draggable/baseExample
:::

### API

| 参数 | 说明 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| data | 数据源（响应式值） | `Array<Item>` | - | setup阶段使用provide注入响应式data值，以确保数据传递 `provide('data', data)`|
| editable | 可否编辑 | boolean | false |  |
| dragOptions | draggable配置项 | Object | `{animation: 200,group: 'description',disabled: false,ghostClass: 'ghost'}` | [点击这里](https://github.com/SortableJS/vue.draggable.next?tab=readme-ov-file "跳转draggable") |



### 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| move |   拖动位置发生变化 | Function( evt )| 其中evt见下表|





### 类型

#### Item

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| code |  | `string` |  |
| name |   | `string` |  |
| iconUrl | 图标 | `string` |  |
| highlightIconUrl | 高亮图标 | `string` |  |
| defaultFontColor | 字体颜色 | `string` |  |
| highlightFontColor |  高亮字体颜色 | `string` |  |


#### evt

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| draggedContext | 链接到拖动元素的上下文 | Object | `index: 拖拽元素索引 element：拖动元素底层视图模型元素 futureIndex：如果接受放置操作，则拖动元素的潜在索引` |
| relatedContext |  与当前拖动操作相关的上下文 | Object | `index：目标元素索引 element：目标元素视图模型元素 list：目标列表 component：目标 VueComponent` |
