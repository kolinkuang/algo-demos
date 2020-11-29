function quickSort(list) {
    _quickSort(list, 0, list.length - 1);
    return list;
}

function _quickSort(list, start, end) {
    if (start >= end) {
        return;
    }

    const pivotIndex = _partition(list, start, end);
    _quickSort(list, start, pivotIndex - 1);
    _quickSort(list, pivotIndex + 1, end);
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

console.log(quickSort([9, 11, 50, 3, 12, 8]));
// console.log(quickSort([4, 5, 6, 1, 3, 2]));
// console.log(quickSort([6, 5, 4, 3, 2, 1]));
// console.log(quickSort([3, 5, 4, 1, 2, 6]));