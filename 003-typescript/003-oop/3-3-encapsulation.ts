{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // public
    // private : 외부에서 볼수도, 접근도 안된다.
    // protected : 기본적으로 private, 클래스를 상속한 자식 클래스는 접근 가능하다.
    class CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7; // class level: 공통적으로(공유해서) 사용할 상수
        protected coffeeBeans: number = 0; // instance(object) level

        // 항상 처음에 호출되는 함수: class 에서 object 를 만들 때 사용
        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        // 값을 검증하고 상태를 변화시킬 수 있는 함수를 활용
        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error("value for beans should be greater than 0.")
            }
            this.coffeeBeans += beans;
        }

        makeCoffee(shots: number): CoffeeCup{
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
                throw new Error("Not enough coffee beans!")
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return {
                shots,
                hasMilk: false,
            };
        }

    }

    const maker = CoffeeMaker.makeMachine(32);
    const maker2 = maker.fillCoffeeBeans(2);

    // 잘못된 접근
    // maker.coffeeBeans = -32;




    // Getter/Setter
    class User {
        firstName: string;
        lastName: string;
        fullName: string;
        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = `${firstName} ${lastName}`
        }
    }
    const user = new User('Steve', 'Col');
    console.log(user.fullName);
    user.firstName = "Sik";
    console.log(user.fullName);


    // setter/getter 무언가 연산하고 계산할 때 유용하다.
    class User2 {
        firstName: string;
        lastName: string;
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
    const user2 = new User2('Steve', 'Col');
    console.log(user2.fullName);
    user2.firstName = "Sik";
    console.log(user2.fullName);


    // 단축
    class User3 {
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }
        set age(num: number) {
            if (num < 0) {
                return;
            }
            this.internalAge = num;
        }
        constructor(private firstName: string, private lastName: string) {
        }
    }
    const user3 = new User3('Steve', 'Col');
    user3.age = 6;
    console.log(user3.fullName)
}