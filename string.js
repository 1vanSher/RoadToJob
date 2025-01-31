function capitalLetter(str){
    firstLetter = str.at(0);
    
    if(firstLetter === firstLetter.toLowerCase()){
       return firstLetter.toUpperCase() + str.slice(1);
    }
    return str;
}


function paragraphBreak(text, maxLength) {
    if(text.length <= maxLength) return text;

    let truncated = text.slice(0, maxLength);

    let lastSpace = truncated.lastIndexOf(" ");
    let lastPunctuation = truncated.search(/[,\.!?:;][^,\.!?:;]*$/);
    let cutIndex = Math.max(lastSpace, lastPunctuation);

    truncated = truncated.slice(0, cutIndex); 
    return truncated + "..."; 
}
