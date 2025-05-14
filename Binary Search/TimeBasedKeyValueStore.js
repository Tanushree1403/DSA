class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key))
            this.keyStore.set(key,[]); 
            this.keyStore.get(key).push([timestamp,value]);          
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let res='';
        if(this.keyStore.has(key)){
            const values= this.keyStore.get(key)
            let l=0; let r= values.length - 1; 

            while (l <= r){
                const mid = Math.floor((l + r) / 2);
                if( values[mid][0] > timestamp){
                    r = mid - 1;
                }
                else{
                    res= values[mid][1];
                    l = mid + 1;
                }
            }
        }
        return res;
    }
}
