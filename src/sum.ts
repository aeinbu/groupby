import { SelectorFn, NoValue } from "./types"


type SummableType = number


export function sumOf<TIn>(extract: SelectorFn<TIn, SummableType>) {
    return (agg: SummableType | NoValue, curr: TIn) => {
        const extracted = extract(curr)
        return agg === null || agg === undefined
            ? extracted
            : agg += extracted
    };
}

export function sum() {
    return sumOf((x: SummableType) => x)
}
