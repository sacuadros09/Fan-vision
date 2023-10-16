export enum AttributeRegister{
    "input_text"="input_text"
}

export default class Register extends HTMLElement{
    input_text?: string;

    static get observedAttributes(){
        const attrs: Record<AttributeRegister, null> = {
            input_text: null,
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
        input.placeholder = `${this.input_text}`;

        this.shadowRoot?.appendChild(input)
        }
    }

}

customElements.define('my-register', Register)