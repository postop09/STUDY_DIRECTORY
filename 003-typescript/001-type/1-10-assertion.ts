{
    /**
     * ❗️ Type Assertions
     * 정말정말정말 확신하는 값에 강제로 타입을 지정한다.
     */

    function jsStrFunc(): any {
        return "string";
    }
    const result = jsStrFunc();
    (result as string).length;
    (<string>result).length;

    // 반드시 값이 있다고 확신할 때 ! (느낌표)
    const button = document.querySelector('button')!;
}