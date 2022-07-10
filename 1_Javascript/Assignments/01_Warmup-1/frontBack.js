function frontBack(str){
    if (str.length > 1) {
        return (
          str.charAt(str.length - 1) +
          str.substring(1, str.length - 1) +
          str.charAt(0)
        );
    } else {
        return str;
    }  
}

console.log(frontBack("code"));
console.log(frontBack("a"));
console.log(frontBack("ab"));
console.log(frontBack("abc"));
console.log(frontBack(""));
console.log(frontBack("Chocolate"));
console.log(frontBack("aavj"));
console.log(frontBack("hello"));