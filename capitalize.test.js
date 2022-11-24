const sum = require('./capitalize');

test('add 1 + 2 to equal 3',()=>{
    expect(sum("nathan")).toBe('Nathan');
});

