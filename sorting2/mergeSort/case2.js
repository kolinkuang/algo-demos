/**
 * 利用哨兵简化归并排序
 * */
function mergeSort(list) {
    _mergeSort(list, 0, list.length - 1);
    return list;
}

function _mergeSort(list, p, r) {
    if (p >= r) {
        return;
    }

    // 取 p 到 r 之间的中间位置 q
    const q = Math.floor((p + r) / 2);

    // 分治递归 - 此处为原地排序
    _mergeSort(list, p, q);
    _mergeSort(list, q + 1, r);

    // 将 list[p...q] 和 list[q+1...r] 合并为 list[p...r]
    _merge(list, [...list.slice(p, q + 1), Number.MAX_VALUE], [...list.slice(q + 1, r + 1), Number.MAX_VALUE], p, r);
}

function _merge(list, subListA, subListB, p, r) {
    let temp = new Array(r - p);
    for (let i = 0, j = 0, k = p; k <= r; k++) {
        if (subListA[i] <= subListB[j] && subListA[i] !== Number.MAX_VALUE) {
            temp[k] = subListA[i++];
        } else if (subListB[j] !== Number.MAX_VALUE) {
            temp[k] = subListB[j++];
        }
    }

    temp = temp.filter(num => num);

    // 将 tmp 中的数组拷贝回 list[p...r]
    for (let i = 0; i < temp.length; i++) {
        list[p + i] = temp[i];
    }
}

console.log(mergeSort([4, 5, 6, 1, 3, 2]));
// console.log(mergeSort([6, 5, 4, 3, 2, 1]));
// console.log(mergeSort([3, 5, 4, 1, 2, 6]));