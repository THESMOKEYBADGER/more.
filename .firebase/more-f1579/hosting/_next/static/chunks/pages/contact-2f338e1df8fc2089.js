(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{8105:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return a(1949)}])},9895:function(e,n,a){"use strict";a.d(n,{_:function(){return f}});var t=a(5893),l=a(7294),i=a(3078),s=a(356),r=a(9786),o=a(7113),c=a(5675),d=a.n(c),u=a(1664),m=a.n(u),h=a(1163),_=a(758),p=a.n(_);let b=[{link:"/dashboard",label:"Home"},{link:"/about",label:"About"},{link:"/leaderboard",label:"Leaderboard"},{link:"/contact",label:"Contact"}];function f(){let[e,{toggle:n,close:a}]=(0,o.q)(!1),c=(0,h.useRouter)(),[u,_]=(0,l.useState)(c.pathname),f=b.map(e=>(0,t.jsx)(m(),{href:e.link,className:p().link,"data-active":u===e.link||void 0,onClick:()=>_(e.link),children:e.label},e.label)),x=b.map(e=>(0,t.jsx)(m(),{href:e.link,className:p().link,"data-active":u===e.link||void 0,onClick:()=>{_(e.link),a()},children:e.label},e.label));return(0,t.jsxs)("header",{className:p().header,children:[(0,t.jsx)(d(),{src:"/images/more-logo.png",alt:"Company Logo",width:130,height:130,className:p().logo}),(0,t.jsx)(i.W,{size:"md",className:p().inner,children:(0,t.jsx)(s.Z,{gap:5,className:p().desktopLinks,children:f})}),(0,t.jsx)("div",{className:p()["burger-container"],children:(0,t.jsx)(r.O,{opened:e,onClick:n,size:"sm"})}),e&&(0,t.jsx)("div",{className:p().mobileLinks,children:x})]})}},3194:function(e,n,a){"use strict";a.d(n,{x:function(){return _}});var t=a(5893),l=a(967),i=a(356),s=a(1992),r=a(8565),o=a(3502),c=a(4158),d=a(5713),u=a(98),m=a.n(u);let h=[{link:"/dashboard",label:"Home"},{link:"/about",label:"About"},{link:"/contact",label:"Contact"}];function _(){let e=h.map(e=>(0,t.jsx)(l.e,{c:"dimmed",href:e.link,lh:1,onClick:e=>e.preventDefault(),size:"sm",children:e.label},e.label));return(0,t.jsx)("footer",{className:m().footer,children:(0,t.jsxs)("div",{className:m().inner,children:[(0,t.jsx)(i.Z,{className:m().links,children:e}),(0,t.jsxs)(i.Z,{className:m().iconContainer,gap:"xs",justify:"flex-end",wrap:"nowrap",children:[(0,t.jsx)(s.A,{size:"lg",variant:"default",radius:"xl",children:(0,t.jsx)(o.Z,{style:{width:(0,r.h)(18),height:(0,r.h)(18)},stroke:1.5})}),(0,t.jsx)(s.A,{size:"lg",variant:"default",radius:"xl",children:(0,t.jsx)(c.Z,{style:{width:(0,r.h)(18),height:(0,r.h)(18)},stroke:1.5})}),(0,t.jsx)(s.A,{size:"lg",variant:"default",radius:"xl",children:(0,t.jsx)(d.Z,{style:{width:(0,r.h)(18),height:(0,r.h)(18)},stroke:1.5})})]})]})})}},1949:function(e,n,a){"use strict";a.r(n);var t=a(5893),l=a(4856),i=a(8008),s=a(7502),r=a(6414),o=a(3334),c=a(356),d=a(4920),u=a(1441);a(9033);var m=a(3194),h=a(9895),_=a(8526),p=a.n(_);n.default=function(){let e=(0,u.c)({initialValues:{name:"",email:"",subject:"",message:""},validate:{name:e=>e.trim().length<2,email:e=>!/^\S+@\S+$/.test(e),subject:e=>0===e.trim().length}});return(0,t.jsx)(l.M,{children:(0,t.jsxs)("div",{className:p().pageWrapper,children:[(0,t.jsx)(h._,{}),(0,t.jsx)("main",{className:p().content,children:(0,t.jsxs)("form",{onSubmit:e.onSubmit(()=>{}),children:[(0,t.jsx)(i.D,{className:p().title,order:2,size:"h1",style:{fontFamily:"Greycliff CF, var(--mantine-font-family)"},fw:900,ta:"center",children:"Get in touch"}),(0,t.jsxs)(s.M,{cols:{base:1,sm:2},mt:"xl",children:[(0,t.jsx)(r.o,{label:"Name",placeholder:"Your name",name:"name",variant:"filled",classNames:{input:p().input},...e.getInputProps("name")}),(0,t.jsx)(r.o,{label:"Email",placeholder:"Your email",name:"email",variant:"filled",classNames:{input:p().input},...e.getInputProps("email")})]}),(0,t.jsx)(r.o,{label:"Subject",placeholder:"Subject",mt:"md",name:"subject",variant:"filled",classNames:{input:p().input},...e.getInputProps("subject")}),(0,t.jsx)(o.g,{mt:"md",label:"Message",placeholder:"Your message",maxRows:10,minRows:5,autosize:!0,name:"message",variant:"filled",classNames:{input:p().input},...e.getInputProps("message")}),(0,t.jsx)(c.Z,{justify:"center",mt:"xl",children:(0,t.jsx)(d.z,{className:p().button,type:"submit",size:"md",children:"Send message"})})]})}),(0,t.jsx)(m.x,{})," "]})})}},8526:function(e){e.exports={pageWrapper:"contact_pageWrapper__HM_yD",content:"contact_content__DbGBI",button:"contact_button__yRS1B",title:"contact_title__3ckDM",input:"contact_input__mykbS"}},98:function(e){e.exports={footer:"footer-centered_footer__8BSYq",inner:"footer-centered_inner__Je_H9",links:"footer-centered_links__xIxfI",iconContainer:"footer-centered_iconContainer__r0FHE"}},758:function(e){e.exports={header:"header_header__OaHfl",logo:"header_logo__i6gRV",inner:"header_inner__TgSmE",link:"header_link__283Rk","burger-container":"header_burger-container__gGb5z",mobileLinks:"header_mobileLinks__JR0c0"}}},function(e){e.O(0,[649,675,362,844,265,888,774,179],function(){return e(e.s=8105)}),_N_E=e.O()}]);