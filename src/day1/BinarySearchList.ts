export default function bs_list(haystack: number[], needle: number): boolean {

    let result: boolean = false;

    const half = (haystack: number[], needle: number, lo: number, hi: number): boolean => {

        if (lo>hi) {
            return false
        }

        let halfpoint = Math.floor((hi+lo) / 2);

        if (needle === haystack[halfpoint]) {
            return true
        } else if (needle > haystack[halfpoint]) {
            return half(haystack, needle, halfpoint+1, hi); //Slicing is very expensive, this can be replaced with just sending a start and end indices into the recursive function
        } else {
            return half(haystack, needle, lo, halfpoint-1);
        }
    }

    result = half(haystack, needle, 0, haystack.length)

    return result
}