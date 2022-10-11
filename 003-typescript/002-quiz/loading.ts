{
    type LoadingState = {
        state: "loading";
    };
    type SuccessState = {
        state: "success";
        response: {
            body: string;
        }
    };
    type FailState = {
        state: "fail";
        reason: string;
    };
    type ResourceLoadState = LoadingState | SuccessState | FailState ;

    const printLoginState = (state: ResourceLoadState) => {
        if (state.state === "success") {
            console.log(state.response.body);
        } else if (state.state === "fail") {
            console.log(state.reason);
        } else {
            console.log("Loading...");
        }
    }
    printLoginState({state: "success", response: {body: "Successful Loaded!"}});
    printLoginState({state: "fail", reason: "Failed: Plz check your network."});
    printLoginState({state: "loading"});
}