"use strict";(self["webpackChunkprueba2"]=self["webpackChunkprueba2"]||[]).push([[386],{446:(e,t,n)=>{n.d(t,{Z:()=>i});n(5363);var a=n(52),o=n.n(a);const s="http://190.16.160.68:4020";async function i(e){const t=await o()({method:"GET",url:s+"/api/v1/auth/ability",headers:{cdevicefingerprint:"7a17f6c4beb11ca9c82472c5646d1b39","Access-Control-Allow-Origin":"*"}}),n=t.data.recordset.map((t=>{const n={};if(n.inverted=t.inverted,n.action=t.action,n.subject=t.subject,n.reason=t.reason,n.fields=JSON.parse(t.fields),"string"===typeof t.conditions){let a=t.conditions.replace("@@cLoginUpd@@",e);n.conditions=JSON.parse(a)}return n}));return n}},1106:(e,t,n)=>{n.d(t,{s:()=>s});var a=n(195);const o=JSON.parse('{"b":[{"cRoute":"/auth/login"}]}');async function s(e,t,n){try{console.log("ApiService cMethod, cUrl, cPayLoad: ",e,t,n);let s="http://190.16.160.68:4020",i=null,l=null,r=null;const u=o.b.findIndex((e=>e.cRoute===t));u>=0?(r="fakeApi"+t+".json",s=""):r=t,"GET"===e?i=n:l=n;const c={method:e,url:r,baseURL:s,params:i,data:l,timeout:8e3,headers:{"Content-Type":"application/json"}},d=await(0,a.api)(c);console.log("RESUL OK JSON",d);let g={};return g=Object.assign(g,d.data),g=Object.assign(g,{cStatus:d.data.output.cEstado}),g=Object.assign(g,{cdStatus:d.data.output.cTitulo}),g=Object.assign(g,{output:d.data.output}),g=Object.assign(g,{status:d.status}),g=Object.assign(g,{statustext:d.statustext}),console.log("RESUL jResponse",g),g}catch(s){console.log("RESUL error",s);let e={};if(null!==s&&void 0!==s&&s.response)e=Object.assign(e,{cStatus:res.data.cStatus}),e=Object.assign(e,{cdStatus:res.data.cdStatus}),e=Object.assign(e,{output:s.response.data.output}),e=Object.assign(e,{status:s.response.status}),e=Object.assign(e,{statusText:s.response.statustext});else{let t="No se obtuvo respuesta del servidor";e=Object.assign(e,{status:500}),e=Object.assign(e,{statusText:s}),e=Object.assign(e,{cStatus:"CRASH"}),e=Object.assign(e,{cdStatus:t})}return console.log("RESUL jResponse",e),e}}},1055:(e,t,n)=>{n.d(t,{ZJ:()=>o,jV:()=>s,y9:()=>i,xW:()=>l});var a=n(6394);function o(e){return new Promise((t=>{setTimeout((()=>{t(2)}),e)}))}function s(e,t,n){e.notify({type:"ongoing",position:"right",spinner:a.Z,message:t,timeout:n})}function i(e,t,n,a){e.notify({type:"positive",position:"right",message:t,caption:n,timeout:a})}function l(e,t,n,a){e.notify({type:"negative",position:"right",message:t,caption:n,timeout:a})}},386:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var a=n(3673),o=n(2323);const s={class:"fit row wrap justify-center items-start content-start"},i={key:0},l=(0,a._)("span",{class:"q-px-sm bg-deep-red text-red text-italic rounded-borders"},"(*)",-1),r=(0,a._)("span",{class:"q-px-sm text-red text-italic rounded-borders"},"(*)",-1),u={class:"q-mt-lg"},c=(0,a._)("span",{class:"text-red text-italic rounded-borders"},"(*)",-1);function d(e,t,n,d,g,p){const m=(0,a.up)("q-btn"),b=(0,a.up)("q-icon"),h=(0,a.up)("q-input"),w=(0,a.up)("q-form"),f=(0,a.up)("q-page"),v=(0,a.up)("q-page-container");return(0,a.wg)(),(0,a.j4)(v,{class:"no-margin no-padding"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a._)("div",s,[e.$store.getters["auth/Get_lLoggedIn"]?((0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("h4",null,(0,o.zw)(d.i18n.t("auth.Actual username")),1),(0,a._)("h5",null,(0,o.zw)(e.$store.getters["auth/Get_oUser"].cdLogin),1),(0,a.Wm)(m,{onClick:d.OnLogout,label:d.i18n.t("auth.button.LogOut"),color:"primary",loading:d.lFormSubmitting},null,8,["onClick","label","loading"])])):(0,a.kq)("",!0),e.$store.getters["auth/Get_lLoggedIn"]?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(w,{key:1,modelValue:d.lFormValid,"onUpdate:modelValue":t[3]||(t[3]=e=>d.lFormValid=e),onClick:d.OnFormValidate,class:"q-gutter-md col-5",ref:"Form","no-error-focus":""},{default:(0,a.w5)((()=>[(0,a._)("h4",null,(0,o.zw)(d.i18n.t("auth.Login")),1),(0,a.Wm)(h,{modelValue:d.cLogin,"onUpdate:modelValue":t[0]||(t[0]=e=>d.cLogin=e),outlined:"",label:"",hint:d.i18n.t("auth.Username or email"),"lazy-rules":"",rules:[e=>e&&e.length>0||d.i18n.t("auth.Enter your username")]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(b,{name:"mdi-account",class:"text-primary"})])),label:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(d.i18n.t("auth.Username"))+" ",1),l])),_:1},8,["modelValue","hint","rules"]),(0,a.Wm)(h,{modelValue:d.cLoginPassword,"onUpdate:modelValue":t[2]||(t[2]=e=>d.cLoginPassword=e),outlined:"",clearable:"",label:"",type:d.lViewPassword?"password":"text",hint:d.i18n.t("auth.Password"),"lazy-rules":"",rules:[e=>e&&e.length>0||d.i18n.t("auth.Enter your password")]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(b,{name:"mdi-key",class:"text-primary"})])),label:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(d.i18n.t("auth.Password"))+" ",1),r])),append:(0,a.w5)((()=>[(0,a.Wm)(b,{name:d.lViewPassword?"mdi-eye-off":"mdi-eye",class:"cursor-pointer",onClick:t[1]||(t[1]=e=>d.lViewPassword=!d.lViewPassword)},null,8,["name"])])),_:1},8,["modelValue","type","hint","rules"]),(0,a.Wm)(m,{disable:!d.lFormValid,onClick:d.OnLogin,label:d.i18n.t("auth.button.Login"),color:"primary",loading:d.lFormSubmitting},null,8,["disable","onClick","label","loading"]),(0,a._)("div",u,[c,(0,a.Uk)(" "+(0,o.zw)(d.i18n.t("auth.They are mandatory data")),1)])])),_:1},8,["modelValue","onClick"]))])])),_:1})])),_:1})}var g=n(8825),p=(n(6394),n(1959)),m=n(1106),b=(n(446),n(5948)),h=n(3617),w=n(9582),f=n(1055);const v={setup(e,{root:t}){const n=(0,g.Z)(),o=(0,h.oR)(),s=(0,w.tv)(),i=(0,p.iH)(null),l=(0,p.iH)(null),r=(0,p.iH)(!0),u=(0,b.QT)({}),c=(0,p.iH)(null);let d=(0,p.iH)(!1);const v=(0,p.iH)(!1);async function y(){v.value=!0,(0,f.jV)(n,"Cerrando Cesion ...",1e3),await(0,f.ZJ)(2e3),o.dispatch("auth/ActionUserReset",{}),(0,f.y9)(n,"Cesion derrada","La cesion fue cerrada con exito",2e3),v.value=!1}function L(){console.log("escuche onAccepted")}async function O(){if(c.value.validate(),d.value){v.value=!0,(0,f.jV)(n,"Conectando ...",500);const e={cLogin:l.value,cLoginPassword:i.value},t=await(0,m.s)("POST","/api/v1/auth/loguear",e);if(console.log("Login response",t),v.value=!1,"OK"===t.cStatus){(0,f.y9)(n,"Login Realizado !!","Ha ingresado con exito al sistema",1e3);const e={ncLogin:t.ncLogin,cLoginUpd:t.cLogin,cdLogin:t.cdLogin},a=t.cToken;o.dispatch("auth/ActionLogin",{cToken:a,oUser:e}),await(0,f.ZJ)(2e3),s.push({name:"home"})}else(0,f.xW)(n,"Login Invalido  !! "+t.cMessage,"Intente nuevamente",2e3),o.dispatch("auth/ActionUserReset",{})}}function j(){c.value.validate().then((e=>{e?(d.value=!0,console.log("Ok, Validacion")):(d.value=!1,console.log("NO Ok, Revisar formulario"))}))}return(0,a.bv)((async()=>{})),{cLogin:l,cLoginPassword:i,i18n:u,lViewPassword:r,OnLogin:O,OnLogout:y,lFormSubmitting:v,lFormValid:d,Form:c,OnFormValidate:j,onAccepted:L}}};var y=n(4260),L=n(2652),O=n(4379),j=n(8240),k=n(5269),V=n(4842),S=n(4554),x=n(7518),U=n.n(x);const C=(0,y.Z)(v,[["render",d]]),P=C;U()(v,"components",{QPageContainer:L.Z,QPage:O.Z,QBtn:j.Z,QForm:k.Z,QInput:V.Z,QIcon:S.Z})}}]);