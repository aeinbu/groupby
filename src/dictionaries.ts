type SelectorFn<T> = (obj:any) => T

/**
 * Turns an array of objects into a an object
 * @param keySelector Function to extract the key from each object
 * @param valueSelector Function to extract from each object the value to be stored with the key
 */
export const toDictionary = (
    keySelector : SelectorFn<string|number> = obj => obj.key,
    valueSelector: SelectorFn<any> = obj => obj.values
) => (
    agg: any,
    curr: any
) => {
    const key = keySelector(curr)
    if(typeof key !== 'string' && typeof key !== 'number') {
        throw new Error('Invalid keySelector in toDictionary: Running keySelector on an object in the input collection collection produced an invalid key')
    }

    agg[key] = valueSelector(curr)
    return agg
}


/**
 * Turns an array of objects into a native js Map
 * @param keySelector Function to extract the key from each object
 * @param valueSelector Function to extract from each object the value to be stored with the key
 */
export const toMap = <K, V>(
    keySelector : SelectorFn<any> = obj => obj.key,
    valueSelector: SelectorFn<any> = obj => obj.values
) => (
        agg: Map<K, V>,
        curr: any
    ) => {
        agg.set(keySelector(curr), valueSelector(curr))
        return agg
    }


// /**
//  * Results in a key-value tuple that can be used with Map constructor
//  */
// export const toTuples = (
//     keySelector : SelectorFn<any> = obj => obj.key,
//     valueSelector: SelectorFn<any> = obj => obj.value
// ) => (
//     item: any
// ) => [keySelector(item), valueSelector(item)]
