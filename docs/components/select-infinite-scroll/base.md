<!--
 * @Description: 
 * @Author: Hu Yilin
 * @Date: 2024-06-23 14:30:10
 * @LastEditors: Hu Yilin
 * @LastEditTime: 2024-06-23 14:30:47
-->

# 滚动加载分页Select

---


### 最基础的用法

::: demo
select-infinite-scroll/baseExample
:::

### 回显数据

::: demo
select-infinite-scroll/showDetail
:::

### API

| 参数         | 说明                 | 类型     | 默认值 |
| ------------ | -------------------- | -------- | ------ |
| api          | 加载分页数据的 api   | Function | -      |
| fieldNames   | 重命名               | Object   | -      |
| mode         | 同 antd 官方         | string   | -      |
| placeholder  | 同 antd 官方         | string   | -      |
| threshold    | 距离底部距离多少加载 | number   | 100    |
| fetchSetting | 分页参数设置         | Object   |        |

### 事件

| 事件名 | 说明         | 回调参数        |
| ------ | ------------ | --------------- |
| change | 选择变更触发 | Function(value) |
| select | 选择变更触发 | Function(value) |
