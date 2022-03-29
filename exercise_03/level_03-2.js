// 2. 

const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
  ]
  
function signUp(user) {
    
    for(var i = 0; i < users.length; i++) {

        if(users[i].username == user.username) {
            console.log(`You have already an account. Check it ${element}`)
        }

        else {
            users.push(user)
            break
        }
    }

}

const user = {
    _id: 'oqidgm',
    username: 'Andrieli',
    email: 'andrieli@andrieli.com',
    password: '001100',
    createdAt: Date(),
    isLoggedIn: false,
}

signUp(user)

function signIn(user) {
    
    users.forEach((element, i, arr) => {

        if((element.username == user.username) && (user.isLoggedIn == false)) {
            users[i].isLoggedIn = true
    }})
}

signIn(user)

console.log(users)

// ------------------------------------

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
]

console.log(products)

function rateProduct(username, productId, rate) {

  for (key in users) {
    if(users[key].username == username) {
      

      for (k in products) {
        if (products[k]._id == productId) {
          products[k].ratings.push({userId: users[key]._id, rate:rate})
        }
      }
    }
  }

} 

rateProduct('Andrieli', 'aegfal', 4.2)
console.log(products)

console.log('---')

function averageRating(productId) {

  let rates = 0;
  
  for (key in products) {
    var product = products[key]
    if (product._id == productId) {

      for (var i = 0; i < product.ratings.length; i++) {
        rates += product.ratings[i].rate
      }
    }
  }
  console.log(`Average rating of ${product.name} is ${rates}`)
}

averageRating('eedfcf')

console.log('---')

function likeProduct(username, productName) {

  let userId; 

  users.forEach((element, i, arr) => {
    if (element.username == username) {
      userId = element._id
    }
  })

  products.forEach((element, i, arr) => {
    if (element.name == productName) {
      if (element.likes.includes(userId)) {
        element.likes.splice(i, i+1)
      } else {
        element.likes.push(userId)
      }
    }
    console.log(products)
  })

}

likeProduct('Andrieli', 'mobile phone')
likeProduct('Asab', 'TV')
likeProduct('Asab', 'mobile phone')
likeProduct('Andrieli', 'mobile phone')