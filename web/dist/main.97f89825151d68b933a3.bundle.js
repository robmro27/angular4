webpackJsonp([1],{"+h1B":function(n,l,t){"use strict";var u=t("/oeL"),e=t("aR8+"),o=t("wQAS"),r=t("kq7W"),i=t("iQvK"),c=t("ssAA"),a=t("q4dy"),d=t("BkNc"),s=t("qbdv"),_=t("fc+i"),f=t("bm2B"),g=t("CPp0"),p=t("mGjr"),h=t("g5HS"),m=t("0aAO"),v=t("3Mow"),b=t("vnfH");t.d(l,"a",function(){return C});var C=u.b(e.a,[o.a],function(n){return u.c([u.d(512,u.e,u.f,[[8,[r.a,i.a,c.a,a.a]],[3,u.e],u.g]),u.d(5120,d.a,d.b,[d.c]),u.d(4608,d.d,d.d,[]),u.d(6144,d.e,null,[d.d]),u.d(135680,d.f,d.f,[d.c,u.h,u.i,u.j,d.e]),u.d(4608,d.g,d.g,[]),u.d(5120,d.h,d.i,[d.j]),u.d(5120,u.k,function(n){return[n]},[d.h]),u.d(5120,u.l,u.m,[[3,u.l]]),u.d(4608,s.a,s.b,[u.l]),u.d(5120,u.n,u.o,[]),u.d(5120,u.p,u.q,[]),u.d(5120,u.r,u.s,[]),u.d(4608,_.b,_.c,[s.c]),u.d(6144,u.t,null,[_.b]),u.d(4608,_.d,_.e,[]),u.d(5120,_.f,function(n,l,t,u){return[new _.g(n),new _.h(l),new _.i(t,u)]},[s.c,s.c,s.c,_.d]),u.d(4608,_.j,_.j,[_.f,u.u]),u.d(135680,_.k,_.k,[s.c]),u.d(4608,_.l,_.l,[_.j,_.k]),u.d(6144,u.v,null,[_.l]),u.d(6144,_.m,null,[_.k]),u.d(4608,u.w,u.w,[u.u]),u.d(4608,_.n,_.n,[s.c]),u.d(4608,_.o,_.o,[s.c]),u.d(4608,f.a,f.a,[]),u.d(4608,g.a,g.a,[]),u.d(4608,g.b,g.c,[]),u.d(5120,g.d,g.e,[]),u.d(4608,g.f,g.f,[g.a,g.b,g.d]),u.d(4608,g.g,g.h,[]),u.d(5120,g.i,g.j,[g.f,g.g]),u.d(4608,p.a,p.a,[g.i]),u.d(1024,d.k,d.l,[[3,d.c]]),u.d(1024,u.x,_.p,[]),u.d(512,d.j,d.j,[u.j]),u.d(1024,u.y,function(){return[d.m()]},[]),u.d(1024,u.z,function(n,l,t){return[d.n(n),_.q(l,t)]},[d.j,[2,_.r],[2,u.y]]),u.d(512,u.A,u.A,[[2,u.z]]),u.d(131584,u.B,u.B,[u.u,u.C,u.j,u.x,u.e,u.A]),u.d(2048,u.D,null,[u.B]),u.d(512,d.o,d.p,[]),u.d(512,d.q,d.q,[]),u.d(256,d.r,{},[]),u.d(1024,s.d,d.s,[s.e,[2,s.f],d.r]),u.d(512,s.g,s.g,[s.d]),u.d(512,u.i,u.i,[]),u.d(512,u.h,u.E,[u.i,[2,u.F]]),u.d(1024,d.t,function(){return[[{path:"users",component:h.a},{path:"dashboard",component:m.a},{path:"detail/:id",component:v.a},{path:"",redirectTo:"/dashboard",pathMatch:"full"}]]},[]),u.d(1024,d.c,d.u,[u.D,d.o,d.q,s.g,u.j,u.h,u.i,d.t,d.r,[2,d.v],[2,d.w]]),u.d(512,d.x,d.x,[[2,d.k],[2,d.c]]),u.d(512,b.a,b.a,[]),u.d(512,s.h,s.h,[]),u.d(512,u.G,u.G,[u.D]),u.d(512,_.s,_.s,[[3,_.s]]),u.d(512,f.b,f.b,[]),u.d(512,f.c,f.c,[]),u.d(512,g.k,g.k,[]),u.d(512,e.a,e.a,[])])})},0:function(n,l,t){n.exports=t("cDNt")},"0aAO":function(n,l,t){"use strict";var u=t("mGjr");t.d(l,"a",function(){return e});var e=function(){function n(n){this.userService=n}return n.prototype.ngOnInit=function(){this.getUsers()},n.prototype.getUsers=function(){var n=this;this.userService.getUsers().then(function(l){console.log(l),n.users=l.slice(0,4)})},n.ctorParameters=function(){return[{type:u.a}]},n}()},"3Mow":function(n,l,t){"use strict";var u=t("mGjr"),e=t("BkNc"),o=t("qbdv"),r=t("Pic8");t.n(r);t.d(l,"a",function(){return i});var i=function(){function n(n,l,t){this.userService=n,this.route=l,this.location=t}return n.prototype.ngOnInit=function(){var n=this;this.route.paramMap.switchMap(function(l){return n.userService.getUser(+l.get("id"))}).subscribe(function(l){return n.user=l})},n.prototype.goBack=function(){this.location.back()},n.ctorParameters=function(){return[{type:u.a},{type:e.a},{type:o.g}]},n}()},H0hC:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=["h1[_ngcontent-%COMP%]{color:#369;font-family:Arial,Helvetica,seans-serif;font-size:250%}.selected[_ngcontent-%COMP%]{background-color:#cfd8dc!important;color:#fff}.users[_ngcontent-%COMP%]{margin:0 0 2em 0;list-style-type:none;padding:0;width:15em}.users[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;position:relative;left:0;background-color:#eee;margin:.5em;padding:.3em 0;height:1.6em;border-radius:4px}.users[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover{background-color:#bbd8dc!important;color:#fff}.users[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:#607d8b;background-color:#ddd;left:.1em}.users[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{position:relative;top:-3px}.users[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{display:inline-block;font-size:small;color:#fff;padding:.8em .7em 0 .7em;background-color:#607d8b;line-height:1em;position:relative;left:-1px;top:-4px;height:1.8em;margin-right:.8em;border-radius:4px 0 0 4px}button[_ngcontent-%COMP%]{margin-top:20px;font-family:Arial;background-color:#eee;border:none;padding:5px 10px;border-radius:4px;cursor:pointer;cursor:hand}button[_ngcontent-%COMP%]:hover{background-color:#cfd8dc}button[_ngcontent-%COMP%]:disabled{background-color:#eee;color:#ccc;cursor:auto}"]},NhKt:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=["h1[_ngcontent-%COMP%]{font-size:1.2em;color:#999;margin-bottom:0}h2[_ngcontent-%COMP%]{font-size:2em;margin-top:0;padding-top:0}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:5px 10px;text-decoration:none;margin-top:10px;display:inline-block;background-color:#eee;border-radius:4px}a[_ngcontent-%COMP%]:link, nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited{color:#607d8b}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#cfd8dc}nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#039be5}"]},"aR8+":function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){function n(){}return n}()},cDNt:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var u=t("/oeL"),e=t("p5Ee"),o=t("+h1B"),r=t("fc+i");e.a.production&&t.i(u.a)(),t.i(r.a)().bootstrapModuleFactory(o.a)},g5HS:function(n,l,t){"use strict";var u=t("mGjr"),e=t("BkNc");t.d(l,"a",function(){return o});var o=function(){function n(n,l){this.userService=n,this.router=l}return n.prototype.ngOnInit=function(){this.getUsers()},n.prototype.onSelect=function(n){this.selectedUser=n},n.prototype.getUsers=function(){var n=this;this.userService.getUsers().then(function(l){return n.users=l})},n.prototype.gotoDetail=function(){this.router.navigate(["/detail",this.selectedUser.id])},n.ctorParameters=function(){return[{type:u.a},{type:e.c}]},n}()},iOqT:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=["[class*=col-][_ngcontent-%COMP%]{float:left;padding-right:20px;padding-bottom:20px}[class*=col-][_ngcontent-%COMP%]:last-of-type{padding-right:0}a[_ngcontent-%COMP%]{text-decoration:none}*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before{box-sizing:border-box}h3[_ngcontent-%COMP%]{text-align:center;margin-bottom:0}.grid[_ngcontent-%COMP%]{margin:0}.col-1-4[_ngcontent-%COMP%]{width:25%}.module[_ngcontent-%COMP%]{text-align:center;color:#eee;max-height:120px;min-width:120px;background-color:#607d8b;border-radius:2px}.module[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:20px;display:block;width:100%;height:100%;color:#eee}.module[_ngcontent-%COMP%]:hover{background-color:#eee;cursor:pointer;color:#607d8b}.module[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{color:#607d8b}.grid-pad[_ngcontent-%COMP%]{padding:10px 0}.grid-pad[_ngcontent-%COMP%] > [class*=col-][_ngcontent-%COMP%]:last-of-type{padding-right:20px}@media (max-width:600px){.module[_ngcontent-%COMP%]{font-size:10px;max-height:75px}}@media (max-width:1024px){.grid[_ngcontent-%COMP%]{margin:0}.module[_ngcontent-%COMP%]{min-width:60px}}"]},iQvK:function(n,l,t){"use strict";function u(n){return i._26(0,[(n()(),i._27(0,null,null,9,"div",[["class","col-1-4"]],null,null,null,null,null)),(n()(),i._28(null,["\n        "])),(n()(),i._27(0,null,null,6,"div",[["class","module hero"]],null,null,null,null,null)),(n()(),i._28(null,["\n            "])),(n()(),i._27(0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0;if("click"===l){u=!1!==i._29(n,5).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u}return u},null,null)),i._30(671744,null,0,c.y,[c.c,c.a,a.d],{routerLink:[0,"routerLink"]},null),i._34(2),(n()(),i._28(null,["",""])),(n()(),i._28(null,["\n        "])),(n()(),i._28(null,["\n    "]))],function(n,l){n(l,5,0,n(l,6,0,"/detail",l.context.$implicit.id))},function(n,l){n(l,4,0,i._29(l,5).target,i._29(l,5).href),n(l,7,0,l.context.$implicit.username)})}function e(n){return i._26(0,[(n()(),i._27(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),i._28(null,["Top Users"])),(n()(),i._28(null,["\n"])),(n()(),i._27(0,null,null,4,"div",[["class","grid grid-pad"]],null,null,null,null,null)),(n()(),i._28(null,["\n    "])),(n()(),i._33(16777216,null,null,1,null,u)),i._30(802816,null,0,a.o,[i._6,i._7,i.p],{ngForOf:[0,"ngForOf"]},null),(n()(),i._28(null,["\n"]))],function(n,l){n(l,6,0,l.component.users)},null)}function o(n){return i._26(0,[(n()(),i._27(0,null,null,1,"app-dashboard",[],null,null,null,e,f)),i._30(114688,null,0,d.a,[s.a],null,null)],function(n,l){n(l,1,0)},null)}var r=t("iOqT"),i=t("/oeL"),c=t("BkNc"),a=t("qbdv"),d=t("0aAO"),s=t("mGjr");t.d(l,"a",function(){return g});var _=[r.a],f=i._25({encapsulation:0,styles:_,data:{}}),g=i._31("app-dashboard",d.a,o,{},{},[])},kq7W:function(n,l,t){"use strict";function u(n){return c._26(0,[(n()(),c._27(0,null,null,4,"li",[],[[2,"selected",null]],[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.onSelect(n.context.$implicit)&&u}return u},null,null)),(n()(),c._28(null,["\n    "])),(n()(),c._27(0,null,null,1,"span",[["class","badge"]],null,null,null,null,null)),(n()(),c._28(null,["",""])),(n()(),c._28(null,[" ","\n  "]))],null,function(n,l){var t=l.component;n(l,0,0,l.context.$implicit===t.selectedUser),n(l,3,0,l.context.$implicit.id),n(l,4,0,l.context.$implicit.username)})}function e(n){return c._26(0,[(n()(),c._27(0,null,null,8,"div",[],null,null,null,null,null)),(n()(),c._28(null,["\n  "])),(n()(),c._27(0,null,null,2,"h2",[],null,null,null,null,null)),(n()(),c._28(null,["\n    ","\n  "])),c._35(1),(n()(),c._28(null,["\n  "])),(n()(),c._27(0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.gotoDetail()&&u}return u},null,null)),(n()(),c._28(null,["View Details"])),(n()(),c._28(null,["\n"]))],null,function(n,l){var t=l.component;n(l,3,0,c._36(l,3,0,n(l,4,0,c._29(l.parent,0),t.selectedUser.username)))})}function o(n){return c._26(0,[c._37(0,a.p,[]),(n()(),c._27(0,null,null,4,"ul",[["class","users"]],null,null,null,null,null)),(n()(),c._28(null,["\n  "])),(n()(),c._33(16777216,null,null,1,null,u)),c._30(802816,null,0,a.o,[c._6,c._7,c.p],{ngForOf:[0,"ngForOf"]},null),(n()(),c._28(null,["\n"])),(n()(),c._28(null,["\n\n"])),(n()(),c._33(16777216,null,null,1,null,e)),c._30(16384,null,0,a.n,[c._6,c._7],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,4,0,t.users),n(l,8,0,t.selectedUser)},null)}function r(n){return c._26(0,[(n()(),c._27(0,null,null,1,"app-users",[],null,null,null,o,g)),c._30(114688,null,0,d.a,[s.a,_.c],null,null)],function(n,l){n(l,1,0)},null)}var i=t("H0hC"),c=t("/oeL"),a=t("qbdv"),d=t("g5HS"),s=t("mGjr"),_=t("BkNc");t.d(l,"a",function(){return p});var f=[i.a],g=c._25({encapsulation:0,styles:f,data:{}}),p=c._31("app-users",d.a,r,{},{},[])},mGjr:function(n,l,t){"use strict";var u=t("CPp0"),e=t("82j9");t.n(e);t.d(l,"a",function(){return o});var o=function(){function n(n){this.http=n,this.usersUrl="api/users"}return n.prototype.getUsers=function(){return this.http.get(this.usersUrl).toPromise().then(function(n){return n.json().data}).catch(this.handleError)},n.prototype.getUser=function(n){return this.getUsers().then(function(l){return l.find(function(l){return l.id===n})})},n.prototype.handleError=function(n){return console.log("An error occurred",n),Promise.reject(n.message||n)},n.ctorParameters=function(){return[{type:u.i}]},n}()},"n//0":function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=["label[_ngcontent-%COMP%]{display:inline-block;width:3em;margin:.5em 0;color:#607d8b;font-weight:700}input[_ngcontent-%COMP%]{height:2em;font-size:1em;padding-left:.4em}button[_ngcontent-%COMP%]{margin-top:20px;font-family:Arial;background-color:#eee;border:none;padding:5px 10px;border-radius:4px;cursor:pointer;cursor:hand}button[_ngcontent-%COMP%]:hover{background-color:#cfd8dc}button[_ngcontent-%COMP%]:disabled{background-color:#eee;color:#ccc;cursor:auto}"]},p5Ee:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u={production:!0}},q4dy:function(n,l,t){"use strict";function u(n){return r._26(0,[(n()(),r._27(0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),r._28(null,["",""])),(n()(),r._28(null,["\n\n"])),(n()(),r._27(0,null,null,9,"nav",[],null,null,null,null,null)),(n()(),r._28(null,["\n    "])),(n()(),r._27(0,null,null,2,"a",[["routerLink","/dashboard"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0;if("click"===l){u=!1!==r._29(n,6).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u}return u},null,null)),r._30(671744,null,0,i.y,[i.c,i.a,c.d],{routerLink:[0,"routerLink"]},null),(n()(),r._28(null,["Dashboard"])),(n()(),r._28(null,["\n    "])),(n()(),r._27(0,null,null,2,"a",[["routerLink","/users"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0;if("click"===l){u=!1!==r._29(n,10).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u}return u},null,null)),r._30(671744,null,0,i.y,[i.c,i.a,c.d],{routerLink:[0,"routerLink"]},null),(n()(),r._28(null,["Users"])),(n()(),r._28(null,["\n"])),(n()(),r._28(null,["\n\n"])),(n()(),r._27(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),r._30(212992,null,0,i.z,[i.q,r._6,r.e,[8,null],r._14],null,null)],function(n,l){n(l,6,0,"/dashboard");n(l,10,0,"/users"),n(l,15,0)},function(n,l){n(l,1,0,l.component.title),n(l,5,0,r._29(l,6).target,r._29(l,6).href),n(l,9,0,r._29(l,10).target,r._29(l,10).href)})}function e(n){return r._26(0,[(n()(),r._27(0,null,null,1,"app-root",[],null,null,null,u,s)),r._30(49152,null,0,a.a,[],null,null)],null,null)}var o=t("NhKt"),r=t("/oeL"),i=t("BkNc"),c=t("qbdv"),a=t("wQAS");t.d(l,"a",function(){return _});var d=[o.a],s=r._25({encapsulation:0,styles:d,data:{}}),_=r._31("app-root",a.a,e,{},{},[])},qtrl:function(n,l){function t(n){throw new Error("Cannot find module '"+n+"'.")}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="qtrl"},ssAA:function(n,l,t){"use strict";function u(n){return i._26(0,[(n()(),i._27(0,null,null,25,"div",[],null,null,null,null,null)),(n()(),i._28(null,["\n  "])),(n()(),i._27(0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),i._28(null,[""," details!"])),(n()(),i._28(null,["\n  "])),(n()(),i._27(0,null,null,3,"div",[],null,null,null,null,null)),(n()(),i._27(0,null,null,1,"label",[],null,null,null,null,null)),(n()(),i._28(null,["id: "])),(n()(),i._28(null,["",""])),(n()(),i._28(null,["\n  "])),(n()(),i._27(0,null,null,11,"div",[],null,null,null,null,null)),(n()(),i._28(null,["\n    "])),(n()(),i._27(0,null,null,1,"label",[],null,null,null,null,null)),(n()(),i._28(null,["name: "])),(n()(),i._28(null,["\n    "])),(n()(),i._27(0,null,null,5,"input",[["placeholder","name"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0,e=n.component;if("input"===l){u=!1!==i._29(n,16)._handleInput(t.target.value)&&u}if("blur"===l){u=!1!==i._29(n,16).onTouched()&&u}if("compositionstart"===l){u=!1!==i._29(n,16)._compositionStart()&&u}if("compositionend"===l){u=!1!==i._29(n,16)._compositionEnd(t.target.value)&&u}if("ngModelChange"===l){u=!1!==(e.user.username=t)&&u}return u},null,null)),i._30(16384,null,0,c.d,[i._16,i._3,[2,c.e]],null,null),i._32(1024,null,c.f,function(n){return[n]},[c.d]),i._30(671744,null,0,c.g,[[8,null],[8,null],[8,null],[2,c.f]],{model:[0,"model"]},{update:"ngModelChange"}),i._32(2048,null,c.h,null,[c.g]),i._30(16384,null,0,c.i,[c.h],null,null),(n()(),i._28(null,["\n  "])),(n()(),i._28(null,["\n  "])),(n()(),i._27(0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.goBack()&&u}return u},null,null)),(n()(),i._28(null,["Back"])),(n()(),i._28(null,["\n"]))],function(n,l){n(l,18,0,l.component.user.username)},function(n,l){var t=l.component;n(l,3,0,t.user.username),n(l,8,0,t.user.id),n(l,15,0,i._29(l,20).ngClassUntouched,i._29(l,20).ngClassTouched,i._29(l,20).ngClassPristine,i._29(l,20).ngClassDirty,i._29(l,20).ngClassValid,i._29(l,20).ngClassInvalid,i._29(l,20).ngClassPending)})}function e(n){return i._26(0,[(n()(),i._33(16777216,null,null,1,null,u)),i._30(16384,null,0,a.n,[i._6,i._7],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,1,0,l.component.user)},null)}function o(n){return i._26(0,[(n()(),i._27(0,null,null,1,"app-user-detail",[],null,null,null,e,g)),i._30(114688,null,0,d.a,[s.a,_.a,a.g],null,null)],function(n,l){n(l,1,0)},null)}var r=t("n//0"),i=t("/oeL"),c=t("bm2B"),a=t("qbdv"),d=t("3Mow"),s=t("mGjr"),_=t("BkNc");t.d(l,"a",function(){return p});var f=[r.a],g=i._25({encapsulation:0,styles:f,data:{}}),p=i._31("app-user-detail",d.a,o,{user:"user"},{},[])},vnfH:function(n,l,t){"use strict";var u=t("0aAO"),e=t("g5HS"),o=t("3Mow");t.d(l,"a",function(){return r});var r=(e.a,u.a,o.a,function(){function n(){}return n}())},wQAS:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){function n(){this.title="Users"}return n}()}},[0]);