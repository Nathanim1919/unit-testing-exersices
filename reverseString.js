function reverse(str){
    if(str.length == 1){
        return str;
    }
    return reverse(str.split('').splice(1,str.length-1).join(''))+str[0];
}

module.exports = reverse;