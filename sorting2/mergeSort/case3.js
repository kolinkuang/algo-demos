/**
 * 利用哨兵简化归并排序
 * */
function mergeSort(list) {
    _mergeSort(list, 0, list.length - 1);
    return list;
}

function _mergeSort(list, start, end) {
    if (start >= end) {
        return;
    }

    const mid = Math.floor((start + end) / 2);

    _mergeSort(list, start, mid);
    _mergeSort(list, mid + 1, end);

    _merge(list, [...list.slice(start, mid + 1), Number.MAX_VALUE], [...list.slice(mid + 1, end + 1), Number.MAX_VALUE], start, end);
    // Array.prototype.slice needs to exclude the end parameter
}

function _merge(list, subListA, subListB, start, end) {
    let temp = new Array(end - start);

    for (let i = 0, j = 0, k = start; k <= end; k++) {
        if (subListA[i] <= subListB[j] && subListA[i] < Number.MAX_VALUE) {
            temp[k] = subListA[i++];
        } else if (subListB[j] < Number.MAX_VALUE) {
            temp[k] = subListB[j++];
        }
    }

    temp = temp.filter(num => num);

    for (let i = 0; i < temp.length; i++) {
        list[start + i] = temp[i];
    }
}

console.log(mergeSort([4, 5, 6, 1, 3, 2]));
console.log(mergeSort([6, 5, 4, 3, 2, 1]));
console.log(mergeSort([3, 5, 4, 1, 2, 6]));

// 时间复杂度：O(nlogn)
// 空间复杂度：O(n)