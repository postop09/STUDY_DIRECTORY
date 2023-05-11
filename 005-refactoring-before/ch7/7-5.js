class Person {
  #name;
  #officeAreaCode;
  #officeNumber;
  constructor(name, areaCode, number) {
    this.#name = name;
    this.#officeAreaCode = areaCode;
    this.#officeNumber = number;
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get telephoneNumber() {
    return `(${this.officeAreaCode}) ${this.officeNumber}`;
  }

  get officeAreaCode() {
    return this.#officeAreaCode;
  }

  set officeAreaCode(arg) {
    this.#officeAreaCode = arg;
  }

  get officeNumber() {
    return this.#officeNumber;
  }

  set officeNumber(arg) {
    this.#officeNumber = arg;
  }
}

// Telephone Class 를 따로 분리하는 것이 좋아보인다.
// 한 가지의 클래스는 한가지의 책임을!!

const person = new Person("엘리", "010", "12345678");
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
