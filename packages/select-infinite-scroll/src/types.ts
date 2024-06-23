/*
 * @Description: 
 * @Author: Hu Yilin
 * @Date: 2024-04-07 10:02:07
 * @LastEditors: Hu Yilin
 * @LastEditTime: 2024-05-10 17:22:38
 */
export interface FieldNamesOptions {
  value: string;
  label: string;
}

// 分页参数重置
export interface FetchSetting {
  // 请求接口当前页数
  pageField: string;
  // 每页显示多少条
  sizeField: string;
  // 请求结果列表字段  支持 a.b.c
  listField: string;
  // 请求结果总数字段  支持 a.b.c
  totalField: string;
  keyWordField: string;
}

export interface SelcetProps {
  api?: string;
  fieldNames?: FieldNamesOptions;
  mode?: string;
  placeholder?: string;
}

export interface OptionItem {
  value: string;
  label: string;
}

export interface SelectedItem {
  key: string;
  label: string;
}