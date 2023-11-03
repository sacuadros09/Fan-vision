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

            const bottom = this.ownerDocument.createElement("section")
            bottom.className = "bottom"


            const background = this.ownerDocument.createElement("img")
            background.src="/src/img/YWdHwTrVUE_bn_wanda 1.png"
            background.className= "background"
            container.appendChild(background)

            //const img = this.ownerDocument.createElement("img")
            //img.src="/src/img/logo.png"
            //img.className = "logo"
            
                

            const welcome = this.ownerDocument.createElement("h2")
            welcome.innerText = "Welcome"
            welcome.className = "title"
            container.appendChild(welcome)
    
      
            
            const button = this.ownerDocument.createElement('my-landing');
            button.className = "buttonlanding"
            button.setAttribute(attributeLanding.text,"Create account")
            button.addEventListener("click", ()=>{
               dispatch(navigate(Screens.REGISTER))
            })


            const account = this.ownerDocument.createElement ("button")
            account.className = "account"
            account.innerText = 'Sign in';

            
            bottom.appendChild(button);
            bottom.appendChild(account)
            //container.appendChild(img)
            container.appendChild(bottom)
            this.shadowRoot?.appendChild(container);


        }
    }
}

customElements.define('my-dashboardlanding', DashboardLanding)