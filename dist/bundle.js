(()=>{"use strict";var e,t,n,s,o,i,a;!function(e){e.logo="logo",e.img="img",e.name="name"}(e||(e={}));class r extends HTMLElement{static get observedAttributes(){return Object.keys({logo:null,img:null,name:null})}attributeChangedCallback(e,t,n){this[e]=n,this.render()}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n                <link rel="stylesheet" href="../src/components/CardIcons/CardIcons.css">\n                <section class = "leftside">\n                <img class = "secondimg" src=${this.img}></img>\n                <h1 class = "notifi">${this.name}</h1>  \n                </section>\n                `)}}customElements.define("my-cardicons",r),function(e){e.profilefoto="profilefoto",e.subname="subname",e.named="named"}(t||(t={}));class c extends HTMLElement{static get observedAttributes(){return Object.keys({profilefoto:null,subname:null,named:null})}attributeChangedCallback(e,t,n){this[e]=n,this.render()}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n                <link rel="stylesheet" href="../src/components/CardFriends/CardFriends.css">\n                <section class = "All">\n                <img src=${this.profilefoto}></img>\n                <section class = "text">\n                <h1>${this.subname}</h1>\n                <h3>${this.named}</h3>\n                </section>\n                </section>\n                `)}}customElements.define("my-cardfriends",c),function(e){e.profilephoto="profilephoto",e.subnames="subnames",e.names="names"}(n||(n={}));class l extends HTMLElement{static get observedAttributes(){return Object.keys({profilephoto:null,subnames:null,names:null})}attributeChangedCallback(e,t,n){this[e]=n,this.render()}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n                <link rel="stylesheet" href="../src/components/CardProfile/CardProfile.css">\n                <section class = "All">\n                <img src=${this.profilephoto}></img>\n                <section class = "text">\n                <h1>${this.subnames}</h1>\n                <h3>${this.names}</h3>\n                </section>\n                </section>\n                `)}}customElements.define("my-cardprofile",l),function(e){e.profile="profile",e.named="named",e.subname="subname",e.description="description",e.images="images",e.likes="likes",e.number="number"}(s||(s={}));class d extends HTMLElement{static get observedAttributes(){return Object.keys({profile:null,named:null,subname:null,description:null,images:null,likes:null,number:null})}attributeChangedCallback(e,t,n){e===s.number?this.number=n?Number(n):void 0:this[e]=n,this.render()}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n                <link rel="stylesheet" href="../src/components/CardUploade/CardUploade.css">\n                <section  class = "card" >\n                <img class = "phoper" src=${this.profile}></img>\n                <h1>${this.named}</h1>\n                <h3>${this.subname}</h3>\n                <p>${this.description}</p>\n                <img class = "imgpost" src=${this.images}></img>\n                <section class = "downpart">\n                <img class = "imglike" src=${this.likes}></img>\n                <p class = "numlike" >${this.number}</p>\n                </section>\n                \n                </section>\n                `)}}customElements.define("my-carduploade",d),function(e){e.text="text"}(o||(o={}));class m extends HTMLElement{static get observedAttributes(){return Object.keys({text:null})}constructor(){super(),this.attachShadow({mode:"open"})}attributeChangedCallback(e,t,n){this[e]=n}connectedCallback(){this.render()}render(){var e;if(this.shadowRoot){this.shadowRoot.innerHTML="";const t=this.ownerDocument.createElement("button");null===(e=this.shadowRoot)||void 0===e||e.appendChild(t),t.innerText=`${this.text}`}}}customElements.define("my-landing",m),function(e){e.text="text"}(i||(i={}));class h extends HTMLElement{static get observedAttributes(){return Object.keys({text:null})}constructor(){super(),this.attachShadow({mode:"open"})}attributeChangedCallback(e,t,n){this[e]=n}connectedCallback(){this.render()}render(){var e;if(this.shadowRoot){this.shadowRoot.innerHTML="";const t=this.ownerDocument.createElement("button");null===(e=this.shadowRoot)||void 0===e||e.appendChild(t),t.innerText=`${this.text}`}}}customElements.define("my-menu",h),function(e){e.text="text",e.type="type"}(a||(a={}));class u extends HTMLElement{static get observedAttributes(){return Object.keys({text:null,type:null})}attributeChangedCallback(e,t,n){this[e]=n}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e;if(this.shadowRoot){this.shadowRoot.innerHTML="";const t=this.ownerDocument.createElement("input");t.placeholder=`${this.text}`,t.type=`${this.type}`,null===(e=this.shadowRoot)||void 0===e||e.appendChild(t)}}}customElements.define("my-register",u);class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e;if(this.shadowRoot){this.shadowRoot.innerHTML="";const t=this.ownerDocument.createElement("button");t.innerText="Create account",null===(e=this.shadowRoot)||void 0===e||e.appendChild(t)}}}customElements.define("my-button",p);const g=[{logo:"/src/img/logo.png",img:"/src/img/home.png",name:"Home"},{logo:"",img:"/src/img/notifications.png",name:"Notifications"},{logo:"",img:"/src/img/search.png",name:"Explore"},{logo:"",img:"/src/img/person.png",name:"Profile"}],b=[{profilefoto:"/src/img/Cuadros.png",subname:"@Pepito09932",named:"BichoFanatic"},{profilefoto:"/src/img/Cuadrostwo.png",subname:"@Sacuma09",named:"MeteGoles99"},{profilefoto:"/src/img/Jaycortez.png",subname:"@Jaycortes12",named:"Jaycortes"}],E=[{profilephoto:"/src/img/gonzalez.png",subnames:"@SebasG7",names:"Ciclistafutbol"}],f=[{profile:"/src/img/ProfileMedium.png",named:"MeteGoles99",subname:"@Sacuma09",description:"Que golazo el ultimo gol de Luiz Diaz, se va convertir en el mejor jugador Colombiano de la historia.Elijo Creer ",images:"/src/img/luiz.png",likes:"/src/img/heart.png",number:"819"},{profile:"/src/img/Cuadros.png",named:"BichoFanatic",subname:"@Pepito09932",description:"Que golazo el ultimo gol de Luiz Diaz, se va convertir en el mejor jugador Colombiano de la historia.Elijo Creer ",images:"/src/img/luiz.png",likes:"/src/img/heart.png",number:"999"},{profile:"/src/img/gonzalez.png",named:"Ciclistafutbol",subname:"@SebasG819",description:"Que golazo el ultimo gol de Luiz Diaz, se va convertir en el mejor jugador Colombiano de la historia.Elijo Creer ",images:"/src/img/luiz.png",likes:"/src/img/heart.png",number:"524"},{profile:"/src/img/gonzalez.png",named:"Ciclistafutbol",subname:"@SebasG819",description:"Que golazo el ultimo gol de Luiz Diaz, se va convertir en el mejor jugador Colombiano de la historia.Elijo Creer ",images:"/src/img/luiz.png",likes:"/src/img/heart.png",number:"819"}];class C extends HTMLElement{constructor(){super(),this.cardicons=[],this.cardfriends=[],this.cardprofiles=[],this.carduploades=[],this.attachShadow({mode:"open"}),g.forEach((t=>{const n=this.ownerDocument.createElement("my-cardicons");n.setAttribute(e.logo,t.logo),n.setAttribute(e.img,t.img),n.setAttribute(e.name,t.name),this.cardicons.push(n)})),f.forEach((e=>{const t=this.ownerDocument.createElement("my-carduploade");t.setAttribute(s.profile,e.profile),t.setAttribute(s.named,e.named),t.setAttribute(s.subname,e.subname),t.setAttribute(s.description,e.description),t.setAttribute(s.images,e.images),t.setAttribute(s.likes,e.likes),t.setAttribute(s.number,e.number),this.carduploades.push(t)})),b.forEach((e=>{const n=this.ownerDocument.createElement("my-cardfriends");n.setAttribute(t.profilefoto,e.profilefoto),n.setAttribute(t.named,e.named),n.setAttribute(t.subname,e.subname),this.cardfriends.push(n)})),E.forEach((e=>{const t=this.ownerDocument.createElement("my-cardprofile");t.setAttribute(n.profilephoto,e.profilephoto),t.setAttribute(n.subnames,e.subnames),t.setAttribute(n.names,e.names),this.cardprofiles.push(t)}))}connectedCallback(){this.render()}render(){var e,t;if(this.shadowRoot){this.shadowRoot.innerHTML='\n            <link rel="stylesheet" href="/src/index.css">\n            \n        ';const n=document.createElement("section");n.className="all";const s=document.createElement("nav");s.className="leftside";const o=document.createElement("img");o.src="/src/img/logo.png",s.appendChild(o),this.cardicons.forEach((e=>{s.appendChild(e)})),n.appendChild(s);const i=document.createElement("button");i.innerText="Upload Photo",s.appendChild(i);const a=document.createElement("section");a.className="midside",this.carduploades.forEach((e=>{a.appendChild(e)})),n.appendChild(a);const r=document.createElement("section");this.cardprofiles.forEach((e=>{r.appendChild(e)})),n.appendChild(r),null===(e=this.shadowRoot)||void 0===e||e.appendChild(n);const c=document.createElement("h2");c.innerText="Friends",r.appendChild(c);const l=document.createElement("section");l.className="sectionfriends",this.cardfriends.forEach((e=>{l.appendChild(e)}));const d=document.createElement("section");d.className="containerRight",d.appendChild(r),n.appendChild(l),d.appendChild(l),n.appendChild(d),null===(t=this.shadowRoot)||void 0===t||t.appendChild(n)}}}var w;customElements.define("my-dashboard",C),function(e){e.STORE="STORE"}(w||(w={}));var A,R,y,v;!function(e){e.REGISTER="REGISTER",e.DASHBOARD="DASHBOARD",e.PROFILE="PROFILE",e.LANDING="LANDING",e.MENU="MENU"}(A||(A={})),function(e){e.NAVIGATE="NAVIGATE"}(R||(R={})),(v=y||(y={})).LOGIN="LOGIN",v.REGISTER="REGISTER",v.LOGOUT="LOGOUT",v.PROFILE="PROFILE",v.LANDING="LANDING",v.MENU="MENU";const T={Users:[],screen:A.REGISTER};let k=(({key:e,defaultValue:t})=>{const n=localStorage.getItem(e);return n?JSON.parse(n):t})({key:w.STORE,defaultValue:T}),D=[];const L=e=>{const t=((e,t)=>{const{action:n,payload:s}=e;switch(n){case y.REGISTER:case y.LOGIN:return Object.assign(Object.assign({},t),{Users:[s,...t.Users]});case y.LOGOUT:return Object.assign(Object.assign({},t),{Users:[]});case R.NAVIGATE:return Object.assign(Object.assign({},t),{screen:s});default:return t}})(e,JSON.parse(JSON.stringify(k)));var n;k=t,n=t,(({key:e,value:t,session:n=!1})=>{const s=n?sessionStorage:localStorage,o=JSON.stringify(t);s.setItem(e,o)})({key:w.STORE,value:n}),D.forEach((e=>e.render()))},x=e=>({action:R.NAVIGATE,payload:e}),N={name:"",username:"",email:"",password:"",confirmpassword:""};class S extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e;if(this.shadowRoot){this.shadowRoot.innerHTML="";const t=this.ownerDocument.createElement("section");t.className="container";const n=this.ownerDocument.createElement("section");n.className="leftimage";const s=this.ownerDocument.createElement("section");s.className="form";const o=document.createElement("img");o.src="/src/img/Messi.png",n.appendChild(o);const i=document.createElement("img");i.src="/src/img/logo.png",s.appendChild(i);const r=this.ownerDocument.createElement("h2");r.innerText="Sign in",s.appendChild(r);const c=this.ownerDocument.createElement("h2");c.innerText="Sign up",s.appendChild(c);const l=this.ownerDocument.createElement("my-input");l.setAttribute(a.text,"Your name"),l.setAttribute(a.type,"text"),l.addEventListener("change",(e=>N.name=e.target.value)),s.appendChild(l);const d=this.ownerDocument.createElement("my-input");d.setAttribute(a.text,"User name"),d.setAttribute(a.type,"text"),d.addEventListener("change",(e=>N.username=e.target.value)),s.appendChild(d);const m=this.ownerDocument.createElement("my-input");m.setAttribute(a.text,"Your e-mail"),m.setAttribute(a.type,"text"),m.addEventListener("change",(e=>N.email=e.target.value)),s.appendChild(m);const h=this.ownerDocument.createElement("my-input");h.setAttribute(a.text,"Password"),h.setAttribute(a.type,"password"),h.addEventListener("change",(e=>N.password=e.target.value)),console.log(N),s.appendChild(h);const u=this.ownerDocument.createElement("my-input");u.setAttribute(a.text,"Confirm Password"),u.setAttribute(a.type,"Confirm Password"),u.addEventListener("change",(e=>N.confirmpassword=e.target.value)),console.log(N),s.appendChild(u);const p=this.ownerDocument.createElement("my-button");p.addEventListener("click",(()=>{L(x(A.DASHBOARD))})),p.addEventListener("click",(()=>{L((({payload:e})=>({action:y.REGISTER,payload:e}))({payload:{Name:N.name,userName:N.username,email:N.email,password:N.password,Confirmpassword:N.confirmpassword}}))}));const g=this.ownerDocument.createElement("button");g.innerText="Already have an account?",s.appendChild(p),s.appendChild(g),t.appendChild(n),t.appendChild(s),null===(e=this.shadowRoot)||void 0===e||e.appendChild(t)}}}customElements.define("my-dashboardregister",S);class O extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e;if(this.shadowRoot){this.shadowRoot.innerHTML="";const t=this.ownerDocument.createElement("section");t.className="container";const n=this.ownerDocument.createElement("section");n.className="center";const s=this.ownerDocument.createElement("img");s.className="imgs",s.src="/src/img/logo.png";const i=this.ownerDocument.createElement("h2");i.innerText="Welcome",n.appendChild(i);const a=this.ownerDocument.createElement("my-landing");a.className="buttonlanding",a.setAttribute(o.text,"Conocer más"),a.addEventListener("click",(()=>{L(x(A.REGISTER))}));const r=this.ownerDocument.createElement("button");r.innerText="Already have an account?",n.appendChild(a),n.appendChild(r),t.appendChild(n),null===(e=this.shadowRoot)||void 0===e||e.appendChild(t)}}}customElements.define("my-dashboardlanding",O);class M extends HTMLElement{constructor(){super(),this.cardicons=[],this.cardfriends=[],this.cardprofiles=[],this.carduploades=[],this.attachShadow({mode:"open"}),g.forEach((t=>{const n=this.ownerDocument.createElement("my-cardicons");n.setAttribute(e.logo,t.logo),n.setAttribute(e.img,t.img),n.setAttribute(e.name,t.name),this.cardicons.push(n)})),f.forEach((e=>{const t=this.ownerDocument.createElement("my-carduploade");t.setAttribute(s.profile,e.profile),t.setAttribute(s.named,e.named),t.setAttribute(s.subname,e.subname),t.setAttribute(s.description,e.description),t.setAttribute(s.images,e.images),t.setAttribute(s.likes,e.likes),t.setAttribute(s.number,e.number),this.carduploades.push(t)})),b.forEach((e=>{const n=this.ownerDocument.createElement("my-cardfriends");n.setAttribute(t.profilefoto,e.profilefoto),n.setAttribute(t.named,e.named),n.setAttribute(t.subname,e.subname),this.cardfriends.push(n)})),E.forEach((e=>{const t=this.ownerDocument.createElement("my-cardprofile");t.setAttribute(n.profilephoto,e.profilephoto),t.setAttribute(n.subnames,e.subnames),t.setAttribute(n.names,e.names),this.cardprofiles.push(t)}))}connectedCallback(){this.render()}render(){var e,t;if(this.shadowRoot){this.shadowRoot.innerHTML='\n            <link rel="stylesheet" href="/src/index.css">\n            \n        ';const n=document.createElement("section");n.className="all";const s=document.createElement("nav");s.className="leftside";const o=document.createElement("section");o.className="topmid";const a=document.createElement("img");a.src="/src/img/logo.png",s.appendChild(a),this.cardicons.forEach((e=>{s.appendChild(e)})),n.appendChild(s);const r=document.createElement("button");r.innerText="Edit profile",s.appendChild(r);const c=document.createElement("section"),l=document.createElement("img");l.src="/src/img/gonzalez.png",c.appendChild(l);const d=this.ownerDocument.createElement("h2");d.innerText="@SebasG819",c.appendChild(d);const m=this.ownerDocument.createElement("h2");m.innerText="Ciclistafutbol",c.appendChild(m);const h=this.ownerDocument.createElement("my-menu");h.className="buttonmenu",h.setAttribute(i.text,"Edit profile"),c.appendChild(h),h.addEventListener("click",(()=>{L(x(A.REGISTER))})),c.className="midside",this.carduploades.forEach((e=>{c.appendChild(e)})),n.appendChild(c);const u=document.createElement("section");this.cardprofiles.forEach((e=>{u.appendChild(e)})),n.appendChild(u),null===(e=this.shadowRoot)||void 0===e||e.appendChild(n);const p=document.createElement("h2");p.innerText="Friends",u.appendChild(p);const g=document.createElement("section");g.className="sectionfriends",this.cardfriends.forEach((e=>{g.appendChild(e)}));const b=document.createElement("section");b.className="containerRight",b.appendChild(u),n.appendChild(g),b.appendChild(g),n.appendChild(b),n.appendChild(o),null===(t=this.shadowRoot)||void 0===t||t.appendChild(n)}}}customElements.define("my-dashboardmenu",M);class G extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),D=[...D,this]}connectedCallback(){this.render()}render(){var e,t,n,s,o;switch(this.shadowRoot&&(this.shadowRoot.innerHTML=""),k.screen){case A.REGISTER:const i=this.ownerDocument.createElement("my-dashboardmenu");null===(e=this.shadowRoot)||void 0===e||e.appendChild(i);break;case A.DASHBOARD:const a=this.ownerDocument.createElement("my-dashboardmenu");null===(t=this.shadowRoot)||void 0===t||t.appendChild(a);break;case A.PROFILE:const r=this.ownerDocument.createElement("");null===(n=this.shadowRoot)||void 0===n||n.appendChild(r);break;case A.LANDING:const c=this.ownerDocument.createElement("");null===(s=this.shadowRoot)||void 0===s||s.appendChild(c);break;case A.MENU:const l=this.ownerDocument.createElement("");null===(o=this.shadowRoot)||void 0===o||o.appendChild(l)}}}customElements.define("app-container",G)})();