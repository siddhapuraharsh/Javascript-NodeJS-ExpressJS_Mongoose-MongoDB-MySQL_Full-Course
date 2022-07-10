function mapAB2(someMap) {
  let temp1 = someMap.get("a");
  let temp2 = someMap.get("b");
  if (temp1 != null && temp2 != null && temp1 == temp2) {
    someMap.delete("a");
    someMap.delete("b");
  }
  return someMap;
}

console.log(mapAB2({ a: "aaa", b: "aaa", c: "cake" }));
console.log(mapAB2({ a: "aaa", b: "bbb" }));
console.log(mapAB2({ a: "aaa", b: "bbb", c: "aaa" }));
console.log(mapAB2({ a: "aaa" }));
console.log(mapAB2({ b: "bbb" }));
console.log(mapAB2({ a: "", b: "", c: "ccc" }));
console.log(mapAB2({}));
console.log(mapAB2({ a: "a", b: "b", z: "zebra" }));
