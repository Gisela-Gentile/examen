import Cat from "./Gato"
import Mamiferos from "./Mamiferos";
import Moto from "./Moto";
import Dog from "./Perros"
import MotoCarrera from "./MotoCarrera";

console.log("primer ejercicio:");
console.log("el sonido del gato es:");
let minino: Mamiferos = new Cat('Pocky');
 minino.makeSound(); // -> meow meow
 console.log("el sonido del perro es:");
 let firulais: Mamiferos = new Dog('Pocky');
 firulais.makeSound(); // -> wuff wuff

 console.log("tercer ejercicio:");
 let moto: Moto = new Moto ("Honda", "wave110");
 let motoCarrera: Moto= new MotoCarrera ("Honda", "Twister");

moto.acelerar();
motoCarrera.acelerar();
console.log(moto);
console.log(motoCarrera);