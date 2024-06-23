<!--
 * @Description: 
 * @Author: Hu Yilin
 * @Date: 2024-03-29 14:26:20
 * @LastEditors: Hu Yilin
 * @LastEditTime: 2024-04-24 19:43:46
-->
<template>
  <s-layout-page class="t_button_demo">
    <s-layout-page-item>
      <s-app-card-list-classified
        :app-list="mobileAppList"
        :category-list="mobileCategoryList"
        show-tool
        @review="appReview"
        @edit="appEdit"
        @delete="appDelete"
      />
    </s-layout-page-item>
  </s-layout-page>
</template>
<script setup lang="ts">
let mobileAppList = [
  {
    id: '1',
    iconUrl:
      'http://private-dev.ictsoft.cn/minio/futuresc-pedestal/2024-03-29/YRDS3C8hcJit1Q6.png',
    name: 'App Name 1',
    code: 'appCode1',
    secondCategoryCode: 'health',
    appBear: 'appBear1',
    checked: false,
  },
  {
    id: '2',
    iconUrl:
      'http://private-dev.ictsoft.cn/minio/futuresc-pedestal/2024-03-29/xk5TsKKA3lgB5Aj.png',
    name: 'App Name 2',
    code: 'appCode2',
    secondCategoryCode: 'neighborhood',
    appBear: 'appBear2',
    checked: true,
  },
]

let mobileCategoryList = [
  {
    name: '全部',
    code: '',
  },
  {
    name: '健康',
    code: 'health',
  },
  {
    name: '领里',
    code: 'neighborhood',
  },
]

function appReview() {}

function appEdit() {}

function appDelete() {}
</script>
