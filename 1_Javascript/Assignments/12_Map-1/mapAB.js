function mapAB(someMap) {
  if (someMap.has("a") && someMap.has("b")) {
    someMap.set("ab", someMap.get("a") + someMap.get("b"));
  }
  return someMap;
}

console.log(mapAB({ a: "Hi", b: "There" }));
console.log(mapAB({ a: "Hi" }));
console.log(mapAB({ b: "There" }));
console.log(mapAB({ c: "meh" }));
console.log(mapAB({ a: "aaa", ab: "nope", b: "bbb", c: "ccc" }));
console.log(mapAB({ ab: "nope", b: "bbb", c: "ccc" }));
