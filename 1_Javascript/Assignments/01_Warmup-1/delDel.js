function delDel(str){
    if (str.indexOf("del") == 1) {
        return str.replace("del", "");
    } else {
        return str;
    }
}

console.log(delDel("adelbc"));
console.log(delDel("adelHello"));
console.log(delDel("abcdel"));
console.log(delDel("add"));
console.log(delDel("ad"));
console.log(delDel("a"));
console.log(delDel(""));
console.log(delDel("del"));
console.log(delDel("adel"));
console.log(delDel("aadelbb"));