const sixFactor = (totalNumber) => {
    
    let factorize = 0
    let numberOfFactor

    for (let i = 1; i < totalNumber; i++) {
        numberOfFactor = 0
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                numberOfFactor++
            }

            if (numberOfFactor > 6) {
                break
            }
        }
        if (numberOfFactor === 6) {
            factorize++
        }
    }
    return factorize
}

//console.log(sixFactor(128))
console.log(sixFactor(262144))