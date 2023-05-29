export default function bs_list(haystack: number[], needle: number): boolean {

    let result: boolean = false;

    const half = (arr: number[]): boolean => {
        let halfpoint = Math.ceil((arr.length-1) / 2);
        
        if (arr.length === 0) {
            return false
        }

        if (needle === arr[halfpoint]) {
            return true
        } else if (needle > arr[halfpoint]) {
            return half(arr.slice(halfpoint+1, arr.length)) //Slicing is very expensive, this can be replaced with just sending a start and end indices into the recursive function
        } else {
            return half(arr.slice(0, halfpoint))
        }
    }

    result = half(haystack)

    return result
}