(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{uMfO:function(t,e,r){"use strict";r.r(e),r.d(e,"Tab1PageModule",(function(){return f}));var a=r("TEn/"),n=r("ofXK"),o=r("3Pt+"),i=r("qtYk"),s=r("tyNb"),l=r("mrSG"),c=r("fXoL"),b=r("Z16M"),u=r("VnTo");const d=[{path:"",component:(()=>{class t{constructor(t,e,r){this.deseosService=t,this.router=e,this.alertCtrl=r}agregarLista(){return Object(l.a)(this,void 0,void 0,(function*(){(yield this.alertCtrl.create({cssClass:"my-custom-class",header:"Nueva lista",inputs:[{name:"titulo",type:"text",placeholder:"Nombre de la lista"}],buttons:[{text:"Cancelar",role:"cancel",handler:()=>{console.log("Cancelar")}},{text:"crear",handler:t=>{if(console.log(t),0===t.titulo.length)return;const e=this.deseosService.crearLista(t.titulo);this.router.navigateByUrl("tabs/tab1/agregar/"+e)}}]})).present()}))}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(b.a),c.Jb(s.g),c.Jb(a.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-tab1"]],decls:9,vars:1,consts:[[1,"ion-no-border"],["color","dark"],[3,"terminada"],["vertical","bottom","horizontal","end","slot","fixed"],["color","tertiary",3,"click"],["name","add"]],template:function(t,e){1&t&&(c.Mb(0,"ion-header",0),c.Mb(1,"ion-toolbar",1),c.Mb(2,"ion-title"),c.hc(3," Pendientes "),c.Lb(),c.Lb(),c.Lb(),c.Mb(4,"ion-content",1),c.Kb(5,"app-listas",2),c.Mb(6,"ion-fab",3),c.Mb(7,"ion-fab-button",4),c.Ub("click",(function(){return e.agregarLista()})),c.Kb(8,"ion-icon",5),c.Lb(),c.Lb(),c.Lb()),2&t&&(c.zb(5),c.bc("terminada",!1))},directives:[a.k,a.A,a.z,a.h,u.a,a.i,a.j,a.l],styles:[""]}),t})()},{path:"agregar/:listaId",loadChildren:()=>r.e(3).then(r.bind(null,"PNSq")).then(t=>t.AgregarPageModule)}];let h=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(d)],s.i]}),t})();var p=r("j1ZV");let f=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[a.B,n.b,o.a,i.a,p.a,h]]}),t})()}}]);