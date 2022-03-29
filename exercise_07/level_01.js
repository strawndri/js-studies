// 1.  

class Animal {
    constructor(firstName, lastName, from, favoriteFood, favoriteToy, isAdopted, description) {
        this.firstName = 'Tutuba'
        this.lastName = 'Gonçalves'
        this.from = 'Brazil'
        this.favoriteFood = 'Meat'
        this.favoriteToy = 'Everything she finds'
        this.isAdopted = 'Yes'
        this.description = ['Brown fur', 'Big size']
    }
    get getFullName() {
        return(`${this.firstName} ${this.lastName}`)
    }
    get getDescription() {
        return this.description
    }
}


const animal = new Animal()
console.log(animal)
console.log(animal.getDescription)

// 2.  

class Dog extends Animal {
   constructor(firstName, lastName, from, favoriteFood, favoriteToy, isAdopted, description, breed) {
       super(firstName, lastName, from, favoriteFood, favoriteToy, isAdopted, description,)
       this.breed = 'Mutt'
   }
}

const dog = new Dog()
console.log(dog)