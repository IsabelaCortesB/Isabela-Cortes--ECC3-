export var Variablemyaccount;
(function (Variablemyaccount) {
    Variablemyaccount["myaccountname"] = "myaccountname";
    Variablemyaccount["myname"] = "myname";
    Variablemyaccount["myaccountimg"] = "myaccountimg";
})(Variablemyaccount || (Variablemyaccount = {}));
class MyAccount extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const myvariable = {
            myaccountname: null,
            myname: null,
            myaccountimg: null,
        };
        return Object.keys(myvariable);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
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
