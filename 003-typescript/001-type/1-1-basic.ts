{
    // 지역 변수로 사용하기 위해 스코프로 한번 감싸준다.
    /**
     * JavaScript
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array ...
     */

    /** TypeScript
     * 변수 다음에 콜론(:), 그 뒤로 Type 을 작성해준다.
     * variable:type
     */
        // TypeScript 기본 타입들

        // number
    const num: number = 0;

    // string
    const str: string = "hi";

    // boolean
    const bool: boolean = false;

    // undefined (보통 단독으로는 사용하지 않는다. type 또는 undefined)
    let age: number | undefined;
    age = 27;

    // 사용 예시: 결과값이 숫자이거나 undefined 인 함수
    function find(): number | undefined {
        return undefined;
    }

    // ❗ null (보편적으로 undefined 를 많이 사용한다. 하지만 의미상 null 이 적절한 경우도 있다.)
    let person: string | null;
    person = "SIK";

    // ❗ unknown (되도록이면 사용하지 않는 것이 좋다.)
    let notSure: unknown = 0;
    notSure = "string";
    notSure = false;

    // ❗ ️any (되도록이면 사용하지 않는 것이 좋다.)
    let anything: any = 0;
    anything = "string";
    anything = false;

    // void (아무것도 리턴하지 않으면 void, 컨벤션에 따라 생략 가능)
    // 대부분 함수에서 리턴값으로 활용된다.
    function print(): void {
        console.log("hello!");
        return;
    }

    // never (리턴값이 있어서는 안된다. 대부분 에러핸들링에 사용된다.)
    function throwError(message: string): never {
        throw new Error(message);
    }

    // ❗️ object (객체 안의 값이 타입을 가리지 않는다.)
    function acceptObj(ogj: object) {

    }

    acceptObj({name: "SIK"});
    acceptObj({age: 27});
}


