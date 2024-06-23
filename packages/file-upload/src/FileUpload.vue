<!--
 * @Description:
 * @Author: shi hong yu
 * @Date: 2023-11-15 09:05:17
 * @LastEditors: Ni Jianhun
 * @LastEditTime: 2024-05-10 11:04:09
-->
<template>
  <div class="clearfix">
    <!-- 视频预览 -->
    <div class="video-wrapper" v-if="reviewUrl">
      <video :src="reviewUrl" width="320" height="200" controls>
        <source :src="reviewUrl" type="video/mp4" />
        <source :src="reviewUrl" type="video/ogg" />
        <source :src="reviewUrl" type="video/webm" />
        <object :data="reviewUrl" width="320" height="240">
          <embed :src="reviewUrl" width="320" height="240" />
        </object>
      </video>
      <DeleteOutlined
        v-if="!disabled"
        @click="deleteHandle"
        class="delete_icon"
      />
    </div>
    <Upload
      v-else
      v-model:file-list="localFileList"
      :action="action"
      :customRequest="crop || largeVideo ? () => {} : undefined"
      :headers="headers"
      :accept="accept"
      :list-type="listType"
      @preview="handlePreview"
      :maxCount="maxCount"
      @change="handleChange"
      @remove="removeChange"
      @download="handleDownload"
      :before-upload="beforeUpload"
      :multiple="multiple"
      :name="name"
      :data="data"
      :showUploadList="{
        showDownloadIcon: downLoad,
        showPreviewIcon: preview,
        showRemoveIcon: !disabled && remove,
      }"
      :disabled="disabled"
    >
      <template v-if="!disabled">
        <!-- 图片上传卡片 -->
        <template v-if="listType === ListTypeEnum.PICTURE_CARD">
          <div v-if="!maxCount || localFileList.length < maxCount">
            <PlusOutlined />
            <p>{{ uploadText }}</p>
          </div>
        </template>
        <a-button v-else>
          <upload-outlined />
          {{ uploadText }}
        </a-button>
      </template>
    </Upload>
    <!-- 信息描述 -->
    <p v-if="extraInfo">{{ extraInfo }}</p>
    <!-- 预览弹窗 -->
    <Modal
      :visible="previewVisible"
      :footer="null"
      @cancel="previewVisible = false"
    >
      <img alt="无法查看" style="width: 100%" :src="previewImage" />
    </Modal>
    <!-- 裁剪弹窗 -->
    <imageCut
      ref="imageCutRef"
      :autoCropWidth="autoCropWidth"
      :autoCropHeight="autoCropHeight"
      @change="cropChange"
      :action="action"
      :headers="headers"
      @cancel="localFileList.pop()"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
import type { Ref } from 'vue'
import { Upload, Modal, message } from 'ant-design-vue'
import {
  PlusOutlined,
  UploadOutlined,
  DeleteOutlined,
} from '@ant-design/icons-vue'
import { ListTypeEnum, UploadResultStatus } from './types'
import type { UploadFile, UploadChangeParam } from 'ant-design-vue'
import { useALinkToDownload, getBase64, simplifyFileList } from './utils'
// import { useUserStoreWithOut } from '/@/store/modules/user';
import imageCut from './imageCut.vue'

const props = defineProps({
  // 图片地址
  fileList: {
    type: Array,
    defalut: [],
    require: true,
  },
  // 最多数量
  maxCount: {
    type: Number,
    require: false,
  },
  // 最大尺寸
  maxSize: {
    type: Number,
    default: 20,
  },
  // 接受上传的文件类型
  accept: String,
  // 上传样式
  listType: {
    type: String,
    default: 'text',
  },

  // 上传地址
  action: {
    type: String,
    require: true,
    default: '',
  },
  // 请求头
  headers: {
    type: Object,
    default() {
      return {
        'zj-unicom-token':
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHBpcmVfdGltZSI6MTcxMjAyMTA0NTAyMiwidGVuYW50Q29kZSI6InpzczczcnIiLCJ1c2VySWQiOjIxNH0._efwlEcmdkJjn-eDn3yRNtdotvX1PcXH6MsH11VQXOs',
      }
    },
  },
  // 是否可以预览
  preview: {
    type: Boolean,
    default: true,
  },
  // 是否可以下载
  downLoad: {
    type: Boolean,
    default: true,
  },
  // 是否可以删除
  remove: {
    type: Boolean,
    default: true,
  },
  // 是否禁用（查看）
  disabled: {
    type: Boolean,
    default: false,
  },
  // 是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件。
  multiple: {
    type: Boolean,
    default: false,
  },
  // 上传文件说明
  extraInfo: {
    type: String,
    default: '',
  },
  // 上传文案
  uploadText: {
    type: String,
    default: '上传',
  },
  // 是否裁剪
  crop: {
    type: Boolean,
    default: false,
  },
  // 剪切宽度
  autoCropWidth: {
    type: Number,
    default: 300,
  },
  // 剪切高度
  autoCropHeight: {
    type: Number,
    default: 200,
  },
  // 是否展示裁剪预览图
  cropPreview: {
    type: Boolean,
    default: true,
  },
  // 是否大文件上传视频
  largeVideo: {
    type: Boolean,
    default: false,
  },
  // 大文件上传地址
  largeAction: {
    type: String,
    default: '',
  },
  // 发到后台的文件参数名
  name: {
    type: String,
    default: 'file',
  },
  // 上传所需参数或返回上传参数的方法
  data: {
    type: Object,
    default: null,
  },
})
const localFileList: Ref<UploadFile[]> = ref([])
const ERRORTEXT = '网络异常'
// 回显照片
watch(
  () => props.fileList,
  (val: any) => {
    if (val && val.length && !localFileList.value.length) {
      val.forEach((item) => {
        if (!item.status) {
          item.status = 'done'
        }
        localFileList.value.push(item)
      })
    }
  },
  { immediate: true }
)

const emit = defineEmits(['update:file-list', 'change'])
// 判断尺寸大小
const beforeUpload = (file) => {
  const isLtM = file.size / 1024 / 1024 < props.maxSize
  if (!isLtM) {
    message.error(`上传内容必须小于${props.maxSize}M`)
  }
  let videoType = true
  if (props.largeVideo && !props.accept) {
    videoType = file.type.includes('video')
    if (!videoType) {
      message.error('该文件不符合类型！')
    }
  }
  console.log('isLtM && videoType: ', isLtM && videoType)
  return isLtM && videoType
}

// 裁剪组件
const imageCutRef = ref()
// file的change事件
const handleChange = ({ file, fileList }: UploadChangeParam) => {
  if (!file.status) {
    // beforeUpload返回false，不生效
    // 所以不符合尺寸和类型的change时，没有statue就删除
    fileList.pop()
    return
  }
  emit('update:file-list', [fileList])
  if (props.crop) {
    file.originFileObj &&
      getBase64(file.originFileObj, (imageUrl) => {
        imageCutRef.value.showEdit({ img: imageUrl }, file.name)
      })
  } else if (props.largeVideo) {
    largeVideoHandle(file)
  } else {
    uplaodHandle({ file, fileList })
  }
}
// 普通上传
const uplaodHandle = ({ file, fileList }) => {
  if (file.status !== UploadResultStatus.UPLOADING) {
    if (file.response.code === 200) {
      message.success('上传成功')
    } else {
      fileList.pop()
      message.error(
        `${file.response.msg || file.response.message || ERRORTEXT}`
      )
    }
    const formatedFileList = simplifyFileList(fileList as UploadFile[])
    emit('update:file-list', formatedFileList)
    emit('change', { fileList: formatedFileList })
  }
}
// 视频地址
const reviewUrl = ref('')
// 视频上传
const largeVideoHandle = (file) => {
  const params = `?fileName=${encodeURIComponent(file.name)}`
  fetch(props.largeAction + params, {
    headers: props.headers,
  })
    .then((response) => response.json())
    .then((res) => {
      if (res.code === 200) {
        createUploadHttp(res.data, file.originFileObj)
      } else {
        if (!props.action) {
          message.error(res.msg || res.message || ERRORTEXT)
          return
        }
        videoOldUpdate(file)
      }
    })
}
// 上传的老接口
const videoOldUpdate = (file) => {
  let formData = new FormData()
  formData.append('file', file.originFileObj, file.name || 'file.png')
  fetch(props.action || '', {
    method: 'POST', // 设置请求方法为POST
    headers: props.headers,
    body: formData,
  })
    .then((response) => response.json())
    .then((res) => {
      if (res.code === 200) {
        reviewUrl.value = res.data
        const temp = { url: reviewUrl.value, name: file.name }
        emit('change', { fileList: temp })
        localFileList.value.pop()
        message.success('上传成功')
      } else {
        message.error(res.msg || res.message || ERRORTEXT)
      }
    })
}
// 视频上传
const createUploadHttp = (url, file) => {
  let http = new XMLHttpRequest()
  http.onload = () => {
    if (http.status === 200) {
      reviewUrl.value = url.split('?')[0]
      const temp = { url: reviewUrl.value, name: file.name }
      emit('change', { fileList: temp })
      localFileList.value.pop()
      message.success('上传成功')
    } else {
      message.warning('视频上传失败')
      return false
    }
  }
  http.open('PUT', url, true)
  http.send(file)
}
// 剪切回调
const cropChange = (data, name) => {
  localFileList.value.pop()
  localFileList.value.push({
    url: data,
    name,
    type: 'image/png',
    status: UploadResultStatus.DONE,
    uid: Math.random().toString(),
  })
  const formatedFileList = simplifyFileList(localFileList.value)
  emit('update:file-list', formatedFileList)
  emit('change', { fileList: formatedFileList })
}
// 下载
const handleDownload = (file) => {
  const url = file.url || file.response?.data?.url || file?.response?.data
  useALinkToDownload(url, file.name)
}

// 预览
const previewVisible = ref<boolean>(false)
const previewImage = ref<string | undefined>('')

const handlePreview = (file: any) => {
  const url = file.url || file.response?.data?.url || file?.response?.data
  // if (file.type?.includes('image') || ) {
  previewImage.value = url
  previewVisible.value = true
  // }
}
// 移除图片
const deleteHandle = () => {
  reviewUrl.value = ''
  emit('change', null)
}

const removeChange = (file) => {
  localFileList.value = localFileList.value.filter((item) => {
    return item !== file
  })
  const formatedFileList = simplifyFileList(localFileList.value)
  emit('update:file-list', formatedFileList)
  emit('change', { fileList: formatedFileList })
}
</script>
<style scoped>
.delete_icon {
  width: 30px;
  height: 30px;
  margin-left: 10px;
  font-size: 20px;
  cursor: pointer;
}
</style>
