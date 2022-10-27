{
    /** Generics
     *
     * 재사용성 면에서 뛰어나다.
     */
    // 좋지않은 사용 예시
    function checkNotNullNum(arg: number | null): number {
        if (arg === null) {
            throw new Error("Not valid number");
        }
        return arg;
    }

    function checkNotNullAny(arg: any | null): any {
        if (arg === null) {
            throw new Error("Not valid number");
        }
        return arg;
    }
    const result = checkNotNullNum(123);
    console.log(result);
    checkNotNullNum(null);

    // Generics: 숫자를 입력하면 숫자를 리턴, 문자를 입력하면 문자를 리턴
    function checkNotNull<T>(arg: T | null): T {
        if (arg === null) {
            throw new Error("Not valid number");
        }
        return arg;
    }

    const number = checkNotNull(123);
    const bool = checkNotNull(true);
}