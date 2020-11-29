/**
 * 思考题1：
 * 如何在 O(n) 的时间复杂度内查找一个无序数组中的第 K 大元素？
 * 例如，4， 2， 5， 12， 3 这样一组数据，第 3 大元素就是 4。
 * */
function find(list, largestK) {
    return _find(list, 0, list.length - 1, largestK);
}

function _find(list, start, end, k) {
    const pivotIndex = _partition(list, start, end);

    if (k > pivotIndex + 1) {
        return _find(list, pivotIndex + 1, end);
    } else if (k < pivotIndex + 1) {
        return _find(list, start, pivotIndex - 1);
    } else {
        return list[pivotIndex];
    }
}

function _partition(list, start, end) {
    let pivot = list[end];
    let slow = start;

    for (let fast = slow; fast <= end - 1; fast++) {
        if (list[fast] < pivot) {
            [list[slow], list[fast]] = [list[fast], list[slow]];
            slow++;
        }
    }

    [list[end], list[slow]] = [list[slow], list[end]];

    return slow;
}

function assert(msg, actual, expected) {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(`${msg}; actual: ${actual}, expected: ${expected}`);
    } else {
        console.log('Test result as expected!');
    }
}

assert('Result not expected', find([4, 2, 5, 12, 3], 3), 4);

// 时间复杂度：O(n)
// 空间复杂度：O(1)