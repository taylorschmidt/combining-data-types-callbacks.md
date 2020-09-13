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