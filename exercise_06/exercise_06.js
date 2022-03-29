const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

// 1. -------------------------

// products.forEach((e) => {
//     typeof(e.price) != 'number' ? console.log(0) : console.log(e.price)
// })

// 2. -------------------------

// products.forEach((e) => {

//     if (typeof(e.price) != 'number') {
//         console.log(`The price of ${e.product} is unknown`)
//     } 
    
//     else {
//         console.log(`The price of ${e.product} is ${e.price} euros`)

//     }
// })


// 3. -------------------------

// var sum = 0

// products.forEach(function (e) {

//     if (typeof(e.price) != 'number') {
//         e.price = 0
//     }

//     sum += e.price
// })

// console.log(sum)

// 4. -------------------------

// 5. -------------------------
// const productsWithPrice = products.filter((product) => (typeof(product.price )== 'number'))
// console.log(productsWithPrice)

// 6. -------------------------

// const sum1 = productsWithPrice.reduce((acc, cur, i) => {
//   return {price: acc.price + cur.price}
// })
// console.log(sum1)

// 7. -------------------------

const sum2 = products.reduce((acc, cur, i) => {
  typeof(cur.price) != 'number' ? cur.price = 0 : cur.price = cur.price 
  return {price: acc.price + cur.price}
})
console.log(sum2)

// 8. -------------------------

// const fistProduct = products.find((e) => (typeof(e.price) != 'number'))
// console.log(fistProduct.product)

// 9. -------------------------
// const fistProductIndex = products.findIndex((e) => (typeof(e.price) != 'number'))
// console.log(fistProductIndex)

// 10. -------------------------

// const someWithoutPrice = products.some((e) => (typeof(e) != 'number'))
// console.log(someWithoutPrice)

// 11. -------------------------

// const allWithoutPrice = products.every((e) => (typeof(e) == 'number'))
// console.log(allWithoutPrice)
