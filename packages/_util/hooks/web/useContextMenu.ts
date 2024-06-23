/*
 * @Description: 
 * @Author: Hu Yilin
 * @Date: 2024-05-13 16:06:33
 * @LastEditors: Hu Yilin
 * @LastEditTime: 2024-05-13 16:07:10
 */
import { onUnmounted, getCurrentInstance } from 'vue';
import { createContextMenu, destroyContextMenu } from '../../../context-menu';
import type { ContextMenuItem } from '../../../context-menu';

export type { ContextMenuItem };
export function useContextMenu(authRemove = true) {
  if (getCurrentInstance() && authRemove) {
    onUnmounted(() => {
      destroyContextMenu();
    });
  }
  return [createContextMenu, destroyContextMenu];
}
