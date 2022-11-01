// const array = new Array(100000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
    if (fileName === "not exist!") {
        throw new Error(`file not exist! ${fileName}`);
    }
    return "file OK!";
}

function closeFile(fileName: string) {
    //
}

/**
 * try - catch - finally 를 이용해서 프로그램이 완전히 죽지 않도록 방지한다.
 * try 문 안에 모든 로직(or 많은 로직)을 사용하는 것은 좋지 않다.
 * 에러가 발생할 만한 위치에서 핵심적으로만 사용하는 것이 좋다.
 */
function run() {
    const fileName = "fileName";
    try {
        console.log(readFile(fileName));
    } catch (e) {
        console.log("catch!!", e);
    } finally {
        closeFile(fileName);
    }
}
