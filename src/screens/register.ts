import "../components/index"
import { AttributeRegister } from "../components/Register/Register";
import { dispatch } from "../store/index";
import { Register,navigate } from "../store/actions";
import { Screens } from "../types/store";
//import styles from "./register.css"

const credentials = { 
    name:"",
    username: "",
    email: "",
    password: "",
    confirmpassword: ""
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

            const leftimage = this.ownerDocument.createElement("section")
            leftimage.className ="leftimage"

           
            const form = this.ownerDocument.createElement('section');
            form.className = "form"

            const ImageRegister=document.createElement("img")
        ImageRegister.src="/src/img/Messi.png"
        leftimage.appendChild(ImageRegister)


            const LogoRegister=document.createElement("img")
        LogoRegister.src="/src/img/logo.png"
        form.appendChild(LogoRegister)

        const SignIn = this.ownerDocument.createElement("h2")
            SignIn.innerText = "Sign in"
            form.appendChild(SignIn)

            const SignUp = this.ownerDocument.createElement("h2")
            SignUp.innerText = "Sign up"
            form.appendChild(SignUp)

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
            password.addEventListener("change", (e:any)=>credentials.password = e.target.value);
            console.log(credentials)
            form.appendChild(password);
            
            const Confirmpassword = this.ownerDocument.createElement('my-input');
            Confirmpassword.setAttribute(AttributeRegister.text, "Confirm Password");
            Confirmpassword.setAttribute(AttributeRegister.type, "Confirm Password");
            Confirmpassword.addEventListener("change", (e:any)=>credentials.confirmpassword = e.target.value);
            console.log(credentials)
            form.appendChild(Confirmpassword);

            const button = this.ownerDocument.createElement('my-button');
            button.addEventListener("click", ()=>{
               dispatch(navigate(Screens.DASHBOARD))
            })

            button.addEventListener("click",()=>{
                dispatch(
                    Register({
                        payload:{
                            Name: credentials.name,
                            userName: credentials.username,
                            email: credentials.email,
                            password: credentials.password,
                            Confirmpassword: credentials.confirmpassword
                        }
                    })
                )
            })

            const account = this.ownerDocument.createElement ("button")
            account.innerText = 'Already have an account?';

            form.appendChild(button);
            form.appendChild(account)
            container.appendChild(leftimage)
            container.appendChild(form)
            this.shadowRoot?.appendChild(container);


        }
    }
}

customElements.define('my-dashboardregister', DashboardRegister)