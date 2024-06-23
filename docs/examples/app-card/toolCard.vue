<!--
 * @Description: 可操作的app卡片
 * @Author: Hu Yilin
 * @Date: 2024-03-29 14:26:20
 * @LastEditors: Hu Yilin
 * @LastEditTime: 2024-04-11 13:33:13
-->
<template>
  <s-layout-page class="t_button_demo">
    <s-layout-page-item>
      <s-app-card
        :data="cardData"
        show-tool
        @review="appReview"
        @edit="appEdit"
        @delete="appDelete"
      ></s-app-card>
    </s-layout-page-item>
  </s-layout-page>
</template>
<script setup lang="ts">
const cardData = {
  iconUrl:
    'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  name: 'Alipay',
  code: '2001010101',
}

function appReview() {
  console.log('appReview')
}

function appEdit() {
  console.log('appEdit')
}
function appDelete() {
  console.log('appDelete')
}
</script>
