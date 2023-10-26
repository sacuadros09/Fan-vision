import "./components/index"
import "./screens/dashboard/dashboard"
import "./screens/register/register"
import "./screens/landing/landing"
import "./screens/menu/menu"
import "./screens/profile/profile"
import "./screens/login/login"
import { addObserver, appState } from "./store/index";
import { Screens } from "./types/store";


class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = "";
        switch (appState.screen){
            case Screens.REGISTER:
                const register = this.ownerDocument.createElement('my-dashboardregister');
                this.shadowRoot?.appendChild(register);
                break;

                case Screens.LOGIN:
                const login = this.ownerDocument.createElement('my-dashboardlogin');
                this.shadowRoot?.appendChild(login);
                break;

                case Screens.DASHBOARD:
                const dashboard = this.ownerDocument.createElement('my-dashboard');
                this.shadowRoot?.appendChild(dashboard);
                break;

                case Screens.PROFILE:
                    const profile = this.ownerDocument.createElement("my-dashboardprofile");
                    this.shadowRoot?.appendChild(profile);
                    break;
                    
                    case Screens.LANDING:
                    const landing = this.ownerDocument.createElement("my-dashboardlanding");
                    this.shadowRoot?.appendChild(landing);
                    break;

                    case Screens.MENU:
                        const menu = this.ownerDocument.createElement("my-dashboardmenu");
                        this.shadowRoot?.appendChild(menu);
                        break;

                default:
                    break;
        }
       
      


    }
}

customElements.define('app-container', AppContainer)        