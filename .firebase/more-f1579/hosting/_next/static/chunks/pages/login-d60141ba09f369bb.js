(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6429:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(2946)}])},2466:function(e,n,t){"use strict";var a=t(7294);n.Z=function(){(0,a.useEffect)(()=>{let e=document.getElementById("bouncingBall"),n=0,t=0,a=2,o=2,i=window.innerWidth,r=window.innerHeight;return!function s(){e&&(n+=a,t+=o,(n+50>i||n<0)&&(a=-a),(t+50>r||t<0)&&(o=-o),e.style.transform="translate(".concat(n,"px, ").concat(t,"px)"),requestAnimationFrame(s))}(),()=>{}},[])}},3444:function(e,n,t){"use strict";t.d(n,{I:function(){return s},db:function(){return u}});var a=t(3977);t(3059);var o=t(1259),i=t(9828);let r=(0,a.ZF)({apiKey:"AIzaSyAS2RAJanlflg5Xudy8VCFiUMAz1tpEKFw",authDomain:"more-f1579.firebaseapp.com",projectId:"more-f1579",storageBucket:"more-f1579.appspot.com",messagingSenderId:"675524787031",appId:"1:675524787031:web:e122a81b58e5154dd15c12",measurementId:"G-TJSHHBM91X"}),s=(0,o.v0)(r),u=(0,i.ad)(r)},2946:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var a=t(5893),o=t(7294),i=t(1163),r=t(1259),s=t(3444),u=t(9828),c=t(512),l=t.n(c),d=t(2466);function p(){let e=(0,i.useRouter)(),{shop:n}=e.query,[t,c]=(0,o.useState)(""),[p,f]=(0,o.useState)(""),[g,m]=(0,o.useState)(""),[_,h]=(0,o.useState)(!1),[b,w]=(0,o.useState)(0);(0,d.Z)(),(0,o.useEffect)(()=>{let n=e=>{"/login"===e&&(w(e=>e+1),h(!1))};return e.events.on("routeChangeComplete",n),()=>{e.events.off("routeChangeComplete",n)}},[e.events]);let L=async n=>{n.preventDefault(),h(!0);try{let n=(await (0,r.e5)(s.I,t,p)).user,a=(await (0,u.QT)((0,u.JU)(s.db,"users",n.uid))).data();if("admin"===a.role)await e.push("/admin-dashboard");else{let{query:n}=e,t=n.shop||"";await e.push("/dashboard".concat(t?"?shop=".concat(t):""))}}catch(e){m("Incorrect username or password. Please try again."),h(!1)}};return((0,o.useEffect)(()=>{window.setGlobalLoading&&window.setGlobalLoading(_)},[_]),_)?null:(0,a.jsxs)("div",{className:l().containerLogin,children:[(0,a.jsx)("div",{id:"bouncingBall",className:l().bouncingBall}),(0,a.jsxs)("form",{className:l().formLogin,onSubmit:L,children:[(0,a.jsx)("h1",{children:"Login"}),(0,a.jsx)("input",{type:"email",value:t,onChange:e=>c(e.target.value),placeholder:"Email",className:l().input,required:!0}),(0,a.jsx)("input",{type:"password",value:p,onChange:e=>f(e.target.value),placeholder:"Password",className:l().input,required:!0}),(0,a.jsx)("button",{type:"submit",className:l().button,children:"Login"}),g&&(0,a.jsx)("p",{className:l().error,children:g})]})]},b)}},512:function(e){e.exports={containerLogin:"Login_containerLogin__NsZYI",formLogin:"Login_formLogin__Fi8_d",input:"Login_input__GbcAp",button:"Login_button__BuBqT",error:"Login_error__2xYo0",bouncingBall:"Login_bouncingBall__Qf89e"}}},function(e){e.O(0,[428,16,580,438,888,774,179],function(){return e(e.s=6429)}),_N_E=e.O()}]);