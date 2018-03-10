import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas'

export const sagaMiddleware = createSagaMiddleware()

export const makeMiddleware = () => {
    const logger = createLogger({collapsed: true})
    const middleware = [sagaMiddleware, logger]

    return middleware
}

export const runSagas = () => sagaMiddleware.run(sagas)
