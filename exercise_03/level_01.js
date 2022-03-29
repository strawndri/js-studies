const dog = {
    name: 'Tutuba',
    legs: 4,
    color: 'Brown',
    age: 13,
    bark: function() {
    console.log('woof woof')
}
}

dog.breed = 'mongrel'
dog.getDogInfo = function() {
    for (key in dog) {
        console.log(`${key} -> ${dog[key]}`)
    }
}

dog.getDogInfo()