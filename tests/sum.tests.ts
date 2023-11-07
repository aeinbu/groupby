import { sumOf, sum } from "../src/sum"


describe('sumBy', () => {

    test('Sum of a property in an array of objects', () => {
        const testData = [
            { aValue: 1 },
            { aValue: 2 },
            { aValue: 3 }
        ]

        const res = testData.reduce(sumOf(x => x.aValue), null)

        expect(res).toEqual(6)
    })

    test('Sum of a property in an empty array', () => {
        const testData: Array<{ aValue: number }> = []

        const res = testData.reduce(sumOf(x => x.aValue), undefined)

        expect(res).toEqual(undefined)
    })

    test('Sum of an array of numbers', () => {
        const testData = [30, 20, 10]

        const res = testData.reduce(sumOf(x => x), undefined)

        expect(res).toEqual(60)
    })

    test('Sum of an empty array of numbers', () => {
        const testData: Array<number> = []

        const res = testData.reduce(sumOf(x => x), null)

        expect(res).toEqual(null)
    })

})


describe('sum', () => {

    test('Sum an array of numbers', () => {
        const testData = [300, 20, 1]

        const res = testData.reduce(sum(), 0)

        expect(res).toEqual(321)
    })

})