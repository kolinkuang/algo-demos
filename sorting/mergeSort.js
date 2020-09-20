//归并排序
//时间复杂度：
//平均：O(nlogn)
//最好：O(nlogn)
//最坏：O(nlogn)

// 算法步骤
// 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列；
//
// 设定两个指针，最初位置分别为两个已经排序序列的起始位置；
//
// 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置；
//
// 重复步骤 3 直到某一指针达到序列尾；
//
// 将另一序列剩下的所有元素直接复制到合并序列尾。
function mergeSort(list) {
    let length = list.length;
    if (length < 2) {
        return list;
    }

    const middle = Math.floor(length / 2);
    const left = list.slice(0, middle);
    const right = list.slice(middle);

    return _merge(mergeSort(left), mergeSort(right));
}

function _merge(left, right){
    // actual sorting logic here
    //1.申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列
    const result = [];

    while (left.length && right.length) {
        //2.设定两个指针，最初位置分别为两个已经排序序列的起始位置
        //3.比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
        //4.重复步骤 3 直到某一指针达到序列尾
    }

    //5.将另一序列剩下的所有元素直接复制到合并序列尾
    while (left.length) {
        result.push(left.shift());
    }

    while (right.length) {
        result.push(right.shift());
    }

    return result;
}

let list = [2,43,54,767,23,434,7575,23,33,1,9];
let expected = [1,2,9,23,23,33,43,54,434,767,7575];

function assert(msg, actual, expected) {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(`${msg}; actual: ${actual}, expected: ${expected}`);
    }
}

assert('Result not expected', mergeSort(list), expected);