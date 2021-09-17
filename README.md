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

## Quickstart
```javascript
import { groupBy, toMap } from "@aeinbu/groupby"

const people = [
    {name: "Tony", residence: "Rome"},
    {name: "Mary", residence: "Rome"},
    {name: "Peter", residence: "London"},
    {name: "Peter", residence: "Rome"},
    {name: "Elisabeth", residence: "London"},
    {name: "Francois", residence: "Paris"}
]

const results = people
    .reduce(groupBy(x => x.name, x => x.residence), [])
    .reduce(toMap(x => x.name), new Map())

// With the same results as above:
// {
//     "Rome": ["Tony", "Mary", "Peter"],
//     "London": ["Peter", "Elisabeth"],
//     "Paris": ["Francois"]
// }
```

## Documentation
For more documentation, follow these links:
- [groupBy](./docs/groupBy.md)
- [distinct](./docs/distinct.md)
- [distinctBy](./docs/distinctBy.md)
- [toMap](./docs/toMap.md)
- [toDictionary](./docs/toDictionary.md)
- [isDeepEqual](./docs/isDeepEqual.md)

Also, look in the `tests` directory for more examples. The tests demonstrate at least another dozen different ways to use this library

## Semantic versioning
This package follows semantic versioning (See [semver.org](https://semver.org) for more info)

## License
This package is published under the MIT License. (See [LICENSE file](/LICENSE) for more info)
