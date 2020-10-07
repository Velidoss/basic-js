
module.exports = class DepthCalculator {

    depth = 1
    localDepth = 1

    calculateDepth=( arr )=> {
      for(let i = 0 ; i<arr.length; i++){
        if(Array.isArray(arr[i])){
          this.localDepth +=1
          this.calculateDepth(arr[i])
        }
      }
      if(this.localDepth>this.depth){
        this.depth = this.localDepth
        this.localDepth =1
      }
      return this.depth
    }
};