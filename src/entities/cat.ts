import { Animal } from './animal';

export class Cat extends Animal {
  constructor(name: string, private color: string) {
    super(name);
  }

  getColor(): string {
    return this.color;
  }

  speak(): string {
    return 'Meow!';
  }
}
