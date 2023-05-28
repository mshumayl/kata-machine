export default function two_crystal_balls(breaks: boolean[]): number {
    /*
    This can be in O(N) implemented by jumping a step-size of half N (N=number of inputs) then doing a linear search from 0 to the failing index.
    However, this can be implemented n O(N^(1/2)) by jumping a step-size of N^(1/2) instead.
    */

    const sqrtN = Math.pow(breaks.length, 0.5)
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