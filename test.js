const { sum , fromEuroToDollar , fromYenToPound , fromDollarToYen } = require('./app.js');

test('adds 14 + 9 to equal 23',() => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", ()=>{
        expect(fromEuroToDollar(3.5)).toBe(4.2); 
});

test("twelve dollars should be 1279 yens", ()=>{
    expect(fromDollarToYen(12)).toBe(1279); 
});

test("1279 yens should be 0.8 pounds", ()=>{
    expect(fromYenToPound(1279)).toBe(8); 
});