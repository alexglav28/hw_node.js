import { capitalize, reverseString } from "./stringUtils.js";
import { Finance } from "./finance.js";
import { UserManagement } from "./userManagement.js";
import { generateFibonacci, generatePrimeNumbers } from "./sequenceUtils.js";

//Задание 1
console.log("Z1 capitalize:", capitalize("hello world")); // Hello world
console.log("Z1 reverseString:", reverseString("typescript")); // tpircsyT

//Задание 2
const loan = new Finance.LoanCalculator(100000, 0.1, 5);
console.log(
  "Z2 loan monthly payment:",
  loan.calculateMonthlyPayment().toFixed(2)
);

const tax = new Finance.TaxCalculator(50000, 0.2);
console.log("Z2 tax:", tax.calculateTax());

//Задание 3
const admin = new UserManagement.Admin.AdminUser("Alice", "alice@example.com");
console.log("Z3 before rights:", admin);
admin.grantSuperAdmin();
console.log("Z3 after rights:", admin);

//Задание 4
console.log("Z4 Fibonacci up to 50:", generateFibonacci(50));
console.log("Z4 Prime numbers up to 30:", generatePrimeNumbers(30));
