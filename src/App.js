import React from 'react';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import GlobalStyles from './styles/globalStyles';

const App = () => (
  <Provider store={store}>
    <Routes />
    <GlobalStyles />
  </Provider>

);

export default App;
