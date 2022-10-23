import Mamiferos from "./Mamiferos";
export default class Dog extends Mamiferos{
    public constructor(name:string){
        super (name) ;
    }
    public makeSound(): void {
        console.log ('wuff wuff\n');
      }
    
    }
   
   
  