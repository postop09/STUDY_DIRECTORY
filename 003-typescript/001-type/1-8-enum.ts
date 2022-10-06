{
    /**
     * ❗️ Enum
     * 여러가지 관련된 상수값들을 한곳에 모아서 정의할 수 있게 만들어준다.
     */

    // JavaScript
    const MAX_NUM = 10;
    const MAX_STUDENT_PER_CLASS = 15;
    const MONDAY = 0;
    const TUESDAY = 1;
    // freeze: 객체의 값이 변화되지 않게 얼림
    const DAYS_ENUM = Object.freeze({MONDAY: 0, TUESDAY: 1})
    const dayOfToday = DAYS_ENUM.MONDAY;

    // ❗️ TypeScript
    // 숫자를 할당하거나 문자를 할당할 수 있다.
    // 재할당 시 타입/값이 보장되지 않는다.
    enum DAYS {
        Mon,
        Tues,
        Weds,
        Thurs,
        Fri,
        Sat,
        Sun
    }
    let today: DAYS = DAYS.Fri;
    console.log(today)
    today = 10;

    // 오히려 Union 을 사용하는 것이 좋다. (타입 보장)
    type DAYS_OF_WEEK = "Mon" | "Tues" | "Weds";
    let day: DAYS_OF_WEEK = "Mon";
    // day = "SIK" 불가능;
}