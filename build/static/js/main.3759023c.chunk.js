(this.webpackJsonpkomposzt=this.webpackJsonpkomposzt||[]).push([[0],{25:function(e,a,t){},31:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),c=t.n(r),i=(t(25),t(10));var o=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"d-flex justify-content-around"},l.a.createElement(i.b,{activeClassName:"active",exact:!0,to:"/"},"Az oldalr\xf3l"),l.a.createElement(i.b,{activeClassName:"active",exact:!0,to:"/info"},"Komposztinf\xf3"),l.a.createElement(i.b,{activeClassName:"active",to:"/gyik"},"Gy.I.K."),l.a.createElement(i.b,{activeClassName:"active",exact:!0,to:"/map"},"Komposzt T\xe9rk\xe9p")))};var s=function(){return l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")},m=t(8),u=t(21),d=(t(18),t(31),t(38)),p=t(39);var E=function(e){e.name,e.address,e.info;var a=e.type,t=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(n.useReducer)((function(e){return!e}),e)}(!1),r=Object(m.a)(t,2),c=r[0],i=r[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"flex-column",id:"login-container",style:{display:c?"block":"none"}},l.a.createElement("h5",null,e.name),l.a.createElement("div",{class:"description"},e.address,l.a.createElement("br",null),e.info),l.a.createElement("div",{className:"social flex"},l.a.createElement(d.a,{size:30}),l.a.createElement(p.a,{size:30}))),l.a.createElement("div",{onClick:i,className:"".concat("priv"===a?"profile-img":"profile-img-store"," flex")}))},f=(t(32),[47.50837858993456,19.110130539794312]),v=[47.447564749649416,19.18876127257658];var g=function(e){var a=Object(n.useState)(e),t=Object(m.a)(a,2),r=(t[0],t[1]);Object(n.useEffect)((function(){r(e)}),[e]);var c={lat:46.25,lng:20.15},i=13;return"szeged"===e.city?(c={lat:46.25,lng:20.15},i=13):(c={lat:47.49,lng:19.088},i=12),l.a.createElement("div",{style:{width:"100%",height:"100%"}},l.a.createElement(u.a,{yesIWantToUseGoogleMapApiInternals:!0,bootstrapURLKeys:{key:"AIzaSyC-ElJ4eqtnKX5ufH3OXSgCeolthMzqJuw"},center:c,zoom:i},l.a.createElement(E,{lat:46.25107150656922,lng:20.140593630994307,name:"Garabolyos",address:"Some street 123\n",info:"Only krumplih\xe9j",type:"busi"}),l.a.createElement(E,{lat:46.25631278974291,lng:20.14699657159912,name:"Kov\xe1cs Istv\xe1n",address:"Neverending sqr 3\n",info:"Only weekends",type:"busi"}),l.a.createElement(E,{lat:46.26409319220389,lng:20.13288486424085,name:"Teszt Elek",address:"Short str 523258\n",info:"Only BIO please",type:"priv"}),l.a.createElement(E,{lat:47.510840876335656,lng:19.038471149726377,name:"Ne Pazarolj",address:"F\u0151 u. 79, 1027\n",info:"ZeroWaste Shop"}),l.a.createElement(E,{lat:f[0],lng:f[1],name:"Kiss Istv\xe1nn\xe9",address:"Neverending sqr 3\n",info:"Only weekends"}),l.a.createElement(E,{lat:v[0],lng:v[1],name:"Pesti Sr\xe1c",address:"Short str 523258\n",info:"Hagyd az ajt\xf3 el\u0151tt"})))};var b=function(e){var a=Object(n.useState)(""),t=Object(m.a)(a,2),r=t[0],c=t[1],i=Object(n.useState)("all"),o=Object(m.a)(i,2),s=o[0],u=o[1],d=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(n.useReducer)((function(e){return!e}),e)}(),p=Object(m.a)(d,2),E=p[0],f=p[1];return console.log(E),l.a.createElement("div",{className:"d-flex flex-column"},l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("div",null,l.a.createElement("h4",null,"V\xe1ros"),l.a.createElement("select",{className:"btn border-dark",onChange:function(a){return e.onChange(a.target.value)},name:"filterWorkSheetByStatus"},l.a.createElement("option",{value:"szeged","data-reference":"szeged"},"Szeged"),l.a.createElement("option",{value:"budapest","data-reference":"budapest"},"Budapest"))),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("h4",null,"Ir\xe1ny\xedt\xf3sz\xe1m"),"szeged"===e.city?l.a.createElement("select",{value:r,className:"btn border-dark",onChange:function(e){return c(e.target.value)},name:"filterWorkSheetByStatus"},l.a.createElement("option",{"data-belongsto":"szeged"},"6765"),l.a.createElement("option",{"data-belongsto":"szeged"},"6978")):l.a.createElement("select",{value:r,className:"btn border-dark",onChange:function(e){return c(e.target.value)},name:"filterWorkSheetByStatus"},l.a.createElement("option",{"data-belongsto":"budapest"},"1011"),l.a.createElement("option",{"data-belongsto":"budapest"},"1021"))),l.a.createElement("br",null),l.a.createElement("div",{className:"form-check"},l.a.createElement("h4",null,"Jellege"),l.a.createElement("input",{class:"form-check-input",type:"radio",name:"exampleRadios",id:"exampleRadios1",value:"private",onChange:function(e){return u(e.target.value)}}),l.a.createElement("label",{class:"form-check-label",for:"exampleRadios1"},"Lakoss\xe1gi")),l.a.createElement("div",{class:"form-check"},l.a.createElement("input",{class:"form-check-input",type:"radio",name:"exampleRadios",id:"exampleRadios1",value:"public",onChange:function(e){return u(e.target.value)}}),l.a.createElement("label",{class:"form-check-label",for:"exampleRadios1"},"K\xf6z\xf6ss\xe9gi")),l.a.createElement("div",{class:"form-check"},l.a.createElement("input",{class:"form-check-input",type:"radio",name:"exampleRadios",id:"exampleRadios1",value:"business",onChange:function(e){return u(e.target.value)}}),l.a.createElement("label",{class:"form-check-label",for:"exampleRadios1"},"\xdczleti")),l.a.createElement("div",{class:"form-check"},l.a.createElement("input",{class:"form-check-input",type:"radio",name:"exampleRadios",id:"exampleRadios1",value:"all",onChange:function(e){return u(e.target.value)}}),l.a.createElement("label",{class:"form-check-label",for:"exampleRadios1"},"Mind")),l.a.createElement("br",null),l.a.createElement("div",{className:"form-check"},l.a.createElement("h4",null,"Jelenleg fogad-e?"),l.a.createElement("input",{type:"checkbox",class:"form-check-input",id:"isAccepting",onChange:f}),l.a.createElement("label",{class:"form-check-label",for:"isAccepting"},"Jelenleg fogad")))),l.a.createElement("div",{className:"text-left"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),"(Ez a r\xe9sz csak a fejleszt\xe9s idej\xe9re l\xe1tszik) ",l.a.createElement("br",null),"Backendre tov\xe1bb\xedtand\xf3:",l.a.createElement("br",null),"V\xe1ros: ",e.city," ",l.a.createElement("br",null),"Ir.sz\xe1m.: ",r," ",l.a.createElement("br",null),"Jelleg.: ",s," ",l.a.createElement("br",null),"Fogad-e.: ",!0===E?"true":"false",l.a.createElement("br",null)))};var h=function(){var e=Object(n.useState)("szeged"),a=Object(m.a)(e,2),t=a[0],r=a[1];return l.a.createElement("div",{className:"flex-container justify-content:end"},l.a.createElement("div",{style:{height:"95vh",width:"60vh"}},l.a.createElement(b,{onChange:function(e){return r(e)},city:t})),l.a.createElement("div",{style:{width:"110vh"}},l.a.createElement(g,{city:t}))," ")};var k=function(){return l.a.createElement("p",null,"Form goes here")};var y=function(){return l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")},x=t(2);var z=function(){return l.a.createElement(i.a,null,l.a.createElement("div",{className:"page"},l.a.createElement("header",null,l.a.createElement(o,null)),l.a.createElement("main",null,l.a.createElement(x.c,null,l.a.createElement(x.a,{path:"/info"},l.a.createElement(s,null)),l.a.createElement(x.a,{path:"/map"},l.a.createElement(h,null)),l.a.createElement(x.a,{path:"/jelentkezes"},l.a.createElement(k,null)),l.a.createElement(x.a,{path:"/"},l.a.createElement(y,null))))))},j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)}))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(z,null)),document.getElementById("root")),j()}},[[35,1,2]]]);
//# sourceMappingURL=main.3759023c.chunk.js.map