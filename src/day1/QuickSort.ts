//Gist: https://gist.github.com/mshumayl/cda24c0c5ce6dd903f66c75927900836

function partition(arr: number[], lo: number, hi: number): number { //Return pivot index
    const pivot = arr[hi]; //There are other ways to implement

    let destIdx = lo - 1; //Start with one spot before the start of the array/partition

    //Walk from `lo` to `hi`
    for (let i = lo; i < hi; i++) { 
        if (arr[i] <= pivot) { //If the current element is equal to or smaller than pivot
            destIdx++; 

            //Swap the current element with the destination element
            const tmp = arr[i];
            arr[i] = arr[destIdx];
            arr[destIdx] = tmp;
        }
    }

    destIdx++; //Move destination pointer to the next index
    arr[hi] = arr[destIdx]; //Swap the `hi` value with the destination value
    arr[destIdx] = pivot; //Set the destination value as the pivot value (new pivot index)

    return destIdx; //Return the new pivot index
}

function qs(arr: number[], lo: number, hi: number) {
    //Base case
    if (lo>=hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi)

    qs(arr, lo, pivotIdx-1) //Left side of pivot
    qs(arr, pivotIdx+1, hi) //Right side of pivot
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length-1)
}