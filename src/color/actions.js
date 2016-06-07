import {createAction} from 'redux-actions'

/** Create action that to move to the next color */
export const previousColor = createAction('COLOR_PREVIOUS')

/** Create action that to move to the previous color */
export const nextColor = createAction('COLOR_NEXT')

/** Create action that to move to the next color automatically */
export const autoNextColor = createAction('COLOR_NEXT_AUTO')
