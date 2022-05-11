const contries7 = ['Mexico', 'Chile', 'SouthAfrica', 'Cameroon', 'Island']
const contriesContainingLand = contries7.filter ((country) => //This is a Function
country.includes('land') // Indicacion para solo filtrar elementos que incluyan land
)
console.log("Ejemplo 7: uso de filters para filtrar una lista de elementos")
console.log(contriesContainingLand)
const countriesEndsByia = contries7.filter((country) => country.endsWith('ia'))
console.log("Ejemplo 7: Paises que terminan con i")
console.log(countriesEndsByia)