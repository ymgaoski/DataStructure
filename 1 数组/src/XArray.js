/**
 * 动态扩容数组
 */
class XArray{

    constructor(length){
        this.data = length ? new Array(length) : new Array();
        // 数据占用长度
        this.length = this.data.length;
        // 空间总长度
        this.dataLength = this.data.length;
    }

    /**
     * 往数组中添加数据
     * @param {值} value 
     */
    add(value){
        if (this.length === this.dataLength){
            // 需要扩容（当前容量2倍）
            this.dataLength = (this.length || 1) * 2;
            // 创建新数组，将旧数组数据复制过去
            const newArray = new Array(this.dataLength);
            for(let i=0; i < this.length; i++){
                newArray[i] = this.data[i];
            }
            // 设置新数组
            this.data = newArray;
            
            console.log('扩容至：' + this.dataLength);
        }

        // 设置数据
        this.data[this.length] = value;
        // 长度自增
        this.length ++;

        console.log(value + ' 增加成功！');
    }

    /**
     * 根据索引删除指定值
     * @param {索引} index 
     */
    remove(index){

        this.checkSafe(index);
        const delVal = this.data[index];

        for(let i = index; i < this.length; i ++){
            this.data[i] = this.data[i+1];
        }
        this.length --;
        return delVal;
    }

    /**
     * 根据索引获取值
     * @param {索引} index 
     */
    get(index){
        
        this.checkSafe(index);
        
        return this.data[index];
    }

    /**
     * 设置指定索引对应数据
     * @param {索引} index 
     * @param {数值} value 
     */
    set(index,value){
        
        this.checkSafe(index);
        
        this.data[index] = value;
        
        console.log(index + '-' +value + ' 更新成功！');
    }

    /**
     * 检测索引是否越界
     * @param {索引} index 
     */
    checkSafe(index){
        if (index < 0 || index >= this.length){
            throw '数据越界！';
        }
    }
}

module.exports =  XArray;