import {createAction} from 'redux-actions'

/**
 * Same as redux-action's createAction function, but tacks on the type as
 * a property to the action reator.
 * @return {Function} Action creator
 */
export default function createActionMod(...args) {
  const actionCreator = createAction(...args)
  actionCreator.type = args[0]
  return actionCreator
}
