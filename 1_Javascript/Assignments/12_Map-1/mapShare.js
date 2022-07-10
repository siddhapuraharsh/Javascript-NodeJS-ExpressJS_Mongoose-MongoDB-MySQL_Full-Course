function mapShare(someMap) {
  someMap.delete("c");
  if (someMap.has("a")) {
    someMap.set("b", someMap.get("a"));
  }
  return someMap;
}

console.log(mapShare({ a: "aaa", b: "bbb", c: "ccc" }));
console.log(mapShare({ b: "xyz", c: "ccc" }));
console.log(mapShare({ a: "aaa", c: "meh", d: "hi" }));
console.log(mapShare({ a: "xyz", b: "1234", c: "yo", z: "zzz" }));
console.log(
  mapShare({ a: "xyz", b: "1234", c: "yo", d: "ddd", e: "everything" })
);
