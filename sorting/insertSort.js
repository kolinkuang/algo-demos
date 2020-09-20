//插入排序
//时间复杂度：
//平均：O(n^2)
//最好：O(n)
//最坏：O(n^2)

// 具体算法：
// 1、将待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列；
// 2、取出下一个元素，在已经排序的元素序列中从后向前扫描；
// 3、如果该元素（已排序）大于新元素，将该元素移到下一位置；
// 4、重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
// 5、将新元素插入到该位置后；
// 6、重复步骤2~5。
function insertSort(list) {
    const length = list.length;
    let i, j;

    // 1、将待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列
    // 6、重复步骤2~5
    for (i = 0; i < length; i++) {
        // 2、取出下一个元素，在已经排序的元素序列中从后向前扫描；
        let current = list[i]; //待排序元素
        // 4、重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
        for (j = i - 1; j >= 0 && current < list[j]; j--) {
            // 3、如果该元素（已排序）大于新元素，将该元素移到下一位置
            //已排序数组元素右移一位；仅待排序元素从数组中丢失
            list[j + 1] = list[j];
        }
        // 5、将新元素插入到该位置后
        list[j + 1] = current;
    }

    return list;
}

let list = [2, 43, 54, 767, 23, 434, 7575, 23, 33, 1, 9];
let expected = [1, 2, 9, 23, 23, 33, 43, 54, 434, 767, 7575];

function assert(msg, actual, expected) {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(`${msg}; actual: ${actual}, expected: ${expected}`);
    }
}

assert('Result not expected', insertSort(list), expected);