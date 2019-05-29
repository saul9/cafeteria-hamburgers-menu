import React from 'react';
import { Container ,ContainerPagination} from './styledComponents';
import injectReducer from '../../utils/injectReducer';
import InjectSaga from '../../utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import  MenuCard  from '../../components/MenuItem/index'
import reducer from './reducer';
import saga from './saga';
import * as MenuActions from './actions';
import selectLayoutMenu from './selectors';
import Dialog from '../../components/Modal/index'
import Pagination from '../../components/Pagination/index'
import Page from '../../utils/page';

export class LayoutHome extends React.Component { 
  render() {
    debugger
    const {menu:{
      menuList,
      dialogState,
      page,
      currentItem,
      countMenuList,
    },
    setCurrentSelect,
    setDialogState,
    setBorderColor,
    ActionPreviousPager,
    ActionNextPager,
    ActionSetPager,
    ActionMenuRequestsModulesList,

  }=this.props;
    return (
      <div>
        <React.Fragment>
          <Dialog
            dialogState={dialogState}
            setDialogState={setDialogState}
            currentItem={currentItem}
            setBorderColor={(id,border)=>setBorderColor(id,border)} />
        </React.Fragment> 
           <Container>{menuList.map(item =>
            <MenuCard 
            key={item.id} 
            item={item}               
            onClick={() => { setCurrentSelect(item) }} />)}
        </Container>
        <ContainerPagination>
        <Pagination        
          currentPage={page.currentPage}
          quantity={page.quantity}
          total={countMenuList}
          previous={(value) => { Page(value, ActionPreviousPager, ActionMenuRequestsModulesList); }}
          next={(value) => { Page(value, ActionNextPager, ActionMenuRequestsModulesList); }}
          setPage={(value) => { Page(value, ActionSetPager, ActionMenuRequestsModulesList); }}
         >
          </Pagination>
        </ContainerPagination>
      </div>
      );
  }
}

const mapStateToProps = createStructuredSelector({
  menu: selectLayoutMenu(),
});

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(MenuActions, dispatch);
  return {
    dispatch,
    ...actions,
  };
}

const MyConnectedComponent = connect(mapStateToProps,mapDispatchToProps)(LayoutHome);
const withReducer = injectReducer({ key: 'menu', reducer });
const withSaga = InjectSaga({ key: 'menu', saga });

export default compose(
  withReducer,
  withSaga,
)(MyConnectedComponent);

