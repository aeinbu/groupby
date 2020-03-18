import { groupBy } from '../src/grouping'
const { arrayContaining } = expect

describe('groupBy', () => {
    const testData = [
        { mySimpleKey: 'alfa', aValue: 1, bValue: 10, cValue: 100 },
        { mySimpleKey: 'alfa', aValue: 2, bValue: 20, cValue: 200 },
        { mySimpleKey: 'beta', aValue: 3, bValue: 30, cValue: 300 },
        { mySimpleKey: 'alfa', aValue: 3, bValue: 31, cValue: 301 }
    ]


    test('group full object by a simple key', () => {
        const res = testData.reduce(groupBy(x => x.mySimpleKey), [])

        expect(res).toEqual(arrayContaining([
            {
                key: 'alfa',
                values: [
                    { mySimpleKey: 'alfa', aValue: 1, bValue: 10, cValue: 100 },
                    { mySimpleKey: 'alfa', aValue: 2, bValue: 20, cValue: 200 },
                    { mySimpleKey: 'alfa', aValue: 3, bValue: 31, cValue: 301 }
                ]
            },
            {
                key: 'beta',
                values: [
                    { mySimpleKey: 'beta', aValue: 3, bValue: 30, cValue: 300 }
                ]
            }
        ]))
    })


    test('group a single property by a simple key', () => {
        const res = testData.reduce(groupBy(x => x.mySimpleKey, x => x.aValue), [])

        expect(res).toEqual(arrayContaining([
            { key: 'alfa', values: [1, 2, 3] },
            { key: 'beta', values: [3] }
        ]))
    })
})
