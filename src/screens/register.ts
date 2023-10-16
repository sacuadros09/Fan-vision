import "../components/export"
import { AttributeRegister } from "../components/Register/Register";
import { dispatch } from "../store/index";
import { Register} from "../store/actions";

const credentials = { 
    name:"",
    username: "",
    email: "",
    password: ""
}

//import styles from "./register.css"

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

            const form = this.ownerDocument.createElement('section')

            const userName = this.ownerDocument.createElement('my-input')
            userName.setAttribute(AttributeRegister.text, "Username")
            userName.setAttribute(AttributeRegister.type, "text")

            form.appendChild(userName)

            const button = this.ownerDocument.createElement('my-button');

            const account = this.ownerDocument.createElement('h3')
            account.innerText = 'Already have an account?'

            form.appendChild(button)
            form.appendChild(account)
            this.shadowRoot?.appendChild(form)


        }
    }
}

customElements.define('my-dashboardregister', DashboardRegister)