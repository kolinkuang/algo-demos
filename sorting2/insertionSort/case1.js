function insertionSort(list) {
    const n = list.length;

    if (!n) {
        return [];
    }

    for (let i = 1; i < n; i++) {
        let value = list[i];
        console.log('value =', value);
        let j = i - 1;
        // 查找插入的位置
        for (; j >= 0; j--) {
            // list[0] 至 list[j] 是已排序区间
            console.log(list, i, j);
            if (list[j] <= value) {
                break;
            }
            list[j + 1] = list[j]; //数据移动，才能实现原地排序
        }
        list[j + 1] = value; //插入数据
    }

    return list;
}

console.log(insertionSort([4, 5, 6, 1, 3, 2]));
console.log(insertionSort([3, 5, 4, 1, 2, 6]));
console.log(insertionSort([6, 5, 4, 3, 2, 1]));

module.exports = insertionSort;