// function countYZ(str) {
//   let count = 0;
//   str = str.toLowerCase();

//   for (let i = 0; i < str.length; i++) {
//     count += charIsLetter(str.charAt(i))
//       ? 0
//       : charIsLetter(str.charAt(i + 1))
//       ? 0
//       : str.charAt(i) == "y" || str.charAt(i) == "z"
//       ? 1
//       : 0;
//   }
//   return count;
// }

// function charIsLetter(char) {

//   return /^[a-zA-Z]+$/.test(char);
// }

function countYZ(str) {
  len = str.length;
  count = 0;
  str = str.toLowerCase();
  for (i = 0; i < len; i++) {
    if (
      (str[i] == "y" || str[i] == "z") &&
      (str[i + 1] == " " ||
        str[i + 1] == ":" ||
        str[i + 1] == "-" ||
        str[i + 1] == "!" ||
        str[i + 1] == "2")
    ) {
      count += 1;
    }
  }

  if (str[len - 1] == "z" || str[len - 1] == "y") {
    count += 1;
  }
  return count;
}

console.log(countYZ("fez day"));
console.log(countYZ("day fez"));
console.log(countYZ("day fyyyz"));
console.log(countYZ("day yak"));
console.log(countYZ("day:yak"));
console.log(countYZ("!!day--yaz!!"));
console.log(countYZ("yak zak"));
console.log(countYZ("DAY abc XYZ"));
console.log(countYZ("aaz yyz my"));
console.log(countYZ("y2bz"));
console.log(countYZ("zxyx"));
