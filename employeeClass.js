class Employee {
  constructor(givenName, givenUniversity) {
    this.name = givenName;
    this.university = givenUniversity;
  }
  solgan() {
    return `I am ${this.name} and this is the best university.`;
  }
  experience() {
    return `I am studying  in this universirty for 3 years.`;
  }
}

class Programmer extends Employee {
  //this is an example of inheritance
  constructor(givenName, givenUniversity, givenlanguage) {
    super(givenName, givenUniversity);
    this.language = givenlanguage;
  }
}

let me = new Programmer("Naeem", "uet lahore", "javascript");
console.log(me.language);
console.log(me.solgan());

//Implicit Heap Dynamic Storage

var variable = 5;
console.log(typeof variable);
variable = "Muhammad Naeem";
console.log(typeof variable);
console.log(variable);
