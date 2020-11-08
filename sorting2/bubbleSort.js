function bubbleSort(list) {
    const n = list && list.length;
    if (!n) {
        return [];
    }

    for (let i = 0; i < n; i++) {
        let isSwapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (list[j] > list[j + 1]) {
                [list[j], list[j + 1]] = [list[j + 1], list[j]];
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }

    return list;
}

// console.log(bubbleSort([6, 5, 4, 3, 2, 1]));
// console.log(bubbleSort([3, 5, 4, 1, 2, 6]));
// console.log(bubbleSort([4, 5, 6, 1, 2, 3]));

module.exports = bubbleSort;