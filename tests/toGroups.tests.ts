import { toGroups } from "../src/grouping"

describe("group by on single string property", () => {

	type TIn = { mySimpleKey: string, aValue: number }
	const testData = [
		{ mySimpleKey: "alfa", aValue: 1 },
		{ mySimpleKey: "alfa", aValue: 2 },
		{ mySimpleKey: "beta", aValue: 3 },
		{ mySimpleKey: "alfa", aValue: 3 }
	]


	test("group by mySimpleKey", () => {
		type TOut = { mySimpleKey: string, values: number[] }
		const predicate = (curr: TIn) => (group: TOut) => group.mySimpleKey === curr.mySimpleKey
		const createGroup = (curr: TIn) => ({ mySimpleKey: curr.mySimpleKey, values: [] })
		const aggregate = (group: TOut, curr: TIn) => group.values.push(curr.aValue)
		const groupByMysimpleKey = toGroups(predicate, createGroup, aggregate)

		const res = testData.reduce(groupByMysimpleKey, [])

		expect(res).toEqual([
			{ "mySimpleKey": "alfa", "values": [1, 2, 3] },
			{ "mySimpleKey": "beta", "values": [3] },
		])
	})


	test("group by and count elements pr key", () => {
		type TOut = { mySimpleKey: string, count: number }
		const predicate = (curr: TIn) => (group: TOut) => group.mySimpleKey === curr.mySimpleKey
		const createGroup = (curr: TIn) => ({ mySimpleKey: curr.mySimpleKey, count: 0 })
		const aggregate = (group: TOut, curr: TIn) => group.count++
		const groupByMysimpleKey = toGroups(predicate, createGroup, aggregate)

		const res = testData.reduce(groupByMysimpleKey, [])

		expect(res).toEqual([
			{ mySimpleKey: "alfa", count: 3 },
			{ mySimpleKey: "beta", count: 1 },
		])
	})


	test("group same collection by something else (aValue)", () => {
		type TOut = { key: number, data: string[] }
		const predicate = (curr: TIn) => (group: TOut) => group.key === curr.aValue
		const createGroup = (curr: TIn) => ({ key: curr.aValue, data: [] })
		const aggregate = (group: TOut, curr: TIn) => group.data.push(curr.mySimpleKey)
		const groupByMysimpleKey = toGroups(predicate, createGroup, aggregate)

		const res = testData.reduce(groupByMysimpleKey, [])

		expect(res).toEqual([
			{ key: 1, data: ["alfa"] },
			{ key: 2, data: ["alfa"] },
			{ key: 3, data: ["beta", "alfa"] }
		])
	})
})


describe("group by on combined properties", () => {

	type TIn = { mySimpleKey: string, num: number, text: string }
	const testData = [
		{ mySimpleKey: "alfa", num: 1, text: "Hi!" },
		{ mySimpleKey: "alfa", num: 2, text: "Hello!" },
		{ mySimpleKey: "beta", num: 3, text: "Hi!" },
		{ mySimpleKey: "alfa", num: 3, text: "Hello!" }
	]


	test("group by two properties", () => {
		type TOut = { text: string, mySimpleKey: string, values: number[] }
		const predicate = (curr: TIn) => (group: TOut) => group.mySimpleKey === curr.mySimpleKey && group.text === curr.text
		const createGroup = (curr: TIn) => ({ mySimpleKey: curr.mySimpleKey, text: curr.text, values: [] })
		const aggregate = (group: TOut, curr: TIn) => group.values.push(curr.num)
		const groupBymySimpleKey = toGroups(predicate, createGroup, aggregate)

		const res = testData.reduce(groupBymySimpleKey, [])

		expect(res).toEqual([
			{
				text: "Hi!",
				mySimpleKey: "alfa",
				values: [1]
			},
			{
				text: "Hello!",
				mySimpleKey: "alfa",
				values: [2, 3]
			},
			{
				text: "Hi!",
				mySimpleKey: "beta",
				values: [3]
			}
		])
	})


	test("group by two properties combined into a key object", () => {
		type TOut = { keyObject: { text: string, mySimpleKey: string }, values: number[] }
		const predicate = (curr: TIn) => (group: TOut) => group.keyObject.mySimpleKey === curr.mySimpleKey && group.keyObject.text === curr.text
		const createGroup = (curr: TIn) => ({ keyObject: { mySimpleKey: curr.mySimpleKey, text: curr.text }, values: [] })
		const aggregate = (group: TOut, curr: TIn) => group.values.push(curr.num)
		const groupBymySimpleKey = toGroups(predicate, createGroup, aggregate)

		const res = testData.reduce(groupBymySimpleKey, [])

		expect(res).toEqual([
			{
				keyObject: {
					text: "Hi!",
					mySimpleKey: "alfa"
				},
				values: [1]
			},
			{
				keyObject: {
					text: "Hello!",
					mySimpleKey: "alfa"
				},
				values: [2, 3]
			},
			{
				keyObject: {
					text: "Hi!",
					mySimpleKey: "beta"
				},
				values: [3]
			}
		])
	})


	test("group full elements by two properties combined into a key object", () => {
		type TOut = { key: { text: string, mySimpleKey: string }, elements: { mySimpleKey: string, num: number, text: string }[] }
		const predicate = (curr: TIn) => (group: TOut) => group.key.mySimpleKey === curr.mySimpleKey && group.key.text === curr.text
		const createGroup = (curr: TIn) => ({ key: { mySimpleKey: curr.mySimpleKey, text: curr.text }, elements: [] })
		const aggregate = (group: TOut, curr: TIn) => group.elements.push(curr)
		const groupBymySimpleKey = toGroups(predicate, createGroup, aggregate)

		const res = testData.reduce(groupBymySimpleKey, [])

		expect(res).toEqual([
			{
				key: {
					text: "Hi!",
					mySimpleKey: "alfa"
				},
				elements: [
					{ mySimpleKey: "alfa", num: 1, text: "Hi!" }
				]
			},
			{
				key: {
					text: "Hello!",
					mySimpleKey: "alfa"
				},
				elements: [
					{ mySimpleKey: "alfa", num: 2, text: "Hello!" },
					{ mySimpleKey: "alfa", num: 3, text: "Hello!" }
				]
			},
			{
				key: {
					text: "Hi!",
					mySimpleKey: "beta"
				},
				elements: [
					{ mySimpleKey: "beta", num: 3, text: "Hi!" }
				]
			}
		])
	})

})
