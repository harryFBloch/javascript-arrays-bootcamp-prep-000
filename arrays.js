var chocolateBars = ["snickers","hudred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array,element) {
   var newArray = [element, ...array]
   return newArray
}

function destructivelyAddElementToBeginningOfArray(array,element){
   return array.unshift(element)
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element){
  return [...array, element]
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array 
}

function removeElementFromEndOfArray(array){
  var newArray = array.slice(0, array.length - 1)
}