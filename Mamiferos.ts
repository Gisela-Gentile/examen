export default class Mamiferos{
    protected name: string;
    public constructor(name: string) {
      this.name = name;
    }
    public makeSound(): void {
      console.log ('sonido');
}
}