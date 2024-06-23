<!--
 * @Author: dozening
 * @Date: 2024-06-17 14:48:10
 * @LastEditors: dozening
 * @LastEditTime: 2024-06-19 09:41:40
 * @Description: file content
 * @FilePath: \component-library-pc\packages\image-text-draggable\src\index.vue
-->
<template>
  <div class="image-text-draggable">
    <draggable v-model="status" item-key="id" v-bind="dragOptions" :move="move">
      <template #item="{ element, index }">
        <div :class="['boxItem']">
          <div class="iconBox">
            <img :src="element.iconUrl" alt="" v-if="element.iconUrl" />
          </div>
          <div class="sceneContent">
            <a-input
              placeholder="标题"
              v-model:value="element.name"
              :maxLength="5"
              :minLength="2"
              :disabled="!editable"
            ></a-input>
            <a-input
              placeholder="code"
              :maxLength="30"
              v-model:value="element.code"
              :disabled="!editable"
            ></a-input>
          </div>
          <div
            class="closeBox"
            @click="deleteScene(index)"
            v-if="editable"
          ></div>
        </div>
      </template>
    </draggable>
    <div :class="['boxItem']" v-if="editable">
      <div :class="['iconBox', 'iconBoxAdd']" @click="addScene()"></div>
      <div class="sceneContent">
        <a-input placeholder="标题" disabled></a-input>
        <a-input placeholder="code" disabled></a-input>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { inject } from 'vue';
import draggable from 'vuedraggable';
const emit = defineEmits([
  'move',
  'review',
  'edit',
  'delete',
  'update:modelValue',
])
interface Props {
  dragOptions?: any,
  editable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  dragOptions: () => {
    return {
      animation: 200,
      group: 'description',
      disabled: false,
      ghostClass: 'ghost',
    }
  },
  editable:false
})
const status = inject('data')
function deleteScene(index) {
  status.value.splice(index, 1)
}
function move(e) {
  emit('move', e)
}
function addScene() {
  status.value.push({
    id: new Date().getTime(),
    sceneType: '2',
    code: '',
    defaultFontColor: '#d3f2ff',
    highlightFontColor: '#65b9ff',
    highlightIconUrl:
      'https://minio-smart.ictsoft.cn/publicimg/2023-05-24/Q8Glk65tQX.png',
    iconUrl:
      'https://minio-smart.ictsoft.cn/publicimg/2023-05-24/ALbQzWtBFP.png',
    name: '',
  })
}
</script>
<style lang="less" scoped>
.image-text-draggable {
  width: 100%;
  height: auto;
}
.boxItem {
  position: relative;
  float: left;
  width: 194px;
  height: 48px;

  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 10px;
  background: url('https://minio-smart.ictsoft.cn/publicimg/2024-01-31/KEoCz1k4C6.png')
    no-repeat;
  background-size: 100% 100%;

  .iconBox {
    width: 28px;
    height: 28px;
    background: url('https://minio-smart.ictsoft.cn/publicimg/2024-01-31/AqtPl3e52T.png')
      no-repeat;
    background-size: 100% 100%;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .iconBoxAdd {
    background: url('https://minio-smart.ictsoft.cn/publicimg/2023-05-18/hBpQTdTb8E.png')
      no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
  .sceneContent {
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    flex: 1;
    margin-right: 15px;

    input {
      height: 14px;
      background: #043d5e;
      border-radius: 2px;
      border: 1px solid #066799;

      font-size: 10px;
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      color: #ffffff;
    }
    .sceneName {
      position: relative;
      font-size: 16px;
      font-family: SourceHanSansCN-Bold, SourceHanSansCN;
      font-weight: bold;
      color: #ffffff;
      line-height: 24px;
    }
  }
  .closeBox {
    width: 20px;
    height: 20px;
    position: absolute;
    background: url('https://minio-smart.ictsoft.cn/publicimg/2023-05-24/2nNIAzgiDe.png')
      no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    right: 2px;
    top: 2px;
    opacity: 0.4;
  }

  .sceneCheck {
    position: relative;
    color: white;
    font-size: 12px;
    width: 20px;
    height: 20px;
    margin-right: 6px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: url('https://minio-smart.ictsoft.cn/publicimg/2023-05-17/RPdunP5vHy.png')
      no-repeat;
    background-size: 100% 100%;
  }
  .sceneUnCheck {
    background: url('https://minio-smart.ictsoft.cn/publicimg/2023-05-17/M2BTPF53aN.png')
      no-repeat;
    background-size: 100% 100%;
  }
}
</style>
