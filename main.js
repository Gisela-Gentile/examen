"use strict";
exports.__esModule = true;
var Gato_1 = require("./Gato");
var Moto_1 = require("./Moto");
var Perros_1 = require("./Perros");
var MotoCarrera_1 = require("./MotoCarrera");
console.log("primer ejercicio");
console.log("el sonido del gato es:");
var minino = new Gato_1["default"]('Pocky');
minino.makeSound(); // -> meow meow
console.log("el sonido del perro es:");
var firulais = new Perros_1["default"]('Pocky');
firulais.makeSound(); // -> wuff wuff
console.log("tercer ejercicio");
var moto = new Moto_1["default"]("Honda", "wave110");
var motoCarrera = new MotoCarrera_1["default"]("Honda", "Twister");
moto.acelerar();
motoCarrera.acelerar();
console.log(moto);
console.log(motoCarrera);
