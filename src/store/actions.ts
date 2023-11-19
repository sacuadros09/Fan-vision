import { appState, dispatch } from "."
import { Post } from "../types/post"
import {  Actions, UserActions, PostActions, NavigationActions, LogInAction, LogOutAction,NavigationAction, Screens, RegisterAction,EditAction, GetPostsAction, AddPostAction,SetUserAction} from "../types/store"
import { User} from "../types/users"
import firebase from "../utils/firebase"

export const Navigate = (screen:Screens): NavigationAction =>{
    return{
        action: NavigationActions.NAVIGATE,
        payload:screen,
    }
}

export const LogIn = async (user:User ): Promise<LogInAction> =>{

    await firebase.loginUser(user)

    return{
        action: UserActions.LOGIN,
        payload: user,
    }
}
    


export const Register = async (user:User): Promise<RegisterAction>  =>{

    const data = await firebase.registerUser(user);
    if(data){
        await firebase.AddUserDB(data)} 

    return{
        action: UserActions.REGISTER,
        payload: user,
    }
}

export const LogOut =  ():LogOutAction =>{

    if(appState.userCredentials !==null || ''){
        dispatch(SetUserCredentials(''))    
        sessionStorage.clear()
        dispatch(Navigate(Screens.LOGIN))
        location.reload()
    }
    


    return{
        action: UserActions.LOGOUT,
        payload: undefined,
    }
}

export const Edit = async (user:User): Promise<EditAction> =>{
    await firebase.EditUserDB(user)
    return{
        action: UserActions.EDIT,
        payload: user,
    }
}

export const SetUserCredentials =  (user:string): SetUserAction=>{

    return{
        action: UserActions.SET_USER,
        payload: user,
    }
}



export const AddPost = async (post:Post): Promise<AddPostAction> =>{

    await firebase.AddPostDB(post)

    return{
        action:PostActions.ADD_POST,
        payload: post,
    }
}

export const GetPosts = async (): Promise<GetPostsAction> =>{

    const posts = await firebase.GetPostsDB()

    return{
        action:PostActions.GET_POSTS,
        payload: posts,
    }
}
