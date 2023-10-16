import "./screens/dashboard"
import "./components/index"


class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const window = this.ownerDocument.createElement('my-dashboardregister');
        this.shadowRoot?.appendChild(window);


    }
}

customElements.define('app-container', AppContainer)