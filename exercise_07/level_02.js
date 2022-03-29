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

class Dog extends Animal {
   constructor(firstName, lastName, from, favoriteFood, favoriteToy, isAdopted, description, breed) {
       super(firstName, lastName, from, favoriteFood, favoriteToy, isAdopted, description,)
       this.breed = 'Mutt'
   }

   getFullName() {
    return(`${this.lastName.toUpperCase()}, ${this.firstName}`)
   }
}

const dog = new Dog()
console.log(dog.getFullName())