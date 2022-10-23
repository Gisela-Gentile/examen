import Moto from "./Moto";

export default class MotoCarrera extends Moto {
    public constructor(marca:string, modelo:string){
        super(marca, modelo);
    }
      
 public acelerar(): void {
     this.velocidadActual += 60
 }
}