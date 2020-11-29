function quickSort(list) {
    _quickSort(list, 0, list.length - 1);
    return list;
}

function _quickSort(list, start, end) {
    if (start >= end) {
        return;
    }

    const pivotIndex = _partition(list, start, end); // 获取分区点（列表中的最后一个元素）
    _quickSort(list, start, pivotIndex - 1);
    _quickSort(list, pivotIndex + 1, end);

    console.log(list);
}

/** 以 pivot 为分区点，将 list 分为两部分 */
function _partition(list, start, end) {
    let pivot = list[end];
    let slow = start;
    for (let fast = slow; fast <= end - 1; fast++) {
        console.log(list, 'slow:', slow, 'fast:', fast);
        if (list[fast] < pivot) {
            // 类似选择排序，先将小于 pivot 的所有元素扔到数组最前位置
            [list[slow], list[fast]] = [list[fast], list[slow]];
            slow++;
        }
    }

    // 将 pivot 放入左侧列表末端，所以 pivot 右端都是比它大的元素
    [list[slow], list[end]] = [list[end], list[slow]];

    console.log(list, 'slow:', slow);

    return slow;
}

console.log(quickSort([9, 11, 50, 3, 12, 8]));
// console.log(quickSort([4, 5, 6, 1, 3, 2]));
// console.log(quickSort([6, 5, 4, 3, 2, 1]));
// console.log(quickSort([3, 5, 4, 1, 2, 6]));

// 最好时间复杂度：O(nlogn)
// 最差时间复杂度：O(n^2)
// 空间复杂度：O(1)