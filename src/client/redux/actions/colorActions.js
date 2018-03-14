import { ADD_COLOR, ADD_GAME_COLOR, START_GAME, CHANGE_BACKGROUND_COLOR, CLEAR_USER_COLORS, RESET_GAME } from '../constants/colorConstants'

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

export const startGame = () => {
  return {
    type: START_GAME,
    payload: null
  }
}

export const changeBackgroundColor = (squareIndex, newColor) => {
  return {
    type: CHANGE_BACKGROUND_COLOR,
    payload: {squareIndex, newColor}
  }
}

export const clearUserColors = () => {
  return {
    type: CLEAR_USER_COLORS
  }
}

export const resetGame = () => {
  return {
    type: RESET_GAME
  }
}
