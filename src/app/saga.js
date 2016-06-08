import {call} from 'redux-saga/effects'
import color from '../color/saga'
import routes from '../routes/saga'

// Collection of all saga tasks to initiate
const sagas = [color, routes]

/**
 * Entry point to start running all initial saga tasks
 * @return {void}
 */
export default function* saga() {
  yield sagas.map(call)
}
