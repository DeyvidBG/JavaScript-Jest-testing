const subtract = require('./subtract')

// Running sample tests
test('properly subtracting two number', () => {
  expect(subtract(1, 2)).toBe(-1)
})
