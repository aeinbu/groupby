# distinct
Used to create a new collection with the distinct values. It compares each item using
a deep compare algorithm witch compares all property values seperatly.

If you need to compare using a custom comparator, use
[distinctBy](./distinctBy.md) instead.

**Syntax**:  
`distinct()`  
Usage in a reducer:  
`array.reduce(distinct())`

**Arguments**:  
*None*

**Usage**:
```javascript
const testData = [
    { p1: 10, p2: 'a' },
    { p1: 10, p2: 'a' },
    { p1: 20, p2: 'a' },
    { p1: 20, p2: 'b' }
]

const res = testData.reduce(distinct(), [])

// Result:
// [
//     { p1: 10, p2: 'a' },
//     { p1: 20, p2: 'a' },
//     { p1: 20, p2: 'b' }
// ]
```

**Remarks**:


**See also**:
- [distinctBy](./distinctBy.md)
- [unit tests for distinct](../tests/distinct.tests.ts)
