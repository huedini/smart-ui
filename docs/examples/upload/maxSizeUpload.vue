<!--
 * @Description: 
 * @Author: Hu Yilin
 * @Date: 2024-04-11 11:13:22
 * @LastEditors: Hu Yilin
 * @LastEditTime: 2024-04-25 13:47:24
-->
<template>
  <s-layout-page>
    <s-layout-page-item>
      <s-file-upload
        v-model:file-list="fileList"
        :action="apiPath"
        list-type="picture-card"
        :max-count="2"
        :max-size="2"
      />
    </s-layout-page-item>
  </s-layout-page>
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
