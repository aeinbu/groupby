import { toDictionary } from "../src/dictionaries"


describe("Test assertions for when NOT using typescript", () => {

	const testData = [
		{ key: "alfa", values: [1, 2, 3], someNumber: 10, someString: "aaa" },
		{ key: "beta", values: [4], someNumber: 20, someString: "bbb" },
		{ key: "gamma", values: [5, 6], someNumber: 30, someString: "ccc" }
	]
	
	test("complex keySelector is not allowed", () => {
		expect(()=>{
			testData.reduce(toDictionary(x => ({num: x.someNumber, text: x.someString})), {})
		}).toThrow("Invalid keySelector in toDictionary: Running keySelector on an object in the input collection collection produced an invalid key")
	})

})
