import { Slugger } from "marked";

export function arrayedit<T, N>(arr: T[], fn: (v: T) => N): N[] {
    //* resolves typing conflict without ignoring errors or conversion.
    const a: T[] = arr.slice()
    const r: N[] = []
    for(const i in arr) {
        r[i] = fn(a[i]);
    }
    return r;
}



export const toSlug = (s: string): string => s.toString().toLowerCase().split(' ').join('-');
// OR
export const markedSlugger = new Slugger();

/**
 * 
 * @param {number} n 
 * @param {number} i
 * @returns {number[]} a list of numbers starting with `n` and ending with `i`
 */
export const range = (n: number, i?: number): number[] => arrayedit([...Array(n).keys()], (v) => v + (i || 0));
