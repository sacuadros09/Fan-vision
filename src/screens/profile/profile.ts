import "../../components/index"
import { dataIcons } from "../../dataIcons/dataIcons"
import CardIcons, {AttributeIcons} from "../../components/CardIcons/CardIcons"
import { attributeMenu } from "../../components/Menu/Menu"
import { dispatch } from "../../store/index";
import {navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import styles from "./profile.css"



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

        const css = this.ownerDocument.createElement('style')
                css.innerHTML = styles
                this.shadowRoot?.appendChild(css);
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
        Profilepicture.src="/src/img/AñadirAmigo.png"
        topmid.appendChild(Profilepicture)

        const Añadir = this.ownerDocument.createElement("h2")
            Añadir.innerText = "@Añadir perfil"
            topmid.appendChild(Añadir)

            const Biografy = this.ownerDocument.createElement("h3")
            Biografy.innerText = "Hi, I'm Sebastián Gonzales, also known as @SebasG7  I'm a futbol player fan, and I don't have many friends, so I hope you can add me."
            topmid.appendChild(Biografy)

            const button = this.ownerDocument.createElement('my-menu');
            button.className = "buttonsave"
            button.setAttribute(attributeMenu.text,"Save me")
            topmid.appendChild(button)
            button.addEventListener("click", ()=>{
               dispatch(navigate(Screens.DASHBOARD))
            })

            
            const logoutbutton = this.ownerDocument.createElement('my-menu');
            logoutbutton.className = "buttonlogout"
            logoutbutton.setAttribute(attributeMenu.text,"Log out")
            logoutbutton.appendChild(button)
            logoutbutton.addEventListener("click", ()=>{
               dispatch(navigate(Screens.DASHBOARD))
            })

          

           

            
          


    

           topmid.appendChild(button)
           topmid.appendChild(logoutbutton)
            container.appendChild(topmid)
            this.shadowRoot?.appendChild(container)
        }
    }
}

customElements.define("my-dashboardprofile",DashboardProfile);    