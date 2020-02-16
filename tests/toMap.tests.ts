import { toMap } from '../src/dictionaries'


describe('Convert array to js native Map', () => {
    const testData = [
        { key: 'alfa', values: [1, 2, 3], someNumber: 10, someString: 'aaa' },
        { key: 'beta', values: [4], someNumber: 20, someString: 'bbb' },
        { key: 'gamma', values: [5, 6], someNumber: 30, someString: 'ccc' }
    ]


    test('default params', () => {
        const res = testData.reduce(toMap(), new Map())

        expect(res).toEqual(new Map([
            ['alfa', [1, 2, 3]],
            ['beta', [4]],
            ['gamma', [5, 6]]
        ]))
    })


    test('custom keySelector', () => {
        const res = testData.reduce(toMap(x => x.someNumber), new Map())

        expect(res).toEqual(new Map([
            [10, [1, 2, 3]],
            [20, [4]],
            [30, [5, 6]]
        ]))
    })


    test('custom valueSelector', () => {
        const res = testData.reduce(toMap(undefined, x => x.someNumber), new Map())

        expect(res).toEqual(new Map([
            ['alfa', 10],
            ['beta', 20],
            ['gamma', 30]
        ]))
    })


    test('custom keySelector and valueSelector', () => {
        const res = testData.reduce(toMap(x => x.someString, x => x.key), new Map())

        expect(res).toEqual(new Map([
            ['aaa', 'alfa'],
            ['bbb', 'beta'],
            ['ccc', 'gamma']

        ]))
    })


    test('complex keySelector', () => {
        const res = testData.reduce(toMap(x => ({ num: x.someNumber, text: x.someString })), new Map())

        expect(res).toEqual(new Map([
            [{ num: 10, text: 'aaa' }, [1, 2, 3]],
            [{ num: 20, text: 'bbb' }, [4]],
            [{ num: 30, text: 'ccc' }, [5, 6]]
        ]))
    })


    test('keySelector that returns neither string nor number', () => {
        const res = testData.reduce(toMap(x => x.values, x => x.someNumber), new Map())

        expect(res).toEqual(new Map([
            [[1, 2, 3], 10],
            [[4], 20],
            [[5, 6], 30]
        ]))
    })


    test('complex valueSelector', () => {
        const res = testData.reduce(toMap(undefined, x => ({ num: x.someNumber, text: x.someString })), new Map())

        expect(res).toEqual(new Map([
            ['alfa', { num: 10, text: 'aaa' }],
            ['beta', { num: 20, text: 'bbb' }],
            ['gamma', { num: 30, text: 'ccc' }]
        ]))
    })
})
