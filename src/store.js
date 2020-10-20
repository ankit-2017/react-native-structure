import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import rootReducer from '_reducers';
import rootSaga from '_sagas';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, loggerMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
