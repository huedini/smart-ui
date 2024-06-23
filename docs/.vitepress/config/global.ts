/*
 * @Description: 
 * @Author: Hu Yilin
 * @Date: 2024-03-29 13:47:48
 * @LastEditors: Hu Yilin
 * @LastEditTime: 2024-06-23 14:24:22
 */
import { resolve } from 'path'

// 项目目录
export const projRoot = resolve(__dirname, '..', '..', '..')

// 项目名称
export const docsDirName = 'docs'

// 文档库目录
export const docRoot = resolve(projRoot, docsDirName)

