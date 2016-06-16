import React, {Component, PropTypes} from 'react'
import {Scene} from 'react-native-router-flux'
import {Provider} from 'react-redux'
import {StyleSheet} from 'react-native'
import ColorPage from '../../../color/components/page'
import Router from '../../../routes/components/router'
import * as rawStyles from './styles'

// Create React Native stylesheet from style data
const styles = StyleSheet.create(rawStyles)

/** Root component that represents the entire application */
export default class Root extends Component {
  static propTypes = {store: PropTypes.object.isRequired}

  /**
   * Maximize color page component for route home page
   * @return {ReactElement} Maximized color page component
   */
  homePage() {
    return <ColorPage style={styles.CONTAINER} />
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <Scene key="root">
            <Scene initial hideNavBar key="home" component={this.homePage} />
          </Scene>
        </Router>
      </Provider>
    )
  }
}
