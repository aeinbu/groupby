# @aeinbu/groupby

Lightweight and non-intrusive functions for doing \"group by\" and \"distinct\" (aka. \"unique\") transformations on collections using reducers

- The functions are lightweight, as they are small and don't make you bring along lots of functions you don't need.
- The functions are flexible since you can choose how to best represent your grouped data
  - An array of key-value pairs that are easy to further process using `.map(...)`, `.filter(...)` and other built-in array functions
  - A dictionary in the shape of a standard javascript object or an ES2015 built-in `Map`
- These functions run just as well in a browser as they do in nodejs.
- The package is non-intrusive, as it doesn't extend arrays adding new and non-standard methods to them.
  - This is done by having functions that you use with `.reduce(...)` on arrays.
- @types are included for better discoverability during development when you use editors with javascript/typescript intellisence support


## How to install <img alt="npm (scoped)" src="https://img.shields.io/npm/v/@aeinbu/groupby">

With npm
```shell
npm install @aeinbu/groupby
```
...or with yarn
```shell
yarn add @aeinbu/groupby
```

## How to use
```javascript
import { groupBy, toDictionary } from "@aeinbu/groupBy"

const people = [
    {name: "Tony", residence: "Rome"},
    {name: "Mary", residence: "Rome"},
    {name: "Peter", residence: "London"},
    {name: "Peter", residence: "Rome"},
    {name: "Elisabeth", residence: "London"},
    {name: "Francois", residence: "Paris"}
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
//     [{"key": "Rome", values: ["Tony", "Mary", "Peter"]},
//     [{"key: "London", values: ["Peter", "Elisabeth"]},
//     [{"key: "Paris", values: ["Francois"]}
// ]

const resultsAsDictionary = resultsAsArray.reduce(
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

Since the reduction from `groupBy` is an array, the above two transforms can be chained and shortened (using a default parameter in toDictionary), like this:
```javascript
import { groupBy, toDictionary } from "@aeinbu/groupBy"

//...

const chainedResults = people
    .reduce(groupBy(x => x.name, x => x.residence), [])
    .reduce(toDictionary(x => x.name), {})
// With the same results as above:
// {
//     "Rome": ["Tony", "Mary", "Peter"],
//     "London": ["Peter", "Elisabeth"],
//     "Paris": ["Francois"]
// }
```


There is also a `toMap` reducer, so you can create a ES2015 `Map` instead of an ordinary object:
```javascript
import { groupBy, toMap } from "@aeinbu/groupBy"

//...

const chainedResults = people
    .reduce(groupBy(x => x.name, x => x.residence), [])
    .reduce(toMap(x => x.name), new Map())
// With the same results as above:
// {
//     "Rome": ["Tony", "Mary", "Peter"],
//     "London": ["Peter", "Elisabeth"],
//     "Paris": ["Francois"]
// }
```

Also, look in the `tests` directory for more examples. The tests demonstrate at least another dosen different ways to use this library

## Semantic versioning
This package follows semantic versioning (See [semver.org](https://semver.org) for more info)

## License
This package is published under the MIT License. (See [LICENSE file](/LICENSE) for more info)