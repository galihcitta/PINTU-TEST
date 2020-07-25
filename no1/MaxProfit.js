const maxDifference = (bitcoin) => {
    let maxDif = null, min = null, max = null
    
    for (let i = 0; i < bitcoin.length; i++) {
        for (let j = i + 1; j < bitcoin.length; j++) {
            if (bitcoin[i] < bitcoin[j] && maxDif < (bitcoin[j] - bitcoin[i])) {
                maxDif = bitcoin[j] - bitcoin[i]
                min = i + 1
                max = j + 1
            }
        }
    }
    let res = {
        finalDif: maxDif === null ? `the maximum profit Jacky can make is: 0` : `the maximum profit Jacky can make is: $${maxDif},`,
        finalMin: min === null ? '' : ` he will buy at ${min}th hour`,
        finalMax: max === null ? '' : ` and he will sell at ${max}th hour`
    }
    return res     
}

let bitcoinPerHour1 = [3, 2, 1, 5, 6, 2]
let bitcoinPerHour2 = [5, 4, 3, 2, 1]
let bitcoinPerHour3 = [2, 3, 5, 4, 10, 8, 9, 7, 1, 11, 6]

let res1 = maxDifference(bitcoinPerHour1)
console.log(`${res1.finalDif}${res1.finalMin}${res1.finalMax}`)