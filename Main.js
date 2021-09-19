/*=> null -> throw ArgumentNullException
=>  "" -> {}
=>  024821858 -> {}
=> "0-7167-0344-0" -> Valid 10 digit ISBN 
=> "978-0-7167-0344-0" -> Valid 13 digit ISBN 
*/
const Validation10digits = (isbn10digits)=>{
    const digits =isbn10digits.replace(/-/gi,'');
    const numbers = Array.from(digits);
    numbers.reverse();
    var count = 1;
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
    
        const arrayposition = numbers[i]*count
        sum += arrayposition;
        count ++;
    }

    if(sum % 11 === 0 ){
        return 'Valid 10 digit ISBN';
    } else{
        return 'invalid ISBN insert';      
    }
}

const Validation13digits = (isbn13digits) =>{
    const digits =isbn13digits.replace(/-/gi,'');
    const numbers = Array.from(digits);

    const arrayposition = 
        numbers[0] * 1 + numbers [1] * 3 + numbers[2] * 1 + numbers [3] * 3 + numbers[4] * 1 + numbers [5] * 3 +
        numbers[6] * 1 + numbers [7] * 3 + numbers[8] * 1 + numbers [9] * 3 + numbers[10] * 1 + numbers [11] * 3 +
        numbers[12] * 1
     
    if(arrayposition % 10 === 0){
        return 'Valid 13 digit ISBN';
    }else{
        return 'invalid ISBN insert';
    }
}

function Validation(isbn) {
    if (isbn == null || !isbn){
        return ('ArgumentNullException');
    }if(isbn == " " || !isNaN(isbn)){
        return " ";
    }
    const digits =isbn.replace(/-/gi,'');
    const cantdigits = digits.length;
    if(cantdigits == 10){
        
        return Validation10digits(digits);
    }else if(cantdigits == 13){
        return Validation13digits(digits);
    }
}



module.exports = Validation;