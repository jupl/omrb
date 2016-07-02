import {takeEvery} from 'redux-saga'
import {Actions} from 'react-native-router-flux'
import {ACTION_TYPES} from './constants'

/**
 * Start process to listen in on route actions
 * @return {void}
 */
export default function* saga() {
  yield [
    takeEvery(ACTION_TYPES.POP_ROUTE, () => Actions.pop()),
    takeEvery(ACTION_TYPES.PUSH_ROUTE, pushRoute),
    takeEvery(ACTION_TYPES.REFRESH, refreshRoute),
  ]
}

/**
 * Transition to another scene with given scene key and params
 * @param {Object} action - Action emitted by Redux dispatcher
 * @param {Object} action.payload - Action data
 * @param {Object} action.payload.key - Key identifier for a scene
 * @param {?Object} action.payload.params - Optional data to pass to scene
 * @return {void}
 */
function pushRoute({payload: {key, params}}) {
  Actions[key](params != null ? {params} : {})
}

/**
 * Update curren scene with given params
 * @param {Object} action - Action emitted by Redux dispatcher
 * @param {Object} action.payload - Action data
 * @param {?Object} action.payload.params - Optional data to pass to scene
 * @return {void}
 */
function refreshRoute({payload: {params}}) {
  Actions.refresh(params != null ? {params} : {})
}
