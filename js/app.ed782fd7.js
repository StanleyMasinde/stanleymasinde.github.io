(function(t){function a(a){for(var i,l,r=a[0],n=a[1],d=a[2],c=0,m=[];c<r.length;c++)l=r[c],Object.prototype.hasOwnProperty.call(e,l)&&e[l]&&m.push(e[l][0]),e[l]=0;for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);u&&u(a);while(m.length)m.shift()();return o.push.apply(o,d||[]),s()}function s(){for(var t,a=0;a<o.length;a++){for(var s=o[a],i=!0,l=1;l<s.length;l++){var n=s[l];0!==e[n]&&(i=!1)}i&&(o.splice(a--,1),t=r(r.s=s[0]))}return t}var i={},e={app:0},o=[];function l(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a0ea5d3a"}[t]+".js"}function r(a){if(i[a])return i[a].exports;var s=i[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.e=function(t){var a=[],s=e[t];if(0!==s)if(s)a.push(s[2]);else{var i=new Promise((function(a,i){s=e[t]=[a,i]}));a.push(s[2]=i);var o,n=document.createElement("script");n.charset="utf-8",n.timeout=120,r.nc&&n.setAttribute("nonce",r.nc),n.src=l(t);var d=new Error;o=function(a){n.onerror=n.onload=null,clearTimeout(c);var s=e[t];if(0!==s){if(s){var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",d.name="ChunkLoadError",d.type=i,d.request=o,s[1](d)}e[t]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:n})}),12e4);n.onerror=n.onload=o,document.head.appendChild(n)}return Promise.all(a)},r.m=t,r.c=i,r.d=function(t,a,s){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)r.d(s,i,function(a){return t[a]}.bind(null,i));return s},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/",r.oe=function(t){throw console.error(t),t};var n=window["webpackJsonp"]=window["webpackJsonp"]||[],d=n.push.bind(n);n.push=a,n=n.slice();for(var c=0;c<n.length;c++)a(n[c]);var u=d;o.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("0cdd");var i=s("2b0e"),e=s("ecee"),o=s("c074"),l=s("f2d1"),r=s("ad3d");e["c"].add(o["a"]),e["c"].add(l["a"]),i["default"].component("font-awesome-icon",r["a"]);var n=s("5f5b");s("b4e5"),s("2dd8");i["default"].use(n["a"]);var d=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("navigation"),s("router-view"),s("mainfooter")],1)},c=[],u=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-expand-lg bg-secondary text-uppercase fixed-top",attrs:{id:"mainNav"}},[s("div",{staticClass:"container"},[s("a",{staticClass:"navbar-brand js-scroll-trigger",attrs:{href:"#page-top"}},[t._v("Stanley Masinde")]),s("button",{staticClass:"navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[t._v(" Menu "),s("i",{staticClass:"fas fa-bars"})]),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[s("ul",{staticClass:"navbar-nav ml-auto"},[s("li",{staticClass:"nav-item mx-0 mx-lg-1"},[s("a",{staticClass:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",attrs:{href:"#portfolio"}},[t._v("Portfolio")])]),s("li",{staticClass:"nav-item mx-0 mx-lg-1"},[s("a",{staticClass:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",attrs:{href:"#about"}},[t._v("About")])]),s("li",{staticClass:"nav-item mx-0 mx-lg-1"},[s("a",{staticClass:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",attrs:{href:"#contact"}},[t._v("Contact")])])])])])])}],v={name:"navigation"},f=v,p=s("2877"),b=Object(p["a"])(f,u,m,!1,null,null,null),C=b.exports,g=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("footer",{staticClass:"footer text-center"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[t._m(0),s("div",{staticClass:"col-lg-4 mb-5 mb-lg-0"},[s("h4",{staticClass:"text-uppercase mb-4"},[t._v("Around the Web")]),s("a",{staticClass:"btn btn-outline-light btn-social mx-1",attrs:{title:"stanley.masinde.ke",href:"//facebook.com/stanley.masinde.ke",target:"_blank"}},[s("font-awesome-icon",{attrs:{icon:["fab","facebook-f"]}})],1),s("a",{staticClass:"btn btn-outline-light btn-social mx-1",attrs:{title:"@StanleyMasinde_",href:"https://twitter.com/StanleyMasinde_",target:"_blank"}},[s("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),s("a",{staticClass:"btn btn-outline-light btn-social mx-1",attrs:{title:"stanley-masinde",href:"//www.linkedin.com/in/stanley-masinde/",target:"_blank"}},[s("font-awesome-icon",{attrs:{icon:["fab","linkedin-in"]}})],1),s("a",{staticClass:"btn btn-outline-light btn-social mx-1",attrs:{title:"stannlee",href:"//github.com/stannlee",target:"_blank"}},[s("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)]),t._m(1)])])]),s("section",{staticClass:"copyright py-4 text-center text-white"},[s("div",{staticClass:"container"},[s("small",[t._v("Copyright © Stanley Masinde "+t._s((new Date).getFullYear()))])])])])},h=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-lg-4 mb-5 mb-lg-0"},[s("h4",{staticClass:"text-uppercase mb-4"},[t._v("Location")]),s("p",{staticClass:"lead mb-0"},[t._v(" Nairobi, Kenya ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-lg-4"},[s("h4",{staticClass:"text-uppercase mb-4"},[t._v("About Stanley Masinde")]),s("p",{staticClass:"lead mb-0"},[t._v(" I am a kenya based fullstack developer. See my work. "),s("a",{attrs:{target:"_blank",href:"http://github.com/stannlee"}},[t._v("Github")]),t._v(". ")])])}],y={},x=y,_=Object(p["a"])(x,g,h,!1,null,null,null),w=_.exports,q={components:{mainfooter:w,navigation:C}},M=q,k=Object(p["a"])(M,d,c,!1,null,null,null),j=k.exports,L=(s("d3b7"),s("8c4f")),S=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("header",{staticClass:"masthead bg-primary text-white text-center"},[s("div",{staticClass:"container d-flex align-items-center flex-column"},[s("img",{staticClass:"masthead-avatar mb-5",attrs:{src:"/me.png",alt:""}}),s("h2",{staticClass:"masthead-heading text-uppercase mb-0"},[t._v("Stanley Masinde")]),s("div",{staticClass:"divider-custom divider-light"},[s("div",{staticClass:"divider-custom-line"}),s("div",{staticClass:"divider-custom-icon"},[s("i",{staticClass:"fas fa-star"})]),s("div",{staticClass:"divider-custom-line"})]),s("p",{staticClass:"masthead-subheading font-weight-light mb-0"},[t._v(" Fullstack Developer - Penetration tester - Speaker ")])])]),s("div",{staticClass:"scroll-to-top d-lg-none position-fixed"},[s("a",{staticClass:"js-scroll-trigger d-block text-center text-white rounded",attrs:{href:"#page-top"}},[s("i",{staticClass:"fa fa-chevron-up"})])]),s("div",{staticClass:"portfolio-modal modal fade",attrs:{id:"portfolioModal1",tabindex:"-1",role:"dialog","aria-labelledby":"portfolioModal1Label","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[s("i",{staticClass:"fas fa-times"})])]),s("div",{staticClass:"modal-body text-center"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-8"},[s("h2",{staticClass:"portfolio-modal-title text-secondary text-uppercase mb-0"},[t._v(" Log Cabin ")]),s("div",{staticClass:"divider-custom"},[s("div",{staticClass:"divider-custom-line"}),s("div",{staticClass:"divider-custom-icon"},[s("i",{staticClass:"fas fa-star"})]),s("div",{staticClass:"divider-custom-line"})]),s("img",{staticClass:"img-fluid rounded mb-5",attrs:{src:"img/portfolio/cabin.png",alt:""}}),s("p",{staticClass:"mb-5"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam. ")]),s("button",{staticClass:"btn btn-primary",attrs:{href:"#","data-dismiss":"modal"}},[s("i",{staticClass:"fas fa-times fa-fw"}),t._v(" Close Window ")])])])])])])])]),s("div",{staticClass:"portfolio-modal modal fade",attrs:{id:"portfolioModal2",tabindex:"-1",role:"dialog","aria-labelledby":"portfolioModal2Label","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[s("i",{staticClass:"fas fa-times"})])]),s("div",{staticClass:"modal-body text-center"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-8"},[s("h2",{staticClass:"portfolio-modal-title text-secondary text-uppercase mb-0"},[t._v(" Tasty Cake ")]),s("div",{staticClass:"divider-custom"},[s("div",{staticClass:"divider-custom-line"}),s("div",{staticClass:"divider-custom-icon"},[s("i",{staticClass:"fas fa-star"})]),s("div",{staticClass:"divider-custom-line"})]),s("img",{staticClass:"img-fluid rounded mb-5",attrs:{src:"img/portfolio/cake.png",alt:""}}),s("p",{staticClass:"mb-5"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam. ")]),s("button",{staticClass:"btn btn-primary",attrs:{href:"#","data-dismiss":"modal"}},[s("i",{staticClass:"fas fa-times fa-fw"}),t._v(" Close Window ")])])])])])])])]),s("div",{staticClass:"portfolio-modal modal fade",attrs:{id:"portfolioModal3",tabindex:"-1",role:"dialog","aria-labelledby":"portfolioModal3Label","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[s("i",{staticClass:"fas fa-times"})])]),s("div",{staticClass:"modal-body text-center"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-8"},[s("h2",{staticClass:"portfolio-modal-title text-secondary text-uppercase mb-0"},[t._v(" Circus Tent ")]),s("div",{staticClass:"divider-custom"},[s("div",{staticClass:"divider-custom-line"}),s("div",{staticClass:"divider-custom-icon"},[s("i",{staticClass:"fas fa-star"})]),s("div",{staticClass:"divider-custom-line"})]),s("img",{staticClass:"img-fluid rounded mb-5",attrs:{src:"img/portfolio/circus.png",alt:""}}),s("p",{staticClass:"mb-5"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam. ")]),s("button",{staticClass:"btn btn-primary",attrs:{href:"#","data-dismiss":"modal"}},[s("i",{staticClass:"fas fa-times fa-fw"}),t._v(" Close Window ")])])])])])])])]),s("div",{staticClass:"portfolio-modal modal fade",attrs:{id:"portfolioModal4",tabindex:"-1",role:"dialog","aria-labelledby":"portfolioModal4Label","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[s("i",{staticClass:"fas fa-times"})])]),s("div",{staticClass:"modal-body text-center"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-8"},[s("h2",{staticClass:"portfolio-modal-title text-secondary text-uppercase mb-0"},[t._v(" Controller ")]),s("div",{staticClass:"divider-custom"},[s("div",{staticClass:"divider-custom-line"}),s("div",{staticClass:"divider-custom-icon"},[s("i",{staticClass:"fas fa-star"})]),s("div",{staticClass:"divider-custom-line"})]),s("img",{staticClass:"img-fluid rounded mb-5",attrs:{src:"img/portfolio/game.png",alt:""}}),s("p",{staticClass:"mb-5"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam. ")]),s("button",{staticClass:"btn btn-primary",attrs:{href:"#","data-dismiss":"modal"}},[s("i",{staticClass:"fas fa-times fa-fw"}),t._v(" Close Window ")])])])])])])])]),s("div",{staticClass:"portfolio-modal modal fade",attrs:{id:"portfolioModal5",tabindex:"-1",role:"dialog","aria-labelledby":"portfolioModal5Label","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[s("i",{staticClass:"fas fa-times"})])]),s("div",{staticClass:"modal-body text-center"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-8"},[s("h2",{staticClass:"portfolio-modal-title text-secondary text-uppercase mb-0"},[t._v(" Locked Safe ")]),s("div",{staticClass:"divider-custom"},[s("div",{staticClass:"divider-custom-line"}),s("div",{staticClass:"divider-custom-icon"},[s("i",{staticClass:"fas fa-star"})]),s("div",{staticClass:"divider-custom-line"})]),s("img",{staticClass:"img-fluid rounded mb-5",attrs:{src:"img/portfolio/safe.png",alt:""}}),s("p",{staticClass:"mb-5"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam. ")]),s("button",{staticClass:"btn btn-primary",attrs:{href:"#","data-dismiss":"modal"}},[s("i",{staticClass:"fas fa-times fa-fw"}),t._v(" Close Window ")])])])])])])])]),s("div",{staticClass:"portfolio-modal modal fade",attrs:{id:"portfolioModal6",tabindex:"-1",role:"dialog","aria-labelledby":"portfolioModal6Label","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[s("i",{staticClass:"fas fa-times"})])]),s("div",{staticClass:"modal-body text-center"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-8"},[s("h2",{staticClass:"portfolio-modal-title text-secondary text-uppercase mb-0"},[t._v(" Submarine ")]),s("div",{staticClass:"divider-custom"},[s("div",{staticClass:"divider-custom-line"}),s("div",{staticClass:"divider-custom-icon"},[s("i",{staticClass:"fas fa-star"})]),s("div",{staticClass:"divider-custom-line"})]),s("img",{staticClass:"img-fluid rounded mb-5",attrs:{src:"img/portfolio/submarine.png",alt:""}}),s("p",{staticClass:"mb-5"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam. ")]),s("button",{staticClass:"btn btn-primary",attrs:{href:"#","data-dismiss":"modal"}},[s("i",{staticClass:"fas fa-times fa-fw"}),t._v(" Close Window ")])])])])])])])])])}],E={},P=E,R=Object(p["a"])(P,S,O,!1,null,null,null),$=R.exports;i["default"].use(L["a"]);var N=[{path:"/",name:"home",component:$},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],T=new L["a"]({mode:"history",base:"/",routes:N}),W=T,A=s("2f62");i["default"].use(A["a"]);var D=new A["a"].Store({state:{},mutations:{},actions:{},modules:{}});i["default"].config.productionTip=!1,new i["default"]({router:W,store:D,render:function(t){return t(j)}}).$mount("#app")},b4e5:function(t,a,s){}});
//# sourceMappingURL=app.ed782fd7.js.map