function mixStart(str){
  return str.substr(1,2) == "ix";
}

console.log(mixStart("mix snacks"));
console.log(mixStart("pix snacks"));
console.log(mixStart("piz snacks"));
console.log(mixStart("nix"));
console.log(mixStart("ni"));
console.log(mixStart("n"));