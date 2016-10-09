import {createAction} from 'redux-actions'

/**
 * Create action that to move to the next color
 * @type {Function}
 */
export const previousColor = createAction('COLORS_PREVIOUS_COLOR')

/**
 * Create action that to move to the previous color
 * @type {Function}
 */
export const nextColor = createAction('COLORS_NEXT_COLOR')

/**
 * Create action that to move to the next color automatically
 * @type {Function}
 */
export const autoNextColor = createAction('COLORS_AUTO_NEXT_COLOR')
