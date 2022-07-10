function icyHot(temp1, temp2){
  return (temp1 < 0 && temp2 > 100) || (temp1 > 100 && temp2 < 0);
}

console.log(icyHot(120, -1));
console.log(icyHot(-1, 120));
console.log(icyHot(2, 120));
console.log(icyHot(-1, 100));
console.log(icyHot(-2, 120));
console.log(icyHot(120, 120));