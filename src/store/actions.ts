import { Post } from "../types/post"
import {  Actions, UserActions, PostActions, NavigationActions, LogInAction, LogOutAction,NavigationAction, Screens, RegisterAction, GetPostsAction, AddPostAction } from "../types/store"
import { User,Userlogin} from "../types/users"
import firebase from "../utils/firebase"

export const Navigate = (screen:Screens): NavigationAction =>{
    return{
        action: NavigationActions.NAVIGATE,
        payload:screen,
    }
}

export const LogIn = async (userlogin:Userlogin): Promise<LogInAction> =>{
    return{
        action: UserActions.LOGIN,
        payload: userlogin,
    }
}


export const Register = async (user:User): Promise<RegisterAction>  =>{

    return{
        action: UserActions.REGISTER,
        payload: user,
    }
}

export const LogOut =  ():LogOutAction =>{

    return{
        action: UserActions.LOGOUT,
        payload: undefined,
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
