function selectionSort(list) {
    const n = list && list.length;
    if (!n) {
        return [];
    }

    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (list[j] < list[minIndex]) {
                minIndex = j;
            }
        }
        [list[i], list[minIndex]] = [list[minIndex], list[i]];
    }

    return list;
}

console.log(selectionSort([4, 5, 6, 1, 3, 2]));
console.log(selectionSort([6, 5, 4, 3, 2, 1]));
console.log(selectionSort([3, 5, 4, 1, 2, 6]));