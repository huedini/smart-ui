/*
 * @Description:
 * @Author: Hu Yilin
 * @Date: 2023-07-17 15:07:44
 * @LastEditors: shi hong yu
 * @LastEditTime: 2023-11-30 17:19:32
 */

// 普通文件上传相应格式
export interface CommonFileData {
  // 封面文件访问地址
  coverUrl: string;
  // 文件新的名字（minio里的文件名-不带扩展名）
  newName: string;
  // 文件原始名称（不带扩展名）
  originName: string;
  // 文件访问地址
  url: string;
}
export interface UploadApiResult {
  message: string;
  code: number;
  // url: string;
  data?: string | CommonFileData;
}

export enum ListTypeEnum {
  text = 'text',
  PICTURE = 'picture',
  PICTURE_CARD = 'picture-card',
}

export enum UploadResultStatus {
  DONE = 'done',
  SUCCESS = 'success',
  ERROR = 'error',
  UPLOADING = 'uploading',
  REMOVED = 'removed',
}
export interface FileItem {
  thumbUrl?: string;
  name?: string;
  size?: string | number;
  type?: string;
  percent?: number;
  url?: string;
  file?: File;
  status?: UploadResultStatus;
  response?: UploadApiResult;
  uid?: string;
}

// 简略版文件格式
export interface FileListItemThin {
  url?: string;
  // 带后缀文件名
  name?: string;
  // 文件原始名称（不带扩展名）
  originName?: string;
}
