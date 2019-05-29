import {
    SET_MENU_LIST_OK,
    SET_CURRENT_SELECT,
    SET_DIALOG_STATE,
    SET_BORDER_COLOR,
    PREVIOUS_PAGER,
    NEXT_PAGER,
    SET_PAGER,
    MENU_REQUESTS_GET_LIST,

  } from './constants';
  
  export function ActionSetMenuListOK(menuList) {
    debugger
    return {
      type: SET_MENU_LIST_OK,
      menuList,
    };
  }

  export function setCurrentSelect(item) {
     return {
       type: SET_CURRENT_SELECT,
       item,
     };
   }

   export function setDialogState() {
     return {
       type: SET_DIALOG_STATE,
     };
   }
   
   export function setBorderColor(id,border) {
    return {
      type: SET_BORDER_COLOR,
      id,
      border
    };
  }
  export function ActionPreviousPager(pager) {
    return {
      type: PREVIOUS_PAGER,
      pager,
    };
  }
  
  export function ActionNextPager(pager) {
    return {
      type: NEXT_PAGER,
      pager,
    };
  }
  
  export function ActionSetPager(pager) {
    return {
      type: SET_PAGER,
      pager,
    };
  }

  export function ActionMenuRequestsModulesList(data) {
    return {
      type: MENU_REQUESTS_GET_LIST,
      data,
    };
  }
  
  