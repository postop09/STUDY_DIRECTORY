{
    /**
     * ❗️ Type Inference (타입 추론)
     * 타입 추론의 사용에 대해서는 고민해봐야 한다.
     * 대부분의 프로젝트는 복잡한 코드, 타입을 정확하게 명시해 주는 것이 팀워크에 좋을듯
     * 코드 컨벤션을 통해 타입 추론(생략)의 경우를 설정
     */

    // 변수 선언 시에 타입을 추론
    let text = "string";
    let age = 27;

    // default value 에 따라 타입을 추론
    function print(message = "Default!") {
        console.log(message);
    }

    // 파라미터가 모두 숫자 -> 결과 또한 숫자 타입을 추론
    function add(x: number, y: number) {
        return x + y;
    }
    // 함수의 리턴값에 따라 타입을 추론
    const result = add(2, 7);
}