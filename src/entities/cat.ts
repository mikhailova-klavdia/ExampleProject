import { Animal } from './animal';


export class Cat extends Animal {
  constructor(
    id: number,
    name: string,
    private color: string,
  ) {
    super(id, name);
  }

  getColor(): string {
    return this.color;
  }

  speak(): string {
    return 'Meow!';
  }
}