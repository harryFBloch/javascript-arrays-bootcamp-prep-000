var chocolateBars = ["snickers","hudred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array,element) {
   var newArray = [element, ...array]
   return newArray
}

function destructivelyAddElementToBeginningOfArray(array,element){
   return array[0] = element
}