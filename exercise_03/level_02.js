const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

let max = 0
let user = ''

for (key in users) {

    if(users[key].skills.length > max) {
        max = users[key].skills.length
        user = key
    }
}

console.log(user)

console.log('---')

var isLogged = 0;
var pts = 0;

for (key in users) {

    if (users[key].isLoggedIn === true) {
        isLogged += 1
    }

    if (users[key].points >= 50) {
        pts += 1
    }
}

console.log(isLogged, pts)
console.log('---')
var skills = []

// 3. MERN -> MongoDB, Express, React, Node
for (key in users) {
    skills = users[key].skills
    if (skills.includes('MongoDB', 'Express', 'React', 'Node')) {
        console.log(`MERN: ${key}`)
    }
}

console.log('---')

// 4.
users['Andrieli'] = {
    email: 'andrieliluci@gmail.com',
    skills: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'React', 'Python'],
    age: 16,
    isLoggedIn: true,
    points: 20
}

// console.log(users)
console.log('---')

// 5.
console.log(Object.keys(users))

// 6.
console.log(Object.values(users))
