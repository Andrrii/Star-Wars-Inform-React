
// Simple Example
const arr = ['a','b','c']

const res = arr.reduceRight((prevResult,value) => {
    console.log(`prevResult = ${prevResult}`,
                    `value = ${value}`,
                    `will return ${prevResult + value}`)
    return prevResult + value
},"d")

console.log('result is ',res)

const compose = (...funcs) => (comp) => {
    return funcs.reduceRight(
        (prevResult,f) =>  f(prevResult),comp)
}

export default compose