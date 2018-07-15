import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import { customMiddleWare, incrementMiddleware } from '../middleware'

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(customMiddleWare, incrementMiddleware),
)

export default configureStore
