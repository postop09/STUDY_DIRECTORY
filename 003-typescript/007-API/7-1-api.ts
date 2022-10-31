/**
 * code editor 내부에서 api 읽기
 * 본인이 자주 사용하거나 관심있는 오픈소스 라이브러리의 api 문서를 참고하자.
 * 실제 서비스 되고 있는 프로젝트를 참고하는 것이 실전감각(실무감각)을 익히는데 더 좋다.
 */
Array;
[1, 2].map

// every 메소드의 두가지 활용 (overload)
type Student = {
    passed: boolean;
}
const student: Student[] = [
    {passed: true},
    {passed: true},
    {passed: true}
];
const result = student.every((student) => {
    return student.passed;
});
console.log(result);

class Animal {}
class Cat extends Animal {
    isCat: boolean = true;
}
class Dog extends Animal {
    isDog: boolean = false;
}

const animals: Animal[] = [
    new Cat(),
    new Cat(),
    new Dog()
];
function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isCat !== undefined;
}

console.log(animals.every<Cat>(isCat));