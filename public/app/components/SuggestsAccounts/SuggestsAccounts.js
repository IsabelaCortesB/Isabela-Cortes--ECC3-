export var Variable;
(function (Variable) {
    Variable["accountname"] = "accountname";
    Variable["accountinfo"] = "accountinfo";
    Variable["accountimg"] = "accountimg";
})(Variable || (Variable = {}));
class SuggestsAccounts extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const atrib = {
            accountname: null,
            accountinfo: null,
            accountimg: null,
        };
        return Object.keys(atrib);
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
            <link rel="stylesheet" href="./app/components/SuggestsAccounts/style.css">
            <section>
            <div class="MainContainer">

            
                <h2 class= "accountname">${this.accountname}</h2>
                <p class= "accountinfo">${this.accountinfo}</p>
                <img id="accountImg" src="${this.accountimg}">
                <h2 id="follow">Follow</h2>
                
            
            
            </div>

            </section>
            `;
        }
    }
}
customElements.define("suggests-accounts", SuggestsAccounts);
export default SuggestsAccounts;
