/*
NOTES
HASH good for set and get
ada hash tipe map yang mementingkan order
ada juga hash tipe set yang sama kaya map, cuman hanya key aja ga ad avalue
*/

// let user = {
//     age: 30,
//     name: "Wut",
//     female: true,
//     scream: function() {
//         console.log('wtf');
//     }
// }

// console.log(user.age)
// console.log(user.name)
// // console.log(user.scream())
// user.scream()
// user.height = 170
// console.log(user)

class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }

    _hash(key) { // O(1) bcz its very fast
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }

    set(key, value) { // O(1)
        let address = this._hash(key)
        if (!this.data[address]) {
            this.data[address] = []
        }
        this.data[address].push([key, value])
        return this.data
    }

    get(key) { // O(1) most of the time, tapi bisa O(n) semisal key-value pair dalam satu address numpuk (akibat collision) yang terjadi gegara size hash dikit
        let address = this._hash(key)
        const currentBucket = this.data[address]
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        }
        return undefined
    }

    delete(key) {
        let address = this._hash(key)
        const currentBucket = this.data[address]
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    currentBucket.splice(i, 1)
                    if (currentBucket.length === 0) {
                        console.log("called")
                        this.data.splice(address, 1)
                    }
                }
            }
        }
        return undefined
    }

    getKeys() { // O(n^2)
        const keyArray = []
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                if (this.data[i].length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        if (this.data[i][j]) {
                            keyArray.push(this.data[i][j][0])
                        }
                    }
                } else {
                    keyArray.push(this.data[i][0][0])
                }
            }
        }
        return keyArray
    }

    // getKeys2() {
    //     if (!this.data.length) {
    //         return undefined
    //     }

    //     let result = []
    //     // loop through all the elements
    //     for (let i = 0; i < this.data.length; i++) {
    //         // if it's not an empty memory cell
    //         if (this.data[i] && this.data[i].length) {
    //             // but also loop through all the potential collisions
    //             if (this.data.length > 1) {
    //                 for (let j = 0; j < this.data[i].length; j++) {
    //                     result.push(this.data[i][j][0])
    //                 }
    //             } else {// this will never be called
    //                 result.push(this.data[i][0])
    //             }
    //         }
    //     }
    //     return result;
    // }

    getValues() {
        const allValues = []
        if (!this.data.length) {
            return "Empty Array"
        }

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                if (this.data[i].length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        allValues.push(this.data[i][j][1])
                    }
                } else {
                    allValues.push(this.data[i][0][1])
                }
            }
        }
        return allValues
    }
}

// const myHashTable = new HashTable(2)
// // console.log(`here ${myHashTable.data}`)
// // const newHash = new HashTable(0)
// myHashTable.set('grapes', 100)
// myHashTable.set('apple', 10)
// myHashTable.set('banana', 20)
// console.log(myHashTable.get('grapes'))
// console.log(myHashTable.data)
// console.log("")
// console.log("")
// myHashTable.delete('grapes')
// myHashTable.delete('banana')
// console.log(myHashTable.get('banana'))
// console.log(myHashTable.data)
// // console.log(myHashTable.getKeys())
// console.log(myHashTable.getKeys2())

const myNewTable = new HashTable(5)

myNewTable.set('grapes', 100)
myNewTable.set('apple', 10)
myNewTable.set('banana', 20)
myNewTable.set('pineapple', 13)
myNewTable.set(true, `i dunno`)

console.log(myNewTable.data)

// console.log(myNewTable.getKeys2())
console.log(myNewTable.getValues())