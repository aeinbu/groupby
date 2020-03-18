import { distinct } from '../src/grouping'
const { arrayContaining } = expect


describe('distinct', () => {

    test('distincts numbers', () => {
        const testData = [10, 20, 30, 10]

        const res = testData.reduce(distinct(), [])

        expect(res).toHaveLength(3)
        expect(res).toEqual(arrayContaining([10, 20, 30]))
    })


    test('distincts strings', () => {
        const testData = ["hi", "hello", "hi"]

        const res = testData.reduce(distinct(), [])

        expect(res).toHaveLength(2)
        expect(res).toEqual(arrayContaining(["hi", "hello"]))
    })


    test('distinct objects', () => {
        const testData = [
            { p1: 10 },
            { p1: 20 },
            { p1: 10 }
        ]

        const res = testData.reduce(distinct(), [])

        expect(res).toHaveLength(2)
        expect(res).toEqual(arrayContaining([
            { p1: 10 },
            { p1: 20 }
        ]))
    })

})
