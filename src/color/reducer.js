import {handleActions} from 'redux-actions'

// Colors to cycle
const COLORS = ['#39cccc', '#2ecc40', '#ffdc00', '#ff851b']

/** Reducer that handles color related actions */
export default handleActions({
  COLOR_PREVIOUS,
  COLOR_NEXT,
  COLOR_NEXT_AUTO: COLOR_NEXT,
}, COLORS[0])

/**
 * Action handler to go to the previous color. If past the first color, go to
 * the end of the color list.
 * @param {string} state - Current color state
 * @return {string} Previous color state
 */
function COLOR_PREVIOUS(state) {
  const oldIndex = COLORS.indexOf(state)
  const newIndex = (oldIndex + COLORS.length - 1) % COLORS.length
  return COLORS[newIndex]
}

/**
 * Action handler to go to the next color. If past the last color, go to the
 * beginning of the color list.
 * @param {string} state - Current color state
 * @return {string} Next color state
 */
function COLOR_NEXT(state) {
  const oldIndex = COLORS.indexOf(state)
  const newIndex = (oldIndex + 1) % COLORS.length
  return COLORS[newIndex]
}
