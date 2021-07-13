import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { ENVIRONMENT, PRODUCTION } from '../Constants/index'
import rootReducer from './reducers'

const middlewares =
  ENVIRONMENT === PRODUCTION
    ? applyMiddleware()
    : composeWithDevTools(applyMiddleware())

export default createStore(rootReducer, middlewares)
