import {createAction} from 'redux-actions'
import {ACTION_TYPES} from './constants'

/** Create action that to remove current scene */
export const popRoute = createAction(ACTION_TYPES.POP_ROUTE)

/** Create action that to switch to a scene */
export const pushRoute = createAction(ACTION_TYPES.PUSH_ROUTE, push)

/** Create action to update contents of a scene */
export const refreshRoute = createAction(ACTION_TYPES.REFRESH, refresh)

/**
 * Build action data from params when pushRoute action is called
 * @param {string} key - Key identifier for a scene
 * @param {?Object} params - Param data to pass over to scene
 * @return {Object} Action data
 */
function push(key, params) {
  return params != null ? {key, params} : {key}
}

/**
 * Build action data from params when refreshRoute action is called
 * @param {Object} params - Param data to pass over to scene
 * @return {Object} Action data
 */
function refresh(params) {
  return params != null ? {params} : {}
}
