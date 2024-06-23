<!--
 * @Author: chen tong
 * @Date: 2022-08-23 11:24:08
 * @LastEditTime: 2024-05-22 16:12:56
 * @LastEditors: Ni Jianhun
 * @Description: 剪切组件
-->
<template>
  <Modal
    title="裁剪"
    :visible="visible"
    :confirm-loading="confirmLoading"
    @ok="handleOk()"
    @cancel="handleCancel"
  >
    <div class="cropper-content">
      <div>
        <div
          class="cropper"
          :style="{
            height: `${autoCropHeight + 50}` + 'px',
            width: `${autoCropWidth + 50}`,
          }"
        >
          <vue-cropper
            ref="cropperRef"
            :img="option.img"
            :outputSize="option.outputSize"
            :outputType="option.outputType"
            :info="option.info"
            :canScale="option.canScale"
            :autoCrop="option.autoCrop"
            :autoCropWidth="option.autoCropWidth"
            :autoCropHeight="option.autoCropHeight"
            :fixed="option.fixed"
            :fixedNumber="option.fixedNumber"
            :full="option.full"
            :fixedBox="option.fixedBox"
            :canMove="option.canMove"
            :canMoveBox="option.canMoveBox"
            :original="option.original"
            :centerBox="option.centerBox"
            :height="option.height"
            :infoTrue="option.infoTrue"
            :maxImgSize="option.maxImgSize"
            :enlarge="option.enlarge"
            :mode="option.mode"
            @real-time="realTime"
          />
        </div>
        <!--底部操作工具按钮-->
        <div class="footer-btn">
          <div class="scope-btn">
            <label class="btn" for="uploads">更换图片</label>
            <input
              type="file"
              id="uploads"
              style="position: absolute; clip: rect(0 0 0 0)"
              accept="image/png, image/jpeg, image/gif, image/jpg"
              @change="selectImg($event)"
            />
            <a-button type="dashed" @click="changeScale(1)" class="mr"
              >+ 放大</a-button
            >
            <a-button type="dashed" @click="changeScale(-1)" class="mr"
              >- 缩小</a-button
            >
            <a-button type="dashed" @click="rotateLeft" class="mr"
              >↺ 左旋转</a-button
            >
            <a-button type="dashed" @click="rotateRight" class="mr"
              >↺ 右旋转</a-button
            >
          </div>
        </div>
      </div>
      <!--预览效果图-->
      <div class="show-preview" v-if="false">
        <div :style="previews.div" class="preview">
          <img :src="previews.url" :style="previews.img" />
        </div>
      </div>
    </div>
  </Modal>
</template>

<script lang="ts" setup>
import { VueCropper } from 'vue-cropper'
import 'vue-cropper/dist/index.css'
import { Modal, message } from 'ant-design-vue'
import { ref } from 'vue'

const emit = defineEmits(['change', 'cancel']) // 数组形式定义

const props = defineProps({
  autoCropWidth: {
    // 默认生成截图框宽度
    type: Number,
    default: 300,
  },
  autoCropHeight: {
    // 默认生成截图框高度
    type: Number,
    default: 200,
  },
  // 是否直接展示预览图
  cropPreview: {
    type: Boolean,
    default: true,
  },
  // 上传地址
  action: {
    type: String,
    require: true,
  },
  headers: {
    type: Object,
  },
})
//封面原图
const originUrl = ref('')
const confirmLoading = ref(false)
const visible = ref(false)
const previews = ref({
  div: '',
  img: '',
  url: '',
})
const option = ref({
  img: '', //裁剪图片的地址
  outputSize: 1, //裁剪生成图片的质量(可选0.1 - 1)
  outputType: 'png', //裁剪生成图片的格式（jpeg || png || webp）
  info: true, //图片大小信息
  canScale: true, //图片是否允许滚轮缩放
  autoCrop: true, //是否默认生成截图框
  autoCropWidth: props.autoCropWidth, //默认生成截图框宽度
  autoCropHeight: props.autoCropHeight, //默认生成截图框高度
  fixed: true, //是否开启截图框宽高固定比例
  fixedNumber: [props.autoCropWidth, props.autoCropHeight], //截图框的宽高比例
  full: false, //false按原比例裁切图片，不失真
  fixedBox: true, //固定截图框大小，不允许改变
  canMove: false, //上传图片是否可以移动
  canMoveBox: true, //截图框能否拖动
  original: false, //上传图片按照原始比例渲染
  centerBox: false, //截图框是否被限制在图片里面
  height: true, //是否按照设备的dpr 输出等比例图片
  infoTrue: false, //true为展示真实输出图片宽高，false展示看到的截图框宽高
  maxImgSize: 3000, //限制图片最大宽度和高度
  enlarge: 2, //图片根据截图框输出比例倍数
  mode: 'contain', //图片默认渲染方式
})
const cropperRef = ref()
//初始化函数
//图片缩放
const changeScale = (num) => {
  num = num || 1
  cropperRef.value.changeScale(num)
}
//向左旋转
const rotateLeft = () => {
  cropperRef.value.rotateLeft()
}
//向右旋转
const rotateRight = () => {
  cropperRef.value.rotateRight()
}
//选择图片
const selectImg = (e) => {
  let file = e.target.files[0]
  fileName.value = file.name
  if (!/\.(jpg|jpeg|png|JPG|PNG|JPEG)$/.test(e.target.value)) {
    message.error('图片类型要求：jpeg、jpg、png')
    return false
  }
  //转化为blob
  let reader = new FileReader()
  reader.onload = (e: any) => {
    let data
    if (typeof e.target.result === 'object') {
      data = window.URL.createObjectURL(new Blob([e.target.result]))
    } else {
      data = e.target.result
    }
    option.value.img = data
  }
  //转化为base64
  reader.readAsDataURL(file)
}

//实时预览函数
const realTime = (data) => {
  previews.value = data
}
//上传图片
const handleOk = () => {
  //获取截图的blob数据
  cropperRef.value.getCropBlob(async (data) => {
    let formData = new FormData()
    formData.append('file', data, fileName.value || 'file.png')
    confirmLoading.value = true
    fetch(props.action || '', {
      method: 'POST', // 设置请求方法为POST
      headers: props.headers,
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        confirmLoading.value = false
        if (res.code === 200) {
          emit('change', res.data, fileName.value)
          message.success('上传成功')
          visible.value = false
        } else {
          message.error(res.msg || res.message || '网络异常')
        }
      })
  })
}
const fileName = ref('')

const showEdit = async (record, name) => {
  visible.value = true
  option.value = Object.assign(option.value, record)
  fileName.value = name
}
const handleCancel = () => {
  originUrl.value = ''
  visible.value = false
  emit('cancel')
}
defineExpose({
  showEdit,
})
</script>

<style scoped lang="less">
.cropper-content {
  .cropper {
    width: auto;
    height: 300px;
  }
  .show-preview {
    flex: 1;
    display: flex;
    justify-content: center;
    margin-top: 20px;

    .preview {
      overflow: hidden;
      background: #ebebeb;
    }
  }
}

.footer-btn {
  margin-top: 30px;
  display: flex;
  justify-content: flex-start;

  .scope-btn {
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
  }

  .mr {
    margin-right: 10px;
  }

  .upload-btn {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .btn {
    cursor: pointer;
    text-align: center;
    padding: 0 15px;
    line-height: 32px;
    font-size: 14px;
    border-radius: 3px;
    color: #fff;
    background-color: #2165f7;
    margin-right: 10px;
  }
}
</style>
