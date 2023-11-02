    import { dispatch } from "../../store/index";
    import {Navigate } from "../../store/actions";
    import { Screens } from "../../types/store";
    import Firebase from "../../utils/firebase"
    import { Post } from "../../types/post"


    const formPost: Omit<Post, "id"> = {
        profile:"",
        named: "",
        subname: "",
        description:"",
        images: "",
        likes: "",
    number: 0,
    };

    class Posts extends HTMLElement{
        constructor(){
            super();
            this.attachShadow({mode: 'open'});
        }
    
    
        connectedCallback(){
            this.render();
        }

        submitForm(){
        console.log(formPost);
            Firebase.AddPostDB(formPost);
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

            
                
                const pProfile= this.ownerDocument.createElement("input");
                pProfile.placeholder = "Perfil";
                pProfile.addEventListener("change", this.changeName);
                mediumsection.appendChild(pProfile)

                const pName = this.ownerDocument.createElement("input");
                pName.placeholder = "Nombre";
                pName.addEventListener("change", this.changeName);
                mediumsection.appendChild(pName)

                const pSubname = this.ownerDocument.createElement("input");
                pSubname.placeholder = "@Subnombre";
                pSubname.addEventListener("change", this.changeName);
                mediumsection.appendChild(pSubname)

                const pDescription = this.ownerDocument.createElement("input");
                pDescription.placeholder = "Descripción";
                pDescription.addEventListener("change", this.changeName);
                mediumsection.appendChild(pDescription)

                const pImages = this.ownerDocument.createElement("input");
                pImages.placeholder = "Images";
                pImages.addEventListener("change", this.changeName);
                mediumsection.appendChild(pImages)

                const pLikes = this.ownerDocument.createElement("input");
                pLikes.placeholder = "Likes";
                pLikes.addEventListener("change", this.changeName);
                mediumsection.appendChild(pLikes)

                const pNumber= this.ownerDocument.createElement("input");
                pNumber.placeholder = "Numero";
                // pPrice.type = "number";
                pNumber.addEventListener("change", this.changeNumber);
                mediumsection.appendChild(pNumber);

                const save = this.ownerDocument.createElement("button");
                save.innerText = "Guardar";
                save.addEventListener("click", this.submitForm);
                save.addEventListener("click", ()=>{
                    dispatch(Navigate(Screens.DASHBOARD))
                 })
                mediumsection.appendChild(save);

                //const fbdata = await Firebase.GetPostsDB();
                //fbdata.forEach((p: Post) => {
                //const name = this.ownerDocument.createElement("h3");
                //name.innerText = p.named;
                //mediumsection.appendChild(name);
                
            
               // const number = this.ownerDocument.createElement("h3");
               // number.innerText = String(p.number);
                //container.appendChild(number);
                
            
               // });


              


                container.appendChild(mediumsection);
              
                this.shadowRoot?.appendChild(container)
            }
                
            }
        }


    customElements.define("my-dashboardpost",Posts);    