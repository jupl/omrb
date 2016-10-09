import {call} from 'redux-saga/effects'
import color from '../color/saga'

// Collection of all saga tasks to initiate
const sagas = [color]

/**
 * Entry point to start running all initial saga tasks
 * @return {void}
 */
export default function* saga() {
  yield sagas.map(call)
}
