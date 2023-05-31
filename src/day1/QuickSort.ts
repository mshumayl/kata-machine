function qs(arr: number[], lo: number, hi: number): void {
    //Base case
    if (lo>=hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi);

    qs(arr, lo, pivotIdx-1) //Left side of pivot
    qs(arr, pivotIdx+1, hi) //Right side of pivot
}

function partition(arr: number[], lo: number, hi: number): number { //Return pivotIdx
    const pivot = arr[hi];
    
    //Destination value to be swapped with walked arrays that match the condition below
    let destIdx = lo - 1; //Start with -1, and increment every time the condition below matches and after walk is finished
    
    //Perform walk
    for (let walkIdx = lo; walkIdx < hi; walkIdx++) {
        if (arr[walkIdx] <= pivot) { //If the value of current walked array is smaller than pivot,
            destIdx++
            
            //Swap between current value and the destination value
            const tmp = arr[walkIdx];
            arr[walkIdx] = arr[destIdx]
            arr[destIdx] = tmp;
        }
    }

    //After walk
    destIdx++;
    arr[hi] = arr[destIdx]; //These are side-by-side swaps
    arr[destIdx] = pivot; //Move pivot value into its actual position in the sort

    return destIdx; //Return the new pivot index
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1)
}