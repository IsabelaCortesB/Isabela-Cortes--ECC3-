export var Attribute;
(function (Attribute) {
    Attribute["name"] = "name";
    Attribute["views"] = "views";
    Attribute["comments"] = "comments";
    Attribute["day"] = "day";
    Attribute["infopublicacion"] = "infopublicacion";
    Attribute["hashtag"] = "hashtag";
    Attribute["imagenpost"] = "imagenpost";
    Attribute["imagenusuario"] = "imagenusuario";
    Attribute["ubicacion"] = "ubicacion";
})(Attribute || (Attribute = {}));
class MyProfile extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            name: null,
            views: null,
            comments: null,
            day: null,
            infopublicacion: null,
            imagenusuario: null,
            hashtag: null,
            imagenpost: null,
            ubicacion: null
        };
        return Object.keys(attrs);
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
            <link rel="stylesheet" href="./app/components/Profile/style.css">
            <section>
            <div class="contenedorGeneral">

            <div class="textoSuperior">
                <h2>${this.name}</h2>
                <p>${this.ubicacion}</p>
            </div>

            <img id="ImagenPerfil" src="${this.imagenusuario}">
            <img id="ImagenPost" src="${this.imagenpost}">

            <div class="contenedorI>
                <img  class="imagenesAbajo" src="./img/enviar.png">
                <img  class="imagenesAbajo" src="./img/like.png">
                <img  class="imagenesAbajo" src="./img/comentario.png">
                <img  class="imagenesAbajo" src="./img/enviar.png">
                   
            </div>

            <img  id="puntos" src="./img/puntos.png">
            <img  id="guardar" src="./img/guardar.png">
            <img  id="opciones" src="./img/Opciones.png">
            <h1   id="views">${this.views}</h1>
            <h1   id="TextoNombre">${this.name}</h1>
            <p   id="texto2">${this.infopublicacion}</p>
            <p   id="texto3">${this.hashtag}</p>
            <p   id="texto4">${this.comments}</p>
            <p   id="texto5">${this.day}</p>
            


          </div>

            </section>
            `;
        }
    }
}
customElements.define("my-profile", MyProfile);
export default MyProfile;
