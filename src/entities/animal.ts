import { InterfaceAnimal } from "./interface";

export abstract class Animal implements InterfaceAnimal {
  constructor(
    public id: number,
    public name: string,
  ) {}

  abstract speak(): string;

  info(): string {
    return `This is ${this.name}.`;
  }
}