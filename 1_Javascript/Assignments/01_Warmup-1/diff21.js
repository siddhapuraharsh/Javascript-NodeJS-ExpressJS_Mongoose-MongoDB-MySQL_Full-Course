function diff21(n){
    if (n <= 21) {
        return 21 - n;
    } else {
        return (n - 21) * 2;
    }
}

console.log(diff21(19));
console.log(diff21(10));
console.log(diff21(21));
console.log(diff21(22));
console.log(diff21(25));
console.log(diff21(30));
console.log(diff21(0));
console.log(diff21(1));
console.log(diff21(2));
console.log(diff21(-1));
console.log(diff21(-2));
console.log(diff21(50));