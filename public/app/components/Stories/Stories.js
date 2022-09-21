import data from "../../data.js";
export var VariableStories;
(function (VariableStories) {
    VariableStories["name"] = "name";
    VariableStories["imagenusuario"] = "imagenusuario";
})(VariableStories || (VariableStories = {}));
class MyStories extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const variab = {
            name: null,
            imagenusuario: null
        };
        return Object.keys(variab);
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
        const a = data.map((historiasperfil) => `
            <section>
                <img id="fotoPerfilHistorias" src="${historiasperfil.imagenusuario}"/>
                <h1 id="nombreUsuario">${historiasperfil.name}</h1>
            </section>
        `);
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/Stories/style.css">
                <section class="contenedorStories">
                ${a.join("")}
                </section>
        `;
        }
    }
}
customElements.define("my-stories", MyStories);
export default MyStories;
