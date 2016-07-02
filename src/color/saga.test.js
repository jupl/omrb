import test from 'ava'
import {delay} from 'redux-saga'
import {call, put, race, take} from 'redux-saga/effects'
import saga from './saga'
import {ACTION_TYPES} from './constants'
import * as actions from './actions'

/** @test {color.saga} */
test('Color saga', t => {
  const raceCall = race({
    timeout: call(delay, 4000),
    end: take([ACTION_TYPES.PREVIOUS_COLOR, ACTION_TYPES.NEXT_COLOR]),
  })

  // Start off saga and ensure race condition is called first
  const it = saga()
  t.deepEqual(it.next().value, raceCall)

  // Ensure that auto next color event is emitted by default
  Array(100).fill().forEach(() => {
    t.deepEqual(it.next({}).value, put(actions.autoNextColor()))
    t.deepEqual(it.next().value, raceCall)
  })

  // Verify saga ends when end is reached
  t.true(it.next({end: actions.nextColor()}).done)
})
