import { groupBy } from '../src/grouping'
const { arrayContaining } = expect


describe('groupBy', () => {

    test('group a single property by a primitive key', () => {
        const testData = [
            { mySimpleKey: 'alfa', aValue: 1 },
            { mySimpleKey: 'alfa', aValue: 2 },
            { mySimpleKey: 'beta', aValue: 3 },
            { mySimpleKey: 'alfa', aValue: 3 }
        ]

        const res = testData.reduce(groupBy(x => x.mySimpleKey, x => x.aValue), [])

        expect(res).toEqual(arrayContaining([
            { key: 'alfa', values: [1, 2, 3] },
            { key: 'beta', values: [3] }
        ]))
    })


    test('group by an object key', () => {
        const testData = [
            { keypart1: 'alfa', keypart2: 10, aValue: 101},
            { keypart1: 'alfa', keypart2: 20, aValue: 102},
            { keypart1: 'beta', keypart2: 10, aValue: 103},
            { keypart1: 'beta', keypart2: 10, aValue: 104}
        ]

        const res = testData.reduce(groupBy(x => ({keypart1: x.keypart1, keypart2: x.keypart2}), x => x.aValue), [])

        expect(res).toEqual(arrayContaining([
            {
                key: {keypart1: "alfa", keypart2: 10},
                values: [101]
            },
            {
                key: {keypart1: "alfa", keypart2: 20},
                values: [102]
            },
            {
                key: {keypart1: "beta", keypart2: 10},
                values: [103, 104]
            }
        ]))
    })

})
