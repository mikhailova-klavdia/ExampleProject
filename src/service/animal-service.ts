import { BaseService } from './base-service';
import { InterfaceAnimal } from '../entities/interface';

export class AnimalService extends BaseService<InterfaceAnimal & { id: number }> {
  speakAll(): string[] {
    return this.items.map(a => `${a.name} says ${a.speak()}`);
  }
}
