# minBy
Used to get the element containing the lowest property value in an Array

**Syntax**:  
`minBy(valueSelectorFn)`  
Usage in a reducer:  
`array.reduce(minBy(valueSelectorFn))`

**Arguments**:  
- `valueSelectorFn` is a used to extract the value to compare from the object in the array.  
  `valueSelectorFn` is of the form `(obj) => any`


# minOf
Used to get the lowest value of a property in an array.

**Syntax**:  
`minOf(valueSelectorFn)`  
Usage in a reducer:  
`array.reduce(minOf(valueSelectorFn))`

**Arguments**:  
- `valueSelectorFn` is a used to extract the value to compare from the object in the array.  
  `valueSelectorFn` is of the form `(obj) => any`


# min
Used to get the lowest value in an array. This can only be used with arrays of simple types like an array of strings or numbers

**Syntax**:  
`min()`  
Usage in a reducer:  
`array.reduce(min())`

**Arguments**:  
*None*

# Examples

**Usage**:
```javascript
const testData = [
    { name: 'Oslo', population: 709000 },
    { name: 'Stockholm', population: 985000 },
    { name: 'Copenhagen', population: 657000 }
]

testData.reduce(minBy(x => x.population), null) // returns { name: 'Compenhagen', population: 657000 }
testData.reduce(minOf(x => x.population), null) // returns 657000
testData.reduce(min(), null) // fails, since it is not a array of simple types
```

```javascript
const testData = [ 10, 30, 20]

testData.reduce(min(), null) // returns 10
```

**Remarks**:


**See also**:
- [max](./max.md)
- [unit tests for minBy, minOf and min](../tests/min.tests.ts)
