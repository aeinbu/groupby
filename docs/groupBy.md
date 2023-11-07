# groupBy
Used to group a collection of objects by a given property or set of properties.

**Syntax**:  
`groupBy(keySelector, valueSelector)`  
Usage in a reducer:  
`array.reduce(groupBy(keySelector, valueSelector))`

**Arguments**:  
- `keySelector` is a function used to extraxt the key values.  
  The keySelector can return any type of value, even an object or an array.
  - For objects, `groupBy` will do a deep comparisson, comparing each property of the two
  objects, to determine if the represent the same group.
  - For arrays, `groupBy` will do a deep comparisson, comparing each element in the two
  arrays, to determine if the represent the same group.
- `valueSelector` is a function used to determine object values to put in the groups.  
  This paramter is optional, and if it is skipped, the whole item is selected as the value

**Usage**:
```javascript
import { groupBy } from "@aeinbu/groupby"

const people = [
    { name: "Tony", residence: "Rome" },
    { name: "Mary", residence: "Rome" },
    { name: "Peter", residence: "London" },
    { name: "Peter", residence: "Rome" },
    { name: "Elisabeth", residence: "London" },
    { name: "Francois", residence: "Paris" }
]

const results = people.reduce(groupBy(x => x.residence, x => x.name), [])

// Result (Note how the output is a new array):
// [
//     {"key": "Rome", values: ["Tony", "Mary", "Peter"],}
//     {"key": "London", values: ["Peter", "Elisabeth"],}
//     {"key": "Paris", values: ["Francois"]}
// ]
```
**Remarks**:  
If you want the results of a `groupBy` operation behave like a lookup, you can
use `toMap` (or `toDictionary`), like show in the following example.
```javascript
import { groupBy, toMap } from "@aeinbu/groupby"

const people = [/* same array as in previous sample*/ ]

const results = people
                    .reduce(groupBy(x => x.residence, x => x.name), [])
                    .reduce(toMap(), new Map())

// Result are now a Map, and you can select a group by its key:
results.get("Rome") // ["Tony", "Mary", "Peter"]
```

**See also**:
- [toMap](./toMap.md)
- [toDictionary](./toDictionary.md)
- [unit tests for groupBy](../tests/groupBy.tests.ts)
