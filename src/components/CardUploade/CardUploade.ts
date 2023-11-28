import { addObserver,appState } from "../../store";
import styles from "./CardUploade.css"

class CardUploade extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    
    uteChangedCallback(propName:AttributeUploade,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            case AttributeUploade.number:
                
                this.number = newValue ? Number(newValue) : undefined;
            break;

            default: 
            this[propName] = newValue;
            break;
        }
        
        this.render();
    }
        
    
        
        connectedCallback(){
            this.render();
        }
        
        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="../src/components/CardUploade/CardUploade.css">
                <section  class = "card" >
                <img class = "phoper" src=${this.profile}></img>
                <h1>${this.named}</h1>
                <h3>${this.subname}</h3>
                <p>${this.description}</p>
                <img class = "imgpost" src=${this.images}></img>
                <section class = "downpart">
                <img class = "imglike" src=${this.likes}></img>
                <p class = "numlike" >${this.number}</p>
                </section>
                
                </section>
                `
            }
        }
    }
    
customElements.define("my-carduploade",CardUploade);
export default CardUploade;