import {handleActions} from 'redux-actions'

/** Reducer that handles color related actions */
export default handleActions({focus}, {})

/**
 * Action handler when scene changes focus
 * @param {Object} state - Current scene information
 * @param {Object} action - Action emitted from router
 * @param {Object} action.scene - Scene/router state
 * @return {Object} New scene information
 */
function focus(state, {scene}) {
  return JSON.parse(JSON.stringify(scene))
}
