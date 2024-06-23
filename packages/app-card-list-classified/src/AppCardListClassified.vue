<!--
 * @Description: 带分类筛选的应用列表
 * @Author: Hu Yilin
 * @Date: 2024-03-11 13:38:46
 * @LastEditors: Hu Yilin
 * @LastEditTime: 2024-04-25 14:08:42
-->
<template>
  <div>
    <!-- 分类筛选 -->
    <div class="s-category-list-wrapper">
      <div
        :class="{
          's-category-tag': true,
          active: selectedCategory === item.code,
        }"
        v-for="item in categoryList"
        :key="item.code"
        @click="handleCategotySelect(item)"
      >
        {{ item.name }}
      </div>
    </div>
    <div
      v-if="
        currentAppList && currentAppList.length && currentAppList.length > 0
      "
      class="s-app-list-wrapper"
    >
      <app-card
        v-for="item in currentAppList"
        :key="item.code"
        :data="item"
        :show-tool="showTool"
        :check-able="checkAble"
        v-model="item.checked"
        @check="handleCheck"
        @review="appReview"
        @edit="appEdit"
        @delete="appDelete"
      />
    </div>
    <a-empty v-else description="暂无应用" />
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
import type { Ref } from 'vue'
import { AppData, CategoryItem, AppDataCheckAble } from '../../app-card/src/types'
import AppCard from '../../app-card'

interface Props {
  // 二级分类
  categoryList: Array<CategoryItem>
  // 应用列表
  appList: Array<AppData>
  checkAble?: boolean
  showTool?: boolean
  modelValue?: Array<string>
}

const emit = defineEmits([
  'selectChange',
  'review',
  'edit',
  'delete',
  'update:modelValue',
])
const props = withDefaults(defineProps<Props>(), {
  checkAble: false,
  showTool: false,
})

const selectedAppCodeList = ref([])

watch(
  () => props.modelValue,
  (newVal) => {
    console.log('newVal:', newVal)

    setAppListChecked(newVal)
  }
)

// 当前筛选的应用列表
const fullAppList: Ref<AppDataCheckAble[]> = ref([])

const currentAppList: Ref<AppDataCheckAble[]> = ref([])

watch(
  () => props.appList,
  (appList: AppData[]) => {
    if (!appList) return
    fullAppList.value = initAppList(appList)
    currentAppList.value = fullAppList.value
  },
  {
    immediate: true,
  }
)

/**
 * 初始化应用列表
 */
function initAppList(list: AppData[]) {
  if (!list || !list.length || list.length === 0) {
    return []
  }
  // 塞一个checked属性进去
  const result: any = []
  list.map((item) => {
    result.push({
      ...item,
      checked: false,
    })
  })
  return result
}
// 当前选择的分类
const selectedCategory = ref('')

/**
 * @description: 选择分类
 */
function handleCategotySelect(item) {
  const { code } = item
  selectedCategory.value = code
  filterAppList(code)
}

/**
 * 根据分类code过滤应用列表
 */
function filterAppList(code) {
  if (code) {
    currentAppList.value = fullAppList.value.filter(
      (item) => item.secondCategoryCode === code
    )
  } else {
    currentAppList.value = fullAppList.value
  }
}

/**
 * 应用选择
 */
function handleCheck(info: { checked: boolean; data: AppData }) {
  const { checked, data } = info
  changeAppItemCheckState(checked, data.id)
  if (checked) {
    selectedAppCodeList.value.push(data.code)
  } else {
    selectedAppCodeList.value = selectedAppCodeList.value.filter(
      (item) => item !== data.code
    )
  }
  emit('update:modelValue', selectedAppCodeList.value)
}

/**
 * 改变应用列表中的checked状态
 */
function changeAppItemCheckState(checked, id) {
  const index = fullAppList.value.findIndex((item) => item.id === id)
  fullAppList.value[index].checked = checked
}

function setAppListChecked(codeList) {
  fullAppList.value.map((item) => {
    if (codeList.includes(item.code)) {
      item.checked = true
    } else {
      item.checked = false
    }
  })
}

function appReview(data) {
  emit('review', data)
}

function appEdit(data) {
  emit('edit', data)
}

function appDelete(data) {
  emit('delete', data)
}
</script>
<style lang="less" scoped>
.s-category-list-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;

  .s-category-tag {
    flex: 0 0 auto;
    margin: 0 8px 8px 0;
    padding: 2px 14px;
    border-radius: 4px;
    background-color: #ebf0f4;
    text-align: center;
    cursor: pointer;

    &.active {
      background: #1890ff;
      color: #fff;
    }
  }
}
.s-app-list-wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
