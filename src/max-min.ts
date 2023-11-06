import { NoValue, SelectorFn } from "./types"


type ComparableType = number | string


export function maxOf<TIn>(extract: SelectorFn<TIn, ComparableType>) {
    return (agg: ComparableType | NoValue, curr: TIn) => {
        const extracted = extract(curr)
        return agg === null || agg === undefined
            ? extracted
            : agg > extracted ? agg : extracted
    }
}


export function max() {
    return maxOf((x: ComparableType) => x)
}


export function minOf<TIn>(extract: SelectorFn<TIn, ComparableType>) {
    return (agg: ComparableType | NoValue, curr: TIn) => {
        const extracted = extract(curr)
        return agg === null || agg === undefined
            ? extracted
            : agg < extracted ? agg : extracted
    }
}


export function min() {
    return minOf((x: ComparableType) => x)
}
