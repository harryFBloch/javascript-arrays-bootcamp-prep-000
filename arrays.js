var chocolateBars = ["snickers","hudred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array,element) {
   console.log(array)
   var newArray = array.unshift(element)
   console.log(newArray)
   return newArray
}

function destructivlyAddElementToBeginningOFArray(array,element){
   return array.unshift(element)
}