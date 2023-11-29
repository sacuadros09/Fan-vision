import { appState,dispatch } from "../../store";
import { AddUser,Navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import firebase,{auth}from "../../utils/firebase";
import styles from "./Friends.css"


export default class MyTopProfile extends HTMLElement{
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

        const container = this.ownerDocument.createElement('section')
        this.shadowRoot?.appendChild(container)

        const right = this.ownerDocument.createElement("div")
            right.className = "right"

         const rightname = this.ownerDocument.createElement("div")
            rightname.className = "righname"

            const rightsubname = this.ownerDocument.createElement("div")
            rightsubname.className = "righsubname"

        
        const LogoSebas = this.ownerDocument.createElement("img")
        LogoSebas.src = "../../img/home.png"
        LogoSebas.className = "home_logo"

        const NameProfile = this.ownerDocument.createElement("h2")
        NameProfile.className = "nameprofile"
        NameProfile.innerText = "@SebasG7"

        const SubProfile = this.ownerDocument.createElement("h2")
        SubProfile.className = "subnameprofile"
        SubProfile.innerText = "Ciclistafutbol"


            right.appendChild(LogoSebas)
            rightname.appendChild(NameProfile)
            rightsubname.appendChild(SubProfile)
            container.appendChild(right)
            container.appendChild(rightname)
            container.appendChild(rightsubname)
            this.shadowRoot?.appendChild(container)
        }
    }

}

customElements.define('my-topprofile', MyTopProfile)