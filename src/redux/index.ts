import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import sagas from './sagas'

export default function() {
  const sagaMiddleWare = createSagaMiddleware()
  const store = createStore(reducers, applyMiddleware(sagaMiddleWare))
  sagaMiddleWare.run(sagas)
  return store
}