import { maxOf, maxBy, max } from "../src/max-min"
const { objectContaining } = expect;


describe('maxBy', () => {

    test('Element with minimum value of a property in an array of objects', () => {
        const testData = [
            { aValue: 1 },
            { aValue: 3 },
            { aValue: 2 }
        ]

        const res = testData.reduce(maxBy(x => x.aValue), undefined)

        expect(res).toEqual(objectContaining({ aValue: 3 }))
    })

})


describe('maxOf', () => {

    test('Minimum value of a property in an array of objects', () => {
        const testData = [
            { aValue: 1 },
            { aValue: 2 },
            { aValue: 3 }
        ]

        const res = testData.reduce(maxOf(x => x.aValue), undefined)

        expect(res).toEqual(3)
    })


    test('Minimum value of a property in an empty array of objects', () => {
        const testData: Array<{ aValue: number }> = []

        const res = testData.reduce(maxOf(x => x.aValue), undefined)

        expect(res).toEqual(undefined)
    })


    test('Minimum value of an array of numbers', () => {
        const testData = [30, 20, 10]

        const res = testData.reduce(maxOf(x => x), undefined)

        expect(res).toEqual(30)
    })


    test('Minimum value of an empty array of numbers', () => {
        const testData: Array<number> = []

        const res = testData.reduce(maxOf(x => x), null)

        expect(res).toEqual(null)
    })


    test('Minimum value of an array of strings', () => {
        const testData = ["b", "a", "d", "c"]

        const res = testData.reduce(maxOf(x => x), null)

        expect(res).toEqual("d")
    })
    
})


describe('min', () => {

    test('Minimum of an array of numbers', () => {
        const testData = [200, 100, 300]

        const res = testData.reduce(max(), null)

        expect(res).toEqual(300)
    })

})