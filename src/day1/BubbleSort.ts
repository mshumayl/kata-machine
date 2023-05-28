export default function bubble_sort(arr: number[]): void {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i-1; j++) { //-1 to avoid going out of bounds as we have j+1, -i as the last i elements will always be the biggest ones (sorted)
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

}