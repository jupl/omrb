/**
 * Merge properties for connect in react-redux. The key difference from the
 * default version is to place dispatch properties in its own property.
 * @param {?Object} props - Optional properties generated from state data
 * @param {?Object} actions - Optional properties generated with dispatch
 * @param {?Object} ownProps - Optional properties passed in from user
 * @return {Object} Properties to pass over to the component
 */
export default function merge(props, actions = {}, ownProps) {
  return {...ownProps, ...props, actions}
}
