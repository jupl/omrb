import path from 'path'
import globule from 'globule'

describe('Actions', () => {
  const actionsTable = globule
    .find(path.resolve(__dirname, '../*/actions.js'))
    .map(require)

  it('should be unique names', () => {
    const names = actionsTable
      .map(Object.keys)
      .reduce((array, names) => [...array, ...names])
    expect(names).toEqual([...new Set(names)])
  })

  it('should be unique action types', () => {
    const types = actionsTable
      .map(Object.values)
      .reduce((array, actions) => [...array, ...actions], [])
      .map(String)
    expect(types).toEqual([...new Set(types)])
  })
})
