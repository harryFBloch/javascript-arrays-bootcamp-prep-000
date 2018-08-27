var chocolateBars = ["snickers","hudred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array,element) {
   var newArray = [element, ...array]
   return newArray
}

function destructivlyAddElementToBeginningOFArray(array,element){
   array[0] = element
}