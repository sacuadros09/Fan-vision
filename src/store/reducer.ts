import { Actions, AppState, AuthActions,NavigationActions } from "../types/store";

export const reducer = (currentAction: any, currentState: any): AppState => {
    const {action, payload} = currentAction;

    switch (action) {
        case AuthActions.REGISTER:
            return {
                ...currentState,
                Users: [
                    payload,
                    ...currentState.Users 
                ]
            }

        case AuthActions.LOGIN:
            return {
                    ...currentState,
                    User: [
                        payload,
                    ...currentState.User  
                ]
            }

        case AuthActions.LOGOUT:
            return {
                ...currentState,
            
            Users:[]
            }
    
    case NavigationActions.NAVIGATE:
        return {
            ...currentState,
            screen: payload, 
        };

            
        default:
            return currentState;
    }
}