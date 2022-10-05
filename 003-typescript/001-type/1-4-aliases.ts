{
    /**
     * Type Aliases
     * 내가 타입을 새로 정의할 수 있다.
     */
    type Text = string;
    const name: Text = "SIK";
    // type error
    // const address: Text = 1234;
    type Num = number;

    // string 값을 갖는 name, number 값을 갖는 age
    type Student = {
        name: string;
        age: Num;
    };
    const student: Student = {
        name: "SIK",
        age: 27
    }
    // type error: key 값 오류 (animal), type 오류 ("string")
    // const err: Student = {
    //     animal: "lion",
    //     age: "string"
    // }
    console.log(student);


    /**
     * String Literal Types
     * 문자열로 타입을 지정할 수 있다.
     * type 으로 지정된 문자열을 제외한 다른 값을 할당하려면 type error
     */
    type Name = "name";
    let sikName: Name;
    // sikName = "SICK";
    sikName = "name";
    type JSON = "json";
    const json: JSON = "json";
}