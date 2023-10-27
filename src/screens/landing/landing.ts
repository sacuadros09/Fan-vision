import "../../components/index"
import { dispatch } from "../../store/index";
import {navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import { attributeLanding } from "../../components/Landing/Landing";
import styles from "./landing.css"

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

           const css = this.ownerDocument.createElement('style')
                css.innerHTML = styles
                this.shadowRoot?.appendChild(css);


            const container = this.ownerDocument.createElement("section")
            container.className = "container"

            const center = this.ownerDocument.createElement('section');
            center.className = "center"

            const img = this.ownerDocument.createElement("img")
                img.src="/src/img/logo.png"
                center.className= "img"

            const welcome = this.ownerDocument.createElement("h2")
            welcome.innerText = "Welcome"
            center.appendChild(welcome)
    
      
            
            const button = this.ownerDocument.createElement('my-landing');
            button.className = "buttonlanding"
            button.setAttribute(attributeLanding.text,"Create account")
            button.addEventListener("click", ()=>{
               dispatch(navigate(Screens.REGISTER))
            })


            const account = this.ownerDocument.createElement ("button")
            account.innerText = 'Sign in';

            center.appendChild(button);
            center.appendChild(account)
            center.appendChild(img)
            container.appendChild(center)
            this.shadowRoot?.appendChild(container);


        }
    }
}

customElements.define('my-dashboardlanding', DashboardLanding)