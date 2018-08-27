var chocolateBars = ["snickers","hudred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array,element) {
   var newArray = [element, ...array]
   return newArray
}

function destructivelyAddElementToBeginningOfArray(array,element){
   return [element, ...array]
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element){
  return [...array, element]
}