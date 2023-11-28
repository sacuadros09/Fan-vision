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
            }
        }
    }
    
customElements.define("my-carduploade",CardUploade);
export default CardUploade;