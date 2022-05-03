//Ejemplo 4: Objeto con Métodos / Example 4: Object with Methods
const myPet = {
    name: "Kanek",
 //This is a function that save as propertie
 sayHello: function () {
    // this.name refers to the object's propertie / this.name hace referencia a la propiedad del objeto
    console.log(`${this.name} te saluda en español!`)
 }
}

console.log("Ejemplo 4: Objeto con métodos / Example 4: Object with Methods")
myPet.sayHello()
