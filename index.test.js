import * as R from 'ramda'

console.log(R.add(1)(1))

it('works', () => {
  expect(R.add(1)(1)).toBe(2)
})

it("doesn't work", () => {
  expect(1 + 1).toBe(2)
})
