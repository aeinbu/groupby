import { minBy, minOf, min } from "../src/max-min"
const { objectContaining } = expect;


describe('minBy', () => {

    test('Minimum value of a property in an array of objects', () => {
        const testData = [
            { aValue: 1 },
            { aValue: 2 },
            { aValue: 3 }
        ]

        const res = testData.reduce(minBy(x => x.aValue), null)

        expect(res).toEqual(objectContaining({ aValue: 1 }))
    })

})


describe('minOf', () => {

    test('Minimum value of a property in an array of objects', () => {
        const testData = [
            { aValue: 1 },
            { aValue: 2 },
            { aValue: 3 }
        ]

        const res = testData.reduce(minOf(x => x.aValue), null)

        expect(res).toEqual(1)
    })


    test('Minimum value of a property in an empty array of objects', () => {
        const testData: Array<{ aValue: number }> = []

        const res = testData.reduce(minOf(x => x.aValue), null)

        expect(res).toEqual(null)
    })


    test('Minimum value of an array of numbers', () => {
        const testData = [30, 20, 10]

        const res = testData.reduce(minOf(x => x), null)

        expect(res).toEqual(10)
    })


    test('Minimum value of an empty array of numbers', () => {
        const testData: Array<number> = []

        const res = testData.reduce(minOf(x => x), undefined)

        expect(res).toEqual(undefined)
    })


    test('Minimum value of an array of strings', () => {
        const testData = ["b", "a", "c"]

        const res = testData.reduce(minOf(x => x), null)

        expect(res).toEqual("a")
    })

})


describe('min', () => {

    test('Minimum of an array of numbers', () => {
        const testData = [200, 100, 300]

        const res = testData.reduce(min(), null)

        expect(res).toEqual(100)
    })

})