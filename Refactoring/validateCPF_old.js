function validate(cpf) {
    if (!exist(cpf) || !isString(cpf)) return false
    const cpfCleaned = clean(cpf)
	if (!isValidLength(cpfCleaned)) return false
    if (isAllSame(cpfCleaned)) return false 
    const digit1= calculateDigit(cpfCleaned, 10)
    const digit2= calculateDigit(cpfCleaned, 11)
    let cpfCleanedDigits = extractDigits(cpfCleaned);  
    let calculatedDigits = `${digit1}${digit2}` 
    return cpfCleanedDigits == calculatedDigits;	
}

function exist(cpf){
    return !cpf ? false : true;
}
 
function isString(cpf){
    return typeof cpf !== "string" ? false : true;
}

function clean(cpf){
    return cpf.replace(/[\.\-\,]*/g, "");
}

function isValidLength(cpf){
    return cpf.length === 11 ? true : false;
}

function isAllSame(cpf){
    return cpf.split("").every(c => c === cpf[0]) ? true : false;
}

function calculateDigit(cpf, multiplier){
    let total = 0
    for (let i = 0; i < cpf.length; i++) {
        const digit = +cpf[i];
        if(multiplier > 1){
            total += digit * multiplier--;
        }
    }
    const rest = total % 11;
    return rest < 2 ? 0 : 11 - rest;
}

function extractDigits(cpf){
    return cpf.substring(cpf.length-2, cpf.length);
}

module.exports = {validate}
//console.log(validate("111.111.111-11"));
// console.log(validate("123.456.789-99"));
// console.log(validate("935.411.347-80"));
console.log(validate("128.458.741-11"));
