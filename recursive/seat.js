const n = 10465;

const cache = {};

function seat1(n) {
    if (n === 1) {
        return 1;
    }
    if (n >= 10466) {
        throw new RangeError(`${n} is out of scope`);
    }
    if (!cache[n]) {
        cache[n] = seat1(n - 1) + 1;
    }
    return cache[n];
}

console.time(seat1.name);
console.log(seat1(n));
console.timeEnd(seat1.name);


function seat2(n) {
    if (n === 1) {
        return 1;
    }
    if (n >= 10466) {
        throw new RangeError(`${n} is out of scope`);
    }
    return seat2(n - 1) + 1;
}

console.time(seat2.name);
console.log(seat2(n));
console.timeEnd(seat2.name);

//这道题没有重复计算，因此缓存结果只会增加时间复杂度

function seat3(n) {
    if (n === 1) {
        return 1;
    }
    if (n >= 10466) {
        throw new RangeError(`${n} is out of scope`);
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result++;
    }
    return result;
}

console.time(seat3.name);
console.log(seat3(n));
console.timeEnd(seat3.name);