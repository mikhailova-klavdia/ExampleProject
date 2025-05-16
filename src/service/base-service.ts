export class BaseService<T extends { id: number }> {
  protected items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  findById(id: number): T | undefined {
    return this.items.find((i) => i.id === id);
  }

  remove(id: number): void {
    this.items = this.items.filter((i) => i.id !== id);
  }

  list(): T[] {
    return [...this.items];
  }
}
