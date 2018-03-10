import {addGameColor, changeBackgroundColor} from '../actions/colorActions'
import {put} from 'redux-saga/effects'
import {takeEvery} from 'redux-saga'
import {START_GAME} from '../constants/colorConstants'
import _ from 'lodash'

export function* colorSaga() {
  const colors = ['blue', 'green', 'red', 'purple']
  yield put(addGameColor(_.sample(colors)))
}

export default function* colorSagaListener(){
  yield* takeEvery([START_GAME], colorSaga)
}
