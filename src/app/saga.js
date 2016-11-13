import {call} from 'redux-saga/effects'

// Collection of all saga tasks to initiate
const sagas = []

/**
 * Entry point to start running all initial saga tasks
 * @return {void}
 */
export default function* saga() {
  yield sagas.map(call)
}
