function climbStairs(n: number): number {
    if(n===1) return 1;
    if(n===2) return 2;

    let second=1
    let first=2

    for(let i=3;i<=n;i++){
        let current=second+first;
        second=first;
        first=current;
    }
    return first

    
};