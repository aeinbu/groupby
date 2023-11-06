
export type NoValue = null | undefined

export type SelectorFn<TIn, TOut> = (obj: TIn) => TOut;
