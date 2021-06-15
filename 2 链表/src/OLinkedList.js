/**
 * 单向链表
 */
class OLinkedList{
    constructor(){
        this.node = {
            // 数据
            data: null,
            // 下一个节点
            next: null
        }
        // 最后一个节点
        this.lastNode = this.node;
    }

    /**
     * 根据索引获取数据
     * @param {索引} index 
     */
    get(index){

        // 找出指定索引的节点数据
        const nodeData = this.__queryNode(index,0,this.node,null);
        if (!nodeData){
            throw '索引未找到！';
        }

        return nodeData.node;
    }

    /**
     * 往最后新增数据
     * @param {数据} value 
     */
    add(value){
        const lastNode = this.lastNode;
        if (lastNode.data){
            // 有上一个数据
            const node = {
                data: value,
                next: null
            };
            lastNode.next = node;
            this.lastNode = node;
        }else{
            // 第一个数据
            this.node.data = value;
        }
        // console.log(this.node,'添加成功！');
    }

    /**
     * 在指定位置插入数据
     * @param {索引} index 
     * @param {数据} value 
     */
    insert(index,value){
        // 找出指定索引的节点数据
        const nodeData = this.__queryNode(index,0,this.node,null);
        if (!nodeData){
            throw '索引未找到！';
        }
        // 新节点的next指向找到的旧节点
        const node = {
            data: value,
            next: nodeData.node
        }

        if(nodeData.preNode){
            // 旧节点的上一个节点的next指向新节点
            nodeData.preNode.next = node;
        }else{
            // 第1个节点, preNode为null，将当前新节点设置为第1个节点即可
            this.node = node;
        }
        return node;
    }

    /**
     * 根据索引删除数据
     * @param {索引}} index 
     */
    remove(index){

        // 找出指定索引的节点数据
        const nodeData = this.__queryNode(index,0,this.node,null);
        if (!nodeData){
            throw '索引未找到！';
        }
        if (nodeData.preNode){
            // 将被删除节点的上一个节点的next指向被删除节点的next节点
            nodeData.preNode.next = nodeData.node.next;
        }else{
            // 第1个节点，将第1个节点的next节点设置为第1个节点即可
            this.node = nodeData.node.next;
        }
        return nodeData.node;
    }
    
    /**
     * 查找指定位置数据
     * @param {需要查找的index} index 
     * @param {当前查找到的index} currIndex 
     * @param {节点} node 
     * @param {上一个节点} preNode 
     * @returns 
     */
    __queryNode(index,currIndex,node, preNode){
        if (index === currIndex){
            return {node,preNode};
        }
        if (currIndex > index || !node.next){
            return null;
        }
        return this.__queryNode(index,++currIndex,node.next,node);
    }

}

module.exports = OLinkedList;