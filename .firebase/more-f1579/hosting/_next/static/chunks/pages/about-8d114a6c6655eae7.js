(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{1012:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(1091)}])},9895:function(e,t,n){"use strict";n.d(t,{_:function(){return f}});var i=n(5893),a=n(7294),r=n(3078),o=n(356),s=n(9786),l=n(7113),d=n(5675),c=n.n(d),h=n(1664),u=n.n(h),m=n(1163),p=n(6150),g=n.n(p);let b=[{link:"/dashboard",label:"Home"},{link:"/about",label:"About"},{link:"/leaderboard",label:"Leaderboard"},{link:"/contact",label:"Contact"}];function f(){let[e,{toggle:t,close:n}]=(0,l.q)(!1),d=(0,m.useRouter)(),[h,p]=(0,a.useState)(d.pathname),f=b.map(e=>(0,i.jsx)(u(),{href:e.link,className:g().link,"data-active":h===e.link||void 0,onClick:()=>p(e.link),children:e.label},e.label)),_=b.map(e=>(0,i.jsx)(u(),{href:e.link,className:g().link,"data-active":h===e.link||void 0,onClick:()=>{p(e.link),n()},children:e.label},e.label));return(0,i.jsxs)("header",{className:g().header,children:[(0,i.jsx)(c(),{src:"/images/more-logo.png",alt:"Company Logo",width:130,height:130,className:g().logo}),(0,i.jsx)(r.W,{size:"md",className:g().inner,children:(0,i.jsx)(o.Z,{gap:5,className:g().desktopLinks,children:f})}),(0,i.jsx)("div",{className:g()["burger-container"],children:(0,i.jsx)(s.O,{opened:e,onClick:t,size:"sm"})}),e&&(0,i.jsx)("div",{className:g().mobileLinks,children:_})]})}},3194:function(e,t,n){"use strict";n.d(t,{x:function(){return p}});var i=n(5893),a=n(967),r=n(356),o=n(1992),s=n(8565),l=n(3502),d=n(4158),c=n(5713),h=n(3006),u=n.n(h);let m=[{link:"/dashboard",label:"Home"},{link:"/about",label:"About"},{link:"/contact",label:"Contact"}];function p(){let e=m.map(e=>(0,i.jsx)(a.e,{c:"dimmed",href:e.link,lh:1,onClick:e=>e.preventDefault(),size:"sm",children:e.label},e.label));return(0,i.jsx)("footer",{className:u().footer,children:(0,i.jsxs)("div",{className:u().inner,children:[(0,i.jsx)(r.Z,{className:u().links,children:e}),(0,i.jsxs)(r.Z,{className:u().iconContainer,gap:"xs",justify:"flex-end",wrap:"nowrap",children:[(0,i.jsx)(o.A,{size:"lg",variant:"default",radius:"xl",children:(0,i.jsx)(l.Z,{style:{width:(0,s.h)(18),height:(0,s.h)(18)},stroke:1.5})}),(0,i.jsx)(o.A,{size:"lg",variant:"default",radius:"xl",children:(0,i.jsx)(d.Z,{style:{width:(0,s.h)(18),height:(0,s.h)(18)},stroke:1.5})}),(0,i.jsx)(o.A,{size:"lg",variant:"default",radius:"xl",children:(0,i.jsx)(c.Z,{style:{width:(0,s.h)(18),height:(0,s.h)(18)},stroke:1.5})})]})]})})}},1091:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q}});var i=n(5893),a=n(9008),r=n.n(a),o=n(5675),s=n.n(o),l=n(6525),d=n.n(l),c=n(3194),h=n(9895),u=n(4856);n(9033);var m=n(7294),p=n(9429),g=n(3637),b=n(987),f=n(8683),_=n(3362),x=n(3445),v={root:"m_1b7284a3"};let j={},y=(0,g.Z)((e,{radius:t,shadow:n})=>({root:{"--paper-radius":void 0===t?void 0:(0,p.H5)(t),"--paper-shadow":(0,p.Xj)(n)}})),w=(0,_.b)((e,t)=>{let n=(0,b.w)("Paper",j,e),{classNames:a,className:r,style:o,styles:s,unstyled:l,withBorder:d,vars:c,radius:h,shadow:u,variant:m,mod:p,...g}=n,_=(0,f.y)({name:"Paper",props:n,classes:v,className:r,style:o,classNames:a,styles:s,unstyled:l,vars:c,varsResolver:y});return(0,i.jsx)(x.x,{ref:t,mod:[{"data-with-border":d},p],..._("root"),variant:m,...g})});w.classes=v,w.displayName="@mantine/core/Paper";let[k,C]=function(e){let t=(0,m.createContext)(null);return[({children:e,value:n})=>(0,i.jsx)(t.Provider,{value:n,children:e}),()=>{let n=(0,m.useContext)(t);if(null===n)throw Error(e);return n}]}("Card component was not found in tree");var N={root:"m_e615b15f",section:"m_599a2148"};let z={},S=(0,_.b)((e,t)=>{let{classNames:n,className:a,style:r,styles:o,vars:s,withBorder:l,inheritPadding:d,mod:c,...h}=(0,b.w)("CardSection",z,e),u=C();return(0,i.jsx)(x.x,{ref:t,mod:[{"with-border":l,"inherit-padding":d},c],...u.getStyles("section",{className:a,style:r,styles:o,classNames:n}),...h})});S.classes=N,S.displayName="@mantine/core/CardSection";let G={},H=(0,g.Z)((e,{padding:t})=>({root:{"--card-padding":(0,p.bG)(t)}})),A=(0,_.b)((e,t)=>{let n=(0,b.w)("Card",G,e),{classNames:a,className:r,style:o,styles:s,unstyled:l,vars:d,children:c,padding:h,...u}=n,p=(0,f.y)({name:"Card",props:n,classes:N,className:r,style:o,classNames:a,styles:s,unstyled:l,vars:d,varsResolver:H}),g=m.Children.toArray(c),_=g.map((e,t)=>"object"==typeof e&&e&&"type"in e&&e.type===S?(0,m.cloneElement)(e,{"data-first-section":0===t||void 0,"data-last-section":t===g.length-1||void 0}):e);return(0,i.jsx)(k,{value:{getStyles:p},children:(0,i.jsx)(w,{ref:t,unstyled:l,...p("root"),...u,children:_})})});A.classes=N,A.displayName="@mantine/core/Card",A.Section=S;var T=n(4410),F=n(7502),W=n(3078),Z=n(356),P=n(4710),$=n(8008),E=n(7985),L=n.n(E);let O=[{title:"GreenPop",description:"A Treevolution – a world where people and nature thrive together. When we give back and create value for the earth and our fellow human beings, joy is created – changing our own lives and changing the world. We’re on a mission to have fun and share this joy with as many people as possible.",icon:"/images/greenPop-logo.png"},{title:"EarthChild",description:"The Earthchild Project is a Non-Profit Organisation operating in the Western Cape, South Africa. We offer complimentary education to under-resourced schools with a focus on the environment, health and self-development and leadership.",icon:"/images/earthChild-logo.png"},{title:"Animal Ocean",description:"Animal Ocean has provided a variety of services to scientists on the coastline, from assistance with sampling and data collection to skippering and vessel support, as well as donating images and video to researchers",icon:"/images/animalOcean-logo.png"}];function X(){let e=O.map(e=>(0,i.jsxs)(A,{shadow:"md",radius:"md",className:L().card,padding:"xl",children:[(0,i.jsx)(s(),{src:e.icon,alt:e.title,width:100,height:100,className:L().iconImage}),(0,i.jsx)(T.x,{fz:"lg",fw:500,className:L().cardTitle,mt:"md",children:e.title}),(0,i.jsx)(T.x,{fz:"sm",c:"dimmed",mt:"sm",children:e.description})]},e.title));return(0,i.jsx)(F.M,{cols:{base:1,md:3},spacing:"xl",mt:50,children:e})}function q(){return(0,i.jsx)(u.M,{theme:{},withGlobalStyles:!0,withNormalizeCSS:!0,children:(0,i.jsxs)("div",{className:d().pageWrapper,children:[(0,i.jsx)(h._,{}),(0,i.jsxs)(r(),{children:[(0,i.jsx)("title",{children:"About Us"}),(0,i.jsx)("meta",{name:"description",content:"Learn more about us and what we do."}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)(W.W,{size:"lg",py:"xl",children:[(0,i.jsx)(Z.Z,{justify:"center",children:(0,i.jsx)(P.C,{className:L().badge,variant:"filled",size:"lg",children:"Currently associated NGO's"})}),(0,i.jsx)($.D,{order:2,className:L().title,ta:"center",mt:"sm",children:"Find out about who we support"}),(0,i.jsx)(T.x,{c:"dimmed",className:L().description,ta:"center",mt:"md",children:"At the end of every month we count up how many orders were placed associated with each initaitive, and then donate directly to them."}),(0,i.jsx)(X,{})]}),(0,i.jsx)("main",{className:d().main}),(0,i.jsx)(c.x,{})]})})}},7985:function(e){e.exports={title:"FeaturesCards_title__oDlVP",badge:"FeaturesCards_badge__Q0qi3",description:"FeaturesCards_description__O_VId",card:"FeaturesCards_card__gyGhR",cardTitle:"FeaturesCards_cardTitle__JMCYY"}},3006:function(e){e.exports={footer:"FooterCentered_footer__AeTnw",inner:"FooterCentered_inner__4r_jl",links:"FooterCentered_links__rFHdD",iconContainer:"FooterCentered_iconContainer__msbuG"}},6150:function(e){e.exports={header:"Header_header__072v2",logo:"Header_logo__0dir7",inner:"Header_inner__tdLVe",link:"Header_link__gnQyJ","burger-container":"Header_burger-container__0HjoO",mobileLinks:"Header_mobileLinks__ntD1M"}},6525:function(e){e.exports={pageWrapper:"about_pageWrapper__lu7q7",title:"about_title__3gTu1",main:"about_main__AJFIB",description:"about_description__Yug1T",section:"about_section__BrJEK",subtitle:"about_subtitle__mzqsR",footer:"about_footer__jG7Gy",card:"about_card__RzN5n",cardTitle:"about_cardTitle__21bH2",iconImage:"about_iconImage__zHSlA"}},4710:function(e,t,n){"use strict";n.d(t,{C:function(){return p}});var i=n(5893);n(7294);var a=n(9429),r=n(3637),o=n(2979),s=n(987),l=n(8683),d=n(3445),c=n(3362),h={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};let u={},m=(0,r.Z)((e,{radius:t,color:n,gradient:i,variant:r,size:s,autoContrast:l})=>{let d=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:i,variant:r||"filled",autoContrast:l});return{root:{"--badge-height":(0,a.ap)(s,"badge-height"),"--badge-padding-x":(0,a.ap)(s,"badge-padding-x"),"--badge-fz":(0,a.ap)(s,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,a.H5)(t),"--badge-bg":n||r?d.background:void 0,"--badge-color":n||r?d.color:void 0,"--badge-bd":n||r?d.border:void 0,"--badge-dot-color":"dot"===r?(0,o.p)(n,e):void 0}}}),p=(0,c.b)((e,t)=>{let n=(0,s.w)("Badge",u,e),{classNames:a,className:r,style:o,styles:c,unstyled:p,vars:g,radius:b,color:f,gradient:_,leftSection:x,rightSection:v,children:j,variant:y,fullWidth:w,autoContrast:k,circle:C,mod:N,...z}=n,S=(0,l.y)({name:"Badge",props:n,classes:h,className:r,style:o,classNames:a,styles:c,unstyled:p,vars:g,varsResolver:m});return(0,i.jsxs)(d.x,{variant:y,mod:[{block:w,circle:C,"with-right-section":!!v,"with-left-section":!!x},N],...S("root",{variant:y}),ref:t,...z,children:[x&&(0,i.jsx)("span",{...S("section"),"data-position":"left",children:x}),(0,i.jsx)("span",{...S("label"),children:j}),v&&(0,i.jsx)("span",{...S("section"),"data-position":"right",children:v})]})});p.classes=h,p.displayName="@mantine/core/Badge"},7502:function(e,t,n){"use strict";n.d(t,{M:function(){return j}});var i=n(5893);n(7294);var a=n(987),r=n(8683),o=n(3491),s=n(3445),l=n(9535),d=n(3877),c=n(5541),h=n(3181),u=n(9429);function m(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}var p=n(5984),g=n(954);function b({spacing:e,verticalSpacing:t,cols:n,selector:a}){let r=(0,p.rZ)(),o=void 0===t?e:t,s=(0,h.L)({"--sg-spacing-x":(0,u.bG)(m(e)),"--sg-spacing-y":(0,u.bG)(m(o)),"--sg-cols":m(n)?.toString()}),l=(0,d.X)(r.breakpoints).reduce((t,i)=>(t[i]||(t[i]={}),"object"==typeof e&&void 0!==e[i]&&(t[i]["--sg-spacing-x"]=(0,u.bG)(e[i])),"object"==typeof o&&void 0!==o[i]&&(t[i]["--sg-spacing-y"]=(0,u.bG)(o[i])),"object"==typeof n&&void 0!==n[i]&&(t[i]["--sg-cols"]=n[i]),t),{}),b=(function(e,t){let n=e.map(e=>({value:e,px:e in t.breakpoints?(0,c.px)(t.breakpoints[e]):(0,c.px)(e)}));return n.sort((e,t)=>e.px-t.px),n})((0,d.X)(l),r).filter(e=>(0,d.X)(l[e.value]).length>0).map(e=>({query:`(min-width: ${r.breakpoints[e.value]})`,styles:l[e.value]}));return(0,i.jsx)(g.f,{styles:s,media:b,selector:a})}function f(e){return"object"==typeof e&&null!==e?(0,d.X)(e):[]}function _({spacing:e,verticalSpacing:t,cols:n,selector:a}){let r=void 0===t?e:t,o=(0,h.L)({"--sg-spacing-x":(0,u.bG)(m(e)),"--sg-spacing-y":(0,u.bG)(m(r)),"--sg-cols":m(n)?.toString()}),s=function({spacing:e,verticalSpacing:t,cols:n}){return Array.from(new Set([...f(e),...f(t),...f(n)])).sort((e,t)=>(0,c.px)(e)-(0,c.px)(t))}({spacing:e,verticalSpacing:t,cols:n}),l=s.reduce((t,i)=>(t[i]||(t[i]={}),"object"==typeof e&&void 0!==e[i]&&(t[i]["--sg-spacing-x"]=(0,u.bG)(e[i])),"object"==typeof r&&void 0!==r[i]&&(t[i]["--sg-spacing-y"]=(0,u.bG)(r[i])),"object"==typeof n&&void 0!==n[i]&&(t[i]["--sg-cols"]=n[i]),t),{}),d=s.map(e=>({query:`simple-grid (min-width: ${e})`,styles:l[e]}));return(0,i.jsx)(g.f,{styles:o,container:d,selector:a})}var x={container:"m_925c2d2c",root:"m_2415a157"};let v={cols:1,spacing:"md",type:"media"},j=(0,l.d5)((e,t)=>{let n=(0,a.w)("SimpleGrid",v,e),{classNames:l,className:d,style:c,styles:h,unstyled:u,vars:m,cols:p,verticalSpacing:g,spacing:f,type:j,...y}=n,w=(0,r.y)({name:"SimpleGrid",classes:x,props:n,className:d,style:c,classNames:l,styles:h,unstyled:u,vars:m}),k=(0,o.m)();return"container"===j?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_,{...n,selector:`.${k}`}),(0,i.jsx)("div",{...w("container"),children:(0,i.jsx)(s.x,{ref:t,...w("root",{className:k}),...y})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b,{...n,selector:`.${k}`}),(0,i.jsx)(s.x,{ref:t,...w("root",{className:k}),...y})]})});j.classes=x,j.displayName="@mantine/core/SimpleGrid"},8008:function(e,t,n){"use strict";n.d(t,{D:function(){return p}});var i=n(5893);n(7294);var a=n(3637),r=n(987),o=n(8683),s=n(3445),l=n(9535),d=n(8565);let c=["h1","h2","h3","h4","h5","h6"];var h={root:"m_8a5d1357"};let u={order:1},m=(0,a.Z)((e,{order:t,size:n,lineClamp:i,textWrap:a})=>{let r=function(e,t){let n=void 0!==t?t:`h${e}`;return c.includes(n)?{fontSize:`var(--mantine-${n}-font-size)`,fontWeight:`var(--mantine-${n}-font-weight)`,lineHeight:`var(--mantine-${n}-line-height)`}:{fontSize:(0,d.h)(n),fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}}(t,n);return{root:{"--title-fw":r.fontWeight,"--title-lh":r.lineHeight,"--title-fz":r.fontSize,"--title-line-clamp":"number"==typeof i?i.toString():void 0,"--title-text-wrap":a}}}),p=(0,l.d5)((e,t)=>{let n=(0,r.w)("Title",u,e),{classNames:a,className:l,style:d,styles:c,unstyled:p,order:g,vars:b,size:f,variant:_,lineClamp:x,textWrap:v,mod:j,...y}=n,w=(0,o.y)({name:"Title",props:n,classes:h,className:l,style:d,classNames:a,styles:c,unstyled:p,vars:b,varsResolver:m});return[1,2,3,4,5,6].includes(g)?(0,i.jsx)(s.x,{...w("root"),component:`h${g}`,variant:_,ref:t,mod:[{order:g,"data-line-clamp":"number"==typeof x},j],size:f,...y}):null});p.classes=h,p.displayName="@mantine/core/Title"}},function(e){e.O(0,[675,649,253,888,774,179],function(){return e(e.s=1012)}),_N_E=e.O()}]);