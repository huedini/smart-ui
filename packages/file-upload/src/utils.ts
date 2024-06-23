// 文件下载
export const useALinkToDownload = (url, filename) => {
  getBlob(url).then((blob: any) => {
    if ((window.navigator as any).msSaveOrOpenBlob) {
      (navigator as any).msSaveBlob(blob, filename);
    } else {
      const link = document.createElement('a');
      const body: any = document.querySelector('body');
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      // fix Firefox
      link.style.display = 'none';
      body.appendChild(link);
      link.click();
      body.removeChild(link);
      window.URL.revokeObjectURL(link.href);
    }
  });
};
// 获取blob
export const getBlob = (url) => {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      }
    };
    xhr.send();
  });
};

// 获取图片base64
export const getBase64 = (file, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(file);
};

/**
 * 格式化简化文件列表
 * @param fileList 原始文件列表信息
 */
export const simplifyFileList = (fileList: any) => {
  const result: any = [];
  fileList.forEach((item) => {
    const picInfo = {
      // 已有数据 图片上传相应格式   普通文件上传相应格式
      url: item.url || item?.response?.data?.url || item?.response?.data,
      name: item.name,
      thumbUrlScale: null,
    };
    // 如果是图片就存储缩略图
    if (item.type?.includes('image/')) {
      picInfo.thumbUrlScale = picInfo.url.replace(/\.$/g, '_scale.');
    }
    result.push(picInfo);
  });
  return result;
};
