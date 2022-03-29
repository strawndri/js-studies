
// 1.
const { countries } = require('./countries.js') ;
const { webTechs}  = require('./web_techs.js') ;

console.log(countries)
console.log(webTechs)

console.log('---')

// 2.

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

text = text.replaceAll(',', '')
text = text.replaceAll('.', '')
text = text.split(' ')
console.log(text)
console.log(`Length -> ${text.length}`)

// 3.  

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'

console.log(shoppingCart)
console.log('---')

// 4

if (countries.includes('Ethiopia')) {
    console.log('Ethiopia is in Coutries array!')
} else {
    countries.push('Ethiopia')
    console.log(countries)
}
console.log('---')


// 5

if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess')
} else {
    webTechs.push('Sass')
    console.log(webTechs)
}
console.log('---')


// 6

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullstack = frontEnd.concat(backEnd)
console.log(fullstack)