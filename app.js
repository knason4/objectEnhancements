// In this exercise, you’ll refactor some ES5 code into ES2015. 
// Write your code in the sections with a 
// comment to “Write an ES2015 Version”.

// **** SAME KEYS AND VALUES *****

// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

// **** Write an ES2015 Version ****

const createInstructor = (firstName, lastName) => {
    return {
        firstName,
        lastName
    }
    
};


/* Computed Propery Names */

/*
var favoriteNumber = 42;
var instructor = {
    firstName: 'Colt'
}

instructor[favoriteNumber] = 'That is my favorite!';

*/

/* Write an ES2015 Version */

let favoriteNumber = 42;

const instructor = {
    firstName: 'Colt',
    [favoriteNumber]: 'That is my favorite!'
}

/* Object Methods */

/*
var instructor = {
    firstName: 'Colt',
    sayHi: function() {
        return 'Hi!
    },
    sayBye: function() {
        return this.firstName + "says bye!"
    }
}
*/

/* Write an ES2015 Version */

//instructor2.sayBye() returns 'Colt says bye!'
const instructor2 = {
    firstName: 'Colt',
    sayHi() {
        return 'Hi!'
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}

/* createAnimal Function 
Write a function which generates an animal object. The function
should accept 3 arguments:
    species: the species of animal('cat', 'dog')
    verb: a string used to name a function ('bark', 'bleet')
    noise: a string to be printed when above function is called ('woof', 'bleet')

    const d = createAnimal("dog", "bark", "Woooof!");
    {species: 'dog', bark: ƒ}
    d.bark()
    'Woooof!'
*/

/* Write an ES2015 Version */

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb] () {
            return noise;
        }
    }
}

