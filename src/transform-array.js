
module.exports = function transform( arr ) {

  if (Array.isArray(arr)) {
    let result = [...arr]
    for (let i = 0; i < result.length; i++) {
      switch (result[i]) {
        case '--discard-next':
          result.splice(i+1, 1)
          break
        case '--discard-prev':
          if(result[i-1] !== '--discard-next' && result[i-1] !== '--discard-prev' && result[i-1] !== '--double-next' && result[i-1] !== '--double-prev'){
            result.splice(i-1, 1)
            break
          }
          break
        case '--double-next':
          result.splice(i+1, 0, result[i+1])
          break
        case '--double-prev':
          if(result[i-1] !== '--discard-next' && result[i-1] !== '--discard-prev' && result[i-1] !== '--double-next' && result[i-1] !== '--double-prev'){
            result.splice(i-1, 0, result[i-1])
            break
          }
          break
        default:
          break
      }
    }
    return result.filter((elem)=> {
      if (elem !== '--discard-next' && elem !== '--discard-prev' && elem !== '--double-next' && elem !== '--double-prev'){
        return elem
      }})
  } else {
    throw new Error()
  }
};
