
module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)){
    let dreamTeam = [];
    for (let i=0; i<members.length; i++){
      if (members[i] && typeof members[i] === "string"){
        dreamTeam.push(members[i].trim()[0].toUpperCase())
      }
    }
    return dreamTeam.sort().join('')
  }
  else{
    return false
  }

};
