function longestCommonPrefix(strs: string[]): string {
      let first = strs[0];
    let prefix = "";

    for (let i = 0; i < first.length; i++) {
         let ch=first[i];
        for(let j=1;j<strs.length;j++){
            if (i >= strs[j].length || strs[j][i] !== ch) {
                return prefix
            }
        }
        prefix+=ch
    }
    return prefix
};