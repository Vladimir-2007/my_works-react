(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6071:function(n,t,e){"use strict";var r=e(3038),i=e(862);t.default=void 0;var o=i(e(7294)),a=e(1689),s=e(2441),l=e(5749),u={};function d(n,t,e,r){if(n&&(0,a.isLocalURL)(t)){n.prefetch(t,e,r).catch((function(n){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:n&&n.locale;u[t+"%"+e+(i?"%"+i:"")]=!0}}var c=function(n){var t=!1!==n.prefetch,e=(0,s.useRouter)(),i=e&&e.asPath||"/",c=o.default.useMemo((function(){var t=(0,a.resolveHref)(i,n.href,!0),e=r(t,2),o=e[0],s=e[1];return{href:o,as:n.as?(0,a.resolveHref)(i,n.as):s||o}}),[i,n.href,n.as]),p=c.href,f=c.as,x=n.children,m=n.replace,h=n.shallow,g=n.scroll,b=n.locale;"string"===typeof x&&(x=o.default.createElement("a",null,x));var j=o.Children.only(x),v=j&&"object"===typeof j&&j.ref,y=(0,l.useIntersection)({rootMargin:"200px"}),k=r(y,2),w=k[0],C=k[1],_=o.default.useCallback((function(n){w(n),v&&("function"===typeof v?v(n):"object"===typeof v&&(v.current=n))}),[v,w]);(0,o.useEffect)((function(){var n=C&&t&&(0,a.isLocalURL)(p),r="undefined"!==typeof b?b:e&&e.locale,i=u[p+"%"+f+(r?"%"+r:"")];n&&!i&&d(e,p,f,{locale:r})}),[f,p,C,b,t,e]);var S={ref:_,onClick:function(n){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(n),n.defaultPrevented||function(n,t,e,r,i,o,s,l){("A"!==n.currentTarget.nodeName||!function(n){var t=n.currentTarget.target;return t&&"_self"!==t||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.nativeEvent&&2===n.nativeEvent.which}(n)&&(0,a.isLocalURL)(e))&&(n.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[i?"replace":"push"](e,r,{shallow:o,locale:l,scroll:s}))}(n,e,p,f,m,h,g,b)},onMouseEnter:function(n){(0,a.isLocalURL)(p)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(n),d(e,p,f,{priority:!0}))}};if(n.passHref||"a"===j.type&&!("href"in j.props)){var L="undefined"!==typeof b?b:e&&e.locale,M=e&&e.isLocaleDomain&&(0,a.getDomainLocale)(f,L,e&&e.locales,e&&e.domainLocales);S.href=M||(0,a.addBasePath)((0,a.addLocale)(f,L,e&&e.defaultLocale))}return o.default.cloneElement(j,S)};t.default=c},5749:function(n,t,e){"use strict";var r=e(3038);t.__esModule=!0,t.useIntersection=function(n){var t=n.rootMargin,e=n.disabled||!a,l=(0,i.useRef)(),u=(0,i.useState)(!1),d=r(u,2),c=d[0],p=d[1],f=(0,i.useCallback)((function(n){l.current&&(l.current(),l.current=void 0),e||c||n&&n.tagName&&(l.current=function(n,t,e){var r=function(n){var t=n.rootMargin||"",e=s.get(t);if(e)return e;var r=new Map,i=new IntersectionObserver((function(n){n.forEach((function(n){var t=r.get(n.target),e=n.isIntersecting||n.intersectionRatio>0;t&&e&&t(e)}))}),n);return s.set(t,e={id:t,observer:i,elements:r}),e}(e),i=r.id,o=r.observer,a=r.elements;return a.set(n,t),o.observe(n),function(){a.delete(n),o.unobserve(n),0===a.size&&(o.disconnect(),s.delete(i))}}(n,(function(n){return n&&p(n)}),{rootMargin:t}))}),[e,t,c]);return(0,i.useEffect)((function(){if(!a&&!c){var n=(0,o.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,o.cancelIdleCallback)(n)}}}),[c]),[f,c]};var i=e(7294),o=e(8391),a="undefined"!==typeof IntersectionObserver;var s=new Map},5149:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return Zn}});var r=e(5893),i=(e(7294),function(){return(0,r.jsx)("div",{children:(0,r.jsxs)("svg",{className:"BgAnimation__svg",viewBox:"0 0 602 602",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsxs)("g",{opacity:"0.15",children:[(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",stroke:"url(#paint0_radial)",id:"path_0"}),(0,r.jsx)("path",{d:"M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",stroke:"url(#paint1_radial)",id:"path_1"}),(0,r.jsx)("path",{d:"M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",stroke:"url(#paint2_radial)",id:"path_2"})]}),(0,r.jsx)("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#945DD6",children:(0,r.jsx)("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:(0,r.jsx)("mpath",{xlinkHref:"#path_2"})})}),(0,r.jsx)("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint3_linear)",children:(0,r.jsx)("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:(0,r.jsx)("mpath",{xlinkHref:"#path_2"})})}),(0,r.jsx)("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#46737",children:(0,r.jsx)("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:(0,r.jsx)("mpath",{xlinkHref:"#path_2"})})}),(0,r.jsx)("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint7_linear)",children:(0,r.jsx)("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:(0,r.jsx)("mpath",{xlinkHref:"#path_2"})})}),(0,r.jsx)("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#945DD6",children:(0,r.jsx)("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:(0,r.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,r.jsx)("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint4_linear)",children:(0,r.jsx)("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:(0,r.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,r.jsx)("ellipse",{cx:"382.164",cy:"155.029",rx:"1.07433",ry:"1.07306",transform:"translate(-382.164 -155.029) rotate(90 382.164 155.029)",fill:"#F46737",children:(0,r.jsx)("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:(0,r.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,r.jsx)("path",{d:"M381.81 154.669L356.057 128.885",transform:"translate(-381.81 -154.669) rotate(-45 381.81 154.669)",stroke:"url(#paint5_linear)",children:(0,r.jsx)("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:(0,r.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,r.jsx)("ellipse",{cx:"333.324",cy:"382.691",rx:"1.07306",ry:"1.07433",transform:"translate(-333.324 -382.691) rotate(-180 333.324 382.691)",fill:"#F46737",children:(0,r.jsx)("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto",children:(0,r.jsx)("mpath",{xlinkHref:"#path_1"})})}),(0,r.jsx)("path",{d:"M333.667 382.335L359.42 356.551",transform:"scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",stroke:"url(#paint6_linear)",children:(0,r.jsx)("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto",children:(0,r.jsx)("mpath",{xlinkHref:"#path_1"})})}),(0,r.jsx)("ellipse",{cx:"165.524",cy:"93.9596",rx:"1.07306",ry:"1.07433",transform:"translate(-165.524 -93.9596)",fill:"#F46737",children:(0,r.jsx)("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto",children:(0,r.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,r.jsx)("path",{d:"M165.182 94.3159L139.429 120.1",transform:"translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",stroke:"url(#paint7_linear)",children:(0,r.jsx)("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto",children:(0,r.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,r.jsx)("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#13ADC7",children:(0,r.jsx)("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto",children:(0,r.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,r.jsx)("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint11_linear)",children:(0,r.jsx)("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto",children:(0,r.jsx)("mpath",{xlinkHref:"#path_0"})})}),(0,r.jsxs)("defs",{children:[(0,r.jsxs)("radialGradient",{id:"paint0_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[(0,r.jsx)("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),(0,r.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),(0,r.jsxs)("radialGradient",{id:"paint1_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[(0,r.jsx)("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),(0,r.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),(0,r.jsxs)("radialGradient",{id:"paint2_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[(0,r.jsx)("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),(0,r.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),(0,r.jsxs)("linearGradient",{id:"paint3_linear",x1:"295.043",y1:"193.116",x2:"269.975",y2:"218.154",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{stopColor:"#945DD6"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})]}),(0,r.jsxs)("linearGradient",{id:"paint4_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{stopColor:"#945DD6"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})]}),(0,r.jsxs)("linearGradient",{id:"paint5_linear",x1:"382.168",y1:"155.027",x2:"357.1",y2:"129.989",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{stopColor:"#F46737"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})]}),(0,r.jsxs)("linearGradient",{id:"paint6_linear",x1:"333.309",y1:"382.693",x2:"358.376",y2:"357.655",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{stopColor:"#F46737"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})]}),(0,r.jsxs)("linearGradient",{id:"paint7_linear",x1:"165.54",y1:"93.9578",x2:"140.472",y2:"118.996",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{stopColor:"#F46737"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})]}),(0,r.jsxs)("linearGradient",{id:"paint8_linear",x1:"414.367",y1:"301.156",x2:"439.435",y2:"276.118",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{stopColor:"#13ADC7"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})]}),(0,r.jsxs)("linearGradient",{id:"paint9_linear",x1:"515.943",y1:"288.238",x2:"541.339",y2:"291.454",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{stopColor:"#13ADC7"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})]}),(0,r.jsxs)("linearGradient",{id:"paint10_linear",x1:"117.001",y1:"230.619",x2:"117.36",y2:"258.193",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{stopColor:"#945DD6"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})]}),(0,r.jsxs)("linearGradient",{id:"paint11_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{stopColor:"#13ADC7"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})]})]})]})})}),o=e(2465),a=e(9163);function s(){var n=(0,o.Z)(["\n  display: flex;  \n  height: ",";\n\n  @media "," {\n    height: ",";\n  }\n\n  @media "," {\n    height: ",";\n  }\n"]);return s=function(){return n},n}function l(){var n=(0,o.Z)(["\n  margin-left: ",";\n  transition: 0.3s ease;\n  justify-content: center;\n  border-radius: 50px;\n  padding: 8px;\n\n  &:hover {\n    background-color: #212d45;\n    transform: scale(1.2);\n    cursor: pointer;\n  }\n\n  @media "," {\n    margin-left: ",";\n\n  }\n  @media "," {\n    margin-left: ",";\n  }\n"]);return l=function(){return n},n}function u(){var n=(0,o.Z)(["\n  border: none;\n  border-radius: 50px;\n  color: #fff;\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: ",";\n  opacity: ",";\n  transition: .4s ease;\n  font-size: ",";\n  font-weight: 600;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: ",";\n\n  &:hover {\n    opacity: 0;\n  }\n  &:focus {\n    outline: none;\n  }\n  &:active {\n    opacity: 1;\n    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);\n  }\n\n  &:disabled{\n    background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);\n    opacity: 0.5;\n    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);\n  }\n\n  @media "," {\n    font-size: ",";\n  }\n\n  @media "," {\n    font-size: 14px;\n  }\n"]);return u=function(){return n},n}function d(){var n=(0,o.Z)(["\n  width: ",";\n  height: ",";\n  border-radius: 50px;\n  font-size: ",";\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: ",";\n  color: #fff;\n  background: ",";\n  cursor: pointer;\n  transition: 0.5s ease;\n  position: relative;\n  overflow: hidden;\n  opacity: ",";\n\n  @media "," {\n    width: ",";\n    height: ",";\n    font-size: ",";\n    margin-bottom: ",";\n  }\n\n  @media "," {\n    width: 100%;\n    height: 32px;\n    font-size: 14px;\n    margin-bottom: ",";\n  }\n"]);return d=function(){return n},n}function c(){var n=(0,o.Z)(["\n  color: #FFF;\n  background: none;\n  border: 1px solid rgba(255, 255, 255, 0.33);\n  box-sizing: border-box;\n  border-radius: 999px;\n  padding: 16px 24px;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 16px;\n  width: fit-content;\n  margin-top: 32px;\n  margin-bottom: 80px;\n  cursor: pointer;\n  transition: 0.4s ease;\n  &:focus {\n    outline: none;\n  }\n\n  &:hover {\n    color: #0f1624;\n    background: #fff;\n    border: 1px solid #fff;\n  }\n\n  &:active {\n    background: #e0e4eb;\n    border: 1px solid #304169;\n    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);\n  }\n\n  @media ","{\n    margin-top: 24px; \n    margin-bottom: 64px;\n    padding: 16px 24px;\n    width: fit-content;\n    font-size: 20px;\n    line-height: 20px;\n  }\n\n  @media "," {\n    margin-top: 16px;\n    margin-bottom: 40px;\n    padding: 8px 16px;\n    width: 100%;\n    font-size: 14px;\n    line-height: 16px;\n  }\n"]);return c=function(){return n},n}function p(){var n=(0,o.Z)(["\n  max-width: 800px;\n  font-weight: 300;\n  font-size: 18px;\n  line-height: 32px;\n  color: rgba(255, 255, 255, 0.75);\n\n@media "," {\n    max-width: 672px;\n    font-size: 16px;\n    line-height: 25px;\n  }\n\n  @media "," {\n    font-size: 14px;\n    line-height: 22px;\n  }\n"]);return p=function(){return n},n}function f(){var n=(0,o.Z)(["\n\n  width: 64px;\n  height: 6px;\n  border-radius: 10px;\n  background-color: #fff;\n  background: ",";\n\n    margin: ",";\n\n  @media "," {\n    width: 48px;\n    height: 4px;\n  }\n\n  @media "," {\n    width: 32px;\n    height: 2px;\n  }\n"]);return f=function(){return n},n}function x(){var n=(0,o.Z)(["\n  max-width: 800px;\n  font-size: 24px;\n  line-height: 40px;\n  font-weight: 300;\n  padding-bottom: 3.6rem;\n  color: rgba(255, 255, 255, 0.5);\n\n  @media "," {\n    max-width: 670px;\n    font-size: 20px;\n    line-height: 32px;\n    padding-bottom: 24px;\n  }\n\n  @media "," {\n    font-size: 16px;\n    line-height: 24px;\n    padding-bottom: 16px;\n  }\n"]);return x=function(){return n},n}function m(){var n=(0,o.Z)(["\n  font-weight: 800;\n  font-size: ",";\n  line-height: ",";\n  width: max-content;\n  max-width: 100%;\n  display: flex;\n  align-items: center;\n  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin-bottom: 16px;\n  padding: ",";\n\n  @media ","{\n    font-size: ",";\n    line-height: ",";\n    margin-bottom: 12px;\n    padding: ",";\n  }\n\n  @media ","{\n    font-size: 32px;\n    line-height: 40px;\n    font-size: ",";\n    line-height: ",";\n    margin-bottom: 8px;\n    padding: ",";\n    max-width: 100%;\n  }\n"]);return m=function(){return n},n}function h(){var n=(0,o.Z)(["\n  display: ",";\n  flex-direction: ",";\n  padding: "," ;\n  margin: 0 auto;\n  max-width: 1040px;\n  box-sizing: content-box;\n  position: relative;\n  overflow: hidden;\n  grid-template-columns: 1fr 1fr;\n\n  @media "," {\n    padding: 24px 48px 0;\n    flex-direction: column;\n  }\n\n  @media "," {\n    padding: "," ;\n\n    width: calc(100vw - 32px);\n    flex-direction: column;\n  }\n"]);return h=function(){return n},n}var g=a.default.section(h(),(function(n){return n.grid?"grid":"flex"}),(function(n){return n.row?"row":"column"}),(function(n){return n.nopadding?"0":"32px 48px 0"}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.nopadding?"0":"16px 16px 0"})),b=a.default.h2(m(),(function(n){return n.main?"65px":"56px"}),(function(n){return n.main?"72px":"56px"}),(function(n){return n.main?"58px 0 16px":"0"}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.main?"56px":"48px"}),(function(n){return n.main?"56px":"48px"}),(function(n){return n.main?"40px 0 12px":"0"}),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.main?"28px":"32px"}),(function(n){return n.main?"32px":"40px"}),(function(n){return n.main?"16px 0 8px":"0"})),j=a.default.p(x(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),v=a.default.div(f(),(function(n){return n.colorAlt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"}),(function(n){return n.divider?"4rem 0":""}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm}));a.default.p(p(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),a.default.button(c(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),a.default.div(d(),(function(n){return n.alt?"150px":"262px"}),(function(n){return n.alt?"52px":"64px"}),(function(n){return n.alt?"20px":"24px"}),(function(n){var t=n.alt,e=n.form;return t||e?"0":"0 0 80px"}),(function(n){return n.alt?"linear-gradient(270deg, #ff622e 0%, #B133FF 100%)":"linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)"}),(function(n){return n.disabled?".5":"1"}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.alt?"150px":"184px"}),(function(n){return n.alt?"52px":"48px"}),(function(n){return n.alt?"20px":"16px"}),(function(n){return n.alt?"0":"64px"}),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.alt?"0":"32px"})),a.default.button(u(),(function(n){return n.alt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"}),(function(n){return n.disabled?".5":"1"}),(function(n){return n.alt?"20px":"24px"}),(function(n){return n.disabled?"inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)":"none"}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.alt?"20px":"16px"}),(function(n){return n.theme.breakpoints.sm})),a.default.div(l(),(function(n){return n.large?"24px":"16px"}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.large?"16px":"8px"}),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.large?"0":"8px"})),a.default.div(s(),(function(n){return n.large?"32px":"24px"}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.nav?"16px":"24px"}),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.large?"32px":"16px"}));function y(){var n=(0,o.Z)(["\n  width: 100%;\n  @media "," {\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    margin: 0 auto;\n\n  }\n  @media "," {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    margin: 0 auto;\n  }\n"]);return y=function(){return n},n}a.default.div(y(),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.theme.breakpoints.md}));var k=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(g,{row:!0,nopadding:!0,children:(0,r.jsxs)(b,{main:!0,center:!0,children:["Welcome To ",(0,r.jsx)("br",{}),"My Personal Portfolio"]})})})};function w(){var n=(0,o.Z)(["\n  color: #d8bfbf;\n  font-size: 1.5rem;\n"]);return w=function(){return n},n}function C(){var n=(0,o.Z)(["\n  display: flex;\n  justify-content: space-around;\n  padding: 2rem;\n"]);return C=function(){return n},n}function _(){var n=(0,o.Z)(["\n  color: #d4c0c0;\n  font-size: 1.6rem;\n  padding: 1rem 1.5rem;\n  background: #6b3030;\n  border-radius: 15px;\n  transition: 0.5s;\n\n  &:hover {\n    background: #801414;\n\n  }\n"]);return _=function(){return n},n}function S(){var n=(0,o.Z)(["\n  list-style-type: none;\n  padding: 0;\n  display: flex;\n  justify-content: space-around;\n  margin: 2.5rem 0;\n"]);return S=function(){return n},n}function L(){var n=(0,o.Z)(["\n  width: 100%;\n  padding: 0 50px;\n  color: #e4e6e7;\n  font-style: 2rem;\n  line-height: 24px;\n  text-align: justify;\n  @media "," {\n    padding: .3rem\n\n  }\n"]);return L=function(){return n},n}function M(){var n=(0,o.Z)(["\n  width: 170px;\n  margin: 0 auto;\n  color: #dce3e7;\n  font-family: 'Droid Serif', serif;\n  font-size: 13px;\n  font-style: italic;\n  line-height: 18px;\n"]);return M=function(){return n},n}function F(){var n=(0,o.Z)(["\n  width: 50px;\n  height: 1px;\n  margin: 10px auto;\n  border: 0;\n  background: #d0bb57;\n"]);return F=function(){return n},n}function z(){var n=(0,o.Z)(["\n  font-weight: 500;\n  letter-spacing: 2px;\n  color: #9cc9e3;\n  padding: .5rem 0;\n  font-size: ",";\n"]);return z=function(){return n},n}function Z(){var n=(0,o.Z)(["\n  text-align: center;\n  z-index: 20;\n  width: 100%;\n\n"]);return Z=function(){return n},n}function O(){var n=(0,o.Z)(["\n  border-radius: 10px;\n  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);\n  text-align: center;\n  width: 400px;\n  @media "," {\n    width: 100%;\n  }\n"]);return O=function(){return n},n}function D(){var n=(0,o.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n  padding: 2rem;\n  place-items: start;\n  column-gap: 2rem;\n  row-gap: 3rem;\n  @media "," {\n    display: flex;\n    flex-direction: column;\n    padding: 2rem;\n    padding-bottom: 0;\n  }\n"]);return D=function(){return n},n}function U(){var n=(0,o.Z)(["\n  width: 100%;\n  height: auto;\n  object-fit: cover;\n  overflow: hidden;\n"]);return U=function(){return n},n}var H=a.default.img(U()),T=a.default.section(D(),(function(n){return n.theme.breakpoints.sm})),E=a.default.div(O(),(function(n){return n.theme.breakpoints.sm})),B=a.default.div(Z()),G=a.default.h3(z(),(function(n){return n.title?"3rem":"2rem"})),J=a.default.hr(F()),N=(a.default.div(M()),a.default.p(L(),(function(n){return n.theme.breakpoints.sm}))),R=a.default.ul(S()),P=a.default.a(_()),A=a.default.ul(C()),I=a.default.li(w()),K=[{title:"Fashion Shop",description:"Landing. Using HTML, CSS, JavaScript, Gulp4. ",image:"images/fashion_shop.png",tags:["HTML","CSS","JS"],source:"https://google.com",visit:"my_works/fashion_shop/index.html",id:1},{title:"Bino Free",description:"Landing. Using HTML, CSS, JavaScript, Gulp4. ",image:"images/bino_free.png",tags:["HTML","CSS","JS"],source:"https://google.com",visit:"my_works/bino_free/index.html",id:2},{title:"Blog Bystef",description:"Landing. Using HTML, CSS, JavaScript, Gulp4. ",image:"images/blog_bystef.png",tags:["HTML","CSS"],source:"https://google.com",visit:"my_works/blog_bystef/index.html",id:3},{title:"Home Retina",description:"Landing. Using HTML, CSS, JavaScript, Gulp4. ",image:"images/home_retina.png",tags:["HTML","CSS","JS"],source:"https://google.com",visit:"my_works/home_retina/index.html",id:4},{title:"Miligram",description:"Landing. Using HTML, CSS, JavaScript, Gulp4. ",image:"images/miligram.png",tags:["HTML","CSS","JS"],source:"https://google.com",visit:"my_works/miligram/index.html",id:5},{title:"Miligram",description:"Landing. Using HTML, CSS, JavaScript, Gulp4. ",image:"images/smart_movies.png",tags:["HTML","CSS","JS"],source:"https://google.com",visit:"my_works/smart_movies/index.html",id:6},{title:"Miligram",description:"Landing. Using HTML, CSS, JavaScript, Gulp4. ",image:"images/transport_company.png",tags:["HTML","CSS","JS"],source:"https://google.com",visit:"my_works/transport_company/index.html",id:7},{title:"Remont",description:"Landing. Using HTML, CSS, JavaScript, Gulp4. ",image:"images/remont.png",tags:["HTML","CSS","JS"],source:"https://google.com",visit:"my_works/remont/index.html",id:8},{title:"Anon",description:"Landing. Using HTML, CSS, JavaScript, Gulp4. ",image:"images/anon.png",tags:["HTML","CSS","JS"],source:"https://google.com",visit:"my_works/anon/index.html",id:9},{title:"Watercraft",description:"Landing. Using HTML, CSS, JavaScript, Gulp4. ",image:"images/watercraft.png",tags:["HTML","CSS","JS"],source:"https://google.com",visit:"my_works/gidrocikle/index.html",id:10}],W=function(){return(0,r.jsxs)(g,{nopadding:!0,id:"projects",children:[(0,r.jsx)(v,{}),(0,r.jsx)(b,{main:!0,children:"Projects"}),(0,r.jsx)(T,{children:K.map((function(n,t){return(0,r.jsxs)(E,{children:[(0,r.jsx)(H,{src:n.image}),(0,r.jsxs)(B,{children:[(0,r.jsx)(G,{title:"hello",children:n.title}),(0,r.jsx)(J,{})]}),(0,r.jsx)(N,{className:"card-info",children:n.description}),(0,r.jsx)("div",{children:(0,r.jsx)(A,{children:n.tags.map((function(n,t){return(0,r.jsx)(I,{children:n},t)}))})}),(0,r.jsxs)(R,{children:[(0,r.jsx)(P,{href:n.visit,target:"_blank",children:"View"}),(0,r.jsx)(P,{href:n.source,children:"Source"})]})]},t)}))})]})},X=e(859);function V(){var n=(0,o.Z)(["\n  display: block;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 10px;\n  \n  @media ","{\n    width: 40px;\n    height: 40px;\n    margin-bottom: 8px;\n  }\n\n  @media ","{\n    width: 32px;\n    height: 32px;\n    margin-bottom: 0px;\n  }\n"]);return V=function(){return n},n}function Y(){var n=(0,o.Z)(["\n  max-width: 320px;\n  display: flex;\n  flex-direction: column;\n\n@media ","{\n  max-width: 203px;\n}\n\n@media ","{\n  margin-bottom: 14px;\n  max-width: 320px;\n  flex-direction: row;\n}\n"]);return Y=function(){return n},n}function q(){var n=(0,o.Z)(["\n  font-size: 18px;\n  line-height: 30px;\n  color: rgba(255, 255, 255, 0.75);\n\n  @media ","{\n    font-size: 16px;\n    line-height: 28px;\n  }\n\n  @media ","{\n    font-size: 14px;\n    line-height: 22px;\n  }\n"]);return q=function(){return n},n}function $(){var n=(0,o.Z)(["\n  font-weight: 700;\n  font-size: 28px;\n  line-height: 32px;\n  letter-spacing: 0.02em;\n  color: #FFFFFF;\n  margin-bottom: 8px;\n\n@media ","{\n  font-size: 24px;\n  line-height: 28px;\n}\n\n@media ","{\n  font-size: 20px;\n  line-height: 28px;\n  letter-spacing: 0.02em;\n  margin-bottom: 4px;\n}\n"]);return $=function(){return n},n}function Q(){var n=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  @media ","{\n    display: flex;\n    margin-left: 18px;\n  }\n"]);return Q=function(){return n},n}function nn(){var n=(0,o.Z)(["\n  list-style-type: none;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 40px;\n  margin: 3rem 0;\n  \n  @media ","{\n    margin: 64px 0;\n  }\n\n  @media ","{\n    margin: 64px 0;\n    gap: 24px\n  }\n  \n  @media ","{\n    display: flex;\n    flex-direction: column;\n    margin: 32px 0;\n  }\n"]);return nn=function(){return n},n}function tn(){var n=(0,o.Z)(["\n  width: 100%;\n"]);return tn=function(){return n},n}function en(){var n=(0,o.Z)(["\n  text-align: center;\n  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);\n  width: 100%;\n  padding: 60px;\n  margin-top: 48px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  @media "," {\n    background-image: none;\n    padding: 0;\n    margin-top: 40px;\n  }\n  @media "," {\n    background-image: none;\n    padding: 0;\n    margin-top: 16px;\n  }\n"]);return en=function(){return n},n}a.default.div(en(),(function(n){return n.theme.breakpoints.lg}),(function(n){return n.theme.breakpoints.md})),a.default.img(tn());var rn=a.default.ul(nn(),(function(n){return n.theme.breakpoints.lg}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),on=a.default.div(Q(),(function(n){return n.theme.breakpoints.sm})),an=a.default.h4($(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),sn=a.default.p(q(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),ln=a.default.li(Y(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),un=(a.default.img(V(),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm})),function(){return(0,r.jsxs)(g,{id:"tech",children:[(0,r.jsx)(v,{divider:!0}),(0,r.jsx)(b,{children:"Technologies"}),(0,r.jsx)(j,{}),(0,r.jsxs)(rn,{children:[(0,r.jsxs)(ln,{children:[(0,r.jsx)("picture",{children:(0,r.jsx)(X.GR$,{size:"3rem"})}),(0,r.jsxs)(on,{children:[(0,r.jsx)(an,{children:"Front-End"}),(0,r.jsxs)(sn,{children:["Experiece with ",(0,r.jsx)("br",{}),"React.js"]})]})]}),(0,r.jsxs)(ln,{children:[(0,r.jsx)("picture",{children:(0,r.jsx)(X.BwW,{size:"3rem"})}),(0,r.jsxs)(on,{children:[(0,r.jsx)(an,{children:"Back-End"}),(0,r.jsxs)(sn,{children:["Experience with ",(0,r.jsx)("br",{}),"Node and Databases"]})]})]}),(0,r.jsxs)(ln,{children:[(0,r.jsx)("picture",{children:(0,r.jsx)(X.MSM,{size:"3rem"})}),(0,r.jsxs)(on,{children:[(0,r.jsx)(an,{children:"UI/UX"}),(0,r.jsxs)(sn,{children:["Experience with ",(0,r.jsx)("br",{}),"tools like Figma"]})]})]})]})]})}),dn=e(1664),cn=e(2821),pn=e(1649);function fn(){var n=(0,o.Z)(["\n  transition: 0.3s ease;\n  color: white;\n  border-radius: 50px;\n  padding: 8px;\n\n  &:hover {\n    background-color: #212d45;\n    transform: scale(1.2);\n    cursor: pointer;\n\n  }\n"]);return fn=function(){return n},n}function xn(){var n=(0,o.Z)(["\n  margin-left: 8px;\n  display: flex;\n  align-self: center;\n  transition: 0.3s ease;\n  opacity: ",";\n  transform: ",";\n\n  &:hover {\n    opacity: 1;\n  }\n\n  @media "," {\n    margin: 2px 0 0 2px;\n    width: 15px;\n  }\n"]);return xn=function(){return n},n}function mn(){var n=(0,o.Z)(["\n  border: none;\n  display: flex;\n  position: relative;\n  background: none;\n  font-size: 1.7rem;\n\n  line-height: 32px;\n  color: rgba(255, 255, 255, 0.75);\n  cursor: pointer;\n  transition: 0.3s ease;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:hover {\n    color: #fff;\n  }\n\n  @media "," {\n    padding: 0.4rem 0;\n  }\n  @media "," {\n    padding: 0;\n  }\n"]);return mn=function(){return n},n}function hn(){var n=(0,o.Z)(["\n  font-size: 2rem;\n  line-height: 32px;\n  color: rgba(255, 255, 255, 0.75);\n  transition: 0.4s ease;\n\n  &:hover {\n    color: #fff;\n    opacity: 1;\n    cursor: pointer;\n  }\n\n  @media "," {\n    padding: 0.5rem;\n  }\n"]);return hn=function(){return n},n}function gn(){var n=(0,o.Z)(["\n  grid-area: 1 / 5 / 2 / 6;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  @media "," {\n    align-items: center;\n    grid-area: 1 / 4 / 2 / 6;\n  }\n"]);return gn=function(){return n},n}function bn(){var n=(0,o.Z)(["\n  grid-area: 1 / 2 / 2 / 4;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  @media "," {\n    grid-area: 2 / 2 / 3 / 5;\n  }\n"]);return bn=function(){return n},n}function jn(){var n=(0,o.Z)(["\n  grid-area: 1 / 1 / 2 / 2;\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  @media "," {\n    grid-area: 1 / 1 / 2 / 3;\n  }\n"]);return jn=function(){return n},n}function vn(){var n=(0,o.Z)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 2rem;\n  padding: 1rem;\n  padding-top: 2rem;\n\n  @media "," {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(2, 60px);\n    grid-column-gap: 0.5rem;\n    grid-row-gap: 0.5rem;\n  }\n"]);return vn=function(){return n},n}var yn=a.default.div(vn(),(function(n){return n.theme.breakpoints.sm})),kn=a.default.div(jn(),(function(n){return n.theme.breakpoints.sm})),wn=a.default.div(bn(),(function(n){return n.theme.breakpoints.sm})),Cn=a.default.div(gn(),(function(n){return n.theme.breakpoints.sm})),_n=a.default.a(hn(),(function(n){return n.theme.breakpoints.sm})),Sn=(a.default.button(mn(),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.theme.breakpoints.md})),(0,a.default)(pn.U0j)(xn(),(function(n){return n.isOpen?"1":".75"}),(function(n){return n.isOpen?"scaleY(-1)":"scaleY(1)"}),(function(n){return n.theme.breakpoints.sm})),a.default.a(fn())),Ln=function(){return(0,r.jsxs)(yn,{children:[(0,r.jsx)(kn,{children:(0,r.jsx)(dn.default,{href:"/",children:(0,r.jsxs)("a",{style:{display:"flex",alignItems:"center",color:"white"},children:[(0,r.jsx)(X.k75,{size:"3rem",style:{paddingBottom:"7px",fill:"red",marginRight:"5px"}})," ",(0,r.jsx)("span",{children:"SVeM Portfolio"})]})})}),(0,r.jsxs)(wn,{children:[(0,r.jsx)("li",{children:(0,r.jsx)(dn.default,{href:"#projects",children:(0,r.jsx)(_n,{children:"Projects"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(dn.default,{href:"#tech",children:(0,r.jsx)(_n,{children:"Technologies"})})})]}),(0,r.jsx)(Cn,{children:(0,r.jsx)(Sn,{href:"https://github.com",children:(0,r.jsx)(cn.RrF,{size:"3rem"})})})]})};function Mn(){var n=(0,o.Z)(["\n  max-width: 1280px;\n  width: 100%;\n  margin: auto;\n"]);return Mn=function(){return n},n}var Fn=a.default.div(Mn()),zn=function(n){var t=n.children;return(0,r.jsxs)(Fn,{children:[(0,r.jsx)(Ln,{}),(0,r.jsx)("main",{children:t})]})},Zn=function(){return(0,r.jsxs)(zn,{children:[(0,r.jsxs)(g,{grid:!0,children:[(0,r.jsx)(k,{}),(0,r.jsx)(i,{})]}),(0,r.jsx)(W,{}),(0,r.jsx)(un,{})]})}},8581:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(5149)}])},1664:function(n,t,e){n.exports=e(6071)},4405:function(n,t,e){"use strict";e.d(t,{w_:function(){return u}});var r=e(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),a=function(){return(a=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}).apply(this,arguments)},s=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]])}return e};function l(n){return n&&n.map((function(n,t){return r.createElement(n.tag,a({key:t},n.attr),l(n.child))}))}function u(n){return function(t){return r.createElement(d,a({attr:a({},n.attr)},t),l(n.child))}}function d(n){var t=function(t){var e,i=n.attr,o=n.size,l=n.title,u=s(n,["attr","size","title"]),d=o||t.size||"1em";return t.className&&(e=t.className),n.className&&(e=(e?e+" ":"")+n.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,u,{className:e,style:a(a({color:n.color||t.color},t.style),n.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),n.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(n){return t(n)})):t(i)}}},function(n){n.O(0,[866,921,617,774,888,179],(function(){return t=8581,n(n.s=t);var t}));var t=n.O();_N_E=t}]);