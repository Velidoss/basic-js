module.exports = function repeater( str, options ) {
  if( str === null ) str = 'null'
  else if(str === undefined ) str = ''
  else str = str.toString()
  if(options.addition  === null) options.addition = 'null'
  let optionsDefault = {
    repeatTimes: options.repeatTimes ? options.repeatTimes : 1,
    separator: options.separator ? options.separator : '+',
    addition: options.addition ===undefined ?  '': options.addition.toString(),
    additionRepeatTimes: options.additionRepeatTimes ? options.additionRepeatTimes : 1,
    additionSeparator: options.additionSeparator ? options.additionSeparator : '|'
  }

  const {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = optionsDefault

  let add = addition

  for(let i = 1 ; i< additionRepeatTimes; i++){
    add += additionSeparator+addition
  }

  let result = str+add

  for(let i = 1 ; i< repeatTimes; i++){
    result += separator+str+add
  }
  return result
};
  