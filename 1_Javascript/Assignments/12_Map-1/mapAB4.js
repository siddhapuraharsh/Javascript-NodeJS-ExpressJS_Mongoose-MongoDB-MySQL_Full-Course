function mapAB4(someMap) {
  if (someMap.has("a") && someMap.has("b")) {
    if (someMap.get("a").length == someMap.get("b").length) {
      someMap.set("a", "");
      someMap.set("b", "");
    } else if (someMap.get("a").length > someMap.get("b").length) {
      someMap.set("c", someMap.get("a"));
    } else {
      someMap.set("c", someMap.get("b"));
    }
  }
  return someMap;
}

console.log(mapAB4({ a: "aaa", b: "bb", c: "cake" }));
console.log(mapAB4({ a: "aa", b: "bbb", c: "cake" }));
console.log(mapAB4({ a: "aa", b: "bbb" }));
console.log(mapAB4({ a: "aaa" }));
console.log(mapAB4({ b: "bbb" }));
console.log(mapAB4({ a: "aaa", b: "bbb", c: "cake" }));
console.log(mapAB4({ a: "a", b: "b", c: "cake" }));
console.log(mapAB4({ a: "", b: "b", c: "cake" }));
console.log(mapAB4({ a: "a", b: "", c: "cake" }));
console.log(mapAB4({ c: "cat", d: "dog" }));
console.log(mapAB4({ ccc: "ccc" }));
console.log(mapAB4({ c: "a", d: "b" }));
console.log(mapAB4({}));
console.log(mapAB4({ a: "", z: "z" }));
console.log(mapAB4({ b: "", z: "z" }));
