interface Iterator<T> {
  next(): T | null;
  hasNext(): boolean;
  current(): T | null;
}
interface Aggregate<T> {
  createIterator(): Iterator<T>;
}

class ConcreteIterator<T> implements Iterator<T> {
  private index = 0;
  constructor(private collection: ConcreteAggregate<T>) {}
  public next(): T | null {
    if (this.hasNext()) {
      return this.collection.getItems()[this.index++] as T;
    }
    return null;
  }
  public hasNext(): boolean {
    return this.index < this.collection.getItems().length;
  }
  public current(): T | null {
    if (this.index === 0 || this.index > this.collection.getItems().length) {
      return null;
    }
    return this.collection.getItems()[this.index - 1] as T;
  }
}
class ConcreteAggregate<T> implements Aggregate<T> {
  private items: T[] = [];
  public addItem(item: T): void {
    this.items.push(item);
  }
  public getItems(): T[] {
    return this.items;
  }
  public createIterator(): Iterator<T> {
    return new ConcreteIterator(this);
  }
}

export class Client {
  public someMethod(): void {
    const aggregate = new ConcreteAggregate<number>();
    aggregate.addItem(1);
    aggregate.addItem(2);
    aggregate.addItem(3);

    const iterator = aggregate.createIterator();
    while (iterator.hasNext()) {
      console.log(iterator.next());
    }
  }
}
