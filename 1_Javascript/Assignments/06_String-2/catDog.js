function catDog(str) {
  let cat = 0,
    dog = 0;
  for (let i = 0; i < str.length; i++) {
    let temp = str.substr(i, 3);
    if (temp == "cat") cat++;
    else if (temp == "dog") dog++;
  }
  return cat == dog;
}

console.log(catDog("catdog"));
console.log(catDog("catcat"));
console.log(catDog("1cat1cadodog"));
console.log(catDog("catxxdogxxxdog"));
console.log(catDog("catxdogxdogxcat"));
console.log(catDog("catxdogxdogxca"));
console.log(catDog("dogdogcat"));
console.log(catDog("dogogcat"));
console.log(catDog("dog"));
console.log(catDog("cat"));
console.log(catDog("ca"));
console.log(catDog("c"));
console.log(catDog(""));
