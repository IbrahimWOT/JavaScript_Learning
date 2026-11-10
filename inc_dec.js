let a = 10
let b = 9

let m = ++a + b++ /// expected result : 20 
console.log(m)
console.log(b) // 10 

console.log("Decrement ")
let n = a-- - b-- /// expected result : 11 + 10 = 1
console.log(n)
console.log(a, b)
let k = --a - b-- /// expected result : 10 - 10 = 0
console.log(k)
