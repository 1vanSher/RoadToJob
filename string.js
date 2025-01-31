function capitalLetter(str){
    firstLetter = str.at(0);
    if(firstLetter === firstLetter.toLowerCase()){
       return firstLetter.toUpperCase() + str.slice(1);
    }
    return str;
}
console.log(capitalLetter('пока'));