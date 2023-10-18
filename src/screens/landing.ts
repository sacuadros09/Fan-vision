import "../components/index"
import { AttributeRegister } from "../components/Register/Register";
import { dispatch } from "../store/index";
import {navigate } from "../store/actions";
import { Screens } from "../types/store";
//import styles from "./register.css"

class DashboardLanding extends HTMLElement {
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

            const center = this.ownerDocument.createElement('section');
            center.className = "center"

            const img = this.ownerDocument.createElement("img")
            img.className = "imgs"
                img.src="/src/img/logo.png"

            const welcome = this.ownerDocument.createElement("h2")
            welcome.innerText = "Welcome"
            center.appendChild(welcome)
    
      
            
            const button = this.ownerDocument.createElement('my-button');
            button.className = "buttonlanding"
            button.setAttribute(att.text,"Conocer más")
            button.addEventListener("click", ()=>{
               dispatch(navigate(Screens.REGISTER))
            })


            const account = this.ownerDocument.createElement ("button")
            account.innerText = 'Already have an account?';

            form.appendChild(button);
            form.appendChild(account)
            container.appendChild(form)
            this.shadowRoot?.appendChild(container);


        }
    }
}

customElements.define('my-dashboardlanding', DashboardLanding)