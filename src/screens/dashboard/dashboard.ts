import "../../components/index"
import { dataIcons } from "../../dataIcons/dataIcons"
import { dataFriends } from "../../dataFriends/dataFriends"
import { dataProfile} from "../../dataProfile/dataProfile"
import { dataUploade} from "../../dataUploade/dataUploade"
import CardIcons, {AttributeIcons} from "../../components/CardIcons/CardIcons"
import CardFriends,{AttributeFriends} from "../../components/CardFriends/CardFriends"
import CardProfile,{AttributeProfile} from "../../components/CardProfile/CardProfile"
import CardUploade, {AttributeUploade} from "../../components/CardUploade/CardUploade"
import { dispatch } from "../../store/index";
import {navigate } from "../../store/actions";
import { Screens } from "../../types/store";



export class Dashboard extends HTMLElement{
    cardicons: CardIcons[] = [];
    cardfriends: CardFriends[] = [];
    cardprofiles: CardProfile[] =[];
    carduploades: CardUploade[]=[];
   

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

        dataUploade.forEach((c) => {
            const CardUpload = this.ownerDocument.createElement("my-carduploade") as CardUploade;
            CardUpload.setAttribute(AttributeUploade.profile,c.profile);
            CardUpload.setAttribute(AttributeUploade.named,c.named);
            CardUpload.setAttribute(AttributeUploade.subname,c.subname);
            CardUpload.setAttribute(AttributeUploade.description,c.description);
            CardUpload.setAttribute(AttributeUploade.images,c.images);
            CardUpload.setAttribute(AttributeUploade.likes,c.likes);
            CardUpload.setAttribute(AttributeUploade.number,c.number);
            this.carduploades.push(CardUpload);
            
        });

        dataFriends.forEach((p) => {
            const CardFriend = this.ownerDocument.createElement("my-cardfriends") as CardFriends;
            CardFriend.setAttribute(AttributeFriends .profilefoto,p.profilefoto);
            CardFriend.setAttribute(AttributeFriends.named,p.named);
            CardFriend.setAttribute(AttributeFriends.subname,p.subname);
            this.cardfriends.push(CardFriend);
            
        });

        dataProfile.forEach((m) => {
            const CardProfiles = this.ownerDocument.createElement("my-cardprofile") as CardProfile;
            CardProfiles.setAttribute(AttributeProfile.profilephoto,m.profilephoto);
            CardProfiles.setAttribute(AttributeProfile.subnames,m.subnames);
            CardProfiles.setAttribute(AttributeProfile.names,m.names);
            this.cardprofiles.push(CardProfiles);
            
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

        const logouploade=document.createElement("img")
        logouploade.src="/src/img/logo.png"
        sectionicon.appendChild(logouploade); 

        this.cardicons.forEach((cardicons) => {
            sectionicon.appendChild(cardicons);
        })
        container.appendChild(sectionicon);

        

        const buttonuploade=document.createElement("button")
        buttonuploade.innerText="Edit profile"
        buttonuploade.addEventListener("click",()=>{
            dispatch(navigate(Screens.MENU))
        })
        sectionicon.appendChild(buttonuploade);


        const sectionuploade=document.createElement("section")
        sectionuploade.className = "midside"
        this.carduploades.forEach((carduploade) => {
            sectionuploade.appendChild(carduploade);
        })
        container.appendChild(sectionuploade);



        const sectionprofile=document.createElement("section")
        this.cardprofiles.forEach((cardprofile) => {
            sectionprofile.appendChild(cardprofile);
        })
        container.appendChild(sectionprofile);
        this.shadowRoot?.appendChild(container)
        const closefriends=document.createElement("h2")
        closefriends.innerText = "Friends"
        sectionprofile.appendChild(closefriends);



        const sectionfriends=document.createElement("section")
        sectionfriends.className = "sectionfriends"
        this.cardfriends.forEach((cardfriends) => {
            sectionfriends.appendChild(cardfriends);
        })


        const containeright = document.createElement("section")
        containeright.className = "containerRight"
        containeright.appendChild(sectionprofile)
        container.appendChild(sectionfriends);
        containeright.appendChild(sectionfriends)
        container.appendChild(containeright)
        this.shadowRoot?.appendChild(container)
    }
}
}

customElements.define("my-dashboard",Dashboard);