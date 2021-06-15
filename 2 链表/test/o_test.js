// 单向链表
const OLinkedList = require('../src/OLinkedList');

const linkedList = new OLinkedList();
linkedList.add('a');
linkedList.add('b');
linkedList.add('c');
linkedList.add('d');
linkedList.add('e');

// 查找数据
const node = linkedList.get(2); // c
console.log(node);

// 插入指定位置
linkedList.insert(1,'test');

// 删除节点
linkedList.remove(2); // b

console.log(linkedList);

// debugger
