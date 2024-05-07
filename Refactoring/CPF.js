function validate(str) {
    if (str !== null){
        if (str !== undefined){
            str=str
                    .replace('.','')
                    .replace('.','')
                    .replace('-','')
                    .replace(" ","");
            if (str.length === 11) {
                if (!str.split().every(c => c === str[0])){
                    let d1 = 0;
                    let d2 = 0;
                    let sumD1 = 0;
                    let sumD2 = 0;
                    let resto1 = 0;
                    let resto2 = 0;
                    for (let i = str.length; i > 1; i) {
                        sumD1 = sumD1 + (str[i] * (10 - i));
                        sumD2 = sumD2 + (str[i] * (11 - i));
                        // console.log(str[i])
                    }
                    // console.log(sumD2)
                        resto1 = sumD1 % 11
                        resto2 = (sumD2 + (d1 * 2)) % 11
                        if (resto1 < 2){
                            d1 = 0
                        }else if (resto1 >= 2){
                            d1 = 11 - resto1
                        }
                            if (resto2 < 2) {
                                d2 = 0
                            } else if (resto2 >= 2){
                                d2 = 11 - resto2
                            }
                        
                        let nDigVerific = str.substring(str.length-2, str.length);  
                        nDigResult = "" + d1 + "" + d2; 
                        console.log(nDigVerific)
                        console.log(nDigResult) 
                        return nDigVerific == nDigResult;

                }else return false;
            }else return false;
        }else return false;
    } else return false;
}

console.log(validate("155.878.327-08"))