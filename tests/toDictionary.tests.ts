import { toDictionary } from "../src/dictionaries"


describe("Convert array to js object", () => {

	const testData = [
		{ key: "alfa", values: [1, 2, 3], someNumber: 10, someString: "aaa" },
		{ key: "beta", values: [4], someNumber: 20, someString: "bbb" },
		{ key: "gamma", values: [5, 6], someNumber: 30, someString: "ccc" }
	]


	test("default params", () => {
		const res = testData.reduce(toDictionary(), {})

		expect(res).toEqual({
			alfa: [1, 2, 3],
			beta: [4],
			gamma: [5, 6]
		})
	})


	test("custom keySelector", () => {
		const res = testData.reduce(toDictionary(x => x.someNumber), {})

		expect(res).toEqual({
			10: [1, 2, 3],
			20: [4],
			30: [5, 6]
		})
	})


	test("custom valueSelector", () => {
		const res = testData.reduce(toDictionary(undefined, x => x.someNumber), {})

		expect(res).toEqual({
			alfa: 10,
			beta: 20,
			gamma: 30
		})
	})


	test("custom keySelector and valueSelector", () => {
		const res = testData.reduce(toDictionary(x => x.someString, x => x.key), {})

		expect(res).toEqual({
			aaa: "alfa",
			bbb: "beta",
			ccc: "gamma"
		})
	})


	test("keySelector that returns neither string or number is not allowed", () => {
		expect(() => {
			testData.reduce(toDictionary(x => x.values), {})
		}).toThrow()
	})


	test("complex valueSelector", () => {
		const res = testData.reduce(toDictionary(undefined, x => ({ num: x.someNumber, text: x.someString })), {})

		expect(res).toEqual({
			alfa: { num: 10, text: "aaa" },
			beta: { num: 20, text: "bbb" },
			gamma: { num: 30, text: "ccc" }
		})
	})

})
