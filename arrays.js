var chocolateBars = ["snikers", "hundred grand","kitkat", "skittles" ];
["Mars", ...chocolateBars]

function destructivelyAddElementToBeginningOfArray(array, element){
return [element, ...array];
}

function addElementToBeginningOfArray(array, element){
return array.unshift(element);
}
