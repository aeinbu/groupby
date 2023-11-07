# maxBy
Used to get the element containing the highest property value in an Array

**Syntax**:  
`maxBy(valueSelectorFn)`  
Usage in a reducer:  
`array.reduce(maxBy(valueSelectorFn))`

**Arguments**:  
- `valueSelectorFn` is a used to extract the value to compare from the object in the array.  
  `valueSelectorFn` is of the form `(obj) => any`


# maxOf
Used to get the highest value of a property in an array.

**Syntax**:  
`maxOf(valueSelectorFn)`  
Usage in a reducer:  
`array.reduce(maxOf(valueSelectorFn))`

**Arguments**:  
- `valueSelectorFn` is a used to extract the value to compare from the object in the array.  
  `valueSelectorFn` is of the form `(obj) => any`


# max
Used to get the highest value in an array. This can only be used with arrays of simple types like an array of strings or numbers

**Syntax**:  
`max()`  
Usage in a reducer:  
`array.reduce(max())`

**Arguments**:  
*None*

# Examples

**Usage**:
```javascript
const testData = [
    { name: 'Anna', age: 12 },
    { name: 'Peter', age: 17 },
    { name: 'Kim', age: 8 }
]

testData.reduce(maxBy(x => x.age), null) // returns { name: 'Peter', age: 17 }
testData.reduce(maxOf(x => x.age), null) // returns 17
testData.reduce(max(), null) // fails, since it is not a array of simple types
```

```javascript
const testData = [ 10, 30, 20]

testData.reduce(max(), null) // returns 30
```

**Remarks**:


**See also**:
- [min](./min.md)
- [unit tests for maxBy, maxOf and max](../tests/max.tests.ts)
