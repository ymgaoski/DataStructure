/**
 * 双向链表
 */
class TLinkedList{
    constructor(){

        this.node = {
            pre: null,
            data: null,
            next: null
        }
        // 最后一个节点
        this.lastNode = this.node;
    }

    get(index){

        // 找出指定索引的节点数据
        const nodeData = this.__queryNode(index,0,this.node);
        if (!nodeData){
            throw '索引未找到！';
        }
        return nodeData;
    }

    /**
     * 往最后添加数据
     * @param {数据} value 
     */
    add(value){
        if (this.node.data || this.node.next){
            // 有数据
            const node = {
                pre: this.lastNode,
                data: value,
                next: null
            }
            this.lastNode.next = node;
            this.lastNode = node;
        }else{
            // 无数据
            this.node.data = value;
        }
    }

    /**
     * 在指定索引添加数据
     * @param {索引} index 
     * @param {数据} value 
     */
    insert(index,value){
        
        // 找出指定索引的节点数据
        const nodeData = this.__queryNode(index,0,this.node);
        if (!nodeData){
            throw '索引未找到！';
        }

        // 新节点的next指向旧节点
        const node = {
            pre: nodeData.pre,
            data: value,
            next: nodeData
        }
        // 上一个节点指向当前新节点
        nodeData.pre.next = node;
        // 更新旧节点的上一个节点为当前节点
        nodeData.pre = node;
    }

    /**
     * 根据索引删除数据
     * @param {索引} index 
     */
    remove(index){
        
        // 找出指定索引的节点数据
        const nodeData = this.__queryNode(index,0,this.node);
        if (!nodeData){
            throw '索引未找到！';
        }
        // 上一个节点的next指向下一个节点
        nodeData.pre.next = nodeData.next;
        nodeData.next.pre = nodeData.pre;
    }

    /**
     * 查找指定位置数据
     * @param {需要查找的index} index 
     * @param {当前查找到的index} currIndex 
     * @param {节点} node 
     * @returns 
     */
    __queryNode(index,currIndex,node){
        if (index === currIndex){
            return node;
        }
        if (currIndex > index || !node.next){
            return null;
        }
        return this.__queryNode(index,++currIndex,node.next);
    }
}

module.exports = TLinkedList;