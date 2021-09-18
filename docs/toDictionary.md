# toMap
**Syntax**:  
`toMap(keySelector, valueSelector)`

**Arguments**:  
- `keySelector` is a function used to extraxt the key values.  
  The keySelector must return either a string, number or Symbol.
  If you need to have a dictionary with object keys, see [toMap](./toMap.md).
  - For objects, `groupBy` will do a deep comparisson, comparing each property of the two
    objects, to determine if the represent the same group.
  - For arrays, `groupBy` will do a deep comparisson, comparing each element in the two
    arrays, to determine if the represent the same group.
- `valueSelector` is a function used to determine object values to put in the groups.  
  This paramter is optional, and if it is skipped, the whole item is selected as the value

**Usage**:
```javascript
const cityArray = [
    { city: "Rome", names: ["Tony", "Mary", "Peter"] },
    { city: "London", names: ["Peter", "Elisabeth"] },
    { city: "Paris", names: ["Francois"] }
]

const cityDictionary = cityArray.reduce(toDictionary(), new Map())

// Result is a standard JavaScript object, and can be used like this:
// cityDictionary.Rome returns ["Tony", "Mary", "Peter"]
// or
// cityDictionary["Rome"] returns ["Tony", "Mary", "Peter"]
```

**Remarks**:
The default values for `toMap`'s arguments use the `key`and `values` properties
in the collection. Since those are the properties that are used by `groupBy`, you can
omit the parametes to `toMap` to get the same result.

```javascript
const people = [
    { name: "Tony", residence: "Rome" },
    { name: "Mary", residence: "Rome" },
    { name: "Peter", residence: "London" },
    { name: "Peter", residence: "Rome" },
    { name: "Elisabeth", residence: "London" },
    { name: "Francois", residence: "Paris" }
]

const results = people.reduce(groupBy(x => x.residence, x => x.name), [])
                      .reduce(toDictionary(), new Map())

// Result is a standard JavaScript object, and can be used like this:
// cityDictionary.Rome returns ["Tony", "Mary", "Peter"]
// or
// cityDictionary["Rome"] returns ["Tony", "Mary", "Peter"]
```

**See also**:
- [unit tests for toDictionary](../tests/toDictionary.tests.ts)
- [additional javascript specific unit tests for toDictionary](../tests/toDictionary.assertions.tests.ts)
