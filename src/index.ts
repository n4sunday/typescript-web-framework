import { User } from "./models/User";

const user = new User({ name: "John", age: 35 });

class Person {
  constructor(public firstname: string, public lasname: string) {}

  get fullName(): string {
    return `${this.firstname} ${this.lasname}`;
  }
}

const person = new Person("Nattapon", "Lueakaew");
console.log(person.fullName);
