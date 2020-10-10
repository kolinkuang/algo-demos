let array = [],
    set = new Set(),
    n = 10_000_000;

for (let i = 0; i < n; i++) {
    array.push(i);
    set.add(i);
}

console.time('Array.prototype.includes');
array.includes(n - 1);
console.timeEnd('Array.prototype.includes');

console.time('Array.prototype.indexOf');
array.indexOf(n - 1);
console.timeEnd('Array.prototype.indexOf');

console.time('Set.prototype.has');
set.has(n - 1);
console.timeEnd('Set.prototype.has');