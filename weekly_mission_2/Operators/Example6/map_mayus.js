const contries6 = ['Brazil', 'Peru', 'Argentina', 'Ukraine', 'England']
const contriesFirstThreeLetters = contries6.map((country) => 
country.toUpperCase().slice(0, 3) //El metodo slice obtiene solo la longitud marcada del string
)
console.log("Ejemplo 6: Uso de map  para convertir todos los nombres de una lista en mayusculas")
console.log(contriesFirstThreeLetters)