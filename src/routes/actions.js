import {createAction} from 'redux-actions'

/** Create action that to remove current scene */
export const popRoute = createAction('ROUTES_POP')

/** Create action that to switch to a scene */
export const pushRoute = createAction('ROUTES_PUSH', push)

/** Create action to update contents of a scene */
export const refreshRoute = createAction('ROUTES_REFRESH', refresh)

/**
 * Build action data from params when pushRoute action is called
 * @param {string} key - Key identifier for a scene
 * @param {?Object} params - Param data to pass over to scene
 * @return {Object} Action data
 */
function push(key, params) {
  return {key, params}
}

/**
 * Build action data from params when refreshRoute action is called
 * @param {Object} params - Param data to pass over to scene
 * @return {Object} Action data
 */
function refresh(params) {
  return {params}
}
