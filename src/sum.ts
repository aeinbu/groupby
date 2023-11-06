import { SelectorFn, NoValue } from "./types"


type SummableType = number


export function sumOf<TIn>(extract: SelectorFn<TIn, SummableType>) {
    return (agg: SummableType | NoValue, curr: TIn) => {
        return agg === null || agg === undefined
            ? 0
            : agg += extract(curr)
    };
}

export function sum() {
    return sumOf((x: SummableType) => x)
}
