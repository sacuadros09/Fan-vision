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

                    const Name = this.ownerDocument.createElement("h3")
                    Name.textContent = appState.userData.Name
                    profile.appendChild(Name)

                    const UserName = this.ownerDocument.createElement("h3")
                    UserName.textContent = appState.userData.userName
                    profile.appendChild(UserName)

                    const description = this.ownerDocument.createElement("p")
                    description.textContent = p.description
                    all.appendChild(description)

                    const img = this.ownerDocument.createElement("img")
                    img.src=p.images
                    all.appendChild(img)

                    const likeAppart = this.ownerDocument.createElement("section")
                    likeAppart.className = "likeAppart"
                    all.appendChild(likeAppart)

                    const like = this.ownerDocument.createElement("button")    
                    like.textContent = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-thumb-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
                </svg>`;
                likeAppart.appendChild(like);

                const save = this.ownerDocument.createElement("button");
                save.textContent = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                </svg>`;
                likeAppart.appendChild(save);

                container.appendChild(all)

                const css = this.ownerDocument.createElement('style')
            css.innerHTML = styles
            this.shadowRoot?.appendChild(css)
            })



                })
            }
        }
    }
    
customElements.define("my-carduploade",CardUploade);
export default CardUploade;