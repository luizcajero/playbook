// 1.Creación de un objeto con propiedades

let myCar = new Object (); // creación de un objeto 
myCar.make = 'Ford'; //Guardando un valor dentro de un objeto creado 
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar) // Imprimiendo objeto (myCar)

// 2. Declaración de un objeto con variables locales y públicas 

const myModule = (() => {

 // variables de contexto local
 
    const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
    const privateBar = [1,2,3,4]
    const baz = "Soy el valor que va a ser expuesto"

// Variable para guardar variables locales
    const exported = {
        publicFoo: "Valor público, pueden verme desde donde me llamen"
        publicBar: "Otro valor público"
            publicBaz: baz 
    }

// Exposición de variables locales 
    return exported
})()

console.log (myModule)
