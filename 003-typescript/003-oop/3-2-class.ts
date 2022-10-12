{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMaker {
        static BEANS_GRAM_PER_SHOT: number = 7; // class level: 공통적으로(공유해서) 사용할 상수
        coffeeBeans: number = 0; // instance(object) level

        // 항상 처음에 호출되는 함수: class 에서 object 를 만들 때 사용
        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
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

    const maker = new CoffeeMaker(32);
    console.log(maker);

    const maker2 = maker.makeCoffee(2);
    console.log(maker2);

    // class level 활용
    const maker3 = CoffeeMaker.makeMachine(3);
    console.log(maker3);
}