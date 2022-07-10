function mapAB3(someMap) {
  if (someMap.has("a") && !someMap.has("b")) {
    someMap.set("b", someMap.get("a"));
  }
  if (someMap.has("b") && !someMap.has("a")) {
    someMap.set("a", someMap.get("b"));
  }
  return someMap;
}

console.log(mapAB3({ a: "aaa", c: "cake" }));
console.log(mapAB3({ b: "bbb", c: "cake" }));
console.log(mapAB3({ a: "aaa", b: "bbb", c: "cake" }));
console.log(mapAB3({ ccc: "ccc" }));
console.log(mapAB3({ c: "a", d: "b" }));
console.log(mapAB3({}));
console.log(mapAB3({ a: "" }));
console.log(mapAB3({ b: "" }));
console.log(mapAB3({ a: "", b: "" }));
console.log(mapAB3({ aa: "aa", a: "apple", z: "zzz" }));
