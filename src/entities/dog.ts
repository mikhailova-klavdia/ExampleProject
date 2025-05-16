import { Animal } from './animal';

export class Dog extends Animal {
  constructor(name: string, private breed: string) {
    super(name);
  }

  getBreed(): string {
    return this.breed;
  }

  speak(): string {
    return 'Woof!';
  }
}
