
module.exports = function transform( arr ) {
  if (!Array.isArray(arr)) throw new Error('arr has to be array!')
  let arrCopy = [...arr]
  let res = []
  for (let i = 0; i < arrCopy.length; i++) {
    switch (arrCopy[i]) {
      case '--discard-prev':
        res.pop()
        res.push(arrCopy[i])
        break
      case '--discard-next':
        arrCopy.splice(i + 1, 1)
        res.push(arrCopy[i])
        break
      case '--double-prev':
        if(res.length>0){
          res.push(res[res.length-1])
        }
        res.push(arrCopy[i])
        break
      case '--double-next':
        if (i < arrCopy.length - 1) {
          arrCopy.splice(i + 1, 0, arrCopy[i + 1])
        }
        res.push(arrCopy[i])
        break
      default:
        res.push(arrCopy[i])
        break
    }
  }
  let answer = []
  for (let i = 0; i < res.length; i++) {
    if (res[i] === '--discard-prev' || res[i] === '--discard-next' || res[i] === '--double-prev' || res[i] === '--double-next' || res[i] === undefined) {
      continue
    } else {
      answer.push(res[i])
    }
  }
  return answer
}