import {User} from "./users"
import { Userlogin } from "./users";
import { Post } from "./post";
export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    user: User,
    userlogin:Userlogin
    screen: Screens,
    posts: Post[],
}

export enum Screens{
    REGISTER = "REGISTER",
    DASHBOARD = "DASHBOARD",
    PROFILE = "PROFILE",
    LANDING = "LANDING",
    MENU = "MENU",
    LOGIN = "LOGIN"
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
    "PROFILE" = "PROFILE",
    "LANDING" = "LANDING",
    "MENU" = "MENU"
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


export type Actions = LogInAction | LogOutAction | RegisterAction | NavigationActions| AddPostAction | GetPostsAction;