import test from 'ava'
import path from 'path'
import globule from 'globule'

let actionsTable = []

test.before(() => {
  actionsTable = globule
    .find(path.resolve(__dirname, '../*/actions.js'))
    .map(require)
})

/** @test {app.actions} */
test('Unique action keys', t => {
  const keys = actionsTable
    .map(Object.keys)
    .reduce((array, keys) => array.concat(keys), [])
  keys.forEach(key => t.truthy(key))
  t.deepEqual(keys, Array.from(new Set(keys)))
})

/** @test {app.actions} */
test('Unique action types', t => {
  const types = actionsTable
    .map(Object.values)
    .reduce((array, actions) => array.concat(actions), [])
    .map(({type}) => type)
  types.forEach(type => t.truthy(type))
  t.deepEqual(types, Array.from(new Set(types)))
})
