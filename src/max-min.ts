import { NoValue, SelectorFn } from "./types"

type ComparableType = number | string


export function maxBy<TIn>(extract: SelectorFn<TIn, ComparableType>) {
    return (agg: TIn | NoValue, curr: TIn) => {
        const extracted = extract(curr)
        return agg === null || agg === undefined
            ? curr
            : extract(agg) > extracted ? agg : curr
    }
}

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


export function minBy<TIn>(extract: SelectorFn<TIn, ComparableType>) {
    return (agg: TIn | NoValue, curr: TIn) => {
        const extracted = extract(curr)
        return agg === null || agg === undefined
            ? curr
            : extract(agg) < extracted ? agg : curr
    }
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
