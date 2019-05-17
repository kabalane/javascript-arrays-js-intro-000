var chocolateBars = ["snikers", "hundred grand","kitkat", "skittles" ];
["Mars", ...chocolateBars]

function addElementToBeginningOfArray(array, element){
return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
return array.unshift(element);
}

function addElementToEndOfArray(array, element){
return [...array, element];
}
