<!--
 * @Description: 
 * @Author: Hu Yilin
 * @Date: 2024-04-11 11:13:22
 * @LastEditors: Ni Jianhun
 * @LastEditTime: 2024-05-22 16:29:19
-->
<!--
 * @Description: 
 * @Author: Ni Jianhun
 * @Date: 2024-04-02 09:16:58
 * @LastEditors: Ni Jianhun
 * @LastEditTime: 2024-04-02 09:17:37
-->
<template>
  <s-layout-page>
    <s-layout-page-item>
      <s-file-upload
        v-model:file-list="fileList"
        :action="apiPath"
        list-type="picture-card"
        accept="image/*"
        :autoCropWidth="375"
        :autoCropHeight="600"
        :crop="true"
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
