class Landing extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
    connectedCallback(){
        this.render();
    }
    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = 
            `
                <section>    
                <img class="Fondo" src="/src/img/Fondo.png">
                <img class="Logo" src="/src/img/logo.png">                         
                </section>
            `;

        }
    }
}

export default Landing ;