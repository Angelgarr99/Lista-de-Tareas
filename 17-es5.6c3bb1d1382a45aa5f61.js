function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{uMfO:function(e,t,n){"use strict";n.r(t),n.d(t,"Tab1PageModule",(function(){return C}));var r,a,o,i=n("TEn/"),c=n("ofXK"),s=n("3Pt+"),l=n("qtYk"),u=n("tyNb"),b=n("mrSG"),f=n("fXoL"),d=n("Z16M"),h=n("VnTo"),p=[{path:"",component:(r=function(){function e(t,n,r){_classCallCheck(this,e),this.deseosService=t,this.router=n,this.alertCtrl=r}return _createClass(e,[{key:"agregarLista",value:function(){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertCtrl.create({cssClass:"my-custom-class",header:"Nueva lista",inputs:[{name:"titulo",type:"text",placeholder:"Nombre de la lista"}],buttons:[{text:"Cancelar",role:"cancel",handler:function(){console.log("Cancelar")}},{text:"crear",handler:function(e){if(console.log(e),0!==e.titulo.length){var n=t.deseosService.crearLista(e.titulo);t.router.navigateByUrl("tabs/tab1/agregar/"+n)}}}]});case 2:e.sent.present();case 3:case"end":return e.stop()}}),e,this)})))}}]),e}(),r.\u0275fac=function(e){return new(e||r)(f.Jb(d.a),f.Jb(u.g),f.Jb(i.a))},r.\u0275cmp=f.Db({type:r,selectors:[["app-tab1"]],decls:9,vars:1,consts:[[1,"ion-no-border"],["color","dark"],[3,"terminada"],["vertical","bottom","horizontal","end","slot","fixed"],["color","tertiary",3,"click"],["name","add"]],template:function(e,t){1&e&&(f.Mb(0,"ion-header",0),f.Mb(1,"ion-toolbar",1),f.Mb(2,"ion-title"),f.hc(3," Pendientes "),f.Lb(),f.Lb(),f.Lb(),f.Mb(4,"ion-content",1),f.Kb(5,"app-listas",2),f.Mb(6,"ion-fab",3),f.Mb(7,"ion-fab-button",4),f.Ub("click",(function(){return t.agregarLista()})),f.Kb(8,"ion-icon",5),f.Lb(),f.Lb(),f.Lb()),2&e&&(f.zb(5),f.bc("terminada",!1))},directives:[i.k,i.A,i.z,i.h,h.a,i.i,i.j,i.l],styles:[""]}),r)},{path:"agregar/:listaId",loadChildren:function(){return n.e(3).then(n.bind(null,"PNSq")).then((function(e){return e.AgregarPageModule}))}}],g=((a=function e(){_classCallCheck(this,e)}).\u0275mod=f.Hb({type:a}),a.\u0275inj=f.Gb({factory:function(e){return new(e||a)},imports:[[u.i.forChild(p)],u.i]}),a),m=n("j1ZV"),C=((o=function e(){_classCallCheck(this,e)}).\u0275mod=f.Hb({type:o}),o.\u0275inj=f.Gb({factory:function(e){return new(e||o)},imports:[[i.B,c.b,s.a,l.a,m.a,g]]}),o)}}]);