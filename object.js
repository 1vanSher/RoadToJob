let codes = {
    name: 'Vasya',
    friends: 5,
    likes: 19,
    projects: 7
};
function sortNumInObj(obj) {
    let sortObjNum = [];
    
    for (let key in obj) {
      if (typeof obj[key] === 'number') {
        sortObjNum.push(key);
      }
    }
    
    return sortObjNum.sort((a, b) => obj[a] - obj[b]);
  }
  console.log(sortNumInObj(codes));  
