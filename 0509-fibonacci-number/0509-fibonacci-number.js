/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n==0) return 0
    if(n==1) return 1
    let p2=0;
    let p1=1;
    for(let i=2;i<=n;i++){

        let current=p2+p1;
        
        p2=p1;
        p1=current
    }
    return p1
};