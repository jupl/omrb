import React from 'react'
import {Platform} from 'react-native'
import Root from './template'

// OS text to display
const OS = Platform.select({ios: 'iOS', android: 'Android'})

/**
 * Wrap root component with OS data from React Native
 * @return {ReactElement} Root component prepoulated with OS
 */
export default () => <Root os={OS} />
