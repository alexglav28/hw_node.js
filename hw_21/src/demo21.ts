import {
  Animal,
  Dog,
  Cat,
  ColoredCircle,
  ColoredRectangle,
  Appliance,
  WashingMachine,
  Refrigerator,
  SavingsAccount,
  CheckingAccount,
  Media,
  Audio,
  Video,
} from "./homework21.js";

//ЗАДАНИЕ 1
const zoo: Animal[] = [new Dog(), new Cat(), new Dog()];
console.log(
  "Z1 sounds:",
  zoo.map((a) => a.makeSound())
); // ["Bark","Meow","Bark"]

//ЗАДАНИЕ 2
const c1 = new ColoredCircle(5, "red");
const r1 = new ColoredRectangle(4, 6, "blue");
console.log(
  `Z2 circle area=${c1.calculateArea().toFixed(2)}, color=${c1.color}`
); // 78.54, red
console.log(
  `Z2 rect   area=${r1.calculateArea().toFixed(2)}, color=${r1.color}`
); // 24.00, blue

//ЗАДАНИЕ 3
const devices: Appliance[] = [new WashingMachine(), new Refrigerator()];
for (const d of devices) {
  d.turnOn();
  d.turnOff();
}

//ЗАДАНИЕ 4
const sa = new SavingsAccount(1000, 0.05);
sa.applyInterest(); // 5% на остаток
sa.deposit(200);
sa.withdraw(300);
console.log("Z4 savings balance:", sa.getBalance()); // 950

const ca = new CheckingAccount(100, 2); // комиссия = 2
ca.deposit(50); // 150
ca.withdraw(20); // списание 22
console.log("Z4 checking balance:", ca.getBalance()); // 128

// === ЗАДАНИЕ 5
const playlist: Media[] = [new Audio(), new Video(), new Audio()];
playlist.forEach((m) => m.play());
