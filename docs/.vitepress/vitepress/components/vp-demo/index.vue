<template>
  <ClientOnly>
    <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
    <p text="sm" v-html="decodedDescription" />
    <div class="example">
      <Example :path="path" />
      <a-divider />
      <div class="op-btns">
        <a-tooltip>
          <template #title>复制代码</template>
          <CopyOutlined style="font-size: 26px" @click="copyCode" />
        </a-tooltip>

        <a-tooltip>
          <template #title>查看源代码</template>
          <EyeOutlined style="font-size: 26px" @click="toggleSourceVisible()" />
        </a-tooltip>
      </div>
      <a-collapse v-model:activeKey="activeKey" v-show="sourceVisible">
        <a-collapse-panel key="1" :show-arrow="false">
          <SourceCode v-show="sourceVisible" :source="source" />
        </a-collapse-panel>
      </a-collapse>
      <div
        v-show="sourceVisible"
        class="hide_wrap"
        @click="toggleSourceVisible(false)"
      >
        <span>隐藏源代码</span>
      </div>
      <!-- <Transition name="el-fade-in-linear">
        <div
          v-show="sourceVisible"
          class="example-float-control"
          @click="toggleSourceVisible(false)"
        >
          <span>隐藏源代码</span>
        </div>
      </Transition> -->
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useClipboard, useToggle } from '@vueuse/core'
import { CopyOutlined, EyeOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import Example from './vp-example.vue'
import SourceCode from './vp-source-code.vue'
const activeKey = ref(['1'])
const props = defineProps<{
  rawSource: string // 源码
  source: string
  path: string
  description?: string
}>()

const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false,
})

const [sourceVisible, toggleSourceVisible] = useToggle(false)

const decodedDescription = computed(() =>
  decodeURIComponent(props.description!)
)

const copyCode = async () => {
  if (!isSupported) {
    message.error('复制失败')
  }
  try {
    await copy()
    message.success('已复制')
  } catch (e: any) {
    message.error(e.message)
  }
}
</script>
<style lang="scss" scoped>
.example {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  .m-0 {
    margin: 0;
  }
  .op-btns {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 2.5rem;

    .el-icon {
      &:hover {
        color: var(--text-color);
      }
    }

    .op-btn {
      margin: 0 0.5rem;
      cursor: pointer;
      color: var(--text-color-lighter);
      transition: 0.2s;

      &.github a {
        transition: 0.2s;
        color: var(--text-color-lighter);

        &:hover {
          color: var(--text-color);
        }
      }
    }
  }

  &-float-control {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--border-color);
    height: 44px;
    box-sizing: border-box;
    background-color: var(--bg-color, #fff);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    color: var(--el-text-color-secondary);
    cursor: pointer;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    span {
      font-size: 14px;
      margin-left: 10px;
    }

    &:hover {
      color: var(--el-color-primary);
    }
  }
}
.hide_wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--border-color);
  height: 44px;
  box-sizing: border-box;
  background-color: var(--bg-color, #fff);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  margin-top: -1px;
  color: var(--el-text-color-secondary);
  cursor: pointer;
  position: sticky;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}
</style>
