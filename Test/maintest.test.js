test('Kind of ISBN if ISBN have 13 digits',()=>{
    expect(ISBNValidation('0-7167-0344-0')).toBe('Valid')
   
})

test('Kind of ISBN if ISBN have 10 digits',()=>{
   
    expect(ISBNValidation('0-7167-0344-0')).toBe('Valid 10 digit')
})

test('Test only string',()=>{
   
    expect(ISBNValidation(0-7167-0344-0)).toBe('Not valid')
})

test('Test sum numbers',()=>{
   
    expect(ISBNValidation("0-7167-0344-0")).toBe(187)
})