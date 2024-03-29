/*
Question:
Given an array, return the first recurring character

example:
[1,4,7,6,4]
return 4

[7,2,5,5,2,9,7]
return 5

[1,2,3,4]
return undefined/nul/etc
*/

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

function firstRecurring4(input) { // time O(n), space O(n)
    const set = new Set()
    for (let i = 0; i < input.length; i++) {
        // console.log(set)
        if (set.has(input[i])) {
            return input[i]
        } else {
            set.add(input[i])
        }
    }
    return undefined
}

console.log(firstRecurring3([1, 2, 2, 1, 5]))
console.log(firstRecurring3([1, 5, 3, 4, 1, 3]))
console.log(firstRecurring3([1, 2, 3, 3, 1]))
console.log("")
console.log(firstRecurring2([1, 2, 2, 1, 5]))
console.log(firstRecurring2([1, 5, 3, 4, 1, 3]))
console.log(firstRecurring4([1, 2, 2, 1, 5]))

// node FirstRecurring.js
