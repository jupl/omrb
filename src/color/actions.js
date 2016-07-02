import {createAction} from 'redux-actions'
import {ACTION_TYPES} from './constants'

/** Create action that to move to the next color */
export const previousColor = createAction(ACTION_TYPES.PREVIOUS_COLOR)

/** Create action that to move to the previous color */
export const nextColor = createAction(ACTION_TYPES.NEXT_COLOR)

/** Create action that to move to the next color automatically */
export const autoNextColor = createAction(ACTION_TYPES.AUTO_NEXT_COLOR)
