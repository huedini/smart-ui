<!--
 * @Author: dozening
 * @Date: 2024-06-18 20:44:07
 * @LastEditors: dozening
 * @LastEditTime: 2024-06-18 20:44:22
 * @Description: file content
 * @FilePath: \component-library-pc\packages\image-text-draggable\src\rawDisplayer.vue
-->
<template>
    <div>
      <h3>{{ title }}</h3>
      <pre>{{ valueString }}</pre>
    </div>
  </template>
  <script>
  const props = {
    title: {
      required: true,
      type: String
    },
    value: {
      required: true
    }
  };
  export default {
    name: "raw-displayer",
    props,
    computed: {
      valueString() {
        return JSON.stringify(this.value, null, 2);
      }
    }
  };
  </script>
  <style scoped>
  pre {
    text-align: start;
    font-size: 12px;
  }
  </style>