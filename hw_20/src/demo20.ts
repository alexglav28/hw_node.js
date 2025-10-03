import { Animal, Dog, Library, Vehicle, Motorcycle } from "./homework20.js";

// Задание 1
const genericAnimal = new Animal("SomeAnimal", "Unknown");
genericAnimal.sound(); // The animal makes a sound

const dog = new Dog("Rex", "Canine", "German Shepherd");
dog.sound(); // The dog barks
console.log("Dog info:", dog.name, dog.species, dog.breed);

// адание 2
const lib1 = new Library("Central Library");
const lib2 = new Library("Community Library");

lib1.addBook();
lib1.addBook();
lib2.addBook();

console.log("Total books:", Library.totalBooks); // 3

// Задание 3
const vehicle = new Vehicle("Toyota", "Corolla");
console.log("Vehicle:", vehicle.make, vehicle.model);

const moto = new Motorcycle("Honda", "CBR500R", "Sport");
console.log("Motorcycle:", moto.make, moto.model, moto.type);
