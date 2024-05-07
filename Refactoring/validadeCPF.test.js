const { validate } = require('./validateCPF_old')

test('Deve Validar o CPF 155.878.327-08', () =>{
    const cpfIsValid = validate('155.878.327-08')
    expect(cpfIsValid).toBe(true)
})

test('Deve Validar o CPF 603.403.310-11', () =>{
    const cpfIsValid = validate('603.403.310-11') 
    expect(cpfIsValid).toBe(true)
})

test('Deve Validar o CPF 905.879.290-06', () =>{
    const cpfIsValid = validate('905.879.290-06') 
    expect(cpfIsValid).toBe(true)
})

test('Não deve Validar o CPF 111.222.333-44 (numero aleatorio)', () =>{
    const cpfIsValid = validate('111.222.333-44') 
    expect(cpfIsValid).toBe(false)
})

test('Não deve Validar o CPF 9664029602 (digitos abaixo do limite)', () =>{
    const cpfIsValid = validate('9664029602') 
    expect(cpfIsValid).toBe(false)
})

test('Não deve Validar o CPF 155.878.327-088 (digitos acima do limite)', () =>{
    const cpfIsValid = validate('155.878.327-088') 
    expect(cpfIsValid).toBe(false)
})

test('Não deve Validar o CPF 155!878!327@08 (caracteres invalidos)', () =>{
    const cpfIsValid = validate('155!878!327@08') 
    expect(cpfIsValid).toBe(false)
})

test('Não deve Validar o CPF null', () =>{
    const cpfIsValid = validate(null) 
    expect(cpfIsValid).toBe(false)
})

test('Não deve Validar o CPF undefined', () =>{
    const cpfIsValid = validate(undefined) 
    expect(cpfIsValid).toBe(false)
})

test('Não deve Validar o CPF 111.111.111-11', () =>{
    const cpfIsValid = validate('111.111.111-11') 
    expect(cpfIsValid).toBe(false)
})

test('Não deve Validar o CPF 123 (number)', () =>{
    const cpfIsValid = validate(123) 
    expect(cpfIsValid).toBe(false)
})

test('Não deve Validar o CPF aaaaa (letras)', () =>{
    const cpfIsValid = validate('aaaaa') 
    expect(cpfIsValid).toBe(false)
})