
module.exports = function getSeason( date ) {
    if(arguments.length ===0) return  'Unable to determine the time of year!'
    if(Object.prototype.toString.call(date) !== "[object Date]") throw new Error()
    if(!isNaN(date.getTime())){
        const seasons = {
            winter:[11,0,1],
            spring:[2,3,4],
            summer:[5,6,7],
            autumn:[8,9,10]
        }
        for( let key in seasons){
            for (let m of seasons[key]){
                if(m ===  date.getMonth()){
                    return key
                }
            }
        }
    }else{
        return  'Unable to determine the time of year!'
    }

};
