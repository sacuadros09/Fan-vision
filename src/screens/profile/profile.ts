import "../../components/index"
import { dataIcons } from "../../dataIcons/dataIcons"
import CardIcons, {AttributeIcons} from "../../components/CardIcons/CardIcons"
import { attributeMenu } from "../../components/Menu/Menu"
import { AttributeProfile } from "../../components/Profile/Profile"
import { dispatch } from "../../store/index";
import {Navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import styles from "./profile.css"

//const credentials = { 
   // username: "",
  //  name:"",
   // email: "",
  //  password: ""
//}

export default class DashboardProfile extends HTMLElement{
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
        const topbot = document.createElement("section")
        topbot.className = "topbot"


        const logouploade=document.createElement("img")
        logouploade.src="/src/img/logo.png"
        sectionicon.appendChild(logouploade); 
        

        this.cardicons.forEach((cardicons) => {
            sectionicon.appendChild(cardicons);
        })
        container.appendChild(sectionicon);


            const buttonuploade=document.createElement("button")
            buttonuploade.innerText="Home"
            buttonuploade.addEventListener("click", ()=>{
                dispatch(Navigate(Screens.DASHBOARD))
             })
 
            sectionicon.appendChild(buttonuploade);


            const Profilepicture=document.createElement("img")
            Profilepicture.className = "Imgphoto"
        Profilepicture.src="/src/img/AñadirAmigo.png"
        topmid.appendChild(Profilepicture)

        const Añadir = this.ownerDocument.createElement("h2")
            Añadir.className = "addfriend"
            Añadir.innerText = "@Añadir perfil"
            topmid.appendChild(Añadir)

            const Biografy = this.ownerDocument.createElement("p")
            Biografy.className = "biografy"
            Biografy.innerText = "Hi, I'm Sebastián Gonzales, also known as @SebasG7  I'm a futbol player fan, and I don't have many friends, so I hope you can add me."
            topmid.appendChild(Biografy)


            const NewProfile = this.ownerDocument.createElement('my-profile')
            NewProfile.setAttribute(AttributeProfile.text, "New Profile")
            NewProfile.setAttribute(AttributeProfile.type, "text")
         //   NewProfile.addEventListener("change",(e:any)=>credentials.username = e.target.value)
            topbot.appendChild(NewProfile)

            const Description = this.ownerDocument.createElement('my-profile')
            Description.setAttribute(AttributeProfile.text, "Change Description")
            Description.setAttribute(AttributeProfile.type, "text")
           // Description.addEventListener("change",(e:any)=>credentials.name = e.target.value)
            topbot.appendChild(Description)

            const ChangePassword = this.ownerDocument.createElement('my-profile')
            ChangePassword.setAttribute(AttributeProfile.text, "Change Password")
            ChangePassword.setAttribute(AttributeProfile.type, "text")
           // ChangePassword.addEventListener("change",(e:any)=>credentials.password = e.target.value)
            topbot.appendChild(ChangePassword);

            const ChangeEmail = this.ownerDocument.createElement('my-profile');
            ChangeEmail.setAttribute(AttributeProfile.text, "Change Email");
            ChangeEmail.setAttribute(AttributeProfile.type, "password");
            //ChangeEmail.addEventListener("change", (e:any)=>credentials.email = e.target.value);
           // console.log(credentials)
            topbot.appendChild(ChangeEmail);





            const button = this.ownerDocument.createElement('my-menu');
            button.className = "buttonsave"
            button.setAttribute(attributeMenu.text,"Save me")
            topbot.appendChild(button)
            button.addEventListener("click", ()=>{
               dispatch(Navigate(Screens.DASHBOARD))
            })

            
            const logoutbutton = this.ownerDocument.createElement('my-menu');
            logoutbutton.className = "buttonlogout"
            logoutbutton.setAttribute(attributeMenu.text,"Log out")
            topbot.appendChild(button)
            logoutbutton.addEventListener("click", ()=>{
               dispatch(Navigate(Screens.LANDING))
            })

          

            
           topbot.appendChild(button)
           topbot.appendChild(logoutbutton)
            container.appendChild(topmid)
            container.appendChild(topbot)
            this.shadowRoot?.appendChild(container)
        }
    }
}

customElements.define("my-dashboardprofile",DashboardProfile);