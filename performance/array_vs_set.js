window.myArray = [];
window.mySet = new Set();
window.myObj = {};
const n = 10_000_000;

for (let i = 0; i < n; i++) {
    myArray.push(i);
    mySet.add(i);
    myObj[i] = i;
}

console.time('Array.prototype.includes');
window.myArray.includes(n - 1);
console.timeEnd('Array.prototype.includes');

console.time('Array.prototype.indexOf');
window.myArray.indexOf(n - 1);
console.timeEnd('Array.prototype.indexOf');

console.time('Set.prototype.has');
window.mySet.has(n - 1);
console.timeEnd('Set.prototype.has');

console.time('Object.prototype.hasOwnProperty');
window.myObj.hasOwnProperty(n - 1);
console.timeEnd('Object.prototype.hasOwnProperty');