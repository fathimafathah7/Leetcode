/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str=x.toString();
    let rev="";
    for(i=str.length-1;i>=0;i--){
        rev=rev+str[i];
    }
    return str==rev
}
