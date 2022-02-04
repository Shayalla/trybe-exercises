import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react';
import App from './App';
// demais imports...
import { createStore, combineReducers, applyMiddleware } from 'redux';
import clickReducer from './reducers';
import thunk from 'redux-thunk';

const createMockStore = (initialState) => (
    createStore(combineReducers({ clickReducer }), initialState, applyMiddleware(thunk))
);

const renderWithRedux = (component, {
    initialState,
    store = createMockStore(initialState) 
} = {}) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

export default renderWithRedux;