// Задание 1

export type Admin = {
  name: string;
  permissions: string[];
};

export type User = {
  name: string;
  email: string;
};

export type AdminUser = Admin & User;

export const adminUserExample: AdminUser = {
  name: "Alice",
  email: "alice@example.com",
  permissions: ["read", "write", "delete"],
};

// Задание 2

export type Car = {
  make: string;
  model: string;
  engine: {
    type: string;
    horsepower: number;
  };
  year?: number;
};

export function printCarInfo(car: Car): string {
  const year = car.year ? `, year: ${car.year}` : "";
  return `Car: ${car.make} ${car.model}${year} | engine: ${car.engine.type} (${car.engine.horsepower} hp)`;
}

// Задание 3

export interface Product {
  name: string;
  price: number;
}

export interface CalculateDiscountFn {
  (product: Product, discount: number): number;
}

export const calculateDiscount: CalculateDiscountFn = (product, discount) => {
  const safe = Math.min(Math.max(discount, 0), 100);
  const result = product.price * (1 - safe / 100);
  return Number(result.toFixed(2));
};

//Задание 4

export interface Employee {
  name: string;
  salary: number;
}

export function getSalaries(employees: Employee[]): number[] {
  return employees.map((e) => e.salary);
}

// Задание 5

export interface Person {
  firstName: string;
  lastName: string;
}

export interface Student extends Person {
  grade: number;
}

export const studentExample: Student = {
  firstName: "Bob",
  lastName: "Müller",
  grade: 5,
};

export function printStudent(student: Student): string {
  return `Student: ${student.firstName} ${student.lastName}, grade: ${student.grade}`;
}

//Задание 6

export interface ConcatStringsFn {
  (str1: string, str2: string): string;
}

export const concatStrings: ConcatStringsFn = (a, b) => a + b;
