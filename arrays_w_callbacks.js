const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']


// Every
// Determine if every number is greater than or equal to 0
const greaterEqualFour = (element) => {
  return element >= 4
}
nums.every(greaterEqualFour)


// determine if every word shorter than 8 characters
const shorterEight = (word) => {
  return word.length < 8
}
panagram.every(shorterEight)

// Filter
// filter the array for numbers less than 4
const smallerThan = (num) => {
   return num < 4
}
nums.filter(smallerThan)
//or
const smallerThanFour = nums.filter(element => {
  if (element < 4) {
    return true
  }
})
console.log(smallerThanFour)

// filter words that have an even length
const evenLength = panagram.filter(element => {
  if (element.length % 2 === 0) {
    return true
  }
}) 
console.log(evenLength)

////////////////////////////////////////////////
// Find
// Find the first value divisible by 5

function divFive(element)  {
  return element % 5 === 0
}

nums.find(divFive)

//or

nums.find(element => {
  return element % 5 === 0
})

// find the first word that is longer than 5 characters
//there are no words longer than 5 characters...

panagram.find(element => {
  return element.length > 5
})

/////////////////////////////////////
// Find Index
// find the index of the first number that is divisible by 3
nums.findIndex(element => {
  return element % 3 === 0
})

// find the index of the first word that is less than 2 characters long
panagram.findIndex(element => {
  return (element.length < 2)
})
//returns -1 because there isnt a word less than 2 characters

//////////////////////////////////
//ForEach
// console.log each value of the nums array multiplied by 3
nums.forEach(element => {
  console.log(element*3)
})
// console.log each word with an exclamation point at the end of it
panagram.forEach(element => {
  console.log(element + '!')
})

///////////////////////////////
//Map
// make a new array of each number multiplied by 100
nums.map(element => {
  return element*100
})

// make a new array of all the words in all uppercase
panagram.map(element => {
  let string = element.toString()
  return string.toUpperCase()
})
/////////////////////////////////////////
// Some
// Find out if some numbers are divisible by 7
nums.some(element => {
  return element % 7 === 0
})
// Find out if some words have the letter a in them
panagram.some(element => {
  let string = element.toString()
  return string.includes('a')
})
/////////////////////////////////////
// Hungry for More
// Reduce
// Add all the numbers in the array together using the reduce method
nums.reduce(function(a, b){
  return a+b
}, 0)
// concatenate all the words using reduce
panagram.reduce((a,b){
  return a.concat(' ', b)
});

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Sort
// Try to sort without any arguments, do you get what you'd expect with the numbers array?
console.log(nums.sort())
//no! it moved 0 to the front, as expected, but also moved 10 over to the third position. it must only look at the first value.

// Try to sort without any arguments, do you get what you'd expect with the words array?
console.log(panagram.sort())
//no! it most only work on lower-case letters. "The" didnt change positions but "the" did.

// Sort the numbers in ascending order
nums.sort((a, b) => {
  return a-b
})

// Sort the numbers in descending order
nums.sort((a, b) => {
  return b-a
})

// Sort the words in ascending order
panagram.sort((a, b) => {
  let string = a.toUpperCase()
  let stringB = b.toUpperCase()
  if (string > stringB) {
    return 1
  } else {
    return -1
  }
})

// Sort the words in descending order
panagram.sort((a, b) => {
  let string = a.toUpperCase()
  let stringB = b.toUpperCase()
  if (stringB > string) {
    return 1
  } else {
    return -1
  }
})


const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Array Methods Challenge Problems
// isPanagram
// Using the following array - test whether each letter a-z (case insensitive) is used at least once

//here is my attempt -- I know this is just testing whether the two arrays have the same letter. not sure how to go about seeing if each letter is used once. I'm guessing the forEach or every array function.
const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const alphaArray = alphabet.split('')
const newPan = panagram.join('')
const panArray = newPan.split('')
for (let i = 0; i<panArray.length; i++) {
  for(let i = 0; i<alphaArray.length; i++) {
      if (alphaArray[i] === panArray[i])
      console.log(true)
  }
} 

// Working with data

// filter for products with a price that is less than 10, using the array below:
// sort alphabetically by product name
const products = [
      {
        "name": "allen wrench",
        "price": 2.99,
        "description": "handy tool"
      },
      {
        "name": "cornucopia",
        "price": 5.99,
        "description": "festive holiday decoration"
      },
      {
        "name": "banana",
        "price": 0.99,
        "description": "full of potassium"
      },
      {
        "name": "guillotine (cigar)",
        "price": 10.59,
        "description": "behead your stub"
      },
      {
        "name": "jack-o-lantern",
        "price": 3.99,
        "description": "spooky seasonal fun"
      },
      {
        "name": "doggie treat (box)",
        "price": 5.99,
        "description": "fido loves 'em"
      },
      {
        "name": "egg separator",
        "price": 3.99,
        "description": "it separates yolks from whites"
      },
      {
        "name": "LED lightbulb",
        "price": 6.55,
        "description": "It's super-efficient!"
      },
      {
        "name": "owl pellets",
        "price": 3.99,
        "description": "Don't ask what they used to be."
      },
      {
        "name": "flag",
        "price": 5.99,
        "description": "catches the breeze"
      },
      {
        "name": "hair brush",
        "price": 6.99,
        "description": "fine boar bristles"
      },
      {
        "name": "iridium (one gram)",
        "price": 19.36,
        "description": "corrosion-resistant metal"
      },
      {
        "name": "quark",
        "price": 0.01,
        "description": "Very small"
      },
      {
        "name": "turtleneck",
        "price": 19.99,
        "description": "available in black and slightly-darker black"
      },
      {
        "name": "kaleidoscope",
        "price": 8.25,
        "description": "tube with moving plastic pieces inside"
      },
      {
        "name": "mitt (leather)",
        "price": 15,
        "description": "regulation sized"
      },
      {
        "name": "nothing",
        "price": 10,
        "description": "Hey, if you pay us, we won't ask any questions."
      },
      {
        "name": "violin",
        "price": 2000,
        "description": "Talk about a JS fiddle..."
      },
      {
        "name": "yoyo",
        "price": 1,
        "description": "We had to pull some strings to get this one in."
      },
      {
        "name": "pincushion",
        "price": 1.99,
        "description": "You'll get 'stuck' on it"
      },
    ]

    const smallPrice = products.filter(element => {
      if(element.price < 10) {
        return true
      }
    })

console.log(smallPrice)


//my attempt at sorting by product name
const alpha = products.sort((a, b) => {
  let aUpper = a.name.toUpperCase()
  let bUpper = b.name.toUpperCase()
  if (aUpper > bUpper) {
    return 1
  } else {
    return -1
  }
})
 
console.log(alpha)
