import {addGameColor, changeBackgroundColor, clearUserColors} from '../actions/colorActions'
import {put, select, call} from 'redux-saga/effects'
import {takeEvery, delay} from 'redux-saga'
import {START_GAME} from '../constants/colorConstants'
import {getGameColors} from '../selectors/index'
import _ from 'lodash'

const colorMap = ['red', 'blue', 'purple', 'green']

function* gameColorAction(){
  const colors = [0, 1, 2, 3]
  yield put(addGameColor(_.sample(colors)))
}

function* flashColors(){
  const localGameColors = yield select(getGameColors);
  console.log({test: localGameColors});
  for (var i = 0; i < localGameColors.length; i++) {
    let gameColor = localGameColors[i]
    yield put(changeBackgroundColor(gameColor, 'white'))
    yield call(delay, 500)
    yield put(changeBackgroundColor(gameColor, colorMap[gameColor]))
    yield call(delay, 500)
  }
}

export function* colorSaga() {
  clearUserColors()
  yield* gameColorAction()
  yield* flashColors()
}

export default function* colorSagaListener(){
  yield* takeEvery([START_GAME], colorSaga)
}
