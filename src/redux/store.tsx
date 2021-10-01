import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { ENVIRONMENT, PRODUCTION } from '../Constants/languages'
import rootReducer from './reducers'

const middelware = [thunk]

if (process.env.NODE_ENV === 'development') {
  middelware.push(logger)
}

const middlewares =
  ENVIRONMENT === PRODUCTION
    ? applyMiddleware()
    : composeWithDevTools(applyMiddleware(...middelware))

export default createStore(rootReducer, middlewares)
