<!--
 * @Description: 
 * @Author: Hu Yilin
 * @Date: 2024-04-11 11:13:22
 * @LastEditors: Hu Yilin
 * @LastEditTime: 2024-04-25 13:46:01
-->
<template>
  <s-layout-page>
    <s-layout-page-item>
      <s-file-upload
        v-model:file-list="fileList"
        :action="apiPath"
        list-type="picture-card"
        :disabled="true"
      />
      <s-file-upload
        v-model:file-list="fileList"
        :action="apiPath"
        :disabled="true"
      />
    </s-layout-page-item>
  </s-layout-page>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const fileList = ref([
  {
    url: 'https://smartcity-minio-test.ictsoft.cn/publicimg/2023-11-30/UQBVwt4G5r.jpg',
    name: '图片.png',
    status: 'done',
    uid: '-1',
  },
])
// 上传地址
const apiPath = '/sc/th/api-publics/publics/fileUpload/uploadImage'
const changeHandle = ({ fileList }) => {
  console.log('fileList: ', fileList)
}
</script>
