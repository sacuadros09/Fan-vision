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
        const container=document.createElement("section")
        container.className = "all"

   
        const sectionicon=document.createElement("nav")
        sectionicon.className = "leftside"

        const logouploade=document.createElement("img")
        logouploade.src="/src/img/logo.png"
        sectionicon.appendChild(logouploade); 

       

        

            const buttonuploade=document.createElement("button")
            buttonuploade.innerText="Menu"
            buttonuploade.addEventListener("click",()=>{
                dispatch(Navigate(Screens.MENU))
            })
            sectionicon.appendChild(buttonuploade);
           
            const campsForm = this.ownerDocument.createElement("form-register")

           // const uploadepublication= this.ownerDocument.createElement("my-cardpublication")
           // uploadepublication.className = "publication"
           // container.appendChild(uploadepublication)
            
          

            



            const containeright = document.createElement("section")
            containeright.className = "containerRight"
        
          
            container.appendChild(containeright)
            this.shadowRoot?.appendChild(container)
        }
    }
}

customElements.define("my-dashboard",Dashboard);    