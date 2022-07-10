function topping2(someMap) {
  if (someMap.has("ice cream")) {
    someMap.set("yogurt", someMap.get("ice cream"));
  }
  if (someMap.has("spinach")) {
    someMap.set("spinach", "nuts");
  }
  return someMap;
}

console.log(topping2({ "ice cream": "cherry" }));
console.log(topping2({ spinach: "dirt", "ice cream": "cherry" }));
console.log(topping2({ yogurt: "salt" }));
console.log(topping2({ yogurt: "salt", bread: "butter" }));
console.log(topping2({}));
console.log(topping2({ "ice cream": "air", salad: "oil" }));
