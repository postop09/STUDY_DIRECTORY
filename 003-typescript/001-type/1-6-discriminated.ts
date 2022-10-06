{
    /**
     * Union - discriminated
     * 타입이 공통된 프로퍼티를 설정하여, 타입을 구분하기 편리하게 만들어준다.
     */
    type SuccessState = {
        result: "success";
        response: {
            body: string;
        }
    }
    type FailState = {
        result: "fail";
        reason: string;
    }
    type LoginState = SuccessState | FailState;

    function login(): LoginState {
        return {
            result: "success",
            response: {
                body: "logged in"
            }
        }
    }

    function printLoginState(state: LoginState) {
        if (state.result === "success") {
            console.log(state.response.body);
        } else {
            console.log(state.reason);
        }
    }
}