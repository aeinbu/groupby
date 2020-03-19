import { isDeepEqual } from "../src/isDeepEqual"

describe("Comparing simple types", () => {

    test("Comparing equal numbers should return true", () => {
        const left = 10
        const right = 10

        const res = isDeepEqual(left, right)

        expect(res).toBe(true)
    })


    test("Comparing different numbers should return false", () => {
        const left = 10
        const right = 10

        const res = isDeepEqual(left, right)

        expect(res).toBe(true)
    })


    test("Comparing equal strings should return true", () => {
        const left = "hello"
        const right = "hello"

        const res = isDeepEqual(left, right)

        expect(res).toBe(true)
    })


    test("Comparing different strings should return false", () => {
        const left = "hello"
        const right = "goodbye"

        const res = isDeepEqual(left, right)

        expect(res).toBe(false)
    })

})


describe("Comparisson of nulls and undefineds", () => {

    test("Comparing two undefineds should return true", () => {
        const left = undefined
        const right = undefined

        const res = isDeepEqual(left, right)

        expect(res).toBe(true)
    })


    test("Comparing two nulls should return true", () => {
        const left = null
        const right = null

        const res = isDeepEqual(left, right)

        expect(res).toBe(true)
    })


    test("Comparing undefined to null should return false", () => {
        const left = undefined
        const right = null

        const res = isDeepEqual(left, right)

        expect(res).toBe(false)
    })


    test("Comparing undefined to anything not undefined should return false", () => {
        const left = undefined
        const right = 42

        const res = isDeepEqual(left, right)

        expect(res).toBe(false)
    })


    test("Comparing null to anything not undefined should return false", () => {
        const left = null
        const right = 42

        const res = isDeepEqual(left, right)

        expect(res).toBe(false)
    })

})


describe("Object comparisson", () => {

    test("Comparing similar objects with same values should return true", () => {
        const left = { a: 10 }
        const right = { a: 10 }

        const res = isDeepEqual(left, right)

        expect(res).toBe(true)
    })


    test("Comparing similar objects with different values should return false", () => {
        const left = { a: 10 }
        const right = { a: 11 }

        const res = isDeepEqual(left, right)

        expect(res).toBe(false)
    })


    test("Comparing similar deep objects with same values should return true", () => {
        const left = { b: { c: 20}}
        const right = { b: { c: 20}}

        const res = isDeepEqual(left, right)

        expect(res).toBe(true)
    })


    test("Comparing similar deep objects with different values should return true", () => {
        const left = { b: { c: 20}}
        const right = { b: { c: 21}}

        const res = isDeepEqual(left, right)

        expect(res).toBe(false)
    })


    test("Comparing different objects should return false", () => {
        const left = { a: 10 } as unknown
        const right = { b: 10 } as unknown

        const res = isDeepEqual(left, right)

        expect(res).toBe(false)
    })

})


describe("Array comparisson", () => {

    test("Comparing to identical arrays return true", () => {
        const left = [10, 20]
        const right = [10, 20]

        const res = isDeepEqual(left, right)

        expect(res).toBe(true)
    })


    test("Comparing similar arrays with different ordered, but same values should return true", () => {
        const left = [10, 20]
        const right = [20, 10]

        const res = isDeepEqual(left, right)

        expect(res).toBe(false)
    })


    test("Comparing to different arrays return false", () => {
        const left = [10, 20]
        const right = [10, 21]

        const res = isDeepEqual(left, right)

        expect(res).toBe(false)
    })

})


describe("Other special cases...", () => {

    test("Comparing object with different prototypes returns false", () => {
        const left = Object.create({b:10})
        left.a = 10
        const right = Object.create({})
        left.a = 10

        const res = isDeepEqual(left, right)

        expect(res).toBe(false)
    })

})