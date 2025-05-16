import { BaseService } from './base-service';
import { Animal } from '../entities/animal';

export class AnimalService extends BaseService<Animal> {
  speakAll(): string[] {
    return this.items.map(a => `${a.name} says ${a.speak()}`);
  }
}