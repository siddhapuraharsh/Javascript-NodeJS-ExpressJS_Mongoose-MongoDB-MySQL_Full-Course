function notReplace(str) {
  res = "";
  let i = 1;
  while (i < str.length) {
    str.startsWith("is")
      ? (res += "is not")
      : str.substr(i, 2) == "is"
      ? !charIsNotLetter(str.charAt(i - 1)) &&
        !charIsNotLetter(str.charAt(i + 2))
        ? i++
        : (res += str.charAt(i - 1) + "is not" + str.charAt(i + 2))
      : str.charAt(i);
    i++;
  }
  return str.replace(" is ", " is not ");
}

function charIsNotLetter(char) {
  return char == "" || char == "-" || char == " ";
}
