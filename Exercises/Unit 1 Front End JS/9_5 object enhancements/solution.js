
/* original */
function createInstructor(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    }
}

/* ES 2015 */
function createInstructor(firstName, lastName) {
    return {
        firstName, lastName
    }
}

/* original */
var favoriteNumber = 42;

var instructor = {
    firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

/* ES 2015 */
var instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"

}

/* original */
var instructor = {
    firstName: "Colt",
    sayHi: function () {
        return "Hi!";
    },
    sayBye: function () {
        return this.firstName + " says bye!";
    }
}

/* ES 2015 */
var instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}


/* original */
const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

/* ES 2015 */

const createAnimal = (species, verb, noise) => {
    return {
    species,
    [verb]() {
        return noise
    }}
}