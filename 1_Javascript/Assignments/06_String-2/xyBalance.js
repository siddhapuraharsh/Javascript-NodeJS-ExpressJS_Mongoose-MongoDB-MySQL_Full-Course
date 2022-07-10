function xyBalance(str) {
  return (
    str.lastIndexOf("x") < str.lastIndexOf("y") || str.lastIndexOf("x") == -1
  );
}

console.log(xyBalance("aaxbby"));
console.log(xyBalance("aaxbb"));
console.log(xyBalance("yaaxbb"));
console.log(xyBalance("yaaxbby"));
console.log(xyBalance("xaxxbby"));
console.log(xyBalance("xaxxbbyx"));
console.log(xyBalance("xxbxy"));
console.log(xyBalance("xxbx"));
console.log(xyBalance("bbb"));
console.log(xyBalance("bxbb"));
console.log(xyBalance("bxyb"));
console.log(xyBalance("xy"));
console.log(xyBalance("y"));
console.log(xyBalance("x"));
console.log(xyBalance(""));
console.log(xyBalance("yxyxyxyx"));
console.log(xyBalance("yxyxyxyxy"));
console.log(xyBalance("12xabxxydxyxyzz"));
