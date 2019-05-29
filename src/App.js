import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CreateHistory from 'history/createBrowserHistory';
import ConfigureStore from './configureStore';
import LayoutHome from './containers/Menu/index';
import './App.css';

const initialState = {};
const history = CreateHistory();
const store = ConfigureStore(initialState, history);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <LayoutHome/>
      </Provider>        
    );
  }
}

export default App;