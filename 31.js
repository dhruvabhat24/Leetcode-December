/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
  let out=-1
        for(let i=s.length-1;i>0;i--){
            let holder=s.indexOf(s[i])
            out=Math.max(out,i-(holder+1))
        }

  
        return out
    
};
