import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ColorPage from './template'
import {nextColor, previousColor} from '../../actions'

/** Wrap color page component with data from store */
export default connect(props, actions)(ColorPage)

/**
 * Add Redux store data as properties to component
 * @param {Object} store - Current state from Redux store
 * @param {string} store.color - Color data from store
 * @return {Object} Props to pass to component
 */
function props({color}) {
  return {color}
}

/**
 * Add Redux store action dispatches as properties to component
 * @param {Function} dispatch - Redux store dispatch function
 * @return {Object} Props to pass to component
 */
function actions(dispatch) {
  return {actions: bindActionCreators({nextColor, previousColor}, dispatch)}
}
