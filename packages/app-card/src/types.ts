/*
 * @Description:
 * @Author: Hu Yilin
 * @Date: 2024-03-07 17:46:55
 * @LastEditors: Hu Yilin
 * @LastEditTime: 2024-03-22 14:41:54
 */
export interface AppData {
  id?: string;
  iconUrl?: string;
  // 名称
  name: string;
  // appCode
  code: string;
  secondCategoryCode?: string;
  appBear?: string;
}

export interface AppDataCheckAble extends AppData {
  checked: boolean;
}
export interface CategoryItem {
  name: string;
  code: string;
}
