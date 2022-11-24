const reverse = require('./reverseString');

test('reverse astring',()=>{
    expect(reverse('nathan')).toBe('nahtan');
})