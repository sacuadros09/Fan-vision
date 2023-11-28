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

        const css = this.ownerDocument.createElement('style')
        css.innerHTML = styles
        this.shadowRoot?.appendChild(css)
        
        const input = this.ownerDocument.createElement('input');
        input.placeholder = `${this.text}`;
        input.type = `${this.type}`

        this.shadowRoot?.appendChild(input)
        }
    }

}   

customElements.define('my-post', PostADD)