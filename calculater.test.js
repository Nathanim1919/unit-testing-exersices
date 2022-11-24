const cal = require('./calculater');
test('calculate',()=>{
    expect(cal.add(2,3)).toBe(5)
})

test('calculate',()=>{
    expect(cal.subtract(2,3)).toBe(-1)
})
test('calculate',()=>{
    expect(cal.divide(4,2)).toBe(2)
})
test('calculate',()=>{
    expect(cal.multiply(4,2)).toBe(8)
})