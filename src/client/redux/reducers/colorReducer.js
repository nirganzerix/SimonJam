import { ADD_COLOR, ADD_GAME_COLOR } from '../constants/colorConstants'

const initialState = {
  userColors: [],
  gameColors: []
}

const reducer = (state = initialState, action = {} ) => {
  switch ( action.type ) {
    case ADD_COLOR:
      return { ...state, userColors: [ ...state.userColors, action.payload ] }
    case ADD_GAME_COLOR:
      return {...state, gameColors: [...state.gameColors, action.payload ] }
    default:
      return state
  }
}

export default reducer
