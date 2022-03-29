// 1.
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24, 28, 18]

ages.sort()

console.log(`Min age: ${Math.min(...ages)}`)
console.log(`Max age: ${Math.max(...ages)}`)

const middle = Math.round(ages.length / 2)
if (ages.length % 2 == 0) {
    var median = (ages[middle - 1] + ages[middle]) / 2
} else {
    var median = ages[middle]
}

console.groupCollapsed(`Median -> ${median}`)

var sum = 0;

for (var i = 0; i < ages.length; i++) {
    sum += ages[i]
}

const average = sum / ages.length

console.groupCollapsed(`Average -> ${average}`)
console.groupCollapsed(`Range -> ${Math.max(...ages) - Math.min(...ages)}`)

console.log(Math.abs(Math.max(...ages) - average))
console.log(Math.abs(Math.min(...ages) - average))
console.log('---')

// 2.country

console.log(ages.slice(10))

// 4.

if (ages.length % 2 == 0) {
    var i = ages.length / 2
} else {
    var i = Math.round(ages.length / 2)
}

const firstHalf = ages.splice(i)
const lastHalf = ages.splice(-i)

console.log(`First half: ${firstHalf}; Last half: ${lastHalf}`)
