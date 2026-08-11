function furthestDistanceFromOrigin(moves: string): number {
    let right=0;
    let left=0;
    let blank=0;
    for(let i=0;i<moves.length;i++){
        if(moves[i]==="R"){
            right+=1
        }
        else if(moves[i]==="L"){
            left+=1
        }
        else{
            blank+=1
        }
    }
        let fixed=right-left;
        return Math.abs(fixed)+blank
    
};