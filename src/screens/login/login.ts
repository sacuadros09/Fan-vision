import "../../components/index"
import { AttributeLogin } from "../../components/Login/Login";
import { dispatch } from "../../store/index";
import { Navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import styles from "./login.css"

//const credentials = { 
    //username: "",
   // password: "",
//}

class DashboardLogin extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;

           const css = this.ownerDocument.createElement('style')
                css.innerHTML = styles
                this.shadowRoot?.appendChild(css);
            const container = this.ownerDocument.createElement("section")
            container.className = "container"

            const leftimage = this.ownerDocument.createElement("section")
            leftimage.className ="leftimage"

           
            const form = this.ownerDocument.createElement('section');
            form.className = "form"

            const inpuntform = this.ownerDocument.createElement('section');
            inpuntform.className = "inputform"

            const buttonform = this.ownerDocument.createElement('section');
            buttonform.className = "buttonform"

            const ImageLogin=document.createElement("img")
            ImageLogin.className = "banner"
            ImageLogin.src="/src/img/Neymar.png"
            leftimage.appendChild(ImageLogin)


            const LogoRegister=document.createElement("img")
            LogoRegister.className = "logo"
            LogoRegister.src="/src/img/logo.png"
            form.appendChild(LogoRegister)

            const SignIn = this.ownerDocument.createElement("h2")
            SignIn.className = "SignIn"
            SignIn.innerText = "Sign in"
            form.appendChild(SignIn)

            const SignUp = this.ownerDocument.createElement("h2")
            SignUp.className = "SignUp"
            SignUp.innerText = "Sign up"
            form.appendChild(SignUp)

            const userName = this.ownerDocument.createElement('my-login')
            userName.setAttribute(AttributeLogin.text, "User name")
            userName.setAttribute(AttributeLogin.type, "text")
           // userName.addEventListener("change",(e:any)=>credentials.username = e.target.value)
            inpuntform.appendChild(userName)

            const password = this.ownerDocument.createElement('my-login');
            password.setAttribute(AttributeLogin.text, "Password");
            password.setAttribute(AttributeLogin.type, "password");
          //  password.addEventListener("change", (e:any)=>credentials.password = e.target.value);
          //  console.log(credentials)
            inpuntform.appendChild(password);
            
           

            const button = this.ownerDocument.createElement('my-infobutton');
            button.addEventListener("click", ()=>{
               dispatch(Navigate(Screens.DASHBOARD))
            })

         //   button.addEventListener("click",()=>{
            //    dispatch(
             //       logIn({
               //         payload:{
                           
                 //           userName: credentials.username,
                           
                   //         password: credentials.password,
                            
                    //    }
                 //   })
              //  )
           // })

          

            buttonform.appendChild(button);
            container.appendChild(leftimage)
            container.appendChild(form)
            container.appendChild(inpuntform)
            container.appendChild(buttonform)
            this.shadowRoot?.appendChild(container);


        }
    }
}

customElements.define('my-dashboardlogin', DashboardLogin)