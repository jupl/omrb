import {delay} from 'redux-saga'
import {call, put, race, take} from 'redux-saga/effects'
import {ACTION_TYPES} from './constants'
import {autoNextColor} from './actions'

/**
 * Start process to cycle colors automatically until an action is emitted to
 * manually change color
 * @return {void}
 */
export default function* saga() {
  for(;;) {
    const {end} = yield race({
      timeout: call(delay, 4000),
      end: take([ACTION_TYPES.PREVIOUS_COLOR, ACTION_TYPES.NEXT_COLOR]),
    })
    if(end) { break }
    yield put(autoNextColor())
  }
}
