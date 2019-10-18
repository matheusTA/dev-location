import React from 'react';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import store from './store';
import GlobalStyles from './styles/globalStyles';

const App = () => (
  <Provider store={store}>
    <Routes />
    <ToastContainer autoClose={5000} />
    <GlobalStyles />
  </Provider>

);

export default App;
