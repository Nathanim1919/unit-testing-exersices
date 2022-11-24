const analyze = require('./analyzeArray');
const arr = analyze([1,2,3,4,0])
test('analyzArray',()=>{
    expect(arr.average()).toBe(2)
})

test('analyzArray',()=>{
    expect(arr.min()).toBe(0)
})
test('analyzArray',()=>{
    expect(arr.max()).toBe(4)
})
test('analyzArray',()=>{
    expect(arr.lengthOfArray()).toBe(5)
})