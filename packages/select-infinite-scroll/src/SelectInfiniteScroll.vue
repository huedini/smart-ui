<!--
 * @Description: 
 * @Author: Hu Yilin
 * @Date: 2024-03-29 15:46:15
 * @LastEditors: Hu Yilin
 * @LastEditTime: 2024-05-10 17:39:45
-->
<template>
  <a-select
    v-model:value="localValue"
    :mode="mode"
    :placeholder="placeholder"
    :options="options"
    @popup-scroll="onPopupScroll"
    @select="onSelect"
    @dropdown-visible-change="onDropdownVisibleChange"
    @search="onSearch"
    @change="onChange"
    label-in-value
  />
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import type { Ref } from 'vue'
import { Select as ASelect } from 'ant-design-vue'
import { FetchSetting, FieldNamesOptions, SelectedItem } from './types'

interface SelcetProps {
  api: Function
  fieldNames?: FieldNamesOptions
  mode?: string
  placeholder?: string
  threshold?: number
  fetchSetting?: FetchSetting
  value?: SelectedItem[]
}
const props = withDefaults(defineProps<SelcetProps>(), {
  mode: undefined,
  placeholder: '请选择',
  threshold: 100,
})

const emit = defineEmits(['change', 'update:value', 'select'])

const localValue: Ref<SelectedItem[]> = ref([])

watch(
  () => props.value,
  (val) => {
    if (val) {
      localValue.value = val
    } else {
      localValue.value = []
    }
  },
  {
    immediate: true,
  }
)

const options = ref([])

const pagination = ref({
  // 当前第几页
  current: 1,
  // 每页几条数据
  pageSize: 10,
  total: 100,
})

const handleScroll = async (event) => {
  // 检查是否滚动到底部
  if (
    event.target.scrollTop + event.target.clientHeight >=
    event.target.scrollHeight - props.threshold
  ) {
    // 加载下一页数据
    await fetchNextPage()
    // options.value.push(...newItems);
  }
}

const fetchNextPage = async () => {
  const isFinished =
    pagination.value.current * pagination.value.pageSize >=
    pagination.value.total
  if (isFinished) return

  pagination.value.current += 1
  await fetchData()
}

async function fetchData() {
  const pageFiled = props.fetchSetting?.pageField || 'pageNo'
  const pageSizeField = props.fetchSetting?.sizeField || 'pageSize'
  const params = {
    [pageFiled]: pagination.value.current,
    [pageSizeField]: pagination.value.pageSize,
  }
  const res = await props.api(params)

  let total
  let list
  if (props.fetchSetting) {
    total = res[props.fetchSetting.totalField]
    list = res[props.fetchSetting.listField]
  } else {
    total = res.total
    list = res.list
  }
  options.value.push(...list)
  pagination.value.total = total
}

function onPopupScroll(event) {
  handleScroll(event)
}

function onSelect(value, options) {
  emit('select', value)
}

function onSearch(value) {}

function onDropdownVisibleChange(visible) {
  if (visible) {
    initFetch()
  } else {
    // 隐藏页面重置选项
    resetFetch()
  }
}

function initFetch() {
  options.value = []
  pagination.value.current = 1
  fetchData()
}

function resetFetch() {
  options.value = []
  pagination.value.current = 1
}

function onChange(value, options) {
  localValue.value = value
  emit('update:value', value)
}
</script>
./types
