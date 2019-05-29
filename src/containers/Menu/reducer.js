import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_MENU_LIST_OK,
  SET_CURRENT_SELECT,
  SET_DIALOG_STATE,
  SET_BORDER_COLOR,
  SET_PAGER,
  NEXT_PAGER,
  PREVIOUS_PAGER
} from './constants';
import configurationMenu from './configuration';

const initialState = fromJS({
  state: 'list',
  menuList: configurationMenu.menuList,
  showMessageSaveError: false,
  currentItem:{},
  dialogState:false,
  page: { currentPage: 1, quantity: 8 },
  countMenuList: 0,
});

function menuReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case DEFAULT_ACTION:
      newState = state;
      break;
    case SET_MENU_LIST_OK:
    debugger;
    const countMenuList = state.get('countMenuList');
    newState = state.merge({
      menuList: fromJS(action.menuList.results),
      countMenuList: action.menuList.total ,
    });
      break;
    case SET_CURRENT_SELECT:
      newState = state.merge({currentItem:action.item,
      dialogState:true
      });  
      break;
    case SET_DIALOG_STATE:
      newState = state.set('dialogState', false);
      break;
    case SET_BORDER_COLOR:
      const updateBorderStyle =  state.get('menuList').toJS().map(item =>{
        if(item.id=== action.id){
          return {...item,...{border:action.border}}
        }
        return item
      });
        newState = state.merge({menuList:fromJS(updateBorderStyle),
      dialogState:false
      });  
      break;
    case PREVIOUS_PAGER:
      newState = state.set('page', action.pager);
      break;
    case NEXT_PAGER:
    debugger  
    newState = state.set('page', action.pager);
      break;
    case SET_PAGER:
      newState = state.set('page', action.pager);
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
export default menuReducer;
