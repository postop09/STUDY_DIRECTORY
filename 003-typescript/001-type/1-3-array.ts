{
    // Array (두가지 방법)
    const fruits: string[] = ["tomato", "banana"];
    const scores: Array<number> = [1, 2, 3];

    // readonly: 함수 내부에서 인자의 변경이 일어나지 않도록 타입에서 보장
    // 다만 Array 의 형식은 string[] 만 지원한다. (Array<string> 은 지원하지 않음.)
    function printArray(fruits: readonly string[]) {
        console.log(fruits);
    }

    // ❗️ Tuple: 서로다른 타입을 가질 수 있는 배열 (-> interface, type alias, class 를 이용하는 것이 더 좋다.)
    let student: [string, number];
    student = ['SIK', 27];
    console.log(student);
    // 인덱스 접근은 가독성을 해친다.
    // student[0];
    // student[1];
    // object 형태로 접근하는 것이 더 좋은 방법이다.
    const [name, age] = student;
    console.log(name);
    console.log(age);

}