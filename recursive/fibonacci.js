const n = 40;

const cache = {};

function fib1(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    if (n >= 1476) {
        throw new RangeError(`${n} is out of scope`);
    }
    if (!cache[n]) {
        cache[n] = fib1(n - 1) + fib1(n - 2);
    }
    return cache[n];
}

console.time(fib1.name);
console.log(fib1(n));
console.timeEnd(fib1.name);


function fib2(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    if (n >= 1476) {
        throw new RangeError(`${n} is out of scope`);
    }
    return fib2(n - 1) + fib2(n - 2);
}

console.time(fib2.name);
console.log(fib2(n));
console.timeEnd(fib2.name);


function fib3(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    if (n >= 1476) {
        throw new RangeError(`${n} is out of scope`);
    }

    let current = 2;
    let previous = 1;
    for (let i = 3; i <= n; i++) {
        [previous, current] = [current, current + previous];
    }

    return current;
}

console.time(fib3.name);
console.log(fib3(n));
console.timeEnd(fib3.name);