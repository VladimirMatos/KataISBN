
const ISBNValidation = (isbn)=>{
    const digits =isbn.replace(/-/gi,'');
    

    
    /*if(digits == 13 ){
        return ('Valid 13 digit');

    }else if(digits == 10){
        return ('Valid 10 digit');
    }*/

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
        return 'Valid';
    } else{
        return 'Invalid';
    }
    
}

console.log(ISBNValidation('0-7167-0344-0'));


module.exports = ISBNValidation;