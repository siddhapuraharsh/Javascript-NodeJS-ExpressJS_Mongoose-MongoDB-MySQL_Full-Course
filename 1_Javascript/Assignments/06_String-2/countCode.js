function countCode(str) {
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.substr(i, 2) == "co" && str.charAt(i + 3) == "e") res++;
  }
  return res;
}

console.log(countCode('aaacodebbb') );
console.log(countCode('codexxcode') );
console.log(countCode('cozexxcope') );
console.log(countCode('cozfxxcope') );
console.log(countCode('xxcozeyycop') );
console.log(countCode('cozcop') );
console.log(countCode('abcxyz') );
console.log(countCode('code') );
console.log(countCode('ode') );
console.log(countCode('c') );
console.log(countCode('') );
console.log(countCode('AAcodeBBcoleCCccoreDD') );
console.log(countCode('AAcodeBBcoleCCccorfDD') );
console.log(countCode('coAcodeBcoleccoreDD') );