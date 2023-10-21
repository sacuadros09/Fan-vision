import {User} from "./users"
import { Userlogin } from "./users";
export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
   Users: User[],
   User: Userlogin[],
   screen: Screens
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

export enum AuthActions {
    "LOGIN" = "LOGIN",
    "REGISTER" = "REGISTER",
    "LOGOUT" = "LOGOUT",
    "PROFILE" = "PROFILE",
    "LANDING" = "LANDING",
    "MENU" = "MENU"
}

export interface LogInAction {  
    action: AuthActions.LOGIN,
    payload: Userlogin
}

export interface LogOutAction {
    action: AuthActions.LOGOUT,
    payload: void
}

export interface RegisterAction {
    action: AuthActions.REGISTER,
    payload:  User
    
}

export type Actions = LogInAction | LogOutAction | RegisterAction | NavigationActions; 