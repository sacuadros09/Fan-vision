import "../components/export"
import Placeholdersdata from "../mocks/placeholder";
import { AttributeRegister } from "../components/Register/Register";

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

            Placeholdersdata.forEach((text)=>{
                const input = this.ownerDocument.createElement('my-register')
                input.setAttribute(AttributeRegister.input_text, text.text)
                form.appendChild(input)
            });

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