

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {
  if( typeof sampleActivity === "string"){
    const N  = parseInt(sampleActivity);
    if(isNaN(N) || N<=0 || N>MODERN_ACTIVITY) return false
    return Math.ceil(Math.log(MODERN_ACTIVITY/N)/(Math.LN2/HALF_LIFE_PERIOD))
  }else{
    return false
  }

};
