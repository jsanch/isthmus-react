import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
// import { defineCustomElements } from '@carto/airship-components/dist/loader';
// import C from './data/C'

// import * as cartoVL from '@carto/carto-vl'
// import * as cartoJS from '@carto/carto.js'

// const carto = C.VL ? cartoVL : cartoJS

// defineCustomElements(window)

const store  = configureStore();

//const state = store.getState();

const jsx = (
  <Provider store={store}>
       <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
