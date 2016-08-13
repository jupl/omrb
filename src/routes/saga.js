import {takeEvery} from 'redux-saga'
import {Actions} from 'react-native-router-flux'
import {
  pushRoute as pushRouteAction,
  popRoute as popRouteAction,
  refreshRoute as refreshRouteAction,
} from './actions'

/**
 * Start process to listen in on route actions
 * @return {void}
 */
export default function* saga() {
  yield [
    takeEvery(popRouteAction.type, () => Actions.pop()),
    takeEvery(pushRouteAction.type, pushRoute),
    takeEvery(refreshRouteAction.type, refreshRoute),
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
