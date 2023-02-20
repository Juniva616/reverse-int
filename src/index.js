function reverse(num) {
    let number = num * Math.sign(num);
    let digitsArray = [];  
    while (number  > 0 ) {
      digitsArray.push(number % 10);
      number = Math.floor(number / 10);
    }
    const x = Number(digitsArray.join(""));
    return x;  
}

 

module.exports = reverse; 
  
 


