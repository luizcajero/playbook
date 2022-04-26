class Pokemon { 
     constructor (name) {
         this.name = name
     }
//}
 //export function sayHello (message) {
//     console.log(message)
// }
 //export function sayMessage (message){
   //  console.log (message)
 //}
 sayHello () {
     console.log (`Mi pokemon ${this.name} te saludaaa!`)
 }
 sayMessage (message) {
     console.log  (`Mi pokemon ${this.name} dice: ${message}`)
 }
}

module.exports = Pokemon 