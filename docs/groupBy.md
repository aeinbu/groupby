# groupBy

```javascript
import { groupBy, toDictionary } from "@aeinbu/groupby"

const people = [
    { name: "Tony", residence: "Rome" },
    { name: "Mary", residence: "Rome" },
    { name: "Peter", residence: "London" },
    { name: "Peter", residence: "Rome" },
    { name: "Elisabeth", residence: "London" },
    { name: "Francois", residence: "Paris" }
]

const resultsAsArray = people.reduce(
    groupBy(
        x => x.residence,  // First lambda is used to extraxt the key values, so this will group by the residence
        x => x.name        // Second lambda to determine object values to put in the groups, so in this example the group will contain all names for people in a residence city
        // This paramter is optional, and if it is skipped, the whole item is selected as the value
    ),
    []
)

// Result (Note how the output is a new array):
// [
//     [key: "Rome", values: ["Tony", "Mary", "Peter"],
//     ["key: ondon", values: ["Peter", "Elisabeth"],
//     ["key: Paris", values: ["Francois"]
// ]
```

See also:
- [unit tests for groupBy](../tests/groupBy.tests.ts)
