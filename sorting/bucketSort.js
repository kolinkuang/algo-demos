//桶排序
//时间复杂度：
//平均：O(n+k)
//最好：O(n+k)
//最坏：O(n^2)

function bucketSort(list) {
    const result = [];

    const temp = Array(Math.max(...list) + 1);//原数组最大元素+1
    for (let num of list) {
        if (temp[num] === undefined) {
            temp[num] = 0;
        }
        temp[num]++;
    }

    const length = temp.length;
    for (let i = 0; i < length; i++) {
        const count = temp[i];
        for (let j = 0; j < count; j++) {
            result.push(i);
        }
    }

    return result;
}

let list = [2, 43, 54, 72, 33, 101, 33, 23, 33, 1, 1];
let expected = [1,1,2,23,33,33,33,43,54,72,101];

function assert(msg, actual, expected) {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(`${msg}; actual: ${actual}, expected: ${expected}`);
    }
}

assert('Result not expected', bucketSort(list), expected);