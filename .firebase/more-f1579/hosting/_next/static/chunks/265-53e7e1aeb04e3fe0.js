(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[265],{4063:function(e){"use strict";e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(o=n;0!=o--;)if(!e(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(i=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,i[o]))return!1;for(o=n;0!=o--;){var n,o,i,a=i[o];if(!e(t[a],r[a]))return!1}return!0}return t!=t&&r!=r}},3454:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(7663)},7663:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var s=[],u=!1,c=-1;function d(){u&&n&&(u=!1,n.length?s=n.concat(s):c=-1,s.length&&p())}function p(){if(!u){var e=l(d);u=!0;for(var t=s.length;t;){for(n=s,s=[];++c<t;)n&&n[c].run();c=-1,t=s.length}n=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new f(e,t)),1!==s.length||u||l(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},a=!0;try{t[e](i,i.exports,n),a=!1}finally{a&&delete r[e]}return i.exports}n.ab="//";var o=n(229);e.exports=o}()},4920:function(e,t,r){"use strict";r.d(t,{z:function(){return S}});var n=r(5893),o=r(8565);r(7294);var i=r(9429),a=r(3637),l=r(987),s=r(6976),u=r(3445),c=r(3362),d=r(6556),p=r(427),f=r(1166),h=r(9535),m={root:"m_77c9d27d",inner:"m_80f1301b",label:"m_811560b9",section:"m_a74036a",loader:"m_a25b86ee",group:"m_80d6d844"};let b={orientation:"horizontal"},v=(0,a.Z)((e,{borderWidth:t})=>({group:{"--button-border-width":(0,o.h)(t)}})),y=(0,h.d5)((e,t)=>{let r=(0,l.w)("ButtonGroup",b,e),{className:o,style:i,classNames:a,styles:c,unstyled:d,orientation:p,vars:f,borderWidth:h,variant:y,mod:g,...x}=(0,l.w)("ButtonGroup",b,e),j=(0,s.y)({name:"ButtonGroup",props:r,classes:m,className:o,style:i,classNames:a,styles:c,unstyled:d,vars:f,varsResolver:v,rootSelector:"group"});return(0,n.jsx)(u.x,{...j("group"),ref:t,variant:y,mod:[{"data-orientation":p},g],role:"group",...x})});y.classes=m,y.displayName="@mantine/core/ButtonGroup";let g={in:{opacity:1,transform:`translate(-50%, calc(-50% + ${(0,o.h)(1)}))`},out:{opacity:0,transform:"translate(-50%, -200%)"},common:{transformOrigin:"center"},transitionProperty:"transform, opacity"},x={},j=(0,a.Z)((e,{radius:t,color:r,gradient:n,variant:o,size:a,justify:l,autoContrast:s})=>{let u=e.variantColorResolver({color:r||e.primaryColor,theme:e,gradient:n,variant:o||"filled",autoContrast:s});return{root:{"--button-justify":l,"--button-height":(0,i.ap)(a,"button-height"),"--button-padding-x":(0,i.ap)(a,"button-padding-x"),"--button-fz":a?.includes("compact")?(0,i.yv)(a.replace("compact-","")):(0,i.yv)(a),"--button-radius":void 0===t?void 0:(0,i.H5)(t),"--button-bg":r||o?u.background:void 0,"--button-hover":r||o?u.hover:void 0,"--button-color":u.color,"--button-bd":r||o?u.border:void 0,"--button-hover-color":r||o?u.hoverColor:void 0}}}),S=(0,c.b)((e,t)=>{let r=(0,l.w)("Button",x,e),{style:o,vars:i,className:a,color:c,disabled:h,children:b,leftSection:v,rightSection:y,fullWidth:S,variant:w,radius:E,loading:k,loaderProps:$,gradient:C,classNames:T,styles:I,unstyled:_,"data-disabled":z,autoContrast:V,mod:F,...O}=r,L=(0,s.y)({name:"Button",props:r,classes:m,className:a,style:o,classNames:T,styles:I,unstyled:_,vars:i,varsResolver:j}),D=!!v,R=!!y;return(0,n.jsxs)(f.k,{ref:t,...L("root",{active:!h&&!k&&!z}),unstyled:_,variant:w,disabled:h||k,mod:[{disabled:h||z,loading:k,block:S,"with-left-section":D,"with-right-section":R},F],...O,children:[(0,n.jsx)(p.u,{mounted:!!k,transition:g,duration:150,children:e=>(0,n.jsx)(u.x,{component:"span",...L("loader",{style:e}),"aria-hidden":!0,children:(0,n.jsx)(d.a,{color:"var(--button-color)",size:"calc(var(--button-height) / 1.8)",...$})})}),(0,n.jsxs)("span",{...L("inner"),children:[v&&(0,n.jsx)(u.x,{component:"span",...L("section"),mod:{position:"left"},children:v}),(0,n.jsx)(u.x,{component:"span",mod:{loading:k},...L("label"),children:b}),y&&(0,n.jsx)(u.x,{component:"span",...L("section"),mod:{position:"right"},children:y})]})]})});S.classes=m,S.displayName="@mantine/core/Button",S.Group=y},3909:function(e,t,r){"use strict";r.d(t,{M:function(){return D}});var n=r(5893),o=r(7294),i=r(3362),a=r(8565),l=r(9429),s=r(3637),u=r(987),c=r(6976),d=r(5494),p=r(3445),f=r(9535);let[h,m]=function(e=null){let t=(0,o.createContext)(e);return[({children:e,value:r})=>(0,n.jsx)(t.Provider,{value:r,children:e}),()=>(0,o.useContext)(t)]}({offsetBottom:!1,offsetTop:!1,describedBy:void 0,getStyles:null,inputId:void 0,labelId:void 0});var b={wrapper:"m_6c018570",input:"m_8fb7ebe7",section:"m_82577fc2",placeholder:"m_88bacfd0",root:"m_46b77525",label:"m_8fdc1311",required:"m_78a94662",error:"m_8f816625",description:"m_fe47ce59"};let v={},y=(0,s.Z)((e,{size:t})=>({description:{"--input-description-size":void 0===t?void 0:`calc(${(0,l.yv)(t)} - ${(0,a.h)(2)})`}})),g=(0,f.d5)((e,t)=>{let r=(0,u.w)("InputDescription",v,e),{classNames:o,className:i,style:a,styles:l,unstyled:s,vars:d,size:f,__staticSelector:h,__inheritStyles:g=!0,variant:x,...j}=(0,u.w)("InputDescription",v,r),S=m(),w=(0,c.y)({name:["InputWrapper",h],props:r,classes:b,className:i,style:a,classNames:o,styles:l,unstyled:s,rootSelector:"description",vars:d,varsResolver:y}),E=g&&S?.getStyles||w;return(0,n.jsx)(p.x,{component:"p",ref:t,variant:x,size:f,...E("description",S?.getStyles?{className:i,style:a}:void 0),...j})});g.classes=b,g.displayName="@mantine/core/InputDescription";let x={},j=(0,s.Z)((e,{size:t})=>({error:{"--input-error-size":void 0===t?void 0:`calc(${(0,l.yv)(t)} - ${(0,a.h)(2)})`}})),S=(0,f.d5)((e,t)=>{let r=(0,u.w)("InputError",x,e),{classNames:o,className:i,style:a,styles:l,unstyled:s,vars:d,size:f,__staticSelector:h,__inheritStyles:v=!0,variant:y,...g}=r,S=(0,c.y)({name:["InputWrapper",h],props:r,classes:b,className:i,style:a,classNames:o,styles:l,unstyled:s,rootSelector:"error",vars:d,varsResolver:j}),w=m(),E=v&&w?.getStyles||S;return(0,n.jsx)(p.x,{component:"p",ref:t,variant:y,size:f,...E("error",w?.getStyles?{className:i,style:a}:void 0),...g})});S.classes=b,S.displayName="@mantine/core/InputError";let w={labelElement:"label"},E=(0,s.Z)((e,{size:t})=>({label:{"--input-label-size":(0,l.yv)(t),"--input-asterisk-color":void 0}})),k=(0,f.d5)((e,t)=>{let r=(0,u.w)("InputLabel",w,e),{classNames:o,className:i,style:a,styles:l,unstyled:s,vars:d,labelElement:f,size:h,required:v,htmlFor:y,onMouseDown:g,children:x,__staticSelector:j,variant:S,mod:k,...$}=(0,u.w)("InputLabel",w,r),C=(0,c.y)({name:["InputWrapper",j],props:r,classes:b,className:i,style:a,classNames:o,styles:l,unstyled:s,rootSelector:"label",vars:d,varsResolver:E}),T=m(),I=T?.getStyles||C;return(0,n.jsxs)(p.x,{...I("label",T?.getStyles?{className:i,style:a}:void 0),component:f,variant:S,size:h,ref:t,htmlFor:"label"===f?y:void 0,mod:[{required:v},k],onMouseDown:e=>{g?.(e),!e.defaultPrevented&&e.detail>1&&e.preventDefault()},...$,children:[x,v&&(0,n.jsx)("span",{...I("required"),"aria-hidden":!0,children:" *"})]})});k.classes=b,k.displayName="@mantine/core/InputLabel";let $={},C=(0,f.d5)((e,t)=>{let r=(0,u.w)("InputPlaceholder",$,e),{classNames:o,className:i,style:a,styles:l,unstyled:s,vars:d,__staticSelector:f,variant:h,error:m,mod:v,...y}=(0,u.w)("InputPlaceholder",$,r),g=(0,c.y)({name:["InputPlaceholder",f],props:r,classes:b,className:i,style:a,classNames:o,styles:l,unstyled:s,rootSelector:"placeholder"});return(0,n.jsx)(p.x,{...g("placeholder"),mod:[{error:!!m},v],component:"span",variant:h,ref:t,...y})});C.classes=b,C.displayName="@mantine/core/InputPlaceholder";var T=r(2191);let I={labelElement:"label",inputContainer:e=>e,inputWrapperOrder:["label","description","input","error"]},_=(0,s.Z)((e,{size:t})=>({label:{"--input-label-size":(0,l.yv)(t),"--input-asterisk-color":void 0},error:{"--input-error-size":void 0===t?void 0:`calc(${(0,l.yv)(t)} - ${(0,a.h)(2)})`},description:{"--input-description-size":void 0===t?void 0:`calc(${(0,l.yv)(t)} - ${(0,a.h)(2)})`}})),z=(0,f.d5)((e,t)=>{let r=(0,u.w)("InputWrapper",I,e),{classNames:i,className:a,style:l,styles:s,unstyled:d,vars:f,size:m,variant:v,__staticSelector:y,inputContainer:x,inputWrapperOrder:j,label:w,error:E,description:$,labelProps:C,descriptionProps:z,errorProps:V,labelElement:F,children:O,withAsterisk:L,id:D,required:R,__stylesApiProps:P,mod:W,...N}=r,A=(0,c.y)({name:["InputWrapper",y],props:P||r,classes:b,className:a,style:l,classNames:i,styles:s,unstyled:d,vars:f,varsResolver:_}),B={size:m,variant:v,__staticSelector:y},M=(0,T.M)(D),G=V?.id||`${M}-error`,H=z?.id||`${M}-description`,Z=!!E&&"boolean"!=typeof E,q=!!$,X=`${Z?G:""} ${q?H:""}`,U=X.trim().length>0?X.trim():void 0,Y=C?.id||`${M}-label`,J=w&&(0,n.jsx)(k,{labelElement:F,id:Y,htmlFor:M,required:"boolean"==typeof L?L:R,...B,...C,children:w},"label"),K=q&&(0,n.jsx)(g,{...z,...B,size:z?.size||B.size,id:z?.id||H,children:$},"description"),Q=(0,n.jsx)(o.Fragment,{children:x(O)},"input"),ee=Z&&(0,o.createElement)(S,{...V,...B,size:V?.size||B.size,key:"error",id:V?.id||G},E),et=j.map(e=>{switch(e){case"label":return J;case"input":return Q;case"description":return K;case"error":return ee;default:return null}});return(0,n.jsx)(h,{value:{getStyles:A,describedBy:U,inputId:M,labelId:Y,...function(e,{hasDescription:t,hasError:r}){let n=e.findIndex(e=>"input"===e),o=e.slice(0,n),i=e.slice(n+1),a=t&&o.includes("description")||r&&o.includes("error");return{offsetBottom:t&&i.includes("description")||r&&i.includes("error"),offsetTop:a}}(j,{hasDescription:q,hasError:Z})},children:(0,n.jsx)(p.x,{ref:t,variant:v,size:m,mod:[{error:!!E},W],...A("root"),...N,children:et})})});z.classes=b,z.displayName="@mantine/core/InputWrapper";let V={variant:"default",leftSectionPointerEvents:"none",rightSectionPointerEvents:"none",withAria:!0,withErrorStyles:!0},F=(0,s.Z)((e,t,r)=>({wrapper:{"--input-margin-top":r.offsetTop?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-margin-bottom":r.offsetBottom?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-height":(0,l.ap)(t.size,"input-height"),"--input-fz":(0,l.yv)(t.size),"--input-radius":void 0===t.radius?void 0:(0,l.H5)(t.radius),"--input-left-section-width":void 0!==t.leftSectionWidth?(0,a.h)(t.leftSectionWidth):void 0,"--input-right-section-width":void 0!==t.rightSectionWidth?(0,a.h)(t.rightSectionWidth):void 0,"--input-padding-y":t.multiline?(0,l.ap)(t.size,"input-padding-y"):void 0,"--input-left-section-pointer-events":t.leftSectionPointerEvents,"--input-right-section-pointer-events":t.rightSectionPointerEvents}})),O=(0,i.b)((e,t)=>{let r=(0,u.w)("Input",V,e),{classNames:o,className:i,style:a,styles:l,unstyled:s,required:f,__staticSelector:h,__stylesApiProps:v,size:y,wrapperProps:g,error:x,disabled:j,leftSection:S,leftSectionProps:w,leftSectionWidth:E,rightSection:k,rightSectionProps:$,rightSectionWidth:C,rightSectionPointerEvents:T,leftSectionPointerEvents:I,variant:_,vars:z,pointer:O,multiline:L,radius:D,id:R,withAria:P,withErrorStyles:W,mod:N,inputSize:A,...B}=r,{styleProps:M,rest:G}=(0,d.c)(B),H=m(),Z={offsetBottom:H?.offsetBottom,offsetTop:H?.offsetTop},q=(0,c.y)({name:["Input",h],props:v||r,classes:b,className:i,style:a,classNames:o,styles:l,unstyled:s,stylesCtx:Z,rootSelector:"wrapper",vars:z,varsResolver:F}),X=P?{required:f,disabled:j,"aria-invalid":!!x,"aria-describedby":H?.describedBy,id:H?.inputId||R}:{};return(0,n.jsxs)(p.x,{...q("wrapper"),...M,...g,mod:[{error:!!x&&W,pointer:O,disabled:j,multiline:L,"data-with-right-section":!!k,"data-with-left-section":!!S},N],variant:_,size:y,children:[S&&(0,n.jsx)("div",{...w,"data-position":"left",...q("section",{className:w?.className,style:w?.style}),children:S}),(0,n.jsx)(p.x,{component:"input",...G,...X,ref:t,required:f,mod:{disabled:j,error:!!x&&W},variant:_,__size:A,...q("input")}),k&&(0,n.jsx)("div",{...$,"data-position":"right",...q("section",{className:$?.className,style:$?.style}),children:k})]})});O.classes=b,O.Wrapper=z,O.Label=k,O.Error=S,O.Description=g,O.Placeholder=C,O.displayName="@mantine/core/Input";let L={__staticSelector:"InputBase",withAria:!0},D=(0,i.b)((e,t)=>{let{inputProps:r,wrapperProps:o,...i}=function(e,t,r){let n=(0,u.w)(e,t,r),{label:o,description:i,error:a,required:l,classNames:s,styles:c,className:p,unstyled:f,__staticSelector:h,__stylesApiProps:m,errorProps:b,labelProps:v,descriptionProps:y,wrapperProps:g,id:x,size:j,style:S,inputContainer:w,inputWrapperOrder:E,withAsterisk:k,variant:$,vars:C,mod:T,...I}=n,{styleProps:_,rest:z}=(0,d.c)(I),V={label:o,description:i,error:a,required:l,classNames:s,className:p,__staticSelector:h,__stylesApiProps:m||n,errorProps:b,labelProps:v,descriptionProps:y,unstyled:f,styles:c,size:j,style:S,inputContainer:w,inputWrapperOrder:E,withAsterisk:k,variant:$,id:x,mod:T,...g};return{...z,classNames:s,styles:c,unstyled:f,wrapperProps:{...V,..._},inputProps:{required:l,classNames:s,styles:c,unstyled:f,size:j,__staticSelector:h,__stylesApiProps:m||n,error:a,variant:$,id:x}}}("InputBase",L,e);return(0,n.jsx)(O.Wrapper,{...o,children:(0,n.jsx)(O,{...r,...i,ref:t})})});D.classes={...O.classes,...O.Wrapper.classes},D.displayName="@mantine/core/InputBase"},7502:function(e,t,r){"use strict";r.d(t,{M:function(){return j}});var n=r(5893);r(7294);var o=r(987),i=r(6976),a=r(3491),l=r(3445),s=r(9535),u=r(3877),c=r(5541),d=r(3181),p=r(9429);function f(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}var h=r(5984),m=r(954);function b({spacing:e,verticalSpacing:t,cols:r,selector:o}){let i=(0,h.rZ)(),a=void 0===t?e:t,l=(0,d.L)({"--sg-spacing-x":(0,p.bG)(f(e)),"--sg-spacing-y":(0,p.bG)(f(a)),"--sg-cols":f(r)?.toString()}),s=(0,u.X)(i.breakpoints).reduce((t,n)=>(t[n]||(t[n]={}),"object"==typeof e&&void 0!==e[n]&&(t[n]["--sg-spacing-x"]=(0,p.bG)(e[n])),"object"==typeof a&&void 0!==a[n]&&(t[n]["--sg-spacing-y"]=(0,p.bG)(a[n])),"object"==typeof r&&void 0!==r[n]&&(t[n]["--sg-cols"]=r[n]),t),{}),b=(function(e,t){let r=e.map(e=>({value:e,px:e in t.breakpoints?(0,c.px)(t.breakpoints[e]):(0,c.px)(e)}));return r.sort((e,t)=>e.px-t.px),r})((0,u.X)(s),i).filter(e=>(0,u.X)(s[e.value]).length>0).map(e=>({query:`(min-width: ${i.breakpoints[e.value]})`,styles:s[e.value]}));return(0,n.jsx)(m.f,{styles:l,media:b,selector:o})}function v(e){return"object"==typeof e&&null!==e?(0,u.X)(e):[]}function y({spacing:e,verticalSpacing:t,cols:r,selector:o}){let i=void 0===t?e:t,a=(0,d.L)({"--sg-spacing-x":(0,p.bG)(f(e)),"--sg-spacing-y":(0,p.bG)(f(i)),"--sg-cols":f(r)?.toString()}),l=function({spacing:e,verticalSpacing:t,cols:r}){return Array.from(new Set([...v(e),...v(t),...v(r)])).sort((e,t)=>(0,c.px)(e)-(0,c.px)(t))}({spacing:e,verticalSpacing:t,cols:r}),s=l.reduce((t,n)=>(t[n]||(t[n]={}),"object"==typeof e&&void 0!==e[n]&&(t[n]["--sg-spacing-x"]=(0,p.bG)(e[n])),"object"==typeof i&&void 0!==i[n]&&(t[n]["--sg-spacing-y"]=(0,p.bG)(i[n])),"object"==typeof r&&void 0!==r[n]&&(t[n]["--sg-cols"]=r[n]),t),{}),u=l.map(e=>({query:`simple-grid (min-width: ${e})`,styles:s[e]}));return(0,n.jsx)(m.f,{styles:a,container:u,selector:o})}var g={container:"m_925c2d2c",root:"m_2415a157"};let x={cols:1,spacing:"md",type:"media"},j=(0,s.d5)((e,t)=>{let r=(0,o.w)("SimpleGrid",x,e),{classNames:s,className:u,style:c,styles:d,unstyled:p,vars:f,cols:h,verticalSpacing:m,spacing:v,type:j,...S}=r,w=(0,i.y)({name:"SimpleGrid",classes:g,props:r,className:u,style:c,classNames:s,styles:d,unstyled:p,vars:f}),E=(0,a.m)();return"container"===j?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y,{...r,selector:`.${E}`}),(0,n.jsx)("div",{...w("container"),children:(0,n.jsx)(l.x,{ref:t,...w("root",{className:E}),...S})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{...r,selector:`.${E}`}),(0,n.jsx)(l.x,{ref:t,...w("root",{className:E}),...S})]})});j.classes=g,j.displayName="@mantine/core/SimpleGrid"},6414:function(e,t,r){"use strict";r.d(t,{o:function(){return s}});var n=r(5893);r(7294);var o=r(987),i=r(9535),a=r(3909);let l={},s=(0,i.d5)((e,t)=>{let r=(0,o.w)("TextInput",l,e);return(0,n.jsx)(a.M,{component:"input",ref:t,...r,__staticSelector:"TextInput"})});s.classes=a.M.classes,s.displayName="@mantine/core/TextInput"},3334:function(e,t,r){"use strict";r.d(t,{g:function(){return T}});var n=r(5893);function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}var i=r(7294),a=i.useLayoutEffect,l=function(e){var t=i.useRef(e);return a(function(){t.current=e}),t},s=function(e,t){if("function"==typeof e){e(t);return}e.current=t},u=function(e,t){var r=(0,i.useRef)();return(0,i.useCallback)(function(n){e.current=n,r.current&&s(r.current,null),r.current=t,t&&s(t,n)},[t])},c={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},d=function(e){Object.keys(c).forEach(function(t){e.style.setProperty(t,c[t],"important")})},p=null,f=function(e,t){var r=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?r+t.borderSize:r-t.paddingSize},h=function(){},m=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],b=!!document.documentElement.currentStyle,v=function(e){var t=window.getComputedStyle(e);if(null===t)return null;var r=m.reduce(function(e,r){return e[r]=t[r],e},{}),n=r.boxSizing;if(""===n)return null;b&&"border-box"===n&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px");var o=parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),i=parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth);return{sizingStyle:r,paddingSize:o,borderSize:i}};function y(e,t,r){var n=l(r);i.useLayoutEffect(function(){var r=function(e){return n.current(e)};if(e)return e.addEventListener(t,r),function(){return e.removeEventListener(t,r)}},[])}var g=function(e){y(window,"resize",e)},x=function(e){y(document.fonts,"loadingdone",e)},j=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],S=i.forwardRef(function(e,t){var r=e.cacheMeasurements,n=e.maxRows,a=e.minRows,l=e.onChange,s=void 0===l?h:l,c=e.onHeightChange,m=void 0===c?h:c,b=function(e,t){if(null==e)return{};var r={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,j),y=void 0!==b.value,S=i.useRef(null),w=u(S,t),E=i.useRef(0),k=i.useRef(),$=function(){var e,t,o,i,l,s,u,c,h,b,y,g=S.current,x=r&&k.current?k.current:v(g);if(x){k.current=x;var j=(e=g.value||g.placeholder||"x",void 0===(t=a)&&(t=1),void 0===(o=n)&&(o=1/0),p||((p=document.createElement("textarea")).setAttribute("tabindex","-1"),p.setAttribute("aria-hidden","true"),d(p)),null===p.parentNode&&document.body.appendChild(p),i=x.paddingSize,l=x.borderSize,u=(s=x.sizingStyle).boxSizing,Object.keys(s).forEach(function(e){p.style[e]=s[e]}),d(p),p.value=e,c=f(p,x),p.value=e,c=f(p,x),p.value="x",b=(h=p.scrollHeight-i)*t,"border-box"===u&&(b=b+i+l),c=Math.max(b,c),y=h*o,"border-box"===u&&(y=y+i+l),[c=Math.min(y,c),h]),w=j[0],$=j[1];E.current!==w&&(E.current=w,g.style.setProperty("height",w+"px","important"),m(w,{rowHeight:$}))}};return i.useLayoutEffect($),g($),x($),i.createElement("textarea",o({},b,{onChange:function(e){y||$(),s(e)},ref:w}))}),w=r(3454),E=r(987),k=r(9535),$=r(3909);let C={},T=(0,k.d5)((e,t)=>{let{autosize:r,maxRows:o,minRows:i,__staticSelector:a,resize:l,...s}=(0,E.w)("Textarea",C,e),u=r&&"test"!=(void 0!==w&&w.env?"production":"development");return(0,n.jsx)($.M,{component:u?S:"textarea",ref:t,...s,__staticSelector:a||"Textarea",multiline:!0,"data-no-overflow":r&&void 0===o||void 0,__vars:{"--input-resize":l},...u?{maxRows:o,minRows:i}:{}})});T.classes=$.M.classes,T.displayName="@mantine/core/Textarea"},8008:function(e,t,r){"use strict";r.d(t,{D:function(){return h}});var n=r(5893);r(7294);var o=r(3637),i=r(987),a=r(6976),l=r(3445),s=r(9535),u=r(8565);let c=["h1","h2","h3","h4","h5","h6"];var d={root:"m_8a5d1357"};let p={order:1},f=(0,o.Z)((e,{order:t,size:r,lineClamp:n,textWrap:o})=>{let i=function(e,t){let r=void 0!==t?t:`h${e}`;return c.includes(r)?{fontSize:`var(--mantine-${r}-font-size)`,fontWeight:`var(--mantine-${r}-font-weight)`,lineHeight:`var(--mantine-${r}-line-height)`}:{fontSize:(0,u.h)(r),fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}}(t,r);return{root:{"--title-fw":i.fontWeight,"--title-lh":i.lineHeight,"--title-fz":i.fontSize,"--title-line-clamp":"number"==typeof n?n.toString():void 0,"--title-text-wrap":o}}}),h=(0,s.d5)((e,t)=>{let r=(0,i.w)("Title",p,e),{classNames:o,className:s,style:u,styles:c,unstyled:h,order:m,vars:b,size:v,variant:y,lineClamp:g,textWrap:x,mod:j,...S}=r,w=(0,a.y)({name:"Title",props:r,classes:d,className:s,style:u,classNames:o,styles:c,unstyled:h,vars:b,varsResolver:f});return[1,2,3,4,5,6].includes(m)?(0,n.jsx)(l.x,{...w("root"),component:`h${m}`,variant:y,ref:t,mod:[{order:m,"data-line-clamp":"number"==typeof g},j],size:v,...S}):null});h.classes=d,h.displayName="@mantine/core/Title"},1441:function(e,t,r){"use strict";r.d(t,{c:function(){return S}});var n=r(7294);let o="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;function i(e,t){o(()=>{if(e)return window.addEventListener(e,t),()=>window.removeEventListener(e,t)},[e])}function a(e){return null===e||"object"!=typeof e?{}:Object.keys(e).reduce((t,r)=>{let n=e[r];return null!=n&&!1!==n&&(t[r]=n),t},{})}function l(e,t){if(null===t||"object"!=typeof t)return{};let r={...t};return Object.keys(t).forEach(t=>{t.includes(`${String(e)}.`)&&delete r[t]}),r}function s(e,t){return parseInt(e.substring(t.length+1).split(".")[0],10)}function u(e,t,r,n){if(void 0===t)return r;let o=`${String(e)}`,i=r;-1===n&&(i=l(`${o}.${t}`,i));let a={...i},u=new Set;return Object.entries(i).filter(([e])=>{if(!e.startsWith(`${o}.`))return!1;let r=s(e,o);return!Number.isNaN(r)&&r>=t}).forEach(([e,t])=>{let r=s(e,o),i=e.replace(`${o}.${r}`,`${o}.${r+n}`);a[i]=t,u.add(i),u.has(e)||delete a[e]}),a}function c(e){return"string"!=typeof e?[]:e.split(".")}function d(e,t){let r=c(e);if(0===r.length||"object"!=typeof t||null===t)return;let n=t[r[0]];for(let e=1;e<r.length&&void 0!==n;e+=1)n=n[r[e]];return n}function p(e,t,r){"object"==typeof r.value&&(r.value=f(r.value)),r.enumerable&&!r.get&&!r.set&&r.configurable&&r.writable&&"__proto__"!==t?e[t]=r.value:Object.defineProperty(e,t,r)}function f(e){if("object"!=typeof e)return e;var t,r,n,o=0,i=Object.prototype.toString.call(e);if("[object Object]"===i?n=Object.create(e.__proto__||null):"[object Array]"===i?n=Array(e.length):"[object Set]"===i?(n=new Set,e.forEach(function(e){n.add(f(e))})):"[object Map]"===i?(n=new Map,e.forEach(function(e,t){n.set(f(t),f(e))})):"[object Date]"===i?n=new Date(+e):"[object RegExp]"===i?n=new RegExp(e.source,e.flags):"[object DataView]"===i?n=new e.constructor(f(e.buffer)):"[object ArrayBuffer]"===i?n=e.slice(0):"Array]"===i.slice(-6)&&(n=new e.constructor(e)),n){for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)p(n,r[o],Object.getOwnPropertyDescriptor(e,r[o]));for(o=0,r=Object.getOwnPropertyNames(e);o<r.length;o++)Object.hasOwnProperty.call(n,t=r[o])&&n[t]===e[t]||p(n,t,Object.getOwnPropertyDescriptor(e,t))}return n||e}function h(e,t,r){let n=c(e);if(0===n.length)return r;let o=f(r);if(1===n.length)return o[n[0]]=t,o;let i=o[n[0]];for(let e=1;e<n.length-1;e+=1){if(void 0===i)return o;i=i[n[e]]}return i[n[n.length-1]]=t,o}var m=r(4063);function b(e,t){let r=Object.keys(e);if("string"==typeof t){let n=r.filter(e=>e.startsWith(`${t}.`));return e[t]||n.some(t=>e[t])||!1}return r.some(t=>e[t])}function v(e,t){return e?`${e}-${t.toString()}`:t.toString()}function y(e){let t=a(e);return{hasErrors:Object.keys(t).length>0,errors:t}}function g(e,t){return"function"==typeof e?y(e(t)):y(function e(t,r,n="",o={}){return"object"!=typeof t||null===t?o:Object.keys(t).reduce((o,i)=>{let a=t[i],l=`${""===n?"":`${n}.`}${i}`,s=d(l,r),u=!1;return"function"==typeof a&&(o[l]=a(s,r,l)),"object"==typeof a&&Array.isArray(s)&&(u=!0,s.forEach((t,n)=>e(a,r,`${l}.${n}`,o))),"object"!=typeof a||"object"!=typeof s||null===s||u||e(a,r,l,o),o},o)}(e,t))}function x(e,t,r){if("string"!=typeof e)return{hasError:!1,error:null};let n=g(t,r),o=Object.keys(n.errors).find(t=>e.split(".").every((e,r)=>e===t.split(".")[r]));return{hasError:!!o,error:o?n.errors[o]:null}}function j(e,t){return!!t&&("boolean"==typeof t?t:!!Array.isArray(t)&&t.includes(e.replace(/[.][0-9]/g,".__MANTINE_FORM_INDEX__")))}function S({name:e,mode:t="controlled",initialValues:r,initialErrors:o={},initialDirty:s={},initialTouched:c={},clearInputErrorOnChange:p=!0,validateInputOnChange:f=!1,validateInputOnBlur:y=!1,onValuesChange:S,transformValues:w=e=>e,enhanceGetInputProps:E,validate:k}={}){let $=function(e){let[t,r]=(0,n.useState)(a(e)),o=(0,n.useRef)(t),i=(0,n.useCallback)(e=>{r(t=>{let r=a("function"==typeof e?e(t):e);return o.current=r,r})},[]),l=(0,n.useCallback)(()=>i({}),[]),s=(0,n.useCallback)(e=>{void 0!==o.current[e]&&i(t=>{let r={...t};return delete r[e],r})},[t]),u=(0,n.useCallback)((e,t)=>{null==t||!1===t?s(e):o.current[e]!==t&&i(r=>({...r,[e]:t}))},[t]);return{errorsState:t,setErrors:i,clearErrors:l,setFieldError:u,clearFieldError:s}}(o),C=function({initialValues:e,onValuesChange:t,mode:r}){let o=(0,n.useRef)(!1),[i,a]=(0,n.useState)(e||{}),l=(0,n.useRef)(i),s=(0,n.useRef)(i),u=(0,n.useCallback)(({values:e,subscribers:r,updateState:n=!0,mergeWithPreviousValues:o=!0})=>{let i=l.current,s=e instanceof Function?e(l.current):e,u=o?{...i,...s}:s;l.current=u,n&&a(u),t?.(u,i),r?.filter(Boolean).forEach(e=>e({updatedValues:u,previousValues:i}))},[t]),c=(0,n.useCallback)(e=>{let t=d(e.path,l.current),r=e.value instanceof Function?e.value(t):e.value;if(t!==r){let t=l.current,n=h(e.path,r,l.current);u({values:n,updateState:e.updateState}),e.subscribers?.filter(Boolean).forEach(r=>r({path:e.path,updatedValues:n,previousValues:t}))}},[u]),p=(0,n.useCallback)(e=>{s.current=e},[]),f=(0,n.useCallback)((e,t)=>{o.current||(o.current=!0,u({values:e,updateState:"controlled"===r}),p(e),t())},[u]),m=(0,n.useCallback)(()=>{u({values:s.current,updateState:!0,mergeWithPreviousValues:!1})},[u]),b=(0,n.useCallback)(()=>l.current,[]),v=(0,n.useCallback)(()=>s.current,[]);return{initialized:o,stateValues:i,refValues:l,valuesSnapshot:s,setValues:u,setFieldValue:c,resetValues:m,setValuesSnapshot:p,initialize:f,getValues:b,getValuesSnapshot:v}}({initialValues:r,onValuesChange:S,mode:t}),T=function({initialDirty:e,initialTouched:t,mode:r,$values:o}){let[i,a]=(0,n.useState)(t),[s,u]=(0,n.useState)(e),c=(0,n.useRef)(t),p=(0,n.useRef)(e),f=(0,n.useCallback)(e=>{let t="function"==typeof e?e(c.current):e;c.current=t,"controlled"===r&&a(t)},[]),h=(0,n.useCallback)((e,t=!1)=>{let n="function"==typeof e?e(p.current):e;p.current=n,("controlled"===r||t)&&u(n)},[]),v=(0,n.useCallback)(()=>f({}),[]),y=(0,n.useCallback)((e,t)=>{f(r=>b(r,e)===t?r:{...r,[e]:t})},[]),g=(0,n.useCallback)((e,t,r)=>{h(r=>b(r,e)===t?r:{...r,[e]:t},r)},[]),x=(0,n.useCallback)((e,t)=>{let r=b(p.current,e),n=!m(d(e,o.getValuesSnapshot()),t),i=l(e,p.current);i[e]=n,h(i,r!==n)},[]),j=(0,n.useCallback)(e=>b(c.current,e),[]),S=(0,n.useCallback)(e=>h(t=>{if("string"!=typeof e)return t;let r=l(e,t);return(delete r[e],m(r,t))?t:r}),[]),w=(0,n.useCallback)(e=>{if(e){let t=d(e,p.current);return"boolean"==typeof t?t:!m(d(e,o.refValues.current),d(e,o.valuesSnapshot.current))}return Object.keys(p.current).length>0?b(p.current):!m(o.refValues.current,o.valuesSnapshot.current)},[]),E=(0,n.useCallback)(()=>p.current,[]),k=(0,n.useCallback)(()=>c.current,[]);return{touchedState:i,dirtyState:s,touchedRef:c,dirtyRef:p,setTouched:f,setDirty:h,resetDirty:e=>{let t=e?{...e,...o.refValues.current}:o.refValues.current;o.setValuesSnapshot(t),h({})},resetTouched:v,isTouched:j,setFieldTouched:y,setFieldDirty:g,setTouchedState:a,setDirtyState:u,clearFieldDirty:S,isDirty:w,getDirty:E,getTouched:k,setCalculatedFieldDirty:x}}({initialDirty:s,initialTouched:c,$values:C,mode:t}),I=function({$values:e,$errors:t,$status:r}){return{reorderListItem:(0,n.useCallback)((n,o)=>{r.clearFieldDirty(n),t.setErrors(e=>(function(e,{from:t,to:r},n){let o=`${e}.${t}`,i=`${e}.${r}`,a={...n};return Object.keys(n).every(e=>{let t,r;if(e.startsWith(o)&&(t=e,r=e.replace(o,i)),e.startsWith(i)&&(t=e.replace(i,o),r=e),t&&r){let e=a[t],n=a[r];return void 0===n?delete a[t]:a[t]=n,void 0===e?delete a[r]:a[r]=e,!1}return!0}),a})(n,o,e)),e.setValues({values:function(e,{from:t,to:r},n){let o=d(e,n);if(!Array.isArray(o))return n;let i=[...o],a=o[t];return i.splice(t,1),i.splice(r,0,a),h(e,i,n)}(n,o,e.refValues.current),updateState:!0})},[]),removeListItem:(0,n.useCallback)((n,o)=>{r.clearFieldDirty(n),t.setErrors(e=>u(n,o,e,-1)),e.setValues({values:function(e,t,r){let n=d(e,r);return Array.isArray(n)?h(e,n.filter((e,r)=>r!==t),r):r}(n,o,e.refValues.current),updateState:!0})},[]),insertListItem:(0,n.useCallback)((n,o,i)=>{r.clearFieldDirty(n),t.setErrors(e=>u(n,i,e,1)),e.setValues({values:function(e,t,r,n){let o=d(e,n);if(!Array.isArray(o))return n;let i=[...o];return i.splice("number"==typeof r?r:i.length,0,t),h(e,i,n)}(n,o,i,e.refValues.current),updateState:!0})},[])}}({$values:C,$errors:$,$status:T}),_=function({$status:e}){let t=(0,n.useRef)({}),r=(0,n.useCallback)((e,r)=>{(0,n.useEffect)(()=>(t.current[e]=t.current[e]||[],t.current[e].push(r),()=>{t.current[e]=t.current[e].filter(e=>e!==r)}),[r])},[]),o=(0,n.useCallback)(r=>t.current[r]?t.current[r].map(t=>n=>t({previousValue:d(r,n.previousValues),value:d(r,n.updatedValues),touched:e.isTouched(r),dirty:e.isDirty(r)})):[],[]);return{subscribers:t,watch:r,getFieldSubscribers:o}}({$status:T}),[z,V]=(0,n.useState)(0),[F,O]=(0,n.useState)({}),L=(0,n.useCallback)(()=>{C.resetValues(),$.clearErrors(),T.resetDirty(),T.resetTouched(),"uncontrolled"===t&&V(e=>e+1)},[]),D=(0,n.useCallback)(e=>{p&&$.clearErrors(),"uncontrolled"===t&&V(e=>e+1),Object.keys(_.subscribers.current).forEach(t=>{d(t,C.refValues.current)!==d(t,e)&&_.getFieldSubscribers(t).forEach(t=>t({previousValues:e,updatedValues:C.refValues.current}))})},[p]),R=(0,n.useCallback)(e=>{let r=C.refValues.current;C.initialize(e,()=>"uncontrolled"===t&&V(e=>e+1)),D(r)},[D]),P=(0,n.useCallback)((e,r,n)=>{let o=j(e,f),i=r instanceof Function?r(d(e,C.refValues.current)):r;T.setCalculatedFieldDirty(e,i),T.setFieldTouched(e,!0),!o&&p&&$.clearFieldError(e),C.setFieldValue({path:e,value:r,updateState:"controlled"===t,subscribers:[..._.getFieldSubscribers(e),o?t=>{let r=x(e,k,t.updatedValues);r.hasError?$.setFieldError(e,r.error):$.clearFieldError(e)}:null,n?.forceUpdate!==!1&&"controlled"!==t?()=>O(t=>({...t,[e]:(t[e]||0)+1})):null]})},[S,k]),W=(0,n.useCallback)(e=>{let r=C.refValues.current;C.setValues({values:e,updateState:"controlled"===t}),D(r)},[S,D]),N=(0,n.useCallback)(()=>{let e=g(k,C.refValues.current);return $.setErrors(e.errors),e},[k]),A=(0,n.useCallback)(e=>{let t=x(e,k,C.refValues.current);return t.hasError?$.setFieldError(e,t.error):$.clearFieldError(e),t},[k]),B=(0,n.useCallback)(e=>{e.preventDefault(),L()},[]),M=(0,n.useCallback)(e=>e?!x(e,k,C.refValues.current).hasError:!g(k,C.refValues.current).hasErrors,[k]),G=(0,n.useCallback)(t=>document.querySelector(`[data-path="${v(e,t)}"]`),[]),H={watch:_.watch,initialized:C.initialized.current,values:C.stateValues,getValues:C.getValues,setInitialValues:C.setValuesSnapshot,initialize:R,setValues:W,setFieldValue:P,errors:$.errorsState,setErrors:$.setErrors,setFieldError:$.setFieldError,clearFieldError:$.clearFieldError,clearErrors:$.clearErrors,resetDirty:T.resetDirty,setTouched:T.setTouched,setDirty:T.setDirty,isTouched:T.isTouched,resetTouched:T.resetTouched,isDirty:T.isDirty,getTouched:T.getTouched,getDirty:T.getDirty,reorderListItem:I.reorderListItem,insertListItem:I.insertListItem,removeListItem:I.removeListItem,reset:L,validate:N,validateField:A,getInputProps:(r,{type:n="input",withError:o=!0,withFocus:i=!0,...a}={})=>{var l;let s={onChange:(l=e=>P(r,e,{forceUpdate:!1}),e=>{if(e){if("function"==typeof e)l(e);else if("object"==typeof e&&"nativeEvent"in e){let{currentTarget:t}=e;t instanceof HTMLInputElement?"checkbox"===t.type?l(t.checked):l(t.value):(t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)&&l(t.value)}else l(e)}else l(e)}),"data-path":v(e,r)};return o&&(s.error=$.errorsState[r]),"checkbox"===n?s["controlled"===t?"checked":"defaultChecked"]=d(r,C.refValues.current):s["controlled"===t?"value":"defaultValue"]=d(r,C.refValues.current),i&&(s.onFocus=()=>T.setFieldTouched(r,!0),s.onBlur=()=>{if(j(r,y)){let e=x(r,k,C.refValues.current);e.hasError?$.setFieldError(r,e.error):$.clearFieldError(r)}}),Object.assign(s,E?.({inputProps:s,field:r,options:{type:n,withError:o,withFocus:i,...a},form:H}))},onSubmit:(e,t)=>r=>{r?.preventDefault();let n=N();n.hasErrors?t?.(n.errors,C.refValues.current,r):e?.(w(C.refValues.current),r)},onReset:B,isValid:M,getTransformedValues:e=>w(e||C.refValues.current),key:e=>`${z}-${e}-${F[e]||0}`,getInputNode:G};return e&&function(e){if(!/^[0-9a-zA-Z-]+$/.test(e))throw Error(`[@mantine/use-form] Form name "${e}" is invalid, it should contain only letters, numbers and dashes`)}(e),i(`mantine-form:${e}:set-field-value`,e=>H.setFieldValue(e.detail.path,e.detail.value)),i(`mantine-form:${e}:set-values`,e=>H.setValues(e.detail)),i(`mantine-form:${e}:set-initial-values`,e=>H.setInitialValues(e.detail)),i(`mantine-form:${e}:set-errors`,e=>H.setErrors(e.detail)),i(`mantine-form:${e}:set-field-error`,e=>H.setFieldError(e.detail.path,e.detail.error)),i(`mantine-form:${e}:clear-field-error`,e=>H.clearFieldError(e.detail)),i(`mantine-form:${e}:clear-errors`,H.clearErrors),i(`mantine-form:${e}:reset`,H.reset),i(`mantine-form:${e}:validate`,H.validate),i(`mantine-form:${e}:validate-field`,e=>H.validateField(e.detail)),i(`mantine-form:${e}:reorder-list-item`,e=>H.reorderListItem(e.detail.path,e.detail.payload)),i(`mantine-form:${e}:remove-list-item`,e=>H.removeListItem(e.detail.path,e.detail.index)),i(`mantine-form:${e}:insert-list-item`,e=>H.insertListItem(e.detail.path,e.detail.item,e.detail.index)),i(`mantine-form:${e}:set-dirty`,e=>H.setDirty(e.detail)),i(`mantine-form:${e}:set-touched`,e=>H.setTouched(e.detail)),i(`mantine-form:${e}:reset-dirty`,e=>H.resetDirty(e.detail)),i(`mantine-form:${e}:reset-touched`,H.resetTouched),H}},2191:function(e,t,r){"use strict";r.d(t,{M:function(){return l}});var n=r(7294),o=r(464),i=r(5294);let a=n["useId".toString()]||(()=>void 0);function l(e){let t=function(){let e=a();return e?`mantine-${e.replace(/:/g,"")}`:""}(),[r,l]=(0,n.useState)(t);return((0,o.Y)(()=>{l((0,i.k)())},[]),"string"==typeof e)?e:"undefined"==typeof window?t:r}},5294:function(e,t,r){"use strict";function n(){return`mantine-${Math.random().toString(36).slice(2,11)}`}r.d(t,{k:function(){return n}})}}]);