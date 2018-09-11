export const person = {
  name: "John Doe",
  location: "Miami",
  age: 30
};

export class FirstClass {
  constructor(name) {
    this.name = name;
  }
  func1() {
    console.log("Hello, " + this.name);
  }
}
