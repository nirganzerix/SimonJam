import { ADD_COLOR, ADD_GAME_COLOR } from '../constants/colorConstants'

export const addColor = color => {
  return {
    type: ADD_COLOR,
    payload: color,
  }
}

export const addGameColor = color => {
  return {
    type: ADD_GAME_COLOR,
    payload: color,
  }
}