//快速排序
//时间复杂度：
//平均：O(nlogn)
//最好：O(nlogn)
//最坏：O(n^2)
function quickSort(list) {
    if (!list.length) {
        return list;
    }

    const left = [], right = [];
    let midValue = list.shift();
    for (let num of list) {
        if (num < midValue) {
            left.push(num);
        } else {
            right.push(num);
        }
    }

    return [...quickSort(left), midValue, ...quickSort(right)];
}

let list = [2,43,54,767,23,434,7575,23,33,1,9];
let expected = [1,2,9,23,23,33,43,54,434,767,7575];

function assert(msg, actual, expected) {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(`${msg}; actual: ${actual}, expected: ${expected}`);
    }
}

assert('Result not expected', quickSort(list), expected);