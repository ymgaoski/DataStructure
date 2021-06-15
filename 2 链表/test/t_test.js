// 双向链表
const TLinkedList = require('../src/TLinkedList');


const linkedList = new TLinkedList();
linkedList.add('a');
linkedList.add('b');
linkedList.add('c');

const findNode = linkedList.get(1); // b
console.log(findNode,'findNode');

linkedList.insert(1,'test');

linkedList.remove(2); // b

console.log(linkedList);

debugger