import { ADD_COLOR } from '../constants/colorConstants'

const reducer = (state = {}, action = {} ) => {
  switch ( action.type ) {
    case ADD_COLOR:
      return { ...state, color: [ ...state.color, action.payload ] }
    default:
      return state
  }
}

export default reducer
