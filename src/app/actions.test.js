import {find} from 'globule'
import {resolve} from 'path'

describe('Actions', () => {
  const files = find(resolve(__dirname, '../*/actions.js'))
  const actionsTable = files.map(require)

  it('should be unique names', () => {
    const names = actionsTable
      .map(Object.keys)
      .reduce((array, keys) => [...array, ...keys], [])
    expect(names).toEqual([...new Set(names)])
  })

  it('should be unique action types', () => {
    const types = actionsTable
      .map(actions => Object.keys(actions).map(x => actions[x]))
      .reduce((array, actions) => [...array, ...actions], [])
      .map(String)
    expect(types).toEqual([...new Set(types)])
  })
})
