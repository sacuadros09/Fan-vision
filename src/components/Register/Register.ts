export enum AttributeRegister{
    "text"="text",
    "type"="type"
}

export default class Register extends HTMLElement{
    text?: string;
    type?: string;

    static get observedAttributes(){
        const attrs: Record<AttributeRegister, null> = {
            text: null,
            type: null,
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(
        propName:AttributeRegister,
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
        input.placeholder = `${this.type}`;
        input.type = `${this.type}`

        this.shadowRoot?.appendChild(input)
        }
    }

}   

customElements.define('my-register', Register)