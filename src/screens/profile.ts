import "../components/index"
import { dataIcons } from "../dataIcons/dataIcons"
import CardIcons, {AttributeIcons} from "../components/CardIcons/CardIcons"
import { attributeMenu } from "../components/Menu/Menu"
import { dispatch } from "../store/index";
import {navigate } from "../store/actions";
import { Screens } from "../types/store";




export class DashboardProfile extends HTMLElement{
    cardicons: CardIcons[] = [];
   

    constructor(){
        super();
        this.attachShadow({mode:"open"});

        dataIcons.forEach((s) => {
            const CardIcon = this.ownerDocument.createElement("my-cardicons") as CardIcons;
            CardIcon.setAttribute(AttributeIcons.logo,s.logo);
            CardIcon.setAttribute(AttributeIcons.img,s.img);
            CardIcon.setAttribute(AttributeIcons.name,s.name);
            this.cardicons.push(CardIcon);
            
        });

        
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

        const topmid = document.createElement("section")
        topmid.className = "topmid"


        const logouploade=document.createElement("img")
        logouploade.src="/src/img/logo.png"
        sectionicon.appendChild(logouploade); 
        

        this.cardicons.forEach((cardicons) => {
            sectionicon.appendChild(cardicons);
        })
        container.appendChild(sectionicon);


            const buttonuploade=document.createElement("button")
            buttonuploade.innerText="Edit profile"
            sectionicon.appendChild(buttonuploade);


            const Profilepicture=document.createElement("img")
        Profilepicture.src="/src/img/gonzalez.png"
        topmid.appendChild(Profilepicture)

        const Username = this.ownerDocument.createElement("h2")
            Username.innerText = "@SebasG819"
            topmid.appendChild(Username)

            const Nickname = this.ownerDocument.createElement("h2")
            Nickname.innerText = "Ciclistafutbol"
            topmid.appendChild(Nickname)

            const button = this.ownerDocument.createElement('my-menu');
            button.className = "buttonmenu"
            button.setAttribute(attributeMenu.text,"Edit profile")
            topmid.appendChild(button)
            button.addEventListener("click", ()=>{
               dispatch(navigate(Screens.REGISTER))
            })

           

            
          


    


           
            container.appendChild(topmid)
            this.shadowRoot?.appendChild(container)
        }
    }
}

customElements.define("my-dashboardprofile",DashboardProfile);    