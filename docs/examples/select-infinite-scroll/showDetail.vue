<!--
 * @Description: 回显数据
 * @Author: Hu Yilin
 * @Date: 2024-03-29 14:26:20
 * @LastEditors: Hu Yilin
 * @LastEditTime: 2024-05-10 17:45:51
-->
<template>
  <s-layout-page class="t_button_demo">
    <s-layout-page-item>
      <s-select-infinite-scroll
        v-model:value="fakeSelected"
        :api="fakeApi"
        mode="multiple"
        style="width: 400px"
      />
    </s-layout-page-item>
  </s-layout-page>
</template>
<script setup lang="ts">
import type { Ref } from 'vue'
import { ref, watch } from 'vue'

interface SelectedItem {
  key: string
  label: string
}

const fakeSelected: Ref<SelectedItem[]> = ref([
  {
    key: 'value1',
    label: '回显数据不在列表已加载中测试',
  },
  {
    key: 'value2',
    label: '回显数据2',
  },
])

watch(fakeSelected, (val) => {
  console.log('双向绑定父页面接受值变化selectedItems', val)
})

const fakeApi = (parameter) => {
  console.log('parameter', parameter)
  return new Promise((resolve) => {
    setTimeout(() => {
      const newItems = Array.from({ length: 10 }, (_, i) => {
        const uniqueValue = Math.random().toString(36).substring(2)

        return { value: `value${uniqueValue}`, label: `Label ${uniqueValue}` }
      })
      resolve({ list: newItems, total: 50 })
    }, 1000)
  })
}
</script>
