var chocolateBars = ["snickers","hudred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array,element) {
   var newArray = array.unshift(element)
   return newArray
}

function destructivlyAddElementToBeginningOFArray(array,element){
   return array.unshift(element)
}