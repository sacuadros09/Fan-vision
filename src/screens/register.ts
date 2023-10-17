import "../components/export"
import { AttributeRegister } from "../components/Register/Register";
import { dispatch } from "../store/index";
import { Register,navigate } from "../store/actions";
import { Screens } from "../types/store";
//import styles from "./register.css"

const credentials = { 
    name:"",
    username: "",
    email: "",
    password: ""
}

class DashboardRegister extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;

           // const css = this.ownerDocument.createElement('style')
               // css.innerHTML = styles
                //this.shadowRoot?.appendChild(css);
            const container = this.ownerDocument.createElement("section")
            container.className = "container"

            const form = this.ownerDocument.createElement('section');
            form.className = "form"

            const Name = this.ownerDocument.createElement('my-input')
            Name.setAttribute(AttributeRegister.text, "Your name")
            Name.setAttribute(AttributeRegister.type, "text")
            Name.addEventListener("change",(e:any)=>credentials.name = e.target.value)
            form.appendChild(Name)

            const userName = this.ownerDocument.createElement('my-input')
            userName.setAttribute(AttributeRegister.text, "User name")
            userName.setAttribute(AttributeRegister.type, "text")
            userName.addEventListener("change",(e:any)=>credentials.username = e.target.value)
            form.appendChild(userName)

            const email = this.ownerDocument.createElement('my-input')
            email.setAttribute(AttributeRegister.text, "Your e-mail")
            email.setAttribute(AttributeRegister.type, "text")
            email.addEventListener("change",(e:any)=>credentials.email = e.target.value)
            form.appendChild(email);

            const password = this.ownerDocument.createElement('my-input');
            password.setAttribute(AttributeRegister.text, "Password");
            password.setAttribute(AttributeRegister.type, "password");
            userName.addEventListener("change", (e:any)=>credentials.password = e.target.value);
            console.log(credentials)
            form.appendChild(password);

            const button = this.ownerDocument.createElement('my-button');
            button.addEventListener("click", ()=>{
               dispatch(navigate(Screens.DASHBOARD))
            })
{}  
            button.addEventListener("click",()=>{
                dispatch(
                    Register({
                        payload:{
                            Name: credentials.name,
                            userName: credentials.username,
                            email: credentials.email,
                            password: credentials.password,
                        }
                    })
                )
            })

            const account = this.ownerDocument.createElement('button')
            account.innerText = 'Already have an account?'

            form.appendChild(button);
            form.appendChild(account);

            container.appendChild(form)
            this.shadowRoot?.appendChild(form);


        }
    }
}

customElements.define('my-dashboardregister', DashboardRegister)