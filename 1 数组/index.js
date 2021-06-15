// 动态扩容数组
const XArray = require('./src/XArray');

// let array = new Array(2);
// array.push(1);
// array[0] = 1;
// array[1] = 2;
// array[2] = 3;
// console.log(array.length);

let array = new XArray(2);
array.set(0,1);
array.set(1,2);
array.add(3);
array.add(4);
array.add(5);
array.add(6);
array.add(7);
array.add(8);
array.add(9);
array.add(10);
array.add(11);
array.add(12);

array.remove(4);

console.log('数组：',array);
console.log('数组第一个值：'+ array.get(0));
console.log('数组长度：'+array.length);