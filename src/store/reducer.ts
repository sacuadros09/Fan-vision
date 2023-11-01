import { Actions, AppState, UserActions,NavigationActions,PostActions } from "../types/store";

export const reducer = (Action: any, State: AppState): AppState => {
    const { action, payload } = Action; 

    switch (action) {
        case UserActions.LOGIN:
            State.user = payload
            return State

        case UserActions.REGISTER:
            State.user = payload
            return State 


        case UserActions.LOGOUT:
            return {
                ...State , user:{
                    id:"",
                    Name: "",
                    userName: "",
                    email: "",
                    password: "",
                    Confirmpassword: "",
                }
            }
    case NavigationActions.NAVIGATE:
        State.screen = payload
            return State

            case PostActions.ADD_POST:
                State.posts = [...State.posts, payload]
                return State
    
            case PostActions.GET_POSTS:
                State.posts = payload
                return State

            
        default:
            return State;
    }
}