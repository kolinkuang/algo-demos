const bubbleSort = require('../sorting2/bubbleSort');
const insertionSort = require('../sorting2/insertionSort');

//随机生成 10000 个数组，每个数组中包含 200 个数据，然后分别用冒泡和插入排序算法来排序
const data = [];
for (let i = 0; i < 10000; i++) {
    const list = [];
    for (let j = 0; j < 200; j++) {
        const num = Math.floor(5000 * Math.random());
        list.push(num);
    }
    data.push(list);
}

const data2 = JSON.parse(JSON.stringify(data));

console.time('bubble');
for (let list of data) {
    bubbleSort(list);
}
console.timeEnd('bubble');

console.time('insertion');
for (let list of data2) {
    insertionSort(list);
}
console.timeEnd('insertion');