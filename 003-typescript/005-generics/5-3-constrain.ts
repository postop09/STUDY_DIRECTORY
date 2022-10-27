{
    interface Employee {
        pay();
    }

    class FullTimeEmployee implements Employee {
        pay() {
            console.log("Full Time!!");
        }
        workFullTime() {

        }
    }

    class PartTimeEmployee implements Employee {
        pay() {
            console.log("Part Time!!");
        }
        workPartTime() {

        }
    }

    // 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 위험하다.
    function pay(employee: Employee): Employee {
        employee.pay();
        return employee;
    }

    // to generics(extends): 조건을 걸어서 제한적인 제네릭을 사용할 수 있다.
    function payG<T extends Employee>(employee: T): T {
        employee.pay();
        return employee;
    }

    const SIK = new FullTimeEmployee();
    const BOB = new PartTimeEmployee();
    SIK.workFullTime();
    BOB.workPartTime();

    const SIKPay = pay(SIK);
    const BOBPay = pay(BOB);
    const SIKPayG = payG(SIK);
    const BOBPayG = payG(BOB);


    const obj = {
        name: "SIK",
        age: 27,
    }
    const obj2 = {
        animal: "cat",
    }

    function getValue<O, K extends keyof O>(obj: O, key: K): O[K] {
        return obj[key];
    }

    // obj 에 존재하는 key 가 아니면 경고를 띄워준다.
    console.log(getValue(obj, "name"));
    console.log(getValue(obj, "age"));
    console.log(getValue(obj2, "animal"));
}