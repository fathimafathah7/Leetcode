/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words=s.split(" ");
    if(pattern .length!==words.length){
        return false;
    }
    const char=new Map();
    const wordtoChar=new Map();

    for(let i=0;i<pattern.length; i++){
        const ch=pattern[i];
        const word=words[i];

        if(char.has(ch)&& char.get(ch)!== word){
            return false;
        }
        if(wordtoChar.has(word) && wordtoChar.get(word)!==ch){
            return false
        }
        char.set(ch,word);
        wordtoChar.set(word,ch);
    }
    return true
};