import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import ProductListReducer from './store/reducer/ProductList';

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ : null) || compose;
const rootReducer = combineReducers({
  products: ProductListReducer
});
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
