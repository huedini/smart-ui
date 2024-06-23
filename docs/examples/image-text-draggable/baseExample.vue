<!--
 * @Author: dozening
 * @Date: 2024-06-17 15:12:38
 * @LastEditors: dozening
 * @LastEditTime: 2024-06-18 20:41:00
 * @Description: file content
 * @FilePath: \component-library-pc\docs\examples\image-text-draggable\baseExample.vue
-->
<template>
  <s-layout-page class="t_button_demo">
    <s-layout-page-item>
      <s-image-text-draggable
        @move="move"
        :dragOptions="dragOptions"
        editable
      />
    </s-layout-page-item>
  </s-layout-page>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'

const dragOptions = {animation: 200,group: 'description',disabled: false,ghostClass: 'ghost'}
const data = ref([
  {
    code: 'firstPage',
    name: '首页',
    iconUrl:
      'https://minio-smart.ictsoft.cn/publicimg/2023-03-08/13gCq7Nnsg.png',
    highlightIconUrl:
      'https://minio-smart.ictsoft.cn/publicimg/2023-03-08/JeCXYh0DV1.png',
    defaultFontColor: '#d3f2ff',
    highlightFontColor: '#65b9ff',
  },
  {
    code: 'neighbours',
    name: '邻里',
    iconUrl:
      'https://minio-smart.ictsoft.cn/publicimg/2023-03-08/UqVA2M4n1K.png',
    highlightIconUrl:
      'https://minio-smart.ictsoft.cn/publicimg/2023-03-08/tXfhcw3HUI.png',
    defaultFontColor: '#d3f2ff',
    highlightFontColor: '#65b9ff',
  },
  {
    code: 'govern',
    name: '治理',
    iconUrl:
      'https://minio-smart.ictsoft.cn/publicimg/2023-03-08/ybjcdC0m96.png',
    highlightIconUrl:
      'https://minio-smart.ictsoft.cn/publicimg/2023-03-08/3Xr1gRjvE4.png',
    defaultFontColor: '#d3f2ff',
    highlightFontColor: '#65b9ff',
  },
  {
    code: 'education',
    name: '教育',
    iconUrl:
      'https://minio-smart.ictsoft.cn/publicimg/2023-03-08/jm9upGuujL.png',
    highlightIconUrl:
      'https://minio-smart.ictsoft.cn/publicimg/2023-03-08/vv7pgCXbT8.png',
    defaultFontColor: '#d3f2ff',
    highlightFontColor: '#65b9ff',
  },
  {
    code: 'health',
    name: '健康',
    iconUrl:
      'https://minio-smart.ictsoft.cn/publicimg/2023-03-08/6gDi4xik1k.png',
    highlightIconUrl:
      'https://minio-smart.ictsoft.cn/publicimg/2023-03-08/qxovN8Q9TY.png',
    defaultFontColor: '#d3f2ff',
    highlightFontColor: '#65b9ff',
  },
  {
    code: 'serve',
    name: '服务',
    iconUrl:
      'https://minio-smart.ictsoft.cn/publicimg/2023-03-08/76BjroSL5p.png',
    highlightIconUrl:
      'https://minio-smart.ictsoft.cn/publicimg/2023-03-08/BFCo4hSGqj.png',
    defaultFontColor: '#d3f2ff',
    highlightFontColor: '#65b9ff',
  },
  {
    code: 'build',
    name: '建筑',
    iconUrl:
      'https://minio-smart.ictsoft.cn/publicimg/2023-03-08/iM8ChBG4Yu.png',
    highlightIconUrl:
      'https://minio-smart.ictsoft.cn/publicimg/2023-03-08/jad9jsWBlY.png',
    defaultFontColor: '#d3f2ff',
    highlightFontColor: '#65b9ff',
  },
  {
    code: 'traffic',
    name: '交通',
    iconUrl:
      'https://minio-smart.ictsoft.cn/publicimg/2023-03-08/9KgaLjU4XL.png',
    highlightIconUrl:
      'https://minio-smart.ictsoft.cn/publicimg/2023-03-08/R5ZXuNhz4l.png',
    defaultFontColor: '#d3f2ff',
    highlightFontColor: '#65b9ff',
  },
  {
    code: 'lowcarbon',
    name: '低碳',
    iconUrl:
      'https://minio-smart.ictsoft.cn/publicimg/2023-03-14/o0SGVM0NKI.png',

    highlightIconUrl:
      'https://minio-smart.ictsoft.cn/publicimg/2023-03-08/hK36ImGHVZ.png',
    defaultFontColor: '#d3f2ff',
    highlightFontColor: '#65b9ff',
  },
  {
    code: 'business',
    name: '创业',
    iconUrl:
      'https://minio-smart.ictsoft.cn/publicimg/2023-03-08/PRv3rbwPnN.png',
    highlightIconUrl:
      'https://minio-smart.ictsoft.cn/publicimg/2023-03-08/iWA8Fr02Mi.png',
    defaultFontColor: '#d3f2ff',
    highlightFontColor: '#65b9ff',
  },
])
provide('data', data)
function move(e) {
  // index: 拖拽元素索引
  // element：拖动元素底层视图模型元素
  // futureIndex：如果接受放置操作，则拖动元素的潜在索引
  console.log(e)
  console.log(
    'Future index: ' + e.draggedContext.futureIndex,
    'index: ' + e.draggedContext.index
  )
}
const loading = ref(true)
</script>
