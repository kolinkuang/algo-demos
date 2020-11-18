function insertionSort(list) {
    const n = list && list.length;
    if (!n) {
        return [];
    }

    for (let i = 0; i < n - 1; i++) {
        const value = list[i + 1];
        let j = i;
        for (j = i; j >= 0; j--) {
            if (list[j] <= value) {
                break;
            }
            list[j + 1] = list[j];
        }
        list[j + 1] = value;
    }

    return list;
}

console.log(insertionSort([4, 5, 6, 1, 3, 2]));
console.log(insertionSort([3, 5, 4, 1, 2, 6]));
console.log(insertionSort([6, 5, 4, 3, 2, 1]));

module.exports = insertionSort;