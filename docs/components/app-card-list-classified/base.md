<!--
 * @Description: 
 * @Author: Hu Yilin
 * @Date: 2024-04-07 10:02:07
 * @LastEditors: Hu Yilin
 * @LastEditTime: 2024-04-25 10:34:39
-->
# 带分类筛选的app卡片列表

---



### 基础的用法-带分类筛选

::: demo
app-card-list-classified/baseExample
:::


### API

| 参数 | 说明 | 类型 | 默认值 |  
| --- | --- | --- | --- |  
| categoryList | 富文本内容 | CategoryItem[] | '' |  
| appList | 富文本内容 | AppData[] | '' |  
| checkAble | 是否可勾选 | boolean | false |  
| showTool | 是否展示操作按钮（编辑、查看、删除） | boolean |  false |  
| v-model | 双向绑定，开启 checkAble用于设置是否选中| boolean | - |  



### 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| review |  开启showTool配置，点击查看icon触发   |  Function( data )  |
| edit |  开启showTool配置，点击编辑icon触发   |  Function( data )  |
| delete |  开启showTool配置，点击删除icon触发   |  Function( data )  |




### 类型

#### AppData

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| id |  | `string` |  |
| iconUrl |  应用icon图片 | `string` |  |
| name | 名称 | `string` |  |
| code | appCode | `string` |  |
| secondCategoryCode | 分类code | `string` |  |
| appBear |  应用承载 | `string` |  |

#### CategoryItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name |分类名称 | `string` |  |
| code | 分类code | `string` |  |
