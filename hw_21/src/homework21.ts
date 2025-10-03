//ЗАДАНИЕ 1

export abstract class Animal {
  abstract makeSound(): string;
}

export class Dog extends Animal {
  override makeSound(): string {
    return "Bark";
  }
}

export class Cat extends Animal {
  override makeSound(): string {
    return "Meow";
  }
}

//ЗАДАНИЕ 2

export abstract class Shape {
  abstract name: string;
  abstract calculateArea(): number;
}

export abstract class ColoredShape extends Shape {
  abstract color: string;
}

export class ColoredCircle extends ColoredShape {
  name = "Circle";
  constructor(public radius: number, public color: string) {
    super();
  }
  override calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

export class ColoredRectangle extends ColoredShape {
  name = "Rectangle";
  constructor(
    public width: number,
    public height: number,
    public color: string
  ) {
    super();
  }
  override calculateArea(): number {
    return this.width * this.height;
  }
}

//ЗАДАНИЕ 3

export abstract class Appliance {
  abstract turnOn(): void;
  abstract turnOff(): void;
}

export class WashingMachine extends Appliance {
  override turnOn(): void {
    console.log("WashingMachine: turning on");
  }
  override turnOff(): void {
    console.log("WashingMachine: turning off");
  }
}

export class Refrigerator extends Appliance {
  override turnOn(): void {
    console.log("Refrigerator: turning on");
  }
  override turnOff(): void {
    console.log("Refrigerator: turning off");
  }
}

//ЗАДАНИЕ 4

export abstract class Account {
  protected balance = 0;

  constructor(initialBalance: number = 0) {
    this.balance = Math.max(0, initialBalance);
  }

  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;

  getBalance(): number {
    return this.balance;
  }
}

export class SavingsAccount extends Account {
  constructor(initialBalance: number = 0, private interestRate: number = 0.02) {
    super(initialBalance);
  }

  override deposit(amount: number): void {
    if (amount <= 0) return;
    this.balance += amount;
  }

  override withdraw(amount: number): void {
    if (amount <= 0) return;
    if (amount > this.balance) throw new Error("Insufficient funds");
    this.balance -= amount;
  }

  applyInterest(): void {
    this.balance = Number((this.balance * (1 + this.interestRate)).toFixed(2));
  }
}

export class CheckingAccount extends Account {
  constructor(initialBalance: number = 0, private fee: number = 1) {
    super(initialBalance);
  }

  override deposit(amount: number): void {
    if (amount <= 0) return;
    this.balance += amount;
  }

  override withdraw(amount: number): void {
    if (amount <= 0) return;
    const total = amount + this.fee;
    if (total > this.balance)
      throw new Error("Insufficient funds including fee");
    this.balance -= total;
  }
}

//ЗАДАНИЕ 5

export abstract class Media {
  abstract play(): void;
}

export class Audio extends Media {
  override play(): void {
    console.log("Playing audio");
  }
}

export class Video extends Media {
  override play(): void {
    console.log("Playing video");
  }
}
