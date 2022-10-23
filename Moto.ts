export default class Moto {
    protected marca: string;
    protected modelo:string;
    protected velocidadActual: number
    
    public constructor(marca: string, modelo: string){
        this.marca= marca
        this.modelo= modelo
        this.velocidadActual=0
            }
    public acelerar(): void{
        this.velocidadActual += 15
    }
}