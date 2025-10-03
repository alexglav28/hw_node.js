import {
  sumEvenNumbers,
  isEmptyString,
  areStringsEqual,
  getLastElement,
  makeTriple
} from "./homework19.js";

//Задание 1
console.log("Z1 sumEvenNumbers:", sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12

//Задание 2
console.log("Z2 isEmptyString(''):", isEmptyString(""));    // true
console.log("Z2 isEmptyString('abc'):", isEmptyString("abc")); // false

//Задание 3
console.log("Z3 areStringsEqual('ts', 'ts'):", areStringsEqual("ts", "ts")); // true
console.log("Z3 areStringsEqual('ts', 'js'):", areStringsEqual("ts", "js")); // false

//Задание 4
console.log("Z4 getLastElement([10,20,30]):", getLastElement([10, 20, 30])); // 30
console.log("Z4 getLastElement(['a','b','c']):", getLastElement(["a", "b", "c"])); // "c"

//Задание 5
console.log("Z5 makeTriple:", makeTriple("TS", "JS", "Node")); // ["TS", "JS", "Node"]
console.log("Z5 makeTriple:", makeTriple(1, 2, 3)); // [1,2,3]
