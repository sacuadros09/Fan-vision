import Storage, { PersistanceKeys } from "../utils/storage";
import {  AppState, Observer,Screens } from "../types/store";
import { reducer } from "./reducer";

const initialState: AppState = {
  user: {
    id: "",
    Name: "",
    userName: "",
    email: "",
    password: "",
    Confirmpassword: "",
  },

 // userlogin: {
  //  userName: "",
   //password: "",
    
  //},
  screen: Screens.LANDING,
  posts: [],
};

export let appState = Storage.get<AppState>({
  key: PersistanceKeys.STORE,
  defaultValue: initialState,
});

let observers: Observer[] = [];
const notifyObservers = () => observers.forEach((o) => o.render());

const persistStore = (state: AppState) =>
  Storage.set({ key: PersistanceKeys.STORE, value: state });

export const dispatch = (action: any) => {
  const clone = JSON.parse(JSON.stringify(appState));
  const newState = reducer(action, clone);
  appState = newState;

  persistStore(newState);
  notifyObservers();
};

export const addObserver = (ref: Observer) => {
  observers = [...observers, ref];
};