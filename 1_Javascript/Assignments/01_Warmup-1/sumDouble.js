function sumDouble(a, b){
    if (a==b) {
        return (a + b) * 2;
    } else {
        return a + b;
    }
}

console.log(sumDouble(1, 2));
console.log(sumDouble(3, 2));
console.log(sumDouble(2, 2));
console.log(sumDouble(-1, 0));
console.log(sumDouble(3, 3));
console.log(sumDouble(0, 0));
console.log(sumDouble(0, 1));
console.log(sumDouble(3, 4));