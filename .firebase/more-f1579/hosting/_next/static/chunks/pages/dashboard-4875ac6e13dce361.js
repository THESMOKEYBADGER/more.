(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{1075:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return n(7741)}])},9895:function(e,t,n){"use strict";n.d(t,{_:function(){return v}});var i=n(5893),a=n(7294),o=n(3078),s=n(356),r=n(9786),l=n(7113),c=n(5675),d=n.n(c),h=n(1664),u=n.n(h),p=n(1163),m=n(758),_=n.n(m);let f=[{link:"/dashboard",label:"Home"},{link:"/about",label:"About"},{link:"/leaderboard",label:"Leaderboard"},{link:"/contact",label:"Contact"}];function v(e){let{onMenuToggle:t}=e,[n,{toggle:c,close:h}]=(0,l.q)(!1),m=(0,p.useRouter)(),[v,b]=(0,a.useState)(m.pathname),x=f.map(e=>(0,i.jsx)(u(),{href:e.link,className:_().link,"data-active":v===e.link||void 0,onClick:()=>b(e.link),children:e.label},e.label)),g=f.map(e=>(0,i.jsx)(u(),{href:e.link,className:_().link,"data-active":v===e.link||void 0,onClick:()=>{b(e.link),h()},children:e.label},e.label));return(0,i.jsxs)("header",{className:_().header,children:[(0,i.jsx)(d(),{src:"/images/more-logo.png",alt:"Company Logo",width:130,height:130,className:_().logo}),(0,i.jsx)(o.W,{size:"md",className:_().inner,children:(0,i.jsx)(s.Z,{gap:5,className:_().desktopLinks,children:x})}),(0,i.jsx)("div",{className:_()["burger-container"],children:(0,i.jsx)(r.O,{opened:n,onClick:()=>{c(),t(!n)},size:"sm"})}),(0,i.jsx)("div",{className:"".concat(_().mobileLinks," ").concat(n?_().visible:""),children:g})]})}},3194:function(e,t,n){"use strict";n.d(t,{x:function(){return m}});var i=n(5893),a=n(967),o=n(356),s=n(1992),r=n(8565),l=n(3502),c=n(4158),d=n(5713),h=n(98),u=n.n(h);let p=[{link:"/dashboard",label:"Home"},{link:"/about",label:"About"},{link:"/contact",label:"Contact"}];function m(){let e=p.map(e=>(0,i.jsx)(a.e,{c:"dimmed",href:e.link,lh:1,onClick:e=>e.preventDefault(),size:"sm",children:e.label},e.label));return(0,i.jsx)("footer",{className:u().footer,children:(0,i.jsxs)("div",{className:u().inner,children:[(0,i.jsx)(o.Z,{className:u().links,children:e}),(0,i.jsxs)(o.Z,{className:u().iconContainer,gap:"xs",justify:"flex-end",wrap:"nowrap",children:[(0,i.jsx)(s.A,{size:"lg",variant:"default",radius:"xl",children:(0,i.jsx)(l.Z,{style:{width:(0,r.h)(18),height:(0,r.h)(18)},stroke:1.5})}),(0,i.jsx)(s.A,{size:"lg",variant:"default",radius:"xl",children:(0,i.jsx)(c.Z,{style:{width:(0,r.h)(18),height:(0,r.h)(18)},stroke:1.5})}),(0,i.jsx)(s.A,{size:"lg",variant:"default",radius:"xl",children:(0,i.jsx)(d.Z,{style:{width:(0,r.h)(18),height:(0,r.h)(18)},stroke:1.5})})]})]})})}},3444:function(e,t,n){"use strict";n.d(t,{I:function(){return r},db:function(){return l}});var i=n(3977);n(3059);var a=n(1259),o=n(9828);let s=(0,i.ZF)({apiKey:"AIzaSyAS2RAJanlflg5Xudy8VCFiUMAz1tpEKFw",authDomain:"more-f1579.firebaseapp.com",projectId:"more-f1579",storageBucket:"more-f1579.appspot.com",messagingSenderId:"675524787031",appId:"1:675524787031:web:e122a81b58e5154dd15c12",measurementId:"G-TJSHHBM91X"}),r=(0,a.v0)(s),l=(0,o.ad)(s)},7741:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var i=n(5893),a=n(7294),o=n(7054),s=n(1163),r=n(3444),l=n(9828),c=n(1259),d=n(6250),h=n.n(d),u=n(8146),p=n.n(u);let m={1:"EarthChild project",2:"Green Pop",3:"Animal Ocean"},_={1:"#5b3283",2:"#5b3283",3:"#5b3283"};var f=function(e){let{userId:t,currentInitiative:n,onUpdateInitiative:o,isVisible:s}=e,[c,d]=(0,a.useState)(n),[h,u]=(0,a.useState)(!1),f=async e=>{d(e);try{await (0,l.r7)((0,l.JU)(r.db,"users",t),{initiative:e}),o(e),u(!0),setTimeout(()=>u(!1),3e3)}catch(e){console.error("Error updating initiative: ",e)}};return(0,i.jsxs)("div",{className:"".concat(p().sidebar," ").concat(s?p().sidebarVisible:""),children:[Object.entries(m).map(e=>{let[t,n]=e;return(0,i.jsx)("button",{className:p().initiativeButton,style:{backgroundColor:c===Number(t)?_[t]:"#b4d6cd"},onClick:()=>f(Number(t)),children:n},t)}),h&&(0,i.jsxs)("div",{className:p().confirmationPopup,children:["You now support ",m[c],"."]})]})},v=n(3114),b=n(375),x=n(3379),g=n.n(x),k=()=>(0,i.jsx)(b.E.div,{className:g().checkmarkContainer,initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1,rotate:360},exit:{scale:.5,opacity:0},transition:{duration:.7,ease:"easeInOut"},children:(0,i.jsx)(b.E.div,{className:g().checkmark,children:(0,i.jsx)(b.E.div,{className:g().check})})}),j=n(142),C=n.n(j),w=function(e){let{onClose:t,onConfirm:n,shopName:o}=e,[s,r]=(0,a.useState)(!1);return(0,i.jsx)("div",{className:C().overlay,children:(0,i.jsx)("div",{className:C().popup,children:(0,i.jsx)(v.M,{children:s?(0,i.jsx)(k,{}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("h2",{children:["Hello ",o," Patron!"]}),(0,i.jsx)("p",{children:"Please click the button below to log your donation."}),(0,i.jsx)("button",{className:C().closeButton,onClick:()=>{r(!0),n(),setTimeout(()=>{r(!1),t()},2500)},children:"Confirm Donation"})]})})})})},y=n(3194),N=n(9895),E=n(4856);n(9033);let S={lat:-33.93627391449209,lng:18.418980177812504},I={zoom:14,disableDefaultUI:!0,zoomControl:!1,mapTypeControl:!1,scaleControl:!0,streetViewControl:!1,fullscreenControl:!1};var z=function(){let[e,t]=(0,a.useState)([]),[n,d]=(0,a.useState)(!1),[u,p]=(0,a.useState)(null),[m,_]=(0,a.useState)(null),[v,b]=(0,a.useState)(null),[x,g]=(0,a.useState)(null),[k,j]=(0,a.useState)(Date.now()),[C,z]=(0,a.useState)(!0),[L,T]=(0,a.useState)(null),D=(0,s.useRouter)(),[A,B]=(0,a.useState)(!1),{query:J}=D,M=J.shop||"",P=(0,a.useCallback)(()=>window.google?class extends window.google.maps.OverlayView{draw(){this.div||(this.div=document.createElement("div"),this.div.style.position="absolute",this.div.style.cursor="pointer",this.div.style.width="25px",this.div.style.height="25px",this.div.style.backgroundImage="url(".concat(this.icon,")"),this.div.style.backgroundSize="cover",this.div.style.transition="transform 0.3s ease",this.div.addEventListener("mouseover",()=>{this.div.style.transform="scale(1.25)",this.div.style.zIndex="1000"}),this.div.addEventListener("mouseout",()=>{this.div.style.transform="scale(1)",this.div.style.zIndex=""}),this.div.addEventListener("click",this.onClick),this.getPanes().overlayMouseTarget.appendChild(this.div));let e=this.getProjection().fromLatLngToDivPixel(this.position);e&&(this.div.style.left="".concat(e.x-12.5,"px"),this.div.style.top="".concat(e.y-12.5,"px"))}onRemove(){this.div&&(this.div.parentNode.removeChild(this.div),this.div=null)}constructor(e,t,n,i){super(),this.position=e,this.icon=n,this.onClick=i,this.setMap(t)}}:null,[]);(0,a.useEffect)(()=>{(async()=>{try{let e=(await (0,l.PL)((0,l.hJ)(r.db,"companies"))).docs.map(e=>{let t=e.data(),[n,i]=t.location.split(", ").map(Number);return{id:e.id,name:t.name,location:{lat:n,lng:i}}});if(t(e),M&&""!==M.trim()){let t=e.some(e=>e.name.toLowerCase()===M.toLowerCase());d(t)}else d(!1)}catch(e){console.error("Error fetching companies: ",e)}})(),M||D.push("/dashboard")},[M]),(0,a.useEffect)(()=>{let e=()=>{z(!1),setTimeout(()=>z(!0),3)};return D.events.on("routeChangeComplete",e),()=>{D.events.off("routeChangeComplete",e)}},[D]),(0,a.useEffect)(()=>{let e=(0,c.Aj)(r.I,async e=>{if(e){p(e.uid);try{let t=(await (0,l.QT)((0,l.JU)(r.db,"users",e.uid))).data();_(t.initiative),T(t.username)}catch(e){console.error("Error fetching user initiative: ",e)}}});return()=>e()},[]),(0,a.useEffect)(()=>{v&&e.length>0&&x&&e.forEach(e=>{new x(e.location,v,"/images/coffee-icon.png",()=>R(e))})},[v,e,x]);let Z=async()=>{if(u&&m)try{await (0,l.pl)((0,l.JU)(r.db,"donations","".concat(Date.now())),{timestamp:new Date,initiative:m,shop:M}),console.log("Donation confirmed and added to database"),d(!1)}catch(e){console.error("Error recording donation: ",e)}},R=e=>{let t="https://www.google.com/maps/search/?api=1&query=".concat(encodeURIComponent(e.name));window.open(t,"_blank")},H=(0,a.useCallback)(e=>{b(e);let t=P();g(()=>t)},[P]);return(0,i.jsxs)("div",{className:h().pageWrapperDash,children:[(0,i.jsx)(N._,{onMenuToggle:B}),(0,i.jsx)(E.M,{children:(0,i.jsxs)("div",{className:"".concat(h().container," ").concat(A?h().pushDown:""),children:[(0,i.jsxs)("div",{className:h().mapContainer,children:[C&&(0,i.jsx)(o.LM,{googleMapsApiKey:"AIzaSyCJ8NYRJFLpJx_njieRHf5YVlmWfIZg_to",children:(0,i.jsx)(o.b6,{mapContainerClassName:h().mapContainer,center:S,zoom:12,options:I,onLoad:H})}),n&&(0,i.jsx)(w,{onClose:()=>{d(!1)},onConfirm:Z,shopName:M})]}),u&&m&&(0,i.jsx)("div",{className:h().switcherContainer,children:(0,i.jsx)(f,{userId:u,currentInitiative:m,onUpdateInitiative:e=>_(e)})})]})}),(0,i.jsx)(y.x,{})]})}},3379:function(e){e.exports={checkmarkContainer:"confirmation-animation_checkmarkContainer__jiO0i",checkmark:"confirmation-animation_checkmark__2UlyE",check:"confirmation-animation_check__lNZNa"}},6250:function(e){e.exports={pageWrapperDash:"dashboard_pageWrapperDash__G7tzZ",container:"dashboard_container__UvVTH",mapContainer:"dashboard_mapContainer__XyRrx",switcherContainer:"dashboard_switcherContainer__VtQpm",header:"dashboard_header__6byBt",logo:"dashboard_logo__azaZ1",mapTitle:"dashboard_mapTitle__r179o",pushDown:"dashboard_pushDown__JTFpx",bouncingBall:"dashboard_bouncingBall__ZdOXM",bounce:"dashboard_bounce___h_69"}},142:function(e){e.exports={overlay:"donation-popup_overlay__YaAwy",popup:"donation-popup_popup__awzlV",closeButton:"donation-popup_closeButton__M3Bg5"}},98:function(e){e.exports={footer:"footer-centered_footer__8BSYq",inner:"footer-centered_inner__Je_H9",links:"footer-centered_links__xIxfI",iconContainer:"footer-centered_iconContainer__r0FHE"}},758:function(e){e.exports={header:"header_header__OaHfl",logo:"header_logo__i6gRV",inner:"header_inner__TgSmE",link:"header_link__283Rk","burger-container":"header_burger-container__gGb5z",mobileLinks:"header_mobileLinks__JR0c0",visible:"header_visible__LhCMI"}},8146:function(e){e.exports={header:"initiative-switcher_header__8SXF3",initiativeButton:"initiative-switcher_initiativeButton__rjje2",confirmationPopup:"initiative-switcher_confirmationPopup__SldlW"}}},function(e){e.O(0,[428,16,255,580,649,438,675,362,844,7,888,774,179],function(){return e(e.s=1075)}),_N_E=e.O()}]);