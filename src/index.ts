import { User } from "./models/User";

const user = new User({ name: "Sun", age: 23 });

user.set({ name: "Sunday"});

console.log(user.get("name"));
console.log(user.get("age"));
