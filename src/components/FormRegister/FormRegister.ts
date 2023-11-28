import { dispatch } from "../../store";
import { Register,Navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import firebase from "../../utils/firebase";
import styles from "./FormRegister.css"

const credentials = {
    uid: "",
    Name: "",
    userName: "",
    email: "",
    password: "",
    Confirmpassword:"",
    img: "",
}

export default class MyFormRegister extends HTMLElement{
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

        

        const name = this.ownerDocument.createElement("input")
        name.placeholder = "Name"
        name.type = "text"
        name.addEventListener("change", (e:any)=>{
            credentials.Name = e.target.value
        })


        const userName = this.ownerDocument.createElement("input")
        userName.placeholder = "Username"
        userName.type = "text"
        userName.addEventListener("change", (e:any)=>{
            credentials.userName = e.target.value
        })

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
            dispatch(Navigate(Screens.LOGIN))
        })

        const confirmpassword= this.ownerDocument.createElement("input")
        confirmpassword.placeholder = "Confirmpassword"
        confirmpassword.type = "password"
        confirmpassword.addEventListener("change", (e:any)=>{
            credentials.Confirmpassword = e.target.value
        })


        const sendbtn = this.ownerDocument.createElement("button")
        sendbtn.innerText = "Log in"
        sendbtn.addEventListener("click", async ()=>{
            dispatch(await Register(credentials))
        })

        
        this.shadowRoot?.appendChild(name)
        this.shadowRoot?.appendChild(userName)
        this.shadowRoot?.appendChild(password)
        this.shadowRoot?.appendChild(confirmpassword)
        this.shadowRoot?.appendChild(sendbtn)

        }
    }

}

customElements.define('form-register', MyFormRegister)