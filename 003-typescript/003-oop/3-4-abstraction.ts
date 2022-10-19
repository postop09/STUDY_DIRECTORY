{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // interface 에 적혀있는 함수를 전부 구성해야만 한다.
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(Beans: number);
        clean();
    }

    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker{
        private static BEANS_GRAM_PER_SHOT: number = 7;
        protected coffeeBeans: number = 0;

        // 항상 처음에 호출되는 함수: class 에서 object 를 만들 때 사용
        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        // 값을 검증하고 상태를 변화시킬 수 있는 함수를 활용
        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error("value for beans should be greater than 0.")
            }
            this.coffeeBeans += beans;
        }

        clean() {
            console.log("cleaning the machine...");
        }

        grindBeans(shots) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error("not enough coffee beans!");
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }

        preheat() {
            console.log("heating up...")
        }

        extract(shots) {
            return {
                shots,
                hasMilk: false,
            };
        }

        makeCoffee(shots: number): CoffeeCup{
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots)
        }
    }

    class Ama {
        constructor(private machine: CoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }

    class Pro {
        constructor(private machine: CommercialCoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }

    const maker = CoffeeMachine.makeMachine(32);
    const amateur = new Ama(maker);
    const barista = new Pro(maker);
}