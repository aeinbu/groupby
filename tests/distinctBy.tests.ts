import { distinctBy } from '../src/grouping'
import { isDeepEqual } from '../src/deepCompare'
const { arrayContaining } = expect


describe('distinctBy', () => {
    test('distinct objects with compare fn', () => {
        const testData = [
            { p1: 10 },
            { p1: 20 },
            { p1: 10 }
        ]

        const res = testData.reduce(distinctBy((left, right) => left.p1 === right.p1), [])

        expect(res).toHaveLength(2)
        expect(res).toEqual(arrayContaining([
            { p1: 10 },
            { p1: 20 }
        ]))
    })


    test('distinct objects with complex compare fn', () => {
        type TestType = { p1: number, p2: string }
        const testData = [
            { p1: 10, p2: 'a' },
            { p1: 10, p2: 'a' },
            { p1: 20, p2: 'a' },
            { p1: 20, p2: 'b' },
            { p1: 30, p2: 'a' }
        ]

        const compareFn = <T>(left: TestType, right: TestType) => left.p1 === right.p1 && left.p2 === right.p2
        const res = testData.reduce(distinctBy(compareFn), [])

        expect(res).toHaveLength(4)
        expect(res).toEqual(arrayContaining([
            { p1: 10, p2: 'a' },
            { p1: 20, p2: 'a' },
            { p1: 20, p2: 'b' },
            { p1: 30, p2: 'a' }
        ]))
    })


    test('distinct objects with isDeepEqual', () => {
        type TestType = { p1: number, p2: string }
        const testData = [
            { p1: 10, p2: 'a' },
            { p1: 10, p2: 'a' },
            { p1: 20, p2: 'a' },
            { p1: 20, p2: 'b' },
            { p1: 30, p2: 'a' }
        ]

        const res = testData.reduce(distinctBy(isDeepEqual), [])

        expect(res).toHaveLength(4)
        expect(res).toEqual(arrayContaining([
            { p1: 10, p2: 'a' },
            { p1: 20, p2: 'a' },
            { p1: 20, p2: 'b' },
            { p1: 30, p2: 'a' }
        ]))
    })

})
