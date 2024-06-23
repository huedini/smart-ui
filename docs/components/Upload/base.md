<!--
 * @Description:
 * @Author: Ni Jianhun
 * @Date: 2024-04-01 19:53:04
 * @LastEditors: Ni Jianhun
 * @LastEditTime: 2024-05-22 16:33:44
-->

### 基础用法

- 上传是将信息（文件、图片、视频等）通过上传工具发布到远程服务器上的过程。

#### 1、基础用法

- 需要传 action 接口路径

:::demo
upload/baseUpload
:::

#### 2、最大尺寸以及限制上传数量

- 配置 maxCount 限制数量、maxSize 限制传入最大尺寸

:::demo
upload/maxSizeUpload
:::

#### 3、文件样式

- listType 支持三种基本样式 text, picture 和 picture-car, 默认格式 text

:::demo
upload/typeUpload
:::

#### 4、大文件上传视频

- 大文件上传一般用于上传视频, 且仅上传一个视频, 需要配置两个接口路径, 一个是大文件地址接口 largeAction, 另一个用于大文件接口失败是普通接口上传 action,

还需要配置 largeVideo 为 true, 以及 accept 的类型为 video 类型

:::demo
upload/largeVideoUpload
:::

#### 5、裁剪图片

<!-- :::demo
upload/cropUpload
::: -->

配置 crop 为 true 后，可以配置裁剪尺寸 autoCropWidth 和 autoCropHeight，默认裁剪尺寸 300\*200

仅图片可以裁剪，需配置 accept 为图片类型
![image](https://minio-smart.ictsoft.cn/publicimg/2024-04-02/0Mt2Y47iFP.png)

> **代码示例：**

```js
<template>
  <t-layout-page>
    <t-layout-page-item>
      <s-file-upload
        v-model:file-list="fileList"
        :action="apiPath"
        list-type="picture-card"
        accept="image/*"
        :autoCropWidth="375"
        :autoCropHeight="200"
        :crop="true"
      />
    </t-layout-page-item>
  </t-layout-page>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const fileList = ref([])
// 上传地址
const apiPath = '/sc/th/api-publics/publics/fileUpload/uploadImage'
const changeHandle = ({ fileList }) => {
  console.log('fileList: ', fileList)
}
</script>

```

#### 6、文案配置

- 配置 extraInfo 可以传入提示文案，uploadText 可以修改上传文案

:::demo
upload/infoUpload
:::

#### 7、按钮配置可查看、删除、下载

- 配置 option 中的 preview 预览、downLoad 下载、remove 删除，默认都是 true

:::demo
upload/optionUpload
:::

#### 8、禁用和回显查看

- 使用 disabled 可以禁止上传
  :::demo
  upload/disabledUpload
  :::

#### 9、在表单中使用

:::demo
upload/formUpload
:::

### 配置参数 props

| 参数           | 说明                         | 类型    | 默认值 |
| :------------- | :--------------------------- | :------ | -----: |
| fileList       | 已经上传的文件列表（受控）   | Array   |     [] |
| listType       | 上传样式                     | String  |   text |
| action         | 上传地址                     | string  |     无 |
| headers        | 接口请求头                   | Object  |     {} |
| maxCount       | 限制上传数量                 | number  |     无 |
| maxSize        | 最大尺寸(单位 M)             | number  |     20 |
| preview        | 是否可以预览                 | boolean |   true |
| downLoad       | 是否可以下载                 | boolean |   true |
| remove         | 是否可以删除                 | boolean |   true |
| disabled       | 是否禁用（查看）             | boolean |  false |
| multiple       | 是否支持多选文件，ie10+ 支持 | boolean |  false |
| extraInfo      | 上传说件说明                 | string  |     无 |
| uploadText     | 上传文案                     | string  |   上传 |
| crop           | 是否裁剪图片                 | boolean |  false |
| autoCropWidth  | 剪切宽度                     | number  |    300 |
| autoCropHeight | 剪切高度                     | number  |    200 |
| cropPreview    | 是否展示裁剪预览图           | boolean |   true |
| largeVideo     | 是否大文件上传视频           | boolean |  false |
| largeAction    | 大文件上传地址               | string  |     无 |

### 事件

| 事件名称 | 说明                 | 回调参数               |
| :------- | :------------------- | :--------------------- |
| change   | 上传文件改变时的状态 | function({ fileList }) |
