<template>
  <div></div>
  <s-layout-page class="t_button_demo">
    <s-layout-page-item>
      <a-button
        style="margin-top: 15px"
        color="#626aef"
        @click="previewModalRef.open(fileUrl)"
        >文件预览</a-button
      >
      <SFilePreview ref="previewModalRef"></SFilePreview>
    </s-layout-page-item>
  </s-layout-page>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const previewModalRef = ref()
const fileUrl = ref(
  'https://minio-smart.ictsoft.cn/publicimg/2024-04-22/TFNwpg4BUukKhri.pdf'
)
</script>
