type PredicateFn<TIn, TOut> = (curr: TIn) => (group: TOut) => boolean

type GroupInitializerFn<TIn, TOut> = (curr: TIn) => TOut

type AggregateFn<TIn, TOut> = (group: TOut, curr: TIn) => void


/**
 * @param {*} predicate (curr: TIn) => (group: TOut) => return true or false, determines how a group is selected for curr
 * @param {*} createGroup (curr: TIn) => returns an object for a new group based on curr
 * @param {*} aggregate (group: TOut, curr: TIn) => returns new to the group by adding curr to incoming group
 */
const toGroups = <TIn, TOut>(
    predicate: PredicateFn<TIn, TOut>,
    createGroup: GroupInitializerFn<TIn, TOut>,
    aggregate: AggregateFn<TIn, TOut>
) => (
        agg: (TOut)[],
        curr: TIn
    ) => {
        agg = agg || []
        const ix = agg.findIndex(predicate(curr)) // Find existing group
        const group = ix === -1 ? createGroup(curr) : agg[ix] // ... or create new

        aggregate(group, curr) // Add curr to the collection for the group

        if (ix === -1) {
            agg.push(group) // Add new group
        } else {
            agg[ix] = group // ...or replace existing group
        }

        return agg
    }


type SelectorFn<TIn, TOut> = (obj: TIn) => TOut

/**
 * Group by simple property. This method is meant to be used with collection reducers.
 * Look at the tests to se how it is used
 * @param keySelector method to select the key to group by
 * @param valueSelector method to select what properties to put in the groups aggregated values. If undefined, the full object is aggregated
 * @returns array of grouping objects in the shape of `{ key: ..., values: [...]}`
 */
export const groupBy = <TIn, K, V>(
    keySelector: SelectorFn<TIn, K>,
    valueSelector: SelectorFn<TIn, V> = obj => (obj as unknown as V)
) => {
    if (typeof keySelector !== 'function' || typeof valueSelector !== 'function') {
        throw new Error('Invalid argment(s) for groupBy')
    }

    type TOut = { key: K, values: V[] }
    const predicate = (curr: TIn) => (group: TOut) => group.key === keySelector(curr)

    const createGroup = (curr: TIn) => ({
    	key: keySelector(curr),
    	values: [] as V[]
    })

    const aggregate = (group: TOut, curr: TIn) => group.values.push(valueSelector(curr))

    return toGroups(predicate, createGroup, aggregate)
}
