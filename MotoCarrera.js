"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Moto_1 = require("./Moto");
var MotoCarrera = /** @class */ (function (_super) {
    __extends(MotoCarrera, _super);
    function MotoCarrera(marca, modelo) {
        return _super.call(this, marca, modelo) || this;
    }
    MotoCarrera.prototype.acelerar = function () {
        this.velocidadActual += 60;
    };
    return MotoCarrera;
}(Moto_1["default"]));
exports["default"] = MotoCarrera;
