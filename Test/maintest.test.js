const Validation = require("../Main")

test('Validation null input',()=>{
    expect(Validation(null)).toBe('ArgumentNullException');
})


test('Validation if input is empty',()=>{
    expect(Validation(" ")).toBe(' ');
})

test('Validation if input is a int',()=>{
    expect(Validation(5646546454)).toBe(' ');
})


test('Validation if input is a 10 digits ISBN',()=>{
    expect(Validation('0-7167-0344-0')).toBe('Valid 10 digit ISBN');
})

test('Validation if input is a 13 digits ISBN',()=>{
    expect(Validation('978-0-7167-0344-0')).toBe('Valid 13 digit ISBN');
})