import React from 'react';
import './App.css';
import RootReducer from './shared/store/appReducer';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Header from './components/containers/Header/Header';
import MainContent from './components/containers/MainContent/MainContent';
import createSagaMiddleware from 'redux-saga';
import appSagas from './shared/sagas/';

// Creating Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Creating Redux Store
const store = createStore(RootReducer, {}, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(appSagas);

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <MainContent />
    </Provider>
  );
};

export default App;
