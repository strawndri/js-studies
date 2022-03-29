// 1.
function solveQuadEquation(a, b, c) {

    let result = []

    let delta = (b * b) - (4 * a * c)

    if (a == 0) {
        result.push('You have to set a variable a > 0')
    }

    else {
        if (delta < 0) {
            result.push(`${Math.sqrt(-delta)}i`)
        } 
        
        else {
            let x1 = (- b + Math.sqrt(delta)) / (2 * a)
            let x2 = (- b - Math.sqrt(delta)) / (2 * a)
    
            result.push(x1)
            result.push(x2)
        }
    
    }
    return result
}

console.log(solveQuadEquation(1, -8, 12))
console.log('-----------------')

// 2.
function printArray(...args) {
    console.log(args)
}

printArray(1, 2, 3, 4, 5, 4, 3, 2, 1)
console.log('-----------------')

// 3. 

function showDateTime() {
    let time = new Date()
    console.log(`${time.getDate()}/${time.getMonth()}/${time.getFullYear()} - ${time.getHours()}:${time.getMinutes()}`)
}

showDateTime()
console.log('-----------------')

// 4. 

function swapValues(x, y) {
    let i = x;
    x = y
    y = i

    return console.log(`Before -> {x = ${y}, y = ${x}} | After -> {x = ${x}, y = ${y}}`)
}

swapValues(10, 2)
console.log('-----------------')

function reverseArray(...array) {

    for (var i = -1; -i <= array.length; i--) {
        console.log(array.at(i))
    }
}

reverseArray(1, 2, 3, 4, 5)
console.log('-----------------')

// 14.

function userIdGenerator() {

    let id = ''
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    
    for (var i = 0; i < 7; i++) {
        id += characters[Math.round(Math.random() * (characters.length - 1))]
    }

    return id
}

console.log(userIdGenerator())