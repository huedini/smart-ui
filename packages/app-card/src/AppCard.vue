<!--
 * @Description: 
 * @Author: Hu Yilin
 * @Date: 2024-03-07 09:47:04
 * @LastEditors: Hu Yilin
 * @LastEditTime: 2024-06-20 21:52:52
-->
<template>
  <div
    class="s-card-wrapper"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <img class="logo" :src="data.iconUrl" />
    <div class="card-info">
      <div class="title">{{ data.name }}</div>
      <div class="app-code">
        {{ data.code }}
      </div>
    </div>
    <!--右上角icon slot-->
    <div class="action-icon">
      <Checkbox v-if="checkAble" v-model:checked="checked" @change="onCheck" />
    </div>

    <!--可鼠标移入移出控制显隐icon slot-->
    <div
      class="action-icon operation-area"
      ref="operationAreaRef"
      v-if="showTool"
    >
      <exclamation-circle-outlined @click="appReview" class="icon" />
      <edit-outlined @click="appEdit" class="icon" />
      <delete-outlined @click="appDelete" class="icon" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
defineComponent({
  name: 'SAppCard',
})
</script>
<script lang="ts" setup>
import { ref } from 'vue'
import { AppData } from './types'
import { Checkbox } from 'ant-design-vue'
import {
  ExclamationCircleOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons-vue'

interface Props {
  data: AppData
  checkAble?: boolean
  showTool?: boolean
  modelValue?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  checkAble: false,
  showTool: false,
})

const emit = defineEmits([
  'check',
  'review',
  'edit',
  'delete',
  'update:modelValue',
])

const checked = ref(props.modelValue)

function onCheck(e) {
  checked.value = e.target.checked
  emit('check', { checked: checked.value, data: props.data })
  emit('update:modelValue', checked.value)
}

function appReview() {
  emit('review', props.data)
}

function appEdit() {
  emit('edit', props.data)
}

function appDelete() {
  emit('delete', props.data)
}

const operationAreaRef = ref(null)

function onMouseEnter() {
  if (props.showTool && operationAreaRef.value) {
    operationAreaRef.value.style.visibility = 'visible'
  }
}

function onMouseLeave() {
  if (props.showTool && operationAreaRef.value) {
    operationAreaRef.value.style.visibility = 'hidden'
  }
}
</script>

<style lang="less" scoped>
.s-card-wrapper {
  display: flex;
  position: relative;
  width: 234px;
  height: 102px;
  margin: 0 10px 10px 0;
  border-radius: 4px;
  background: #ebf0f4;

  .logo {
    width: 56px;
    height: 56px;
    margin: 18px 10px 18px 18px;
    border-radius: 10px;
  }

  .title-only {
    display: inline-block;
    overflow: hidden;
    color: #526072;
    font-size: 18px;
    line-height: 92px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .card-info {
    display: inline-block;
    height: 92px;
    overflow: hidden;
    color: #526072;
    font-size: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;

    .title {
      height: 30px;
      margin-top: 22px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .time,
    .app-code {
      font-size: 12px;
      letter-spacing: -0.2px;
      line-height: 1.5;
    }
  }

  .action-icon {
    position: absolute;
    top: 3px;
    right: 5px;
  }

  .operation-area {
    visibility: hidden;

    .app-iconify {
      margin-left: 10px;
      cursor: pointer;

      &:hover {
        color: #1890ff;
      }
    }
  }

  .status {
    position: absolute;
    width: 50px;
    border-radius: 4px;
    background-color: #1890ff;
    color: #fff;
    line-height: 20px;
    text-align: center;
  }

  .expired {
    background-color: #848484;
  }
}

.icon {
  &:not(:last-child) {
    margin-right: 8px;
  }
}
</style>
