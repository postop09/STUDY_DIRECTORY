{
  const obj = {
    name: "SIK",
  }
  console.log(obj.name);
  console.log(obj["name"]);

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  }

  type Name = Animal["name"];
  const text: Name = "havana";

  type Gender = Animal["gender"];

  type Keys = keyof Animal;
  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  }
  const person: Person = {
    name: "SIK",
    gender: "male",
  }
}