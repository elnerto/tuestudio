"use strict";(self["webpackChunkprueba2"]=self["webpackChunkprueba2"]||[]).push([[511],{446:(e,t,s)=>{s.d(t,{Z:()=>r});s(5363);var a=s(52),o=s.n(a);const n="https://190.16.160.68:444";async function r(e){const t=await o()({method:"GET",url:n+"/api/v1/auth/ability",headers:{cdevicefingerprint:"7a17f6c4beb11ca9c82472c5646d1b39","Access-Control-Allow-Origin":"*"}}),s=t.data.recordset.map((t=>{const s={};if(s.inverted=t.inverted,s.action=t.action,s.subject=t.subject,s.reason=t.reason,s.fields=JSON.parse(t.fields),"string"===typeof t.conditions){let a=t.conditions.replace("@@cLoginUpd@@",e);s.conditions=JSON.parse(a)}return s}));return s}},1106:(e,t,s)=>{s.d(t,{s:()=>n});var a=s(195);const o=JSON.parse('{"b":[{"cRoute":"/auth/login"}]}');async function n(e,t,s){try{console.log("ApiService cMethod, cUrl, cPayLoad: ",e,t,s);let n="https://190.16.160.68:444",r=null,c=null,i=null;const l=o.b.findIndex((e=>e.cRoute===t));l>=0?(i="fakeApi"+t+".json",n=""):i=t,"GET"===e?r=s:c=s;const u={method:e,url:i,baseURL:n,params:r,data:c,timeout:8e3,headers:{"Content-Type":"application/json"}},d=await(0,a.api)(u);console.log("RESUL OK JSON",d);let p={};return p=Object.assign(p,d.data),p=Object.assign(p,{cStatus:d.data.output.cEstado}),p=Object.assign(p,{cdStatus:d.data.output.cTitulo}),p=Object.assign(p,{output:d.data.output}),p=Object.assign(p,{status:d.status}),p=Object.assign(p,{statustext:d.statustext}),console.log("RESUL jResponse",p),p}catch(n){console.log("RESUL error",n);let e={};if(null!==n&&void 0!==n&&n.response)e=Object.assign(e,{cStatus:res.data.cStatus}),e=Object.assign(e,{cdStatus:res.data.cdStatus}),e=Object.assign(e,{output:n.response.data.output}),e=Object.assign(e,{status:n.response.status}),e=Object.assign(e,{statusText:n.response.statustext});else{let t="No se obtuvo respuesta del servidor";e=Object.assign(e,{status:500}),e=Object.assign(e,{statusText:n}),e=Object.assign(e,{cStatus:"CRASH"}),e=Object.assign(e,{cdStatus:t})}return console.log("RESUL jResponse",e),e}}},8511:(e,t,s)=>{s.r(t),s.d(t,{default:()=>w});var a=s(3673),o=s(2323);const n=(0,a.Uk)(" PERMISOS: "),r={key:0};function c(e,t,s,c,i,l){return(0,a.wg)(),(0,a.iD)("div",null,[n,(0,a._)("div",null,' Puedo "Crear usuarios" (true) '+(0,o.zw)(e.can("create","user")),1),(0,a._)("div",null,' Invert - Puedo "Crear logins" (false) '+(0,o.zw)(e.can("read","Post"))+" "+(0,o.zw)(e.ability.relevantRuleFor("read","Post")),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.jPosts,(t=>((0,a.wg)(),(0,a.iD)("div",{key:t.cCreador},[e.can("read","Post")?((0,a.wg)(),(0,a.iD)("li",r,(0,o.zw)(t.cdPost)+" "+(0,o.zw)(t.cCreador),1)):(0,a.kq)("",!0),(0,a._)("li",null,(0,o.zw)(t.cdPost)+" "+(0,o.zw)(t.cCreador)+" "+(0,o.zw)(t.published)+" "+(0,o.zw)(e.can("read",new e.Post(t.published,t.cCreador))),1)])))),128))])}var i=s(8825),l=s(1959),u=s(5948),d=s(9582),p=s(3617);class b{constructor(e,t,s){this.status=t,this.authorId=s,this.privates=e}}class g{constructor(e,t){this.status=e,this.createdAt=t}}class E{constructor(e){this.status=e}}class O{constructor(e,t){this.cCreador=t,this.published=e}}s(1106);var T=s(446),P=s(4437),A=s(8525);const h=(0,a.aZ)({name:"Crud",components:{},setup(e,t){const{can:s}=(0,A.we)(),o=((0,i.Z)(),(0,d.tv)(),(0,u.QT)({}),(0,p.oR)()),n=(0,l.iH)([{cdPost:"Pera",cCreador:"pepe",published:!0},{cdPost:"Banana",cCreador:"pepe",published:!1},{cdPost:"Manzana",cCreador:"pepe",published:!0},{cdPost:"Camion",cCreador:"Dario.Oviedo",published:!0},{cdPost:"Auto",cCreador:"juan",published:!1}]),r=(0,l.iH)(null);return(0,a.bv)((async()=>{r.value=o.getters["auth/Get_oUser"].cLogin;let e=await(0,T.Z)(r.value);P.ability.update(e),console.log("Objeto ability !!",P.ability);let t=new g("review",new Date("2021/11/30").setHours(0,0,0,0)),a=new b("NOVISTOs");new Date;console.log("TEXT REGLA CAN SIMPLE can read OBJ Post (true)",s("read",new O(!0))),console.log("TEXT REGLA CAN SIMPLE can create post (true)",s("create","Post")),console.log("TEXT REGLA CAN SIMPLE persona (true)",s("read","Persona")),console.log("TEXT REGLA CAN SIMPLE pintar (true)",s("pintar","casas")),console.log("TEXT REGLA CAN SIMPLE pintar pampo 1 (true)",s("pintar","casas","CAMPO1")),console.log("TEXT REGLA CAN SIMPLE pintar pampo 8 (false)",s("pintar","casas","CAMPO8")),console.log("ability REGLA persona Obj ACTIVO (true)",s("read",new E("ACTIVO"))),console.log("TEXT REGLA Misiniestro",s("read",t)),console.log("TEXT REGLA Article (true)",s("read",new b("VISTO"))),console.log("TEXT REGLA Article (false)",s("read",a)),console.log("TEXT REGLA leer persona campo 1",s("read","Persona","CAMPO1","")),console.log("TEXT REGLA leer persona campo 3",s("read","Persona","CAMPO3")),console.log("TEXT relevantRuleFor B otro",P.ability.relevantRuleFor("create","user"))})),{cLoginUpd:r,ability:P.ability,can:s,jPosts:n,Post:O}},async mounted(){}});var C=s(4260);const v=(0,C.Z)(h,[["render",c]]),w=v}}]);