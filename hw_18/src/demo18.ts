import {
  adminUserExample,
  type Car,
  printCarInfo,
  type Product,
  calculateDiscount,
  type Employee,
  getSalaries,
  studentExample,
  printStudent,
  concatStrings,
} from "./homework18.js";

// Задание 1
console.log("Z1 AdminUser:", adminUserExample);

//Задание 2
const myCar: Car = {
  make: "BMW",
  model: "320i",
  engine: { type: "petrol", horsepower: 184 },
  year: 2021,
};
console.log("Z2 Car:", printCarInfo(myCar));
console.log(
  "Z2 Car (без year):",
  printCarInfo({
    make: "VW",
    model: "Golf",
    engine: { type: "diesel", horsepower: 115 },
  })
);

//Задание 3
const prod: Product = { name: "MacBook Air", price: 1299 };
console.log("Z3 -15%:", calculateDiscount(prod, 15)); // 1104.15
console.log("Z3 -200% (будет 0%):", calculateDiscount(prod, -200));
console.log("Z3 500% (будет 100%):", calculateDiscount(prod, 500));

//Задание 4
const staff: Employee[] = [
  { name: "Anna", salary: 3200 },
  { name: "Oleg", salary: 4200 },
  { name: "Mia", salary: 3800 },
];
console.log("Z4 salaries:", getSalaries(staff)); // [3200, 4200, 3800]

//Задание 5
console.log("Z5 student:", printStudent(studentExample));

//Задание 6
console.log("Z6 concat:", concatStrings("Hallo, ", "TS!"));
