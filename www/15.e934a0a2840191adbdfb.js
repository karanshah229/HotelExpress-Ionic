(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{ZpdU:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),i=u("ZZ/e"),b=u("VFTF"),t=function(){function l(l,n){this.bookingService=l,this.loadingCtrl=n,this.isLoading=!1}return l.prototype.ngOnInit=function(){var l=this;this.bookingSub=this.bookingService.bookings.subscribe(function(n){l.loadedBookings=n})},l.prototype.ionViewWillEnter=function(){var l=this;this.isLoading=!0,this.bookingService.fetchBookings().subscribe(function(){l.isLoading=!1})},l.prototype.onCancelBooking=function(l,n){var u=this;n.close(),this.loadingCtrl.create({message:"Cancelling..."}).then(function(n){n.present(),u.bookingService.cancelBooking(l).subscribe(function(){n.dismiss()})})},l.prototype.ngOnDestroy=function(){this.bookingSub&&this.bookingSub.unsubscribe()},l}(),e=function(){return function(){}}(),c=u("pMnS"),r=u("oBZk"),s=u("Ip0R"),p=o.nb({encapsulation:0,styles:[[""]],data:{}});function a(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,4,"ion-col",[["offset-md","3"],["size-md","6"],["text-center",""]],null,null,null,r.ab,r.k)),o.ob(1,49152,null,0,i.u,[o.h,o.k,o.z],null,null),o.ob(2,16384,null,0,i.e,[o.k],null,null),(l()(),o.pb(3,0,null,0,1,"ion-spinner",[["color","primary"]],null,null,null,r.wb,r.G)),o.ob(4,49152,null,0,i.tb,[o.h,o.k,o.z],{color:[0,"color"]},null)],function(l,n){l(n,4,0,"primary")},null)}function g(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,4,"ion-col",[["offset-md","3"],["size-md","6"],["text-center",""]],null,null,null,r.ab,r.k)),o.ob(1,49152,null,0,i.u,[o.h,o.k,o.z],null,null),o.ob(2,16384,null,0,i.e,[o.k],null,null),(l()(),o.pb(3,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Fb(-1,null,["No bookings found!"]))],null,null)}function k(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,19,"ion-item-sliding",[],null,null,null,r.kb,r.v)),o.ob(1,49152,[["slidingBooking",4]],0,i.N,[o.h,o.k,o.z],null,null),(l()(),o.pb(2,0,null,0,11,"ion-item",[],null,null,null,r.lb,r.s)),o.ob(3,49152,null,0,i.I,[o.h,o.k,o.z],null,null),(l()(),o.pb(4,0,null,0,3,"ion-avatar",[["slot","start"]],null,null,null,r.R,r.b)),o.ob(5,49152,null,0,i.g,[o.h,o.k,o.z],null,null),(l()(),o.pb(6,0,null,0,1,"ion-img",[],null,null,null,r.gb,r.q)),o.ob(7,49152,null,0,i.E,[o.h,o.k,o.z],{src:[0,"src"]},null),(l()(),o.pb(8,0,null,0,5,"ion-label",[],null,null,null,r.mb,r.w)),o.ob(9,49152,null,0,i.O,[o.h,o.k,o.z],null,null),(l()(),o.pb(10,0,null,0,1,"h5",[],null,null,null,null,null)),(l()(),o.Fb(11,null,["",""])),(l()(),o.pb(12,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Fb(13,null,["Guests: ",""])),(l()(),o.pb(14,0,null,0,5,"ion-item-options",[],null,null,null,r.jb,r.u)),o.ob(15,49152,null,0,i.M,[o.h,o.k,o.z],null,null),(l()(),o.pb(16,0,null,0,3,"ion-item-option",[["color","danger"]],null,[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.onCancelBooking(l.context.$implicit.id,o.yb(l,1))&&i),i},r.ib,r.t)),o.ob(17,49152,null,0,i.L,[o.h,o.k,o.z],{color:[0,"color"]},null),(l()(),o.pb(18,0,null,0,1,"ion-icon",[["name","trash"],["slot","icon-only"]],null,null,null,r.fb,r.p)),o.ob(19,49152,null,0,i.D,[o.h,o.k,o.z],{name:[0,"name"]},null)],function(l,n){l(n,7,0,n.context.$implicit.placeImage),l(n,17,0,"danger"),l(n,19,0,"trash")},function(l,n){l(n,11,0,n.context.$implicit.placeTitle),l(n,13,0,n.context.$implicit.guestNumber)})}function f(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,5,"ion-col",[["offset-md","3"],["size-md","6"]],null,null,null,r.ab,r.k)),o.ob(1,49152,null,0,i.u,[o.h,o.k,o.z],null,null),(l()(),o.pb(2,0,null,0,3,"ion-list",[],null,null,null,r.nb,r.x)),o.ob(3,49152,null,0,i.P,[o.h,o.k,o.z],null,null),(l()(),o.gb(16777216,null,0,1,null,k)),o.ob(5,278528,null,0,s.j,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,5,0,n.component.loadedBookings)},null)}function h(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,10,"ion-header",[],null,null,null,r.eb,r.o)),o.ob(1,49152,null,0,i.C,[o.h,o.k,o.z],null,null),(l()(),o.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,r.Eb,r.O)),o.ob(3,49152,null,0,i.Db,[o.h,o.k,o.z],null,null),(l()(),o.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.U,r.e)),o.ob(5,49152,null,0,i.m,[o.h,o.k,o.z],null,null),(l()(),o.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,r.ob,r.z)),o.ob(7,49152,null,0,i.S,[o.h,o.k,o.z],null,null),(l()(),o.pb(8,0,null,0,2,"ion-title",[],null,null,null,r.Db,r.N)),o.ob(9,49152,null,0,i.Bb,[o.h,o.k,o.z],null,null),(l()(),o.Fb(-1,0,["Your Bookings"])),(l()(),o.pb(11,0,null,null,11,"ion-content",[],null,null,null,r.bb,r.l)),o.ob(12,49152,null,0,i.v,[o.h,o.k,o.z],null,null),(l()(),o.pb(13,0,null,0,9,"ion-grid",[],null,null,null,r.db,r.n)),o.ob(14,49152,null,0,i.B,[o.h,o.k,o.z],null,null),(l()(),o.pb(15,0,null,0,7,"ion-row",[],null,null,null,r.rb,r.B)),o.ob(16,49152,null,0,i.kb,[o.h,o.k,o.z],null,null),(l()(),o.gb(16777216,null,0,1,null,a)),o.ob(18,16384,null,0,s.k,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,g)),o.ob(20,16384,null,0,s.k,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,f)),o.ob(22,16384,null,0,s.k,[o.O,o.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,18,0,u.isLoading),l(n,20,0,!u.isLoading&&(!u.loadedBookings||u.loadedBookings.length<=0)),l(n,22,0,!u.isLoading&&u.loadedBookings&&u.loadedBookings.length>0)},null)}function d(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,1,"app-bookings",[],null,null,null,h,p)),o.ob(1,245760,null,0,t,[b.a,i.Hb],null,null)],function(l,n){l(n,1,0)},null)}var m=o.lb("app-bookings",t,d,{},{},[]),z=u("gIcY"),w=u("ZYCi");u.d(n,"BookingsPageModuleNgFactory",function(){return v});var v=o.mb(e,[],function(l){return o.vb([o.wb(512,o.j,o.bb,[[8,[c.a,m]],[3,o.j],o.x]),o.wb(4608,s.m,s.l,[o.u,[2,s.s]]),o.wb(4608,z.v,z.v,[]),o.wb(4608,i.c,i.c,[o.z,o.g]),o.wb(4608,i.Jb,i.Jb,[i.c,o.j,o.q]),o.wb(4608,i.Nb,i.Nb,[i.c,o.j,o.q]),o.wb(1073742336,s.b,s.b,[]),o.wb(1073742336,z.t,z.t,[]),o.wb(1073742336,z.h,z.h,[]),o.wb(1073742336,i.Fb,i.Fb,[]),o.wb(1073742336,w.o,w.o,[[2,w.u],[2,w.m]]),o.wb(1073742336,e,e,[]),o.wb(1024,w.k,function(){return[[{path:"",component:t}]]},[])])})}}]);