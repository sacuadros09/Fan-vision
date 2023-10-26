export enum AttributeLogin{
    "text"="text",
    "type"="type"
}

export default class Login extends HTMLElement{
    text?: string;
    type?: string;

    static get observedAttributes(){
        const attrs: Record<AttributeLogin, null> = {
            text: null,
            type: null,
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(
        propName:AttributeLogin,
        _:unknown,
        newValue:string,
    ){
        switch (propName) {
            default:
                this[propName] = newValue
                break;
        }
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot){ 
        this.shadowRoot.innerHTML = '';

        const input = this.ownerDocument.createElement('input');
        input.placeholder = `${this.text}`;
        input.type = `${this.type}`

        this.shadowRoot?.appendChild(input)
        }
    }

}   

customElements.define('my-login', Login)