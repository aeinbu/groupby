# distinctBy
Used to create a new collection with the distinct values, using a custom
comparator.

For simple types or doing a deep equals on complex types, use
[distinct](./distinct.md) instead.

**Syntax**:  
`distinctBy(compareFn)`

**Arguments**:  
- `compareFn` is a used to determine whether two elements are equal.  
  `compareFn` is of the form `(left, right) => boolean`

**Usage**:
```javascript
const testData = [
    { p1: 10, p2: 'a' },
    { p1: 10, p2: 'a' },
    { p1: 20, p2: 'a' },
    { p1: 20, p2: 'b' }
]

const res = testData.reduce(distinctBy((left, right) => left.p1 === right.p1 && left.p2 === right.p2), [])

// Result:
// [
//     { p1: 10, p2: 'a' },
//     { p1: 20, p2: 'a' },
//     { p1: 20, p2: 'b' }
// ]
```

**Remarks**:

```javascript
const res = testData.reduce(distinctBy((left, right) => left.p1 === right.p1 && left.p2 === right.p2), [])
```

**See also**:
- [distinct](./distinct.md)
- [isDeepEqual](./isDeepEqual.md)
- [unit tests for distinctBy](../tests/distinctBy.tests.ts)
