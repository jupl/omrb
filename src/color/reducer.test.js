import test from 'ava'
import reducer from './reducer'
import * as actions from './actions'

// Inital state
const state0 = reducer(undefined, {type: ''})

/** @test {color.reducer} */
test('Color reducer - initial state', t => {
  t.is(state0, '#39cccc')
})

/**
 * @test {color.reducer}
 * @test {color.actions.previousColor}
 */
test('Color reducer - handle previous color', t => {
  const action = actions.previousColor()
  const state1 = reducer(state0, action)
  const state2 = reducer(state1, action)
  t.is(state1, '#ff851b')
  t.is(state2, '#ffdc00')
})

/**
 * @test {color.reducer}
 * @test {color.actions.nextColor}
 */
test('Color reducer - handle next color', t => {
  const action = actions.nextColor()
  const state1 = reducer(state0, action)
  const state2 = reducer(state1, action)
  t.is(state1, '#2ecc40')
  t.is(state2, '#ffdc00')
})

/**
 * @test {color.reducer}
 * @test {color.actions.autoNextColor}
 */
test('Color reducer - handle auto next color', t => {
  const action = actions.autoNextColor()
  const state1 = reducer(state0, action)
  const state2 = reducer(state1, action)
  t.is(state1, '#2ecc40')
  t.is(state2, '#ffdc00')
})
