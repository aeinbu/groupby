# toDictionary
**Syntax**:  
`toDictionary(keySelector, valueSelector)`

**Arguments**:  

**Usage**:
```javascript
const cityArray = [
    { key: "Rome", values: ["Tony", "Mary", "Peter"] },
    { key: "London", values: ["Peter", "Elisabeth"] },
    { key: "Paris", values: ["Francois"] }
]

const cityDictionary = cityArray.reduce(
    toDictionary(
        x => x.name,   // First lambda to determine the property name
        x => x.values  // Second lambda to determine where to find the value to set that property to
        // This paramter is optional, an if omitted it will default to `x => x.values´ which would match the default output of `groupBy` above
    ),
    {}
)

// Result (See how the array is transformed to an object with properties for each key):
// {
//     "Rome": ["Tony", "Mary", "Peter"],
//     "London": ["Peter", "Elisabeth"],
//     "Paris": ["Francois"]
// }
```

See also:
- [unit tests for toDictionary](../tests/toDictionary.tests.ts)
- [additional javascript specific unit tests for toDictionary](../tests/toDictionary.assertions.tests.ts)
