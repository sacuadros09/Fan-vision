import { dispatch } from "../../store";
import { Register } from "../../store/actions";
import styles from "./FormRegister.css"

const credentials = {
    id: "",
    name: "",
    userName: "",
    email: "",
    password: "",
    confirmpassword:"",
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

        const container = this.ownerDocument.createElement("section")

        const name = this.ownerDocument.createElement("input")
        name.placeholder = "Username"
        name.type = "text"
        name.addEventListener("change", (e:any)=>{
            credentials.userName = e.target.value
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
        })

        const sendbtn = this.ownerDocument.createElement("button")
        sendbtn.innerText = "Log in"
        sendbtn.addEventListener("click", async ()=>{
            dispatch(await Register(credentials))
        })

        container.appendChild(userName)
        container.appendChild(email)
        container.appendChild(password)
        container.appendChild(sendbtn)

        this.shadowRoot?.appendChild(container)

        }
    }

}

customElements.define('form-register', MyFormReg)