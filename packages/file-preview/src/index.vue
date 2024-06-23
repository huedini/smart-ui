<!--
 * @Author: chentong chent71@chinaunicom.cn
 * @Date: 2024-04-22 18:33:45
 * @LastEditors: chentong chent71@chinaunicom.cn
 * @LastEditTime: 2024-04-25 17:26:38
 * @FilePath: \component-library-pc\packages\file-preview\src\index.vue
 * @Description: 文件预览弹窗
-->
<template>
  <a-modal
    v-model:visible="visible"
    :title="title"
    width="1000px"
    :maskClosable="false"
    :destroyOnClose="true"
    :footer="null"
  >
    <Spin :spinning="spinning">
      <div class="file_preview" v-if="filePrevieUrl">
        <iframe
          :src="filePrevieUrl"
          width="100%"
          height="100%"
          frameborder="0"
          id="iframeId"
          @load="loadFrame"
        ></iframe>
      </div>
    </Spin>
  </a-modal>
</template>

<script lang="ts">
import * as Base64 from 'js-base64'
import { nextTick } from 'vue'
import { Spin } from 'ant-design-vue'
export default {
  name: 'previewModal',
}
</script>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'

onMounted(() => {
  // nextTick(() => {
  //   const iframe = window.frames['iframeId']
  //   console.log(iframe, 'iframeDocument11')
  // })
  // const styleElement = iframeDocument.createElement('style')
  // styleElement.textContent = 'body { background-color: blue; }'
})
const loadFrame = () => {
  const iframe = window.frames['iframeId']
  console.log(iframe, 'iframeDocument111')
  iframe.onload = function () {
    console.log(
      iframe.contentWindow.document.getElementById('iframeId').innerHTML
    )
  }
}
const spinning = ref(true)

const title = ref('文件预览')
const visible = ref(false)
const filePrevieUrl = ref('')
// 文件预览公共方法（目前只支持公网可访问的文件url）
const open = (url) => {
  filePrevieUrl.value = ''
  visible.value = true
  spinning.value = true
  filePrevieUrl.value =
    'https://smart-futuresc-kkfileview.ictsoft.cn/onlinePreview?url=' +
    encodeURIComponent(Base64.encode(url))
  if (filePrevieUrl.value) {
    spinning.value = false
  }
}
const close = () => {
  visible.value = false
}
defineExpose({
  open,
})
</script>
<style></style>
<style lang="scss" scoped>
.file_preview {
  height: 800px;
}
:deep(.ant-spin) {
  position: absolute;
  top: 20% !important;
  inset-inline-start: 0;
  z-index: 999999 !important;
  display: block;
  width: 100%;
  height: 100%;
  max-height: 400px;
}
img {
  display: none !important;
}
</style>
