(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{PNSq:function(t,e,n){"use strict";n.r(e),n.d(e,"AgregarPageModule",(function(){return g}));var i=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),s=n("tyNb");class a{constructor(t){this.desc=t,this.completado=!1}}var c=n("fXoL"),b=n("Z16M");function l(t,e){1&t&&(c.Mb(0,"ion-list-header",1),c.Mb(1,"ion-label"),c.hc(2,"Tareas por hacer"),c.Lb(),c.Lb())}function d(t,e){if(1&t){const t=c.Nb();c.Mb(0,"ion-item-sliding",9),c.Mb(1,"ion-item",1),c.Mb(2,"ion-checkbox",10),c.Ub("ngModelChange",(function(n){return c.dc(t),e.$implicit.completado=n}))("ionChange",(function(){c.dc(t);const n=e.$implicit;return c.Wb().cambioCheck(n)})),c.Lb(),c.Mb(3,"ion-label"),c.hc(4),c.Lb(),c.Lb(),c.Mb(5,"ion-item-options",11),c.Mb(6,"ion-item-option",12),c.Ub("click",(function(){c.dc(t);const n=e.index;return c.Wb().borrar(n)})),c.Kb(7,"ion-icon",13),c.Lb(),c.Lb(),c.Lb()}if(2&t){const t=e.$implicit;c.zb(2),c.bc("ngModel",t.completado),c.zb(2),c.ic(t.desc)}}const m=[{path:"",component:(()=>{class t{constructor(t,e){this.deseosService=t,this.router=e,this.nombreItem="";const n=this.router.snapshot.paramMap.get("listaId");this.lista=this.deseosService.obtenerlista(n)}ngOnInit(){}agregarItem(){if(0===this.nombreItem.length)return;const t=new a(this.nombreItem);this.lista.items.push(t),this.nombreItem="",this.deseosService.guardarSorage()}cambioCheck(t){0===this.lista.items.filter(t=>!t.completado).length?(this.lista.terminadaEn=new Date,this.lista.terminada=!0):(this.lista.terminadaEn=null,this.lista.terminada=!1),this.deseosService.guardarSorage(),console.log(this.deseosService.listas)}borrar(t){this.lista.items.splice(t,1),this.deseosService.guardarSorage()}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(b.a),c.Jb(s.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-agregar"]],decls:15,vars:4,consts:[[1,"ion-no-border"],["color","dark"],["slot","start"],["color","tertiary","defaultHref","/"],["color","dark",1,"ion-padding"],["position","floating"],["type","text",3,"ngModel","ngModelChange","keyup.enter"],["color","dark",4,"ngIf"],["class","animated fadeInDown",4,"ngFor","ngForOf"],[1,"animated","fadeInDown"],["slot","start","color","tertiary",3,"ngModel","ngModelChange","ionChange"],["side","end"],["color","danger",3,"click"],["slot","icon-only","name","trash"]],template:function(t,e){1&t&&(c.Mb(0,"ion-header",0),c.Mb(1,"ion-toolbar",1),c.Mb(2,"ion-buttons",2),c.Kb(3,"ion-back-button",3),c.Lb(),c.Mb(4,"ion-title"),c.hc(5),c.Lb(),c.Lb(),c.Lb(),c.Mb(6,"ion-content",4),c.Mb(7,"ion-list",1),c.Mb(8,"ion-item",1),c.Mb(9,"ion-label",5),c.hc(10,"Nuevo item"),c.Lb(),c.Mb(11,"ion-input",6),c.Ub("ngModelChange",(function(t){return e.nombreItem=t}))("keyup.enter",(function(){return e.agregarItem()})),c.Lb(),c.Lb(),c.Lb(),c.Mb(12,"ion-list"),c.gc(13,l,3,0,"ion-list-header",7),c.gc(14,d,8,2,"ion-item-sliding",8),c.Lb(),c.Lb()),2&t&&(c.zb(5),c.jc("",e.lista.titulo," "),c.zb(6),c.bc("ngModel",e.nombreItem),c.zb(2),c.bc("ngIf",e.lista.items.length>0),c.zb(1),c.bc("ngForOf",e.lista.items))},directives:[r.k,r.A,r.f,r.d,r.e,r.z,r.h,r.s,r.n,r.r,r.m,r.E,o.d,o.e,i.i,i.h,r.t,r.q,r.g,r.b,r.p,r.o,r.l],styles:[""]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(m)],s.i]}),t})(),g=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[i.b,o.a,r.B,h]]}),t})()}}]);