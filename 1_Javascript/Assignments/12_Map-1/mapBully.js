function mapBully(someMap) {
  if (someMap.has("a")) {
    someMap.set("b", someMap.get("a"));
    someMap.set("a", "");
  }
  return someMap;
}

console.log(mapBully({ a: "candy", b: "dirt" }));
console.log(mapBully({ a: "candy" }));
console.log(mapBully({ a: "candy", b: "carrot", c: "meh" }));
console.log(mapBully({ b: "carrot" }));
console.log(mapBully({ c: "meh" }));
console.log(mapBully({ a: "sparkle", c: "meh" }));
