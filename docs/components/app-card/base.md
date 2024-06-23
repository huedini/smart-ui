<!--
 * @Autor: shi hong yu
 * @Date: 2024-03-22 16:05:39
 * @LastEditTime: 2024-04-25 10:34:27
 * @LastEditors: Hu Yilin
 * @Description:
-->

# App卡片组件

---


### 最基础的用法-纯展示卡片

::: demo
app-card/simpleCard
:::

### 可展示操作icon
鼠标悬浮可展示按钮和操作

::: demo
app-card/toolCard
:::

### 可勾选应用卡片

::: demo
app-card/checkableCard
:::




### API

| 参数 | 说明 | 类型 | 默认值 |  
| --- | --- | --- | --- |  
| data | app数据 | AppData具体见下表 | '' |  
| checkAble | 是否可勾选 | boolean | false |  
| showTool | 是否展示操作按钮（编辑、查看、删除） | boolean |  false |  
| v-model | 双向绑定，开启 checkAble用于设置是否选中| boolean | - |  



### 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| check |   开启checkAble配置，点击勾选时触发 | Function( { checked, data }) ，其中data类型为AppData见下表|
| review |  开启showTool配置，点击查看icon触发   |  Function( data ) ，其中data类型为AppData见下表 |
| edit |  开启showTool配置，点击编辑icon触发   |  Function( data )  ，其中data类型为AppData见下表|
| delete |  开启showTool配置，点击删除icon触发   |  Function( data ) ，其中data类型为AppData见下表 |




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