<!--
 * @Description: 可操作的app卡片
 * @Author: Hu Yilin
 * @Date: 2024-03-29 14:26:20
 * @LastEditors: Hu Yilin
 * @LastEditTime: 2024-04-11 11:29:11
-->
<template>
  <s-layout-page class="t_button_demo">
    <s-layout-page-item>
      <s-app-card :data="cardData" checkAble></s-app-card>
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
</script>
