{
    // JS
    function jsAdd(num1, num2) {
        return num1 + num2;
    }

    // TS
    function tsAdd(num1: number, num2: number): number {
        return num1 + num2;
    }


    // JS
    function jsFetchNum(id) {
        // code ...
        // code ...
        // @ts-ignore
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }

    // TS
    function tsFetchNum(id: string): Promise<number> {
        // code ...
        // code ...
        // @ts-ignore
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }



    // Optional parameter (전달하지 않아도 되는 파라미터 설정: ? 물음표)
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName); // 전달하지 않으면 undefined
    }
    printName("SIK", "Steve");
    printName("SIK");

    // Default parameter (인자의 기본값을 설정)
    function printMessage(message: string = "default message") {
        console.log(message); // 전달하지 않으면 default value
    }
    printMessage();

    // Rest parameter (인자 개수에 상관없이 받아온다.)
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b)
    }
    // ToDo reduce 함수 알아보기
    // console.log(addNumbers(1, 2, "hi")); 숫자로 이루어진 배열만 가능
    console.log(addNumbers(1, 2, 3, 4));


}
