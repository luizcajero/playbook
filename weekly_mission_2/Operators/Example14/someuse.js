//lista de elementos
const bools = [true, true, false, true]
//Uso de Some para ver si al menos uno de los elementos es false
const areSomeTrue = bools.some ((b) => b === false)
console.log("Ejemplo 14: Alguno de los elementos en el array es false " + areSomeTrue) // true