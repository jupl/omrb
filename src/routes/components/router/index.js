import {Router} from 'react-native-router-flux'
import {connect} from 'react-redux'

/** Wrap router component to trigger router actions to Redux */
export default connect()(Router)
