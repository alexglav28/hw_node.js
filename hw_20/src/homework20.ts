//Задание 1

export class Animal {
  constructor(public name: string, public species: string) {}

  sound(): void {
    console.log("The animal makes a sound");
  }
}

export class Dog extends Animal {
  constructor(name: string, species: string, public breed: string) {
    super(name, species);
  }

  override sound(): void {
    console.log("The dog barks");
  }
}

//Задание 2

export class Library {
  static totalBooks: number = 0;

  constructor(public name: string) {}

  addBook(): void {
    Library.totalBooks++;
  }
}

//Задание 3

export class Vehicle {
  constructor(public make: string, public model: string) {}
}

export class Motorcycle extends Vehicle {
  constructor(make: string, model: string, public type: string) {
    super(make, model);
  }
}
