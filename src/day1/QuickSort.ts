function qs(arr: number[], lo: number, hi: number): void {
    //Base condition
    if (lo>=hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi);

    qs(arr, lo, pivotIdx-1);
    qs(arr, pivotIdx+1, hi);
}

function partition(arr: number[], lo: number, hi: number): number { //Return the pivot index
    const pivot = arr[hi]; //There are other ways to assign pivot

    let i = lo - 1;

    for (let j = lo; j < hi; ++j) {
        if (arr[j] <= pivot) {
            i++;

            //Swap
            const tmp = arr[j];
            arr[j] = arr[i];
            arr[i] = tmp;
        }
    }

    i++;
    arr[hi] = arr[i];
    arr[i] = pivot;

    return i;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length-1)
}