// Trivial DS just built in JS array methods push/shift

class Queue<T> {
  _store: T[] = []
  push(val: T) {
    this._store.push(val)
  }

  pop(): T | undefined {
    return this._store.shift()
  }
}
