// Boolean
let isDone: boolean = false

let decimal: number = 6
let hex: number = 0xf00d

let list: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]

let x: [string, number]
x = ['whats up', 10]

// type assertions
let someValue: unknown = 'this is a string'
let strLength: number = (someValue as string).length
// or
let strLengthAngle: number = (<string>someValue).length
