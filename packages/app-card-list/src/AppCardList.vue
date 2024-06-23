<!--
 * @Description: 应用列表
 * @Author: Hu Yilin
 * @Date: 2024-03-11 13:38:46
 * @LastEditors: Hu Yilin
 * @LastEditTime: 2024-04-25 14:08:09
-->
<template>
  <div>
    <div v-if="appList && appList.length && appList.length > 0" class="flex flex-wrap">
      <app-card
        v-for="item in appList"
        :key="item.code"
        :data="item"
        :show-tool="showTool"
        :check-able="checkAble"
        v-model="item.checked"
        @review="appReview"
        @edit="appEdit"
        @delete="appDelete"
        @click="onAppClick(item)"
      />
    </div>
    <a-empty v-else description="暂无应用" />
  </div>
</template>
<script lang="ts" setup>
  import type { AppData } from '../../app-card/src/types'
  import AppCard from '../../app-card';

  interface Props {
    // 应用列表
    appList: Array<AppData>;
    checkAble?: boolean;
    showTool?: boolean;
    modelValue?: Array<string>;
  }

  const emit = defineEmits([
    'selectChange',
    'review',
    'edit',
    'delete',
    'update:modelValue',
    'appClick',
  ]);

  const props = withDefaults(defineProps<Props>(), {
    checkAble: false,
    showTool: false,
  });

  function appReview(data) {
    emit('review', data);
  }

  function appEdit(data) {
    emit('edit', data);
  }

  function appDelete(data) {
    emit('delete', data);
  }

  function onAppClick(item: AppData) {
    emit('appClick', item);
  }
</script>