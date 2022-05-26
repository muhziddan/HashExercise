function firstRecurring(input) {// time O(n^2) space O(1) -> cannot handle first recurring inside
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i]
            }
        }
    }
    return undefined
}

function firstRecurring3(input) { // time O(n^2) space O(n)
    let newArray = []
    for (let i = 0; i < input.length; i++) {
        newArray.push(input[i])
        // console.log("iteration: " + i)
        for (let j = 0; j < newArray.length; j++) {
            // console.log("inside " + j)
            // console.log(newArray)
            if (newArray[j] === input[i + 1]) {
                console.log("called")
                return newArray[j]
            }
        }
    }
    return undefined
}

function firstRecurring2(input) { // time O(n), space O(n)
    let map = {}
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]] !== undefined) {
            return input[i]
        } else {
            map[input[i]] = i
        }
        console.log(map)
    }
    return undefined
}

console.log(firstRecurring3([1, 2, 2, 1, 5]))
console.log(firstRecurring3([1, 5, 3, 4, 1, 3]))
console.log(firstRecurring3([1, 2, 3, 3, 1]))
console.log("")
console.log("")
// console.log(firstRecurring2([1, 2, 2, 1, 5]))
console.log(firstRecurring2([1, 5, 3, 4, 1, 3]))

// node FirstRecurring.js