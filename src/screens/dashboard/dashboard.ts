import "../../components/index"
import { appState,dispatch } from "../../store"
import { GetPosts } from "../../store/actions"
import firebase from "../../utils/firebase"
import {Navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import styles from "./dashboard.css"


export default class Dashboard extends HTMLElement{

    constructor(){
        super();    
        this.attachShadow({mode:"open"});

        
    }
    

  connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/src/index.css">
            
        `;
             const main=document.createElement("section")
            main.className = "main"

            const icons = this.ownerDocument.createElement("my-icons")

            const topprofile = this.ownerDocument.createElement("my-topprofile")

            const friends = this.ownerDocument.createElement("my-friends")

            main.appendChild(icons)
            main.appendChild(topprofile)
            main.appendChild(friends)
           

           // const uploadepublication= this.ownerDocument.createElement("my-cardpublication")
           // uploadepublication.className = "publication"
           // container.appendChild(uploadepublication)
            
          

            



            const containeright = document.createElement("section")
            containeright.className = "containerRight"
        
          
            
            this.shadowRoot?.appendChild(main)
        }
    }
}

customElements.define("my-dashboard",Dashboard);    