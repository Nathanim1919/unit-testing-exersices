const caesarC  = require('./caesarCipher')

test('encript text',()=>{
    expect(caesarC('nathan',1)).toBe('obuibo')
})