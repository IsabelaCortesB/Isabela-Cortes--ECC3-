export enum Variablemyaccount {
    myaccountname = "myaccountname",
    myname = "myname",
    myaccountimg = "myaccountimg",
    
}

class MyAccount extends HTMLElement {

    myaccountname?: string;
    myname?: string;
    myaccountimg?: string;
    
    
    static get observedAttributes() {
        const myvariable: Record< Variablemyaccount, null> = { 
            myaccountname: null, 
            myname: null, 
            myaccountimg:null, 
           
        };

        return Object.keys(myvariable);
    }
    
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: Variablemyaccount, oldValue: string, newValue: string) {
        switch (propName) {
        default:
            this[propName] = newValue;
            break;
        }
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/MyAccount/style.css">
            <section>
             <div class="MyAccountCard">
                    
                <img id="myaccountimg" src="${this.myaccountimg}"/>
                <h1 id="myaccountname">${this.myaccountname}</h1>
                <h2 id="myname">${this.myname}</h2>
                <h3 id="cambiar">Change</h3>
                <h3 id="SuggestionsForYou">Suggestions For You</h3>

            </div>

            <div class="InstagramInfo">

                <p>Información . Ayuda . Prensa . API . Empleo</p>
                <p>Privacidad . Condiciones . Ubicaciones . Idioma</p>

                <p>© 2022 INSTAGRAM FROM META</p>

            </div>


            </section>
        `;
        }
    }
}

customElements.define("my-account", MyAccount);
export default MyAccount;