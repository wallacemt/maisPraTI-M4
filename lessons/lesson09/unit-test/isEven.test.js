const isEven = require('./isEven')

test('Deve retorna "true" se o numero for par', () => {
    expect(isEven(2)).toBe(true)
    expect(isEven(4)).toBe(true)
    expect(isEven(6)).toBe(true)
})