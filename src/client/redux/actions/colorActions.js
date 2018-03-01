import { ADD_COLOR } from '../constants/colorConstants'

export const addColor = color => {
  return {
    type: ADD_COLOR,
    payload: color,
  }
}
