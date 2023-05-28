export default function two_crystal_balls(breaks: boolean[]): number {
    /*
    This can be in O(N) implemented by jumping a step-size of half N (N=number of inputs) then doing a linear search from 0 to the failing index.
    However, this can be implemented n O(N^(1/2)) by jumping a step-size of N^(1/2) instead.
    */

    function oSqrtN() {
        const sqrtN = Math.floor(Math.pow(breaks.length, 0.5))
        let jumpBreakIdx: number = -1;
        
        //Jump by step-size sqrtN
        for (let i = 0; i <breaks.length; i+=sqrtN) {
            if (breaks[i]) {
                jumpBreakIdx = i
            }
        }
    
        //Linear search to failure
        for (let j = 0; j < jumpBreakIdx; j++) {
            if (breaks[j]) {
                jumpBreakIdx = j
            }
        }
        return jumpBreakIdx
    }

    function oN() {
        const halfN = Math.floor(0.5*breaks.length)
        let jumpBreakIdx: number = -1;
        
        //Jump by step-size 0.5N
        for (let i = 0; i <breaks.length; i+=halfN) {
            if (breaks[i]) {
                jumpBreakIdx = i
            }
        }
    
        //Linear search to failure
        for (let j = 0; j < jumpBreakIdx; j++) {
            if (breaks[j]) {
                jumpBreakIdx = j
            }
        }
        return jumpBreakIdx
    }

    //Compare between two approaches
    const jumpBreakIdx = oSqrtN()
    // const jumpBreakIdx = oN()

    return jumpBreakIdx
}