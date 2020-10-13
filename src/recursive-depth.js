
module.exports = class DepthCalculator {

    calculateDepth=( arr )=> {
        let addDepth = 1
        let depth = 0

        for(let i = 0 ; i<arr.length; i++){
            if(Array.isArray(arr[i])){
                addDepth = this.calculateDepth(arr[i])
                if(depth < addDepth) depth = addDepth
            }
        }
        return ++depth
    }

};