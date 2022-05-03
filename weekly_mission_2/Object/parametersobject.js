const pet = {
    name: "Ramoncito",
    sayHelloToMyPet: function (yourPet){
        console.log(`${this.name} say's hello to ${yourPet}`)
    }
}
console.log ("Ejemplo 5: Objeto con método que recibe paramétros / Example 5: Object with method that receives parameters")
pet.sayHelloToMyPet("Kanek")
