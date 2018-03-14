import _ from 'lodash'

export const isUserCorrect = state => {
  const userColors = state.colorState.userColors
  const gameColors = _.take(state.colorState.gameColors, userColors.length)

  return _.isEqual(userColors, gameColors)
}

export const getGameColors = state => {
  return state.colorState.gameColors;
}
