import "./components/index"
import "./screens/dashboard"
import "./screens/register"
import "./screens/landing"
import "./screens/menu"
import "./screens/profile"
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

                case Screens.DASHBOARD:
                const dashboard = this.ownerDocument.createElement('my-dashboardmenu');
                this.shadowRoot?.appendChild(dashboard);
                break;

                case Screens.PROFILE:
                    const profile = this.ownerDocument.createElement("");
                    this.shadowRoot?.appendChild(profile);
                    break;
                    
                    case Screens.LANDING:
                    const landing = this.ownerDocument.createElement("");
                    this.shadowRoot?.appendChild(landing);
                    break;

                    case Screens.MENU:
                        const menu = this.ownerDocument.createElement("");
                        this.shadowRoot?.appendChild(menu);
                        break;

                default:
                    break;
        }
       
      


    }
}

customElements.define('app-container', AppContainer)        