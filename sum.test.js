const sum = require('./sum')

// Running sample tests
test('properly adds two number', () => {
  expect(sum(1, 2)).toBe(3)
})
