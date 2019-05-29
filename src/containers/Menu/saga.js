import { call, put, takeLatest, select } from 'redux-saga/effects';
import request from '../../utils/request';
import { MENU_REQUESTS_GET_LIST } from './constants';
import config from '../../config';
import { ActionSetMenuListOK} from './actions';

export function* getMenuList(pagination) {
  const { api: { pathGetMenuList } } = config;
  const requestURL = `${pathGetMenuList}?page=${pagination.data.currentPage}&limit=${pagination.data.quantity}`;
  try {
    const responseMenuList = yield call(request, requestURL, {
      method: 'get',
      headers: {},
    });
  debugger;
    if (responseMenuList.data) {
      yield put(ActionSetMenuListOK(responseMenuList.data));
    }
  } catch (exeptionMenu) {
    console.log(exeptionMenu);
  }
}

export default function* defaultSaga() {
  const { menu: { page } } = yield select((state) => state.toJS());
  yield takeLatest(MENU_REQUESTS_GET_LIST, getMenuList);
  yield call(getMenuList,{ data: { currentPage: page.currentPage, quantity: page.quantity } });
 
}
