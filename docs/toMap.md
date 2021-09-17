# toMap
**Syntax**:  
`toMap(keySelector, valueSelector)`

**Arguments**:  

**Usage**:
```javascript
const cityArray = [
    { key: "Rome", values: ["Tony", "Mary", "Peter"] },
    { key: "London", values: ["Peter", "Elisabeth"] },
    { key: "Paris", values: ["Francois"] }
]

const cityDictionary = cityArray.reduce(
    toMap(
        x => x.name,   // First lambda to determine the property name
        x => x.values  // Second lambda to determine where to find the value to set that property to
        // This paramter is optional, an if omitted it will default to `x => x.values´ which would match the default output of `groupBy` above
    ),
    new Map()
)

// Result (See how the array is transformed to a map object):
// {
//     "Rome": ["Tony", "Mary", "Peter"],
//     "London": ["Peter", "Elisabeth"],
//     "Paris": ["Francois"]
// }
```

See also:
- [unit tests for toMap](../tests/toMap.tests.ts)
