function in3050(a, b){
  return (
    (a >= 30 && a <= 40 && b >= 30 && b <= 40) ||
    (a >= 40 && a <= 50 && b >= 40 && b <= 50)
  );
}

console.log(in3050(30, 31));
console.log(in3050(30, 41));
console.log(in3050(40, 50));
console.log(in3050(40, 51));
console.log(in3050(39, 50));
console.log(in3050(50, 39));
console.log(in3050(40, 39));
console.log(in3050(49, 48));
console.log(in3050(50, 40));
console.log(in3050(50, 51));
console.log(in3050(35, 36));
console.log(in3050(35, 45));