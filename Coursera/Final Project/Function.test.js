const total = require('./Function');

test('check value', ()=>{
    expect(total.checkValue(2)).toBe(2)
})

test('check value', ()=>{
    expect(total.checkValue(2)).not.toBe(3)
})

test('check sum', ()=>{
    expect(total.checkSum(1,2)).toBe(3)
})

test('check not null', ()=>{
    expect(total.checkSum(1,2)).not.toBeNull()
})

test('check null', ()=>{
    expect(total.checkNull()).toBeNull()
})

test('check obj', ()=>{
    expect(total.getObj()).toStrictEqual({
        firstName:'Prashant',
        lastName:'Jha'
    })
})

test('check reverse string', ()=>{
    expect(total.revStr('jha')).toBe('ahj')
})

test('test array', ()=>{
    const num = [1, 2, 4];
    expect(num).toContain(4)
})

test('less than', ()=>{
    const a = 100;
    const b = 200;
    expect(a+b).toBeLessThan(a+b+1)
})

test('greater than', ()=>{
    const a = 100;
    const b = 200;
    expect(a+b).toBeGreaterThan(a+b-1)
})