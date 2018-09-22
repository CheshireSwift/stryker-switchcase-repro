/* global describe it expect */
const { switchy } = require('./switchy')

describe('switchy', () => {
  it('returns A or B for A or B', () => {
    expect(switchy('A')).toBe('A or B')
    expect(switchy('B')).toBe('A or B')
  })
  it('returns C for C', () => {
    expect(switchy('C')).toBe('C')
  })
  it('returns other for other', () => {
    expect(switchy('something')).toBe('other')
  })
})
