export enum Variable {
    "accountname" = "accountname",
    "accountinfo" = "accountinfo",
    "accountimg" = "accountimg",

    
}

class SuggestsAccounts extends HTMLElement{
    accountname?: string;
    accountinfo?: string;
    accountimg?: string;
   
    

    static get observedAttributes(){
        const atrib: Record<Variable,null> = {
            accountname: null,
            accountinfo: null,
            accountimg: null,
           
          
        };
        return Object.keys(atrib); 
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: Variable, 
        oldValue: string,
        newValue: string,
        ){
            switch (propName) {
                
                default:
                    this[propName] = newValue;
                    break;
                    
            }

            this.render();
    }

    render(){
        if(this.shadowRoot){
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

