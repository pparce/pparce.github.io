"use strict";(self.webpackChunkliga_master=self.webpackChunkliga_master||[]).push([[585],{585:(S,u,o)=>{o.r(u),o.d(u,{LeaguesModule:()=>O});var p=o(4466),g=o(8583),e=o(7716),d=o(7368),l=o(7957),c=o(8993);let m=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-leagues-form"]],decls:5,vars:0,consts:[[1,"form-group"],["type","text",1,"form-control"]],template:function(a,n){1&a&&(e.TgZ(0,"form"),e.TgZ(1,"div",0),e.TgZ(2,"label"),e._uU(3,"Nombre de la liga"),e.qZA(),e._UZ(4,"input",1),e.qZA(),e.qZA())},styles:[""]}),t})(),Z=(()=>{class t{constructor(){}ngOnInit(){}addLeague(){}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-leagues-add"]],decls:7,vars:0,consts:[["title","Crear Liga"],["routerLink","..",1,"btn","btn-light","mr-2"],[1,"btn","btn-primary","primary",3,"click"]],template:function(a,n){1&a&&(e.TgZ(0,"app-toolbar",0),e.TgZ(1,"button",1),e._uU(2,"Cancelar"),e.qZA(),e.TgZ(3,"button",2),e.NdJ("click",function(){return n.addLeague()}),e._uU(4,"Crear"),e.qZA(),e.qZA(),e.TgZ(5,"app-container"),e._UZ(6,"app-leagues-form"),e.qZA())},directives:[d.n,l.rH,c.e,m],styles:[""]}),t})(),f=(()=>{class t{constructor(){}ngOnInit(){}editLeague(){}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-leagues-edit"]],decls:7,vars:0,consts:[["title","Editar Liga"],["routerLink","../..",1,"btn","btn-light","mr-2"],[1,"btn","btn-primary","primary",3,"click"]],template:function(a,n){1&a&&(e.TgZ(0,"app-toolbar",0),e.TgZ(1,"button",1),e._uU(2,"Cancelar"),e.qZA(),e.TgZ(3,"button",2),e.NdJ("click",function(){return n.editLeague()}),e._uU(4,"Editar"),e.qZA(),e.qZA(),e.TgZ(5,"app-container"),e._UZ(6,"app-leagues-form"),e.qZA())},directives:[d.n,l.rH,c.e,m],styles:[""]}),t})();var r=o(5483),h=o(9344),L=o(6643),b=o(8424),T=o(4717);function v(t,i){if(1&t){const a=e.EpF();e.TgZ(0,"div",28),e.NdJ("click",function(){const F=e.CHM(a).$implicit;return e.oxw(2).selectLeague(F)}),e._UZ(1,"img",29),e.TgZ(2,"h5",30),e._uU(3),e.qZA(),e.qZA()}if(2&t){const a=i.$implicit;e.xp6(1),e.Q6J("src",a.image,e.LSH),e.xp6(2),e.Oqu(a.name)}}function x(t,i){1&t&&e._UZ(0,"app-loading")}const A=function(t){return{"loading-data":t}};function _(t,i){if(1&t&&(e.TgZ(0,"div",24),e.TgZ(1,"div",25),e.YNc(2,v,4,2,"div",26),e.qZA(),e.YNc(3,x,1,0,"app-loading",27),e.qZA()),2&t){const a=e.oxw();e.Q6J("ngClass",e.VKq(3,A,a.loading)),e.xp6(2),e.Q6J("ngForOf",a.leagues),e.xp6(1),e.Q6J("ngIf",a.loading)}}function C(t,i){1&t&&(e.TgZ(0,"app-empty-screen",31),e.ynx(1,32),e.TgZ(2,"span"),e._UZ(3,"i",33),e.qZA(),e.BQk(),e.qZA())}function q(t,i){if(1&t&&(e.TgZ(0,"tr"),e.TgZ(1,"td",36),e.TgZ(2,"div",17),e._UZ(3,"img",37),e.TgZ(4,"div",19),e.TgZ(5,"div"),e._uU(6),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t){const a=i.$implicit;e.xp6(3),e.Q6J("src",a.logo,e.LSH),e.xp6(3),e.Oqu(a.name)}}function y(t,i){if(1&t&&(e.TgZ(0,"table",34),e.TgZ(1,"tbody"),e.YNc(2,q,7,2,"tr",35),e.qZA(),e.qZA()),2&t){const a=e.oxw();e.xp6(2),e.Q6J("ngForOf",a.selectedLeague.teams)}}const M=[{path:"",component:(()=>{class t{constructor(a,n,s){this.connectionService=a,this.toastService=n,this.router=s,this.leagues=[],this.teams=[],this.loading=!1,this.selectedLeague={}}ngOnInit(){this.getTeams(),this.getLeagues()}getTeams(){this.loading=!0,this.connectionService.get(r.M.TEAMS).subscribe(a=>{a.length?this.teams=a.map(n=>({id:n.id,name:n["Nombre del equipo"],logo:n["Logo del Equipo"],league:n.Liga})).reverse():this.loading=!1},a=>{this.loading=!1,this.toastService.error("Ha ocurrido un error cargando las ligas")})}getLeagues(){this.connectionService.get(r.M.LEAGUES).subscribe(a=>{this.loading=!1,a.length?this.leagues=a.map(function(n){return{id:n.Identificador,name:n["Nombre De La Liga"],image:n["Logo de la Liga"]}}):this.loading=!1},a=>{this.loading=!1,this.toastService.error("Ha ocurrido un error cargando las ligas")})}deleteTarget(a){this.delTargetId=a}deleteLeague(){this.connectionService.delete(r.M.LEAGUES+this.delTargetId).subscribe(n=>{n.id||this.toastService.error(n.detail),this.getLeagues()},n=>{this.toastService.error(n)})}selectLeague(a){this.selectedLeague=a,this.selectedLeague.teams=this.teams.filter(n=>n.league==a.id)}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(r.M),e.Y36(h._W),e.Y36(l.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-leagues-list"]],decls:43,vars:7,consts:[["title","Ligas","subtitle","Listado de ligas disponibles","icon","bi-collection-fill"],[3,"heigth"],["class","table-container h-100",3,"ngClass",4,"ngIf"],["class","flex-fill","title","No hay ligas disponibles","subtitle","Al parece algo salio mal cargando las ligas",4,"ngIf"],["id","deleteModal","tabindex","-1","role","dialog","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-light"],["type","button","data-dismiss","modal",1,"btn","btn-danger",3,"click"],["id","viewModal","tabindex","-1","role","dialog",1,"modal","fade"],["role","document",1,"modal-dialog","modal-lg"],[1,"d-flex"],["alt","",1,"image-view-modal",3,"src"],[1,"d-flex","flex-column","my-auto"],[1,"d-flex","flex-column","mt-3"],[3,"heightStatic"],["class","table",4,"ngIf"],["type","button","data-dismiss","modal",1,"btn","btn-primary"],[1,"table-container","h-100",3,"ngClass"],[1,"d-flex","h-100","flex-wrap"],["class","d-flex flex-column justify-content-center item-league","data-toggle","modal","data-target","#viewModal",3,"click",4,"ngFor","ngForOf"],[4,"ngIf"],["data-toggle","modal","data-target","#viewModal",1,"d-flex","flex-column","justify-content-center","item-league",3,"click"],["alt","",1,"mx-auto",3,"src"],[1,"mt-3","text-center"],["title","No hay ligas disponibles","subtitle","Al parece algo salio mal cargando las ligas",1,"flex-fill"],["icon",""],[1,"bi","bi-collection-fill","text-secondary",2,"font-size","64px"],[1,"table"],[4,"ngFor","ngForOf"],[2,"width","100%"],[1,"image-table",3,"src"]],template:function(a,n){1&a&&(e._UZ(0,"app-toolbar",0),e.TgZ(1,"app-container",1),e.YNc(2,_,4,5,"div",2),e.YNc(3,C,4,0,"app-empty-screen",3),e.qZA(),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e.TgZ(8,"h5",8),e._uU(9,"Eliminar Liga"),e.qZA(),e.TgZ(10,"button",9),e.TgZ(11,"span",10),e._uU(12,"\xd7"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"div",11),e._uU(14," \xbfEst\xe1 seguro de querer eliminar esta liga? "),e.qZA(),e.TgZ(15,"div",12),e.TgZ(16,"button",13),e._uU(17,"Cancelar"),e.qZA(),e.TgZ(18,"button",14),e.NdJ("click",function(){return n.deleteLeague()}),e._uU(19,"Eliminar"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(20,"div",15),e.TgZ(21,"div",16),e.TgZ(22,"div",6),e.TgZ(23,"div",7),e.TgZ(24,"h5",8),e._uU(25,"Vista Previa"),e.qZA(),e.TgZ(26,"button",9),e.TgZ(27,"span",10),e._uU(28,"\xd7"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(29,"div",11),e.TgZ(30,"div",17),e._UZ(31,"img",18),e.TgZ(32,"div",19),e.TgZ(33,"div"),e._uU(34),e.qZA(),e.qZA(),e.qZA(),e.TgZ(35,"div",20),e.TgZ(36,"label"),e._uU(37,"Listado de equipos"),e.qZA(),e.TgZ(38,"app-scroll-view",21),e.YNc(39,y,3,1,"table",22),e.qZA(),e.qZA(),e.qZA(),e.TgZ(40,"div",12),e.TgZ(41,"button",23),e._uU(42,"Aceptar"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&a&&(e.xp6(1),e.Q6J("heigth",100),e.xp6(1),e.Q6J("ngIf",!n.loading&&n.leagues.length),e.xp6(1),e.Q6J("ngIf",!n.loading&&!n.leagues.length),e.xp6(28),e.Q6J("src",n.selectedLeague.image,e.LSH),e.xp6(3),e.Oqu(n.selectedLeague.name),e.xp6(4),e.Q6J("heightStatic",400),e.xp6(1),e.Q6J("ngIf",!n.loading&&(null==n.selectedLeague.teams?null:n.selectedLeague.teams.length)))},directives:[d.n,c.e,g.O5,L.W,g.mk,g.sg,b.N,T.s],styles:[".image-table[_ngcontent-%COMP%]{height:50px;width:50px;border-radius:8px}.image-view-modal[_ngcontent-%COMP%]{height:100px;width:100px;border-radius:500px;background-color:#e0e4ed;margin-right:16px}.search-input[_ngcontent-%COMP%]{margin-left:16px}@media (min-width: 768px){.item-league[_ngcontent-%COMP%]{padding:16px;height:200px;width:200px;background-color:#e1e9fb;margin-right:16px;margin-bottom:16px;border-radius:16px}.item-league[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover;height:70px;width:70px;background-color:#fff;border-radius:500px}}@media (max-width: 768px){.item-league[_ngcontent-%COMP%]{padding:16px;height:200px;width:100%;background-color:#e1e9fb;margin-bottom:16px;border-radius:16px}.item-league[_ngcontent-%COMP%]:last-child{margin-bottom:55px}.item-league[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover;height:70px;width:70px;background-color:#fff;border-radius:500px}}"]}),t})()},{path:"add",component:Z},{path:"edit/:id",component:f}];let U=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.Bz.forChild(M)],l.Bz]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.ez,U,p.m]]}),t})()}}]);