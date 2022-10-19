{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar? : boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7;
        protected coffeeBeans: number = 0;

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
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

    // extends : 상속
    class LatteMachine extends CoffeeMachine {
        private steamMilk() {
            console.log("steaming some milk...")
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true,
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return {
                ...coffee,
                hasSugar: true,
            }
        }
    }

    const machines = [
        new CoffeeMachine(16),
        new LatteMachine(16),
        new SweetCoffeeMaker(16),
    ]

    machines.forEach((machine) => {
        console.log("---------------------");
        machine.makeCoffee(1);
    })
}