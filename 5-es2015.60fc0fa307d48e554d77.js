(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"wf4/":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class i{}var e=u("pMnS"),b=u("cyP3"),o=u("24Qt"),r=u("SVse");class a{}var c=t.kb({encapsulation:0,styles:[[".film[_ngcontent-%COMP%]{padding:0 15px}.film[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;background-color:#3d6889;border-radius:8px;padding:15px 20px 20px;transition:.2s box-shadow ease;margin-bottom:40px}.film[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;display:table;margin:10px auto 20px}.film[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:block;margin-bottom:10px}"]],data:{}});function f(l){return t.Db(0,[(l()(),t.mb(0,0,null,null,0,"img",[["src","/assets/pop-corn.svg"]],[[8,"alt",0]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.component.film.title)}))}function s(l){return t.Db(0,[(l()(),t.mb(0,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),t.mb(1,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Opening crawl:"])),(l()(),t.Bb(3,null,[" "," "]))],null,(function(l,n){l(n,3,0,n.component.film.opening_crawl)}))}function m(l){return t.Db(0,[(l()(),t.mb(0,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),t.mb(1,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Director:"])),(l()(),t.Bb(3,null,[" ",""]))],null,(function(l,n){l(n,3,0,n.component.film.director)}))}function p(l){return t.Db(0,[(l()(),t.mb(0,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),t.mb(1,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Producer:"])),(l()(),t.Bb(3,null,[" ",""]))],null,(function(l,n){l(n,3,0,n.component.film.producer)}))}function g(l){return t.Db(0,[(l()(),t.mb(0,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),t.mb(1,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Release date:"])),(l()(),t.Bb(3,null,[" "," "])),t.zb(4,2)],null,(function(l,n){var u=n.component,i=t.Cb(n,3,0,l(n,4,0,t.xb(n.parent,0),u.film.release_date,"dd/MM/yyyy"));l(n,3,0,i)}))}function d(l){return t.Db(0,[t.yb(0,r.d,[t.r]),(l()(),t.mb(1,0,null,null,11,"div",[["class","film"]],null,null,null,null,null)),(l()(),t.mb(2,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),t.bb(16777216,null,null,1,null,f)),t.lb(4,16384,null,0,r.j,[t.K,t.H],{ngIf:[0,"ngIf"]},null),(l()(),t.bb(16777216,null,null,1,null,s)),t.lb(6,16384,null,0,r.j,[t.K,t.H],{ngIf:[0,"ngIf"]},null),(l()(),t.bb(16777216,null,null,1,null,m)),t.lb(8,16384,null,0,r.j,[t.K,t.H],{ngIf:[0,"ngIf"]},null),(l()(),t.bb(16777216,null,null,1,null,p)),t.lb(10,16384,null,0,r.j,[t.K,t.H],{ngIf:[0,"ngIf"]},null),(l()(),t.bb(16777216,null,null,1,null,g)),t.lb(12,16384,null,0,r.j,[t.K,t.H],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,4,0,null==u.film?null:u.film.title),l(n,6,0,null==u.film?null:u.film.opening_crawl),l(n,8,0,null==u.film?null:u.film.director),l(n,10,0,null==u.film?null:u.film.producer),l(n,12,0,null==u.film?null:u.film.release_date)}),null)}var v=u("bkff"),h=u("5xrO");class I{constructor(l,n,u){this.filmService=l,this.activeRoute=n,this.router=u,this.error=!1,this.activeRoute.params.subscribe(l=>{this.id=l.id})}ngOnInit(){this.getFilm()}getFilm(){this.filmService.getById(this.id).subscribe(l=>{this.film=l},l=>{this.router.navigate(["/home"])})}}var x=u("CbwE"),w=u("iInd"),M=t.kb({encapsulation:0,styles:[[""]],data:{}});function _(l){return t.Db(0,[(l()(),t.mb(0,0,null,null,1,"app-header-section",[],null,null,null,b.b,b.a)),t.lb(1,49152,null,0,o.a,[r.g],{text:[0,"text"],btnback:[1,"btnback"]},null),(l()(),t.mb(2,0,null,null,1,"app-film-details",[],null,null,null,d,c)),t.lb(3,49152,null,0,a,[],{film:[0,"film"]},null)],(function(l,n){var u=n.component;l(n,1,0,u.film.title,!0),l(n,3,0,u.film)}),null)}function k(l){return t.Db(0,[(l()(),t.mb(0,0,null,null,1,"app-loading",[],null,null,null,v.b,v.a)),t.lb(1,49152,null,0,h.a,[],null,null)],null,null)}function y(l){return t.Db(0,[(l()(),t.bb(16777216,null,null,1,null,_)),t.lb(1,16384,null,0,r.j,[t.K,t.H],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),t.bb(0,[["noResults",2]],null,0,null,k))],(function(l,n){l(n,1,0,n.component.film,t.xb(n,2))}),null)}function D(l){return t.Db(0,[(l()(),t.mb(0,0,null,null,1,"app-details",[],null,null,null,y,M)),t.lb(1,114688,null,0,I,[x.a,w.a,w.k],null,null)],(function(l,n){l(n,1,0)}),null)}var O=t.ib("app-details",I,D,{},{},[]);class C{}var P=u("pKmL");u.d(n,"DetailsModuleNgFactory",(function(){return j}));var j=t.jb(i,[],(function(l){return t.ub([t.vb(512,t.j,t.U,[[8,[e.a,O]],[3,t.j],t.u]),t.vb(4608,r.l,r.k,[t.r,[2,r.r]]),t.vb(1073742336,r.b,r.b,[]),t.vb(1073742336,w.l,w.l,[[2,w.q],[2,w.k]]),t.vb(1073742336,C,C,[]),t.vb(1073742336,P.a,P.a,[]),t.vb(1073742336,i,i,[]),t.vb(1024,w.i,(function(){return[[{path:"",component:I}]]}),[])])}))}}]);