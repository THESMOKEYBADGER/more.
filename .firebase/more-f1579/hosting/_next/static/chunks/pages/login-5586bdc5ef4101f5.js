(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6429:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(2946)}])},2466:function(e,n,t){"use strict";var a=t(7294);n.Z=function(){(0,a.useEffect)(()=>{let e=document.getElementById("bouncingBall"),n=0,t=0,a=2,o=2,r=window.innerWidth,i=window.innerHeight;return!function s(){e&&(n+=a,t+=o,(n+50>r||n<0)&&(a=-a),(t+50>i||t<0)&&(o=-o),e.style.transform="translate(".concat(n,"px, ").concat(t,"px)"),requestAnimationFrame(s))}(),()=>{}},[])}},3444:function(e,n,t){"use strict";t.d(n,{I:function(){return s},db:function(){return u}});var a=t(3977);t(3059);var o=t(1259),r=t(9828);let i=(0,a.ZF)({apiKey:"AIzaSyAS2RAJanlflg5Xudy8VCFiUMAz1tpEKFw",authDomain:"more-f1579.firebaseapp.com",projectId:"more-f1579",storageBucket:"more-f1579.appspot.com",messagingSenderId:"675524787031",appId:"1:675524787031:web:e122a81b58e5154dd15c12",measurementId:"G-TJSHHBM91X"}),s=(0,o.v0)(i),u=(0,r.ad)(i)},2946:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var a=t(5893),o=t(7294),r=t(1163),i=t(1259),s=t(3444),u=t(9828),l=t(9180),c=t.n(l),d=t(2466);function p(){let e=(0,r.useRouter)(),{shop:n}=e.query,[t,l]=(0,o.useState)(""),[p,f]=(0,o.useState)(""),[m,g]=(0,o.useState)(""),[_,h]=(0,o.useState)(!1),[w,b]=(0,o.useState)(0);(0,d.Z)(),(0,o.useEffect)(()=>{let n=e=>{"/login"===e&&(b(e=>e+1),h(!1))};return e.events.on("routeChangeComplete",n),()=>{e.events.off("routeChangeComplete",n)}},[e.events]);let v=async n=>{n.preventDefault(),h(!0);try{let n=(await (0,i.e5)(s.I,t,p)).user,a=(await (0,u.QT)((0,u.JU)(s.db,"users",n.uid))).data();if("admin"===a.role)await e.push("/admin-dashboard");else{let{query:n}=e,t=n.shop||"";await e.push("/dashboard".concat(t?"?shop=".concat(t):""))}}catch(e){g("Incorrect username or password. Please try again."),h(!1)}};return((0,o.useEffect)(()=>{window.setGlobalLoading&&window.setGlobalLoading(_)},[_]),_)?null:(0,a.jsxs)("div",{className:c().containerLogin,children:[(0,a.jsx)("div",{id:"bouncingBall",className:c().bouncingBall}),(0,a.jsxs)("form",{className:c().formLogin,onSubmit:v,children:[(0,a.jsx)("h1",{className:c().title,children:"Login"}),(0,a.jsx)("input",{type:"email",value:t,onChange:e=>l(e.target.value),placeholder:"Email",className:c().input,required:!0}),(0,a.jsx)("input",{type:"password",value:p,onChange:e=>f(e.target.value),placeholder:"Password",className:c().input,required:!0}),(0,a.jsx)("button",{type:"submit",className:c().button,children:"Do more."}),m&&(0,a.jsx)("p",{className:c().error,children:m})]})]},w)}},9180:function(e){e.exports={containerLogin:"login_containerLogin__RYcZx",formLogin:"login_formLogin__zEQLM",input:"login_input__KSWam",button:"login_button__8nR0v",error:"login_error___OnvZ",bouncingBall:"login_bouncingBall__lvr4D"}}},function(e){e.O(0,[428,16,580,438,888,774,179],function(){return e(e.s=6429)}),_N_E=e.O()}]);