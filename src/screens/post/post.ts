//import "../../components/index"
//import { dataIcons } from "../../dataIcons/dataIcons"
//import { dataFriends } from "../../dataFriends/dataFriends"
//import { dataProfile} from "../../dataProfile/dataProfile"
//import CardIcons, {AttributeIcons} from "../../components/CardIcons/CardIcons"
//import CardFriends,{AttributeFriends} from "../../components/CardFriends/CardFriends"
//import CardProfile,{AttributeProfile} from "../../components/CardProfile/CardProfile"
import { dispatch } from "../../store/index";
import {Navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import Firebase from "../../utils/firebase"
import { Post } from "../../types/post"
import { FirebaseError } from "firebase/app";


    const formPost: Omit<Post, "id"> = {
        profile:"",
        named: "",
        subname: "",
        description:"",
        images: "",
        likes: "",
        number: 0,
        createdAt:"",
    };

    export default class DashboardPosts extends HTMLElement{

       // cardicons: CardIcons[] = [];
    //cardfriends: CardFriends[] = [];
    //cardprofiles: CardProfile[] =[];
        constructor(){
            super();
            this.attachShadow({mode: 'open'});
           // dataIcons.forEach((s) => {
            //    const CardIcon = this.ownerDocument.createElement("my-cardicons") as CardIcons;
            //    CardIcon.setAttribute(AttributeIcons.logo,s.logo);
             //   CardIcon.setAttribute(AttributeIcons.img,s.img);
             //   CardIcon.setAttribute(AttributeIcons.name,s.name);
             //   this.cardicons.push(CardIcon);
                
           // });
    
    
          //  dataFriends.forEach((p) => {
           //     const CardFriend = this.ownerDocument.createElement("my-cardfriends") as CardFriends;
           //     CardFriend.setAttribute(AttributeFriends .profilefoto,p.profilefoto);
           //     CardFriend.setAttribute(AttributeFriends.named,p.named);
            //    CardFriend.setAttribute(AttributeFriends.subname,p.subname);
             //   this.cardfriends.push(CardFriend);
                
         //   });
    
          //  dataProfile.forEach((m) => {
            //    const CardProfiles = this.ownerDocument.createElement("my-cardprofile") as CardProfile;
            //    CardProfiles.setAttribute(AttributeProfile.profilephoto,m.profilephoto);
             //   CardProfiles.setAttribute(AttributeProfile.subnames,m.subnames);
             //   CardProfiles.setAttribute(AttributeProfile.names,m.names);
              //  this.cardprofiles.push(CardProfiles);
                
          //  });
        }
            
    
        connectedCallback(){
            this.render();
        }

        

        submitForm(){
        console.log(formPost);
       //     Firebase.AddPostDB(formPost);
        }

        changeProfile(e: any){
            formPost.profile = e.target.value;
        }

        changeName(e:any){
            formPost.named = e.target.value;
        }

        changeSubame(e:any){
            formPost.subname = e.target.value;
        }

        changeDescription(e:any){
            formPost.description = e.target.value;
        }

        changeImages(e:any){
            formPost.images = e.target.value;
        }

        changeLikes(e:any){
            formPost.likes = e.target.value;
        }

        changeNumber(e:any){
            formPost.number = e.target.value;
        }

        async render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="/src/index.css">
                
            `;

            const container=document.createElement("section")
            container.className = "all"
            
            const mediumsection=document.createElement("section")
            mediumsection.className = "mediumsection"

           // const sectionicon=document.createElement("nav")
        //sectionicon.className = "leftside"

       // const logouploade=document.createElement("img")
       // logouploade.src="/src/img/logo.png"
        //sectionicon.appendChild(logouploade); 

        //this.cardicons.forEach((cardicons) => {
        //    sectionicon.appendChild(cardicons);
      //  })
       // container.appendChild(sectionicon);


      //  const buttonuploade=document.createElement("button")
       // buttonuploade.innerText="Upload Photo"
       // buttonuploade.addEventListener("click",()=>{
       //     dispatch(Navigate(Screens.MENU))
       // })
       // sectionicon.appendChild(buttonuploade);

            
                
                const pProfile= this.ownerDocument.createElement("input");
                pProfile.placeholder = "Perfil";
                pProfile.addEventListener("change", this.changeProfile);
                mediumsection.appendChild(pProfile)

                const pName = this.ownerDocument.createElement("input");
                pName.placeholder = "Nombre";
                pName.addEventListener("change", this.changeName);
                mediumsection.appendChild(pName)

                const pSubname = this.ownerDocument.createElement("input");
                pSubname.placeholder = "@Subnombre";
                pSubname.addEventListener("change", this.changeSubame);
                mediumsection.appendChild(pSubname)

                const pDescription = this.ownerDocument.createElement("input");
                pDescription.placeholder = "Descripción";
                pDescription.addEventListener("change", this.changeDescription);
                mediumsection.appendChild(pDescription)

                const pImages = this.ownerDocument.createElement("input");
                pImages.placeholder = "Images";
                pImages.addEventListener("change", this.changeImages);
                mediumsection.appendChild(pImages)

                const pLikes = this.ownerDocument.createElement("input");
                pLikes.placeholder = "Likes";
                pLikes.addEventListener("change", this.changeLikes);
                mediumsection.appendChild(pLikes)

                const pNumber= this.ownerDocument.createElement("input");
                pNumber.placeholder = "Numero";
                pNumber.type = "number";
                pNumber.addEventListener("change", this.changeNumber);
                mediumsection.appendChild(pNumber);
                

                const save = this.ownerDocument.createElement("button");
                save.innerText = "Guardar";
                save.addEventListener("click", this.submitForm);
                save.addEventListener("click", ()=>{
                    dispatch(Navigate(Screens.DASHBOARD))
                 })
                mediumsection.appendChild(save);

                const fbdata = await Firebase.GetPostsDB();
                fbdata.forEach((p: Post) => {
                const name = this.ownerDocument.createElement("h3");
                name.innerText = p.named;
                mediumsection.appendChild(name);
            
                
            
               // const number = this.ownerDocument.createElement("h3");
               // number.innerText = String(p.number);
                //container.appendChild(number);
                
            
                });


              

              // const sectionprofile=document.createElement("section")
              // this.cardprofiles.forEach((cardprofile) => {
                //   sectionprofile.appendChild(cardprofile);
              // })
              // container.appendChild(sectionprofile);
              // this.shadowRoot?.appendChild(container)
              // const closefriends=document.createElement("h2")
              // closefriends.innerText = "Friends"
               //sectionprofile.appendChild(closefriends);
              
   
   
             //  const sectionfriends=document.createElement("section")  
              // sectionfriends.className = "sectionfriends"
             //  this.cardfriends.forEach((cardfriends) => {
                //   sectionfriends.appendChild(cardfriends);
            //   })
   
   
               const containeright = document.createElement("section")
               containeright.className = "containerRight"
            //   containeright.appendChild(sectionprofile)
             //  container.appendChild(sectionfriends);
               container.appendChild(mediumsection);
             //  containeright.appendChild(sectionfriends)
               container.appendChild(containeright)
               this.shadowRoot?.appendChild(container)
           }
               
           }
       }
   
   
   customElements.define("my-dashboardpost",DashboardPosts);