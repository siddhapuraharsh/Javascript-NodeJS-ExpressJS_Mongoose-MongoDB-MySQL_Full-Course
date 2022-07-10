function changeXY(str) {
  let ch;
  if (str.length == 0) return str;
  ch = str.charAt(0);
	if (ch == "x") return "y" + changeXY(str.substring(1));
	return ch + changeXY(str.substring(1));
	}

console.log(changeXY("codex"));
console.log(changeXY("xxhixx"));
console.log(changeXY("xhixhix"));
console.log(changeXY("hiy"));
console.log(changeXY("h"));
console.log(changeXY("x"));
console.log(changeXY(""));
console.log(changeXY("xxx"));
console.log(changeXY("yyhxyi"));
console.log(changeXY("hihi"));
