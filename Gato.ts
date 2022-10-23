import Mamiferos from "./Mamiferos";

export default class Cat extends Mamiferos {
    
    constructor(name: string) {
       super(name);
    }
     public makeSound(): void {
      console.log('meow meow\n');
    }
   }