<template>
  <s-layout-page>
    <s-layout-page-item>
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 2 }"
        :wrapper-col="{ span: 16 }"
        @finish="onFinish"
      >
        <a-form-item
          label="图片"
          name="fileList"
          :rules="[{ required: true, message: '请输入图片' }]"
        >
          <s-file-upload
            v-model:file-list="formState.fileList"
            :action="apiPath"
            @change="changeHandle"
            list-type="picture-card"
            :max-count="20"
            :max-size="2"
            accept=".png, .jpg, .jpeg, .mp4"
            extra-info="请上传大小20M以内图片，jpg/png/jpeg格式"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 2, span: 16 }">
          <a-button type="primary" html-type="submit">提交</a-button>
        </a-form-item>
      </a-form>
    </s-layout-page-item>
  </s-layout-page>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
const formState = reactive({
  fileList: [],
})
const fileList = ref([])
// 上传地址
const apiPath = '/sc/th/api-publics/publics/fileUpload/uploadImage'
const changeHandle = ({ fileList }) => {
  console.log('fileList: ', fileList)
}
const onFinish = (values: any) => {
  console.log('Success:', values)
}
</script>
