# @aeinbu/groupby
Helper functions for doing \"group by\" type transformations on collections using reducers

## How to install
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
const people = [
	{name: "Tony", residence: "Rome"},
	{name: "Mary", residence: "Rome"},
	{name: "Peter", residence: "London"},
	{name: "Peter", residence: "Rome"},
	{name: "Elisabeth", residence: "London"},
	{name: "Francois", residence: "Paris"}
]

const resultsAsArray = people.reduce(x => x.name, x => x.residence)
// Result:
// [
//     [key: "Rome", values: ["Tony", "Mary", "Peter"],
//     ["Lkey: ondon", values: ["Peter", "Elisabeth"],
//     ["key: Paris", values: ["Francois"]
// ]

const resultsAsDictionary = resultsAsArray.reduce(toDictionary(x => name))
// Result:
// {
//     "Rome": ["Tony", "Mary", "Peter"],
//     "London": ["Peter", "Elisabeth"],
//     "Paris": ["Francois"]
// }
```

Since the reduction from groupBy is an array, the above two transforms can be chained, like this:
```javascript
const chainedResults = people
	.reduce(x => x.name, x => x.residence)
	.reduce(toDictionary(x => name))
// With the same results as above:
// {
//     "Rome": ["Tony", "Mary", "Peter"],
//     "London": ["Peter", "Elisabeth"],
//     "Paris": ["Francois"]
// }
```

Also, look in the `tests` directory for more examples. The tests demonstrate at least a dosen different ways to use this library