import { appState, dispatch } from "../../store";
import { AddPost } from "../../store/actions";
import { Post } from "../../types/post";
import styles from "./profile.css"

const post: Post = {
 id:"",
    profile:"",
    named: "",
    subname: "",
    description:"",
    images: "",
    likes: "",
    number: 0,
};

export default class PostADD extends HTMLElement{
    text?: string;
    type?: string;

    static get observedAttributes(){
        const attrs: Record<AttributePost, null> = {
            text: null,
            type: null,
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(
        propName:AttributePost,
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

customElements.define('my-post', PostADD)