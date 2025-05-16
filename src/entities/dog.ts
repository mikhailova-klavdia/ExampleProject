import { Animal } from './animal';

export class Dog extends Animal {
  constructor(
    id: number,
    name: string,
    private breed: string,
  ) {
    super(id, name);
  }

  getBreed(): string {
    return this.breed;
  }

  speak(): string {
    return 'Woof!';
  }
}