/*
 * @Description:
 * @Author: Hu Yilin
 * @Date: 2024-04-15 17:11:28
 * @LastEditors: Hu Yilin
 * @LastEditTime: 2024-04-18 11:20:03
 */
import { AppData, CategoryItem } from '/@/components/UAppCard';

/**
 * 格式化应用list
 * @param list
 * @returns
 */
export function formatAppList(list: any[]) {
  const result: AppData[] = [];
  if (!list || !list.length || list.length === 0) {
    return [];
  }
  list.map((item) => {
    const {
      id,
      appCode,
      appName,
      iconUrl,
      secondCategoryCode,
      bindRoom,
      bindRoomName,
      appBearer,
      appLevel,
      appLevelName,
    } = item;
    result.push({
      id,
      name: appName,
      code: appCode,
      iconUrl,
      secondCategoryCode,
      bindRoom: appBearer === 'mobile' ? bindRoom : undefined,
      bindRoomName: appBearer === 'mobile' ? bindRoomName : undefined,
      appLevel,
      appLevelName,
    });
  });

  return result;
}

/**
 * 格式化二级分类列表
 * @param list
 * @returns
 */
export function formatCategoryList(list: any[]) {
  const result: CategoryItem[] = [];
  if (!list || !list.length || list.length === 0) {
    return [];
  }
  list.map((item) => {
    const { secondCategoryCode, secondCategoryCodeName } = item;
    result.push({
      code: secondCategoryCode,
      name: secondCategoryCodeName,
    });
  });
  // 前面加上全部
  return result;
}
