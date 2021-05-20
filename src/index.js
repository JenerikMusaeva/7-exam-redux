import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { applyMiddleware, compose, createStore } from 'redux'

const configureStore = rootReducer => {
  const hasReduxExtension = typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function'
  const isDevelopment = process.env.NODE_ENV === 'development'
  const composeEnhancers =
    isDevelopment && hasReduxExtension ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
  const middleware = applyMiddleware()
  const createStoreWithMiddleware = composeEnhancers(middleware)

  return createStoreWithMiddleware(createStore)(rootReducer)
}

const store = configureStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
