import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers/index'
import createSagaMiddleware from 'redux-saga'
import {colorSaga} from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const makeStore = () => createStore(reducers, applyMiddleware(sagaMiddleware))
