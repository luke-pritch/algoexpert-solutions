// Simple Stack class
// just use built in push() pop() JS Array methods

export class Stack<T> {
  _store: T[] = [];

  push(val: T) {
    this._store.push(val);
  }

  pop(): T | undefined {
    return this._store.pop();
  }
}
