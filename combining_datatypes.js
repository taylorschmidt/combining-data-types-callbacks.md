// Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

const crayonBox = {
    colors: ['red', 'blue', 'purple']
  }
  console.log(crayonBox.colors[2])
  
  // Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
  
  const bottle = {
    cap: {
      material: 'metal',
      color: 'blue'
    } 
  }
  console.log(bottle.cap.material)
  
  // Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.
  
  const receipt = [
    {name: 'target', price: 50}, 
    'another thing']
  
  console.log(receipt[0].name)
  
  
  // Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.
  
  const apartmentBuilding = [
    ['john', 'joe', 'sam'], 
    5000,
    'another thing'
  ]
  console.log(apartmentBuilding[0][2])
  
  /////////////////////////////////////////

  // Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).
const knit = (object) => {
  return object
}

let myObject = {
  item: 'scarf',
  size: 6
}

knit(myObject)

// Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.

const crayonSelector = (object) => {
  return object
}
console.log(crayonSelector(crayonBox).colors[1])


// Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function

const powerButton = () => {
  const options = () => {
    console.log('select a song')
  }
  return options
}
powerButton()

