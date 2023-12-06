//Set, Map (컬렉션)
let set = new Set("aabbccddee");
console.log(set.size);

set.add("eeff");
set.add("hhjj");

console.log(set.has("a"));
console.log(set.has("c"));
console.log(set.size);

console.log(...set);
set.delete("a");
console.log(...set);

set.clear();
console.log(set.size);

let a= 6;
let b="6";

console.log(a==b); //true
console.log(a===b); //false