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

    // console.log('====', list.slice(p, q));
    // console.log('====', list.slice(q + 1, r));
    // console.log('====>', list, p, q, r);

    // 将 list[p...q] 和 list[q+1...r] 合并为 list[p...r]
    _merge(list, p, q, r);
}

function _merge(list, p, q, r) {
    let i = p, j = q + 1, k = 0;
    const temp = new Array(r - p);
    while (i <= q && j <= r) {
        if (list[i] <= list[j]) {
            temp[k++] = list[i++];
        } else {
            temp[k++] = list[j++];
        }
    }

    // 判断哪个子数组有剩余的数据
    let start = i <= q ? i : j;
    let end = i <= q ? q : r;

    // 将剩余的数据拷贝到临时数组 temp
    while (start <= end) {
        temp[k++] = list[start++];
    }

    // 将 tmp 中的数组拷贝回 list[p...r]
    for (let i = 0; i < temp.length; i++) {
        list[p + i] = temp[i];
    }

    console.log(list);
}

console.log(mergeSort([4, 5, 6, 1, 3, 2]));
// console.log(mergeSort([6, 5, 4, 3, 2, 1]));
// console.log(mergeSort([3, 5, 4, 1, 2, 6]));