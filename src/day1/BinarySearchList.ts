export default function bs_list(haystack: number[], needle: number): boolean {

    let result: boolean = false;

    const half = (lo: number, hi: number): boolean => {
        let halfpoint = Math.floor((hi-lo+1) / 2);

        if (hi-lo === 0) {
            return false
        }

        if (needle === haystack[halfpoint]) {
            return true
        } else if (needle > haystack[halfpoint]) {
            return half(halfpoint+1, hi); //Slicing is very expensive, this can be replaced with just sending a start and end indices into the recursive function
        } else {
            return half(lo, halfpoint-1);
        }
    }

    result = half(0, haystack.length)

    return result
}