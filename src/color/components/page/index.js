import {connect} from 'react-redux'
import ColorPage from './template'
import {nextColor, previousColor} from '../../actions'

/** Wrap color page component with data from store */
export default connect(props, actions)(ColorPage)

/**
 * Add Redux store data as properties to component
 * @param {Object} store - Current state from Redux store
 * @return {Object} Props to pass to component
 */
export function props({color}) {
  return {color}
}

/**
 * Add Redux store action dispatches as properties to component
 * @param {Function} dispatch - Redux store dispatch function
 * @return {Object} Props to pass to component
 */
export function actions(dispatch) {
  return {
    onNextColor: () => dispatch(nextColor()),
    onPreviousColor: () => dispatch(previousColor()),
  }
}
