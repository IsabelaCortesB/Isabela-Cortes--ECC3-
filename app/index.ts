import data from "./data.js";
import dataSuggestsAccounts from "./dataSuggestsAccounts.js";
import dataMyAccount from "./dataMyAccount.js";

import "./components/index.js";
import MyProfile, {Attribute} from "./components/Profile/Profile.js";
import TopMenu from "./components/TopMenu/TopMenu.js";
import SuggestsAccounts, { Variable } from "./components/SuggestsAccounts/SuggestsAccounts.js";
import MyStories from "./components/Stories/Stories.js";
import MyAccount, {Variablemyaccount} from "./components/MyAccount/MyAcount.js";


class AppContainer extends HTMLElement{
    topMenus: TopMenu[] = [];
    profiles: MyProfile[] = [];
    suggestions: SuggestsAccounts[] = [];
    stories: MyStories[] = [];
    account: MyAccount[] = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        const instagramMenu = this.ownerDocument.createElement("top-menu") as TopMenu;
        this.topMenus.push(instagramMenu);

        const stories = this.ownerDocument.createElement("my-stories") as MyStories;
        this.stories.push(stories);

        dataSuggestsAccounts.forEach((account)=>{
        const suggestedAccounts = this.ownerDocument.createElement("suggests-accounts") as SuggestsAccounts;
            suggestedAccounts.setAttribute(Variable.accountname, account.accountname);
            suggestedAccounts.setAttribute(Variable.accountinfo, account.accountinfo);
            suggestedAccounts.setAttribute(Variable.accountimg, account.accountimg);
            this.suggestions.push(suggestedAccounts);
       });


        data.forEach((user)=>{
            const profileCard = this.ownerDocument.createElement("my-profile") as MyProfile;
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

        
        dataMyAccount.forEach((myaccount)=>{
            const myAccountCard = this.ownerDocument.createElement("my-account") as MyAccount;
            myAccountCard.setAttribute(Variablemyaccount.myaccountname, myaccount.myaccountname);
            myAccountCard.setAttribute(Variablemyaccount.myname, myaccount.myname);
            myAccountCard.setAttribute(Variablemyaccount.myaccountimg, myaccount.myaccountimg);
                this.account.push(myAccountCard);
           });

        

        /*
        data.forEach((userStory)=>{
            const StoriesCard = this.ownerDocument.createElement("my-stories") as MyStories;
            StoriesCard.setAttribute(VariableStories.name, userStory.name);
            StoriesCard.setAttribute(VariableStories.imagenusuario, userStory.imagenusuario);
        });
        */
    }


    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = "";        
            this.topMenus.forEach((menu)=>{
               this.shadowRoot?.appendChild(menu);
            });
            this.stories.forEach((stories)=>{
             this.shadowRoot?.appendChild(stories);
             });

             this.account.forEach((account)=>{
                this.shadowRoot?.appendChild(account);
                });

             this.suggestions.forEach((suggest)=>{
                this.shadowRoot?.appendChild(suggest);
            });
            this.profiles.forEach((profile)=>{
                this.shadowRoot?.appendChild(profile);
            });
            
        }
    }
}

customElements.define("app-container",AppContainer);