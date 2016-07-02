import {handleActions} from 'redux-actions'
import {ACTION_TYPES, COLORS} from './constants'

/** Reducer that handles color related actions */
export default handleActions({
  [ACTION_TYPES.PREVIOUS_COLOR]: previousColor,
  [ACTION_TYPES.NEXT_COLOR]: nextColor,
  [ACTION_TYPES.AUTO_NEXT_COLOR]: nextColor,
}, COLORS[0])

/**
 * Update state to go to the previous color. If past the first color, go to the
 * end of the color list.
 * @param {string} state - Current color state
 * @return {string} Previous color state
 */
function previousColor(state) {
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
function nextColor(state) {
  const oldIndex = COLORS.indexOf(state)
  const newIndex = (oldIndex + 1) % COLORS.length
  return COLORS[newIndex]
}
