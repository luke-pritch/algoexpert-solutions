// Boolean
const isDone = false;

const decimal = 6;
const hex = 0xf00d;

const list: number[] = [1, 2, 3];
const list2: Array<number> = [1, 2, 3];

// type assertions
const someValue: unknown = 'this is a string';
const strLength: number = (someValue as string).length;
// or
const strLengthAngle: number = (<string>someValue).length;
