
/**
 * Checks if the two inputs are equal by comparing nested properties to any level
 * @param left
 * @param right
 */
export function isDeepEqual<T>(left: T, right: T) {
    if(left === right) return true
    
    if (typeof left !== typeof right)
        return false

    if (typeof left !== "object")
        return left === right

    if ((left === null) !== (right === null)) return false
    if (left === null && right === null) return true

    if (Object.getPrototypeOf(left) !== Object.getPrototypeOf(right))
        return false

    if (Object.keys(left).length !== Object.keys(right).length)
        return false

    for (var key in left) {
        if (!isDeepEqual(left[key], right[key])) return false
    }

    return true
}