import { addObserver,appState } from "../../store";
import styles from "./CardUploade.css"

class CardUploade extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }   
        connectedCallback(){
            this.render();
        }
        
        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML = ``
                const container = this.ownerDocument.createElement("section")

                appState.posts.forEach((p)=>{
                    const all = this.ownerDocument.createElement("section")

                    const profile = this.ownerDocument.createElement("img")
                    all.className = "profile"
                    all.appendChild(profile)

                    const imgProfile = this.ownerDocument.createElement("img")
                    imgProfile.src = appState.userData.img
                    profile.appendChild(imgProfile)

                    const userName = 





                })
            }
        }
    }
    
customElements.define("my-carduploade",CardUploade);
export default CardUploade;