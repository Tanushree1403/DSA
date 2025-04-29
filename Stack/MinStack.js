class MinStack {
    // refer this video for optimised solution --> https://www.youtube.com/watch?v=wHDm-N2m2XY
    constructor() {
        this.stack=[];
        this.min=Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.stack.length===0){
            this.stack.push(val);
            this.min=val;
        } else if (val<this.min){
            this.stack.push( (2*val)-this.min);
            this.min=val;
        }
        else{
            this.stack.push(val);
        }

    }

    /**
     * @return {void}
     */
    pop() {
        if(this.stack.length===0) return undefined;
        const pop= this.stack.pop();
        if( pop < this.min){
            this.min = (2*this.min) - pop;
        }

    }

    /**
     * @return {number}
     */
    top() {
        const top= this.stack[this.stack.length-1];
        return (top > this.min) ? top : this.min;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min;
    }
}
