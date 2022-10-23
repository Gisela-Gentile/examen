"use strict";
exports.__esModule = true;
var Moto = /** @class */ (function () {
    function Moto(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadActual = 0;
    }
    Moto.prototype.acelerar = function () {
        this.velocidadActual += 15;
    };
    return Moto;
}());
exports["default"] = Moto;
