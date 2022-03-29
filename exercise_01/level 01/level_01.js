
// 1.
const emptyArray = Array();

// 2-3-4
const backpack = ['Book', 'Pen', 'Tablet', 'Bottle', 'Sweater']
const backpackLength = backpack.length
console.log(`My backpack -> first: ${backpack[0]}, middle: ${backpack[Math.floor(backpackLength / 2)]}, last: ${backpack[backpackLength - 1]}`)

console.log('----------------------------------------------------------------------')
// 5
const mixedDataTypes = ['Andrieli', 'Gonçalves', 16, 1.56, 'Brazil', true, backpack]
console.log(`Length of mixedDataTypes: ${mixedDataTypes.length}`)

console.log('----------------------------------------------------------------------')

// 6, 7, 8, 9, 10
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
const itCompaniesLength = itCompanies.length
console.log(`itCompanies -> ${itCompanies}`)
console.log(`itCompanies length -> ${itCompaniesLength}`)
console.log(`first: ${itCompanies[0]}, middle: ${Math.floor(itCompaniesLength / 2)}, last: ${itCompanies[itCompaniesLength - 1]}`)

for (var i = 0; i < itCompaniesLength; i++) {
    console.log(`${i} -> ${itCompanies[i]}`)
}

console.log('---')

// 11
for (var i = 0; i < itCompaniesLength; i++) {
    itCompanies[i] = itCompanies[i].toUpperCase()
    console.log(`${i} -> ${itCompanies[i]}`)
}

console.log('---')

// 12
for (var i = 0; i < itCompaniesLength; i++) {
    if (i == itCompaniesLength - 1) {
        console.log(`and ${itCompanies[i]} are big IT companies!`)
    } else {
        console.log(`${itCompanies[i]}, `)
    }
}

// 13
if (itCompanies.includes('Youtube')) {
    console.log('Youtube is found :)')
} else {
    console.log('Youtube is not found :(')
}

// 14 

console.log('---')

// 15
console.log(itCompanies.sort())

console.log('---')

// 16
console.log(itCompanies.reverse())
console.log('---')

// 17, 18
console.log(itCompanies.slice(3))
console.log(itCompanies.slice(-3))
console.log('---')


// 19 
var middle = Math.floor(itCompaniesLength/2)
console.log(itCompanies.slice(middle, middle+1))
console.log('---')

// 20, 21, 22, 23
console.log(itCompanies.splice(0, 1))
console.log(itCompanies.splice(middle, 1))
console.log(itCompanies.splice(-1, 1))
console.log(itCompanies.splice())

console.log('----------------------------------------------------------------------')