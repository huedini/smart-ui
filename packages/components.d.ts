/*
 * @Description:
 * @Author: Ni Jianhun
 * @Date: 2023-10-13 16:21:37
 * @LastEditors: Hu Yilin
 * @LastEditTime: 2024-04-25 13:50:17
 */

import LayoutPage from './layout-page/src/index.vue'
import LayoutPageItem from './layout-page-item/src/index.vue'
import QueryCondition from './query-condition/src/index.vue'
import Table from './table/src/index.vue'
import Form from './form/src/index.vue'
import Select from './select/src/index.vue'
import SelectTable from './select-table/src/index.vue'
import Detail from './detail/src/index.vue'
import Button from './button/src/index.vue'
import AdaptivePage from './adaptive-page/src/index.vue'
import DatePicker from './date-picker/src/index.vue'
import UniconTextArea from './un-textArea/index.vue'
import DatePicker from './date-picker/src/index.vue'
import ImportModal from './importModal/src/index.vue'
import ImportExcelModal from './importExcelModal/src/index.vue'
import PuzzleVerification from './puzzleVerification/src/index.vue'
import ZebraProgress from './zebraProgress/src/index.vue'
declare module 'vue' {
  export interface GlobalComponents {
    LayoutPage: typeof TLayoutPage
    LayoutPageItem: typeof TLayoutPageItem
    QueryCondition: typeof TQueryCondition
    Table: typeof TTable
    Form: typeof TForm
    Select: typeof TSelect
    SelectTable: typeof TSelectTable
    Detail: typeof TDetail
    Button: typeof TButton
    StepWizard: typeof TStepWizard
    TimerBtn: typeof TTimerBtn
    ModuleForm: typeof TModuleForm
    AdaptivePage: typeof TAdaptivePage
    DatePicker: typeof TDatePicker
    DatePicker: typeof DatePicker
    UniconTextArea: typeof UniconTextArea
    ImportModal: typeof ImportModal
    ImportExcelModal: typeof ImportExcelModal
    PuzzleVerification: typeof PuzzleVerification
    ZebraProgress: typeof ZebraProgress
  }
}
declare module 'dayjs'
