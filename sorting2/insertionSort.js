function insertionSort(list) {
    const n = list.length;

    if (!n) {
        return [];
    }

    for (let i = 1; i < n; i++) {
        let value = list[i];
        // console.log('value =', value);
        let j = i - 1;
        // 查找插入的位置
        for (; j >= 0; j--) {
            if (list[j] > value) {
                list[j + 1] = list[j]; //数据移动
                // console.log(list);
            } else {
                break;
            }
        }
        list[j + 1] = value; //插入数据
        // console.log(list);
    }

    return list;
}

// console.log(insertionSort([4, 5, 6, 1, 3, 2]));

module.exports = insertionSort;