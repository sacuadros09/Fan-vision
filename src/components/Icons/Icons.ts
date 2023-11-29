import { appState,dispatch } from "../../store";
import { AddUser,Navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import firebase,{auth}from "../../utils/firebase";
import styles from "./FormRegister.css"


export default class MyIcons extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot){ 
        this.shadowRoot.innerHTML = '';

        const css = this.ownerDocument.createElement('style')
        css.innerHTML = styles
        this.shadowRoot?.appendChild(css)

        const container = this.ownerDocument.createElement('section')
        this.shadowRoot?.appendChild(container)

        const logo = this.ownerDocument.createElement("img")
        logo.src = "../../img/logo.png"
        logo.className = "logo"

        
        const Home = this.ownerDocument.createElement("img")
        Home.src = "../../img/home.png"
        Home.className = "home"

        
        const Notification = this.ownerDocument.createElement("img")
        Notification.src = "../../img/notifications.png"
        Notification.className = "home"

        const Explore = this.ownerDocument.createElement("img")
        Explore.src = "../../img/search.png"
        Explore.className = "explore"


        
        const Profile = this.ownerDocument.createElement("img")
        Profile.src = "../../img//person.png"
        Profile.className = "profile"

        
       

        
    

        }
    }

}

customElements.define('my-icons', MyIcons)