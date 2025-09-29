///Задание 1
function greetUser(name: string): void {
  console.log(`hello, ${name}!`);
}

greetUser("Alexander");

///Задание 2
interface Person {
  name: string;
  age: number;
  city: string;
}

function printPersonInfo(person: Person): void {
  console.log(`name: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`);
}

const person1: Person = { name: "Alexander", age: 30, city: "München" };
printPersonInfo(person1);

///Задание 3
function squareNumber(num: number): number {
  return num * num;
}

console.log(squareNumber(5)); // 25

///Задание 4

function isEven(num: number): boolean {
  return num % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false

///Задание 5

interface Student {
  name: string;
  grade: number;
}

function printStudentInfo(student: Student): void {
  console.log(`Студент: ${student.name}, Оценка: ${student.grade}`);
}

const student1: Student = { name: "Alexandr", grade: 5 };
printStudentInfo(student1);

///Задание 6
function logMessage(msg: string): void {
  console.log(msg);
}

logMessage("Это сообщение для лога");

