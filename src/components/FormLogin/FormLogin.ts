import { appState, dispatch } from "../../store";
import {LogIn,} from "../../store/actions"
import firebase from "../../utils/firebase";
import styles from "./FormLogin.css"

const credentials = {
    email: "",
    password: "",
}

export default class MyFormLog extends HTMLElement{

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

        const container = this.ownerDocument.createElement("section")

        const email = this.ownerDocument.createElement("input")
        email.placeholder = "Email"
        email.type = "email"
        email.addEventListener("change", (e:any)=>{
            credentials.email = e.target.value
        })

        const password = this.ownerDocument.createElement("input")
        password.placeholder = "Password"
        password.type = "password"
        password.addEventListener("change", (e:any)=>{
            credentials.password = e.target.value
        })

        const sendbtn = this.ownerDocument.createElement("button")
        sendbtn.innerText = "Log in"
      //  sendbtn.addEventListener("click", async ()=>{
        //  dispatch(await LogIn(credentials))
       // })

        container.appendChild(userName)
        container.appendChild(password)
        container.appendChild(sendbtn)

        this.shadowRoot?.appendChild(container)

        }
    }

}

customElements.define('form-login', MyFormLog)