import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './redux/reducers'

const history = createBrowserHistory()

const reducer = compose(
  connectRouter(history),
)(rootReducer)

const enhancer = compose(
  applyMiddleware(
    routerMiddleware(history),
    logger,
    thunk,
  )
)

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  enhancer
) 

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
