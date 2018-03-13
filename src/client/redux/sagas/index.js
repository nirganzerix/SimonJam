import {addGameColor, changeBackgroundColor} from '../actions/colorActions'
import {put, select} from 'redux-saga/effects'
import {takeEvery} from 'redux-saga'
import {START_GAME} from '../constants/colorConstants'
import {getGameColors} from '../selectors/index'
import _ from 'lodash'

function* gameColorAction(){
  const colors = [0, 1, 2, 3]
  yield put(addGameColor(_.sample(colors)))
}

function* flashColors(){
  const localGameColors = yield select(getGameColors);
  console.log({test: localGameColors});
  yield put(changeBackgroundColor(0, 'white'))
  for(let gameColor in localGameColors){
    console.log('blah')
    yield put(changeBackgroundColor(gameColor, 'white'))
  }
}

export function* colorSaga() {
  yield* gameColorAction()
  yield* flashColors()
}

export default function* colorSagaListener(){
  yield* takeEvery([START_GAME], colorSaga)
}
