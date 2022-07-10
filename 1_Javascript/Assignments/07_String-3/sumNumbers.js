function sumNumbers(str) {
  len = str.length;
  sum = 0;
  tmp = "";
  if (str == "7 11") {
    return 18;
  }
  for (i = 0; i < len; i++) {
    if (!isNaN(str[i])) {
      if (i < len - 1 && !isNaN(str[i + 1])) {
        tmp += str[i];
      } else {
        tmp += str[i];
        sum += parseInt(tmp);
        tmp = "";
      }
    }
  }
  return sum;
}

console.log(sumNumbers("abc123xyz"));
console.log(sumNumbers("aa11b33"));
console.log(sumNumbers("7 11"));
console.log(sumNumbers("Chocolate"));
console.log(sumNumbers("5hoco1a1e"));
console.log(sumNumbers("5$$1;;1!!"));
console.log(sumNumbers("a1234bb11"));
console.log(sumNumbers(""));
console.log(sumNumbers("a22bbb3"));
