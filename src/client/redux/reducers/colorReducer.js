import { ADD_COLOR, ADD_GAME_COLOR, CHANGE_BACKGROUND_COLOR, CLEAR_USER_COLORS, RESET_GAME } from '../constants/colorConstants'

const initialState = {
  userColors: [],
  gameColors: [],
  shapeColors: ['red', 'blue', 'purple', 'green']
}

const reducer = (state = initialState, action = {} ) => {
  switch ( action.type ) {
    case ADD_COLOR:
      return { ...state, userColors: [ ...state.userColors, action.payload ] }
    case ADD_GAME_COLOR:
      return {...state, gameColors: [...state.gameColors, action.payload ] }
    case CHANGE_BACKGROUND_COLOR:
      let clonedColors = _.clone(state.shapeColors)
      clonedColors[action.payload.squareIndex] = action.payload.newColor
      return {...state, shapeColors: clonedColors}
    case CLEAR_USER_COLORS:
      return {...state, userColors: [] }
    case RESET_GAME:
      console.log('game has been reset')
      return initialState
    default:
      return state
  }
}

export default reducer
