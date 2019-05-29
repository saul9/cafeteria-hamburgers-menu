import { createSelector } from 'reselect';
import { assign } from 'lodash';
const selectLayoutMenu = (state) => state.get('menu');
const selectLayoutHome = (state) => state.get('LayoutHome');
const makeSelectLayoutHome = () => createSelector(
  selectLayoutMenu,
  selectLayoutHome,
  (substate, app) => assign(
    substate.toJS(),
    {
      selectLayoutHome: app,
    }
  )
);

export default makeSelectLayoutHome;
export {
  selectLayoutMenu,
};
