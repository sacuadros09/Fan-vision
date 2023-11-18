import {User} from "./users"
//import { Userlogin } from "./users";
import { Post } from "./post";
export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    user: User,
  // userlogin:Userlogin
    screen: Screens,
    posts: Post[],
}

export enum Screens{
    REGISTER = "REGISTER",
    DASHBOARD = "DASHBOARD",
    PROFILE = "PROFILE",
    LANDING = "LANDING",
    MENU = "MENU",
    LOGIN = "LOGIN",
    POST = "POST"
}

export enum NavigationActions{
    "NAVIGATE" = "NAVIGATE",
}

export interface NavigationAction{
    action: NavigationActions.NAVIGATE;
    payload: Screens;
}

export enum UserActions {
    "LOGIN" = "LOGIN",
    "REGISTER" = "REGISTER",
    "LOGOUT" = "LOGOUT",
    "EDIT" = "EDIT",
    "SET_USER"="SET_USER"
}

export interface LogInAction {  
    action: UserActions.LOGIN,
    payload: User
}

export interface LogOutAction {
    action: UserActions.LOGOUT,
    payload: void
}

export interface RegisterAction {
    action: UserActions.REGISTER,
    payload:  User
    
}

export interface EditAction {
    action: UserActions.EDIT,
    payload: User
}

export interface SetUserAction {
    action: UserActions.SET_USER,
    payload: string
}

export enum PostActions {
    "ADD_POST" = "ADD_POST",
    "GET_POSTS" = "GET_POSTS",
}

export interface AddPostAction {
    action: PostActions.ADD_POST,
    payload: Post,
}

export interface GetPostsAction {
    action: PostActions.GET_POSTS,
    payload: Post[],
}


export type Actions = LogInAction | LogOutAction | RegisterAction |EditAction|SetUserAction| NavigationActions| AddPostAction | GetPostsAction;