let title: string = 'text' // string
let count: number = 123 // number 
let isActive: boolean = true // boolean
let list: number[] = [1, 2, 3]; //array
let list2: Array<number> = [1, 2, 3]; //array
let empty: [] = [] // empty array
let count2: [string, number] = ['text', 123] // truple

let titleLength: number = (title as string).length // 类型断言
let titleLength2: number = (<string>title).length // 类型断言  jsx 冲突避免

let xxx: string | number = 'string'   // union type

let fn = (props: string): void => { console.log(props) }  // function

type son = string | number;  //type alias
let son1: son = 1; //type alias
let son2: son = 'text'; //type alias

// interface
interface Person {
  name: string;
  age: number;
}

const person : Person = {
  name:'mark',
  age:19
}

//optional property
interface User {
  id: string;
  readonly pw: string; //只读
  email?: string; // 可有可无
  [index:number] : string;
}

// interface extends
interface Shape {
  color: string;
}
interface PenStroke {
  penWidth: number;
}
interface Square extends Shape, PenStroke {
  sideLength: number;
}

//class
class ClassPerson{
  name: string;
  private age: number;
  constructor(name:string,age:number){
    this.name = name;
    this.age = age;
  }
}

const cp1 = new ClassPerson('dao',17)
console.log(cp1)