
class VigenereCipheringMachine {
  direction = 'direct'

  constructor(type){
    if(type === false){
      this.direction = 'reverse'
    }
  }

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  encrypt(message, key) {
    if(!message  || !key ){
      throw new Error('Provide both arguments!')
    }

    let result = ''
    for(let i =0, j=0 ; i< message.length; i++){
      if(message[i].toUpperCase().match(/[A-Z]/)){
        result += this.alphabet[(message[i].toUpperCase().charCodeAt() + key[j%key.length].toUpperCase().charCodeAt())%26]
        j++
      }else{
        result +=message[i]
      }
    }
    if(this.direction === 'reverse'){
      result = result.split('').reverse().join('')
    }
    return result

  }
  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || !key){
      throw new Error('Provide both arguments!')
    }
    let result = ''
    for(let i =0, j=0 ; i< encryptedMessage.length; i++){
      if(encryptedMessage[i].toUpperCase().match(/[A-Z]/)){
        result += this.alphabet[(encryptedMessage[i].toUpperCase().charCodeAt() - key[j%key.length].toUpperCase().charCodeAt() + 26)%26]
        j++
      }else{
        result +=encryptedMessage[i]
      }
    }
    if(this.direction === 'reverse'){
      result = result.split('').reverse().join('')
    }
    return result
  }
}

module.exports = VigenereCipheringMachine;
