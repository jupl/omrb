import {handleActions} from 'redux-actions'
import {previousColor, nextColor, autoNextColor} from './actions'
import {COLORS} from './config'

/** Reducer that handles color related actions */
export default handleActions({
  [previousColor.type]: setPreviousColor,
  [nextColor.type]: setNextColor,
  [autoNextColor.type]: setNextColor,
}, COLORS[0])

/**
 * Update state to go to the previous color. If past the first color, go to the
 * end of the color list.
 * @param {string} state - Current color state
 * @return {string} Previous color state
 */
function setPreviousColor(state) {
  const oldIndex = COLORS.indexOf(state)
  const newIndex = (oldIndex + COLORS.length - 1) % COLORS.length
  return COLORS[newIndex]
}

/**
 * Update state to go to the next color. If past the last color, go to the
 * beginning of the color list.
 * @param {string} state - Current color state
 * @return {string} Next color state
 */
function setNextColor(state) {
  const oldIndex = COLORS.indexOf(state)
  const newIndex = (oldIndex + 1) % COLORS.length
  return COLORS[newIndex]
}
