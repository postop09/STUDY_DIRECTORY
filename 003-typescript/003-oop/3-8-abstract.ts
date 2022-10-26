{
    /**
     * 특정한 기능만 자식 클래스에서 변경된다면 abstract 를 사용한다.
     */
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar? : boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    // 자체적으로 객체를 만들 수 없다.
    abstract class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7;
        protected coffeeBeans: number = 0;

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

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

        // 구현하는 클래스마다 달라져야할 값이 있다면 abstract
        protected abstract extract(shots: number): CoffeeCup

        makeCoffee(shots: number): CoffeeCup{
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots)
        }
    }

    // extends : 상속
    class LatteMachine extends CoffeeMachine {
        private steamMilk() {
            console.log("steaming some milk...")
        }
        protected extract(shots: number): CoffeeCup {
            return {
                shots,
                hasMilk: true,
            };
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        protected extract(shots: number): CoffeeCup {
            return {
                shots,
                hasSugar: true,
            };
        }
    }

    const machines = [
        new LatteMachine(16),
        new SweetCoffeeMaker(16),
    ]

    machines.forEach((machine) => {
        console.log("---------------------");
        machine.makeCoffee(1);
    })
}