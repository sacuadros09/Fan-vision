import { Post } from "../types/post"
import {  Actions, UserActions, PostActions, NavigationActions, LogInAction, LogOutAction,NavigationAction, Screens, RegisterAction,EditAction, GetPostsAction, AddPostAction } from "../types/store"
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

    await firebase.registerUser(user)
    await firebase.AddUserDB(user)

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

export const Edit = async (user:User): Promise<EditAction> =>{
    await firebase.loginUser(user)
    return{
        action: UserActions.EDIT,
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
