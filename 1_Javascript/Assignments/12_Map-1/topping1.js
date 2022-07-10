function topping1(someMap) {
  if (someMap.has("ice cream")) {
    someMap.set("ice cream", "cherry");
  }
  someMap.set("bread", "butter");
  return someMap;
}

console.log(topping1({ "ice cream": "peanuts" }));
console.log(topping1({}));
console.log(topping1({ pancake: "syrup" }));
console.log(topping1({ bread: "dirt", "ice cream": "strawberries" }));
console.log(
  topping1({ bread: "jam", "ice cream": "strawberries", salad: "oil" })
);
console.log(topping1({ bread: "nutella" }));
