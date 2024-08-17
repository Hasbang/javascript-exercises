const reverseString = function(str) {
    // split the string into array of characters 
   let splitString = str.split("");

   // revserse the array of characters 
   let reverseArray = splitString.reverse();

   // join the reverse array of characters 
   let reversedString = reverseArray.join("");

   return reversedString;

};
let originalString = "Hello there";
let reversed = reverseString(originalString);
console.log(reversed);


// Do not edit below this line
module.exports = reverseString;
