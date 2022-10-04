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



    // Optional parameter (전달하지 않아도 되는 파라미터 설정)
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    printName("SIK", "Steve");
    printName("SIK");
}
