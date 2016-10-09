import {delay} from 'redux-saga'
import {call, put, race, take} from 'redux-saga/effects'
import {previousColor, nextColor, autoNextColor} from './actions'

/**
 * Start process to cycle colors automatically until an action is emitted to
 * manually change color
 * @return {void}
 */
export default function* saga() {
  for(;;) {
    const {end} = yield race({
      timeout: call(delay, 3000),
      end: take([`${previousColor}`, `${nextColor}`]),
    })
    if(end) { break }
    yield put(autoNextColor())
  }
}
