import {applyMiddleware, createStore, compose} from 'redux'
import {makeMiddleware, runSagas} from './middleware'
import reducers from './reducers/index'

export const makeStore = () => {
  const store = createStore(
    reducers,
    applyMiddleware(...makeMiddleware())
  )
  runSagas()
  return store
}
