{
    /**
     * Union Types
     * or 와 비슷하다
     * 발생할 수 있는 경우의 수에 제한을 만들어 준다. (경우의 수 중 한가지만 선택)
     */
    type Direction = "left" | "right" | "up" | "down";
    function move(direction: Direction) {
        console.log(direction);
    }
    move("up");

    type TitleSize = 8 | 16 | 32;
    const title: TitleSize = 16;
    
    // function login -> success | fail
    type SuccessState = {
        response: {
            body: string;
        }
    }
    type FailState = {
        reason: string;
    }
    type LoginState = SuccessState | FailState;
    function login(id: string, password: string): LoginState {
        return {
            response: {
                body: "logged in"
            }
        }
    }
    
    function printLoginState(state: LoginState) {
        if ("response" in state) {
            console.log(state.response.body);
        } else {
            console.log(state.reason);
        }
    }
}