import data from "./data.js";
import dataSuggestsAccounts from "./dataSuggestsAccounts.js";
import dataMyAccount from "./dataMyAccount.js";
import "./components/index.js";
import { Attribute } from "./components/Profile/Profile.js";
import { Variable } from "./components/SuggestsAccounts/SuggestsAccounts.js";
import { Variablemyaccount } from "./components/MyAccount/MyAcount.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.topMenus = [];
        this.profiles = [];
        this.suggestions = [];
        this.stories = [];
        this.account = [];
        this.attachShadow({ mode: "open" });
        const instagramMenu = this.ownerDocument.createElement("top-menu");
        this.topMenus.push(instagramMenu);
        const stories = this.ownerDocument.createElement("my-stories");
        this.stories.push(stories);
        dataSuggestsAccounts.forEach((account) => {
            const suggestedAccounts = this.ownerDocument.createElement("suggests-accounts");
            suggestedAccounts.setAttribute(Variable.accountname, account.accountname);
            suggestedAccounts.setAttribute(Variable.accountinfo, account.accountinfo);
            suggestedAccounts.setAttribute(Variable.accountimg, account.accountimg);
            this.suggestions.push(suggestedAccounts);
        });
        data.forEach((user) => {
            const profileCard = this.ownerDocument.createElement("my-profile");
            profileCard.setAttribute(Attribute.name, user.name);
            profileCard.setAttribute(Attribute.day, user.day);
            profileCard.setAttribute(Attribute.views, user.views);
            profileCard.setAttribute(Attribute.comments, user.comments);
            profileCard.setAttribute(Attribute.infopublicacion, user.infopublicacion);
            profileCard.setAttribute(Attribute.hashtag, user.hashtag);
            profileCard.setAttribute(Attribute.imagenpost, user.imagenpost);
            profileCard.setAttribute(Attribute.imagenusuario, user.imagenusuario);
            profileCard.setAttribute(Attribute.ubicacion, user.ubicacion);
            this.profiles.push(profileCard);
        });
        dataMyAccount.forEach((myaccount) => {
            const myAccountCard = this.ownerDocument.createElement("my-account");
            myAccountCard.setAttribute(Variablemyaccount.myaccountname, myaccount.myaccountname);
            myAccountCard.setAttribute(Variablemyaccount.myname, myaccount.myname);
            myAccountCard.setAttribute(Variablemyaccount.myaccountimg, myaccount.myaccountimg);
            this.account.push(myAccountCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = "";
            this.topMenus.forEach((menu) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(menu);
            });
            this.stories.forEach((stories) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(stories);
            });
            this.account.forEach((account) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(account);
            });
            this.suggestions.forEach((suggest) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(suggest);
            });
            this.profiles.forEach((profile) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
            });
        }
    }
}
customElements.define("app-container", AppContainer);
