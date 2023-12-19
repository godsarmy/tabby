(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[642],{34602:function(e,n,s){Promise.resolve().then(s.bind(s,52281)),Promise.resolve().then(s.bind(s,93079))},52281:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return h}});var t=s(57437),r=s(61396),l=s.n(r),a=s(24033),i=s(7404),c=s(88809),o=s(39311),d=s(84168);function u(){let e=(0,c.av)(),n=(0,c.QJ)();return e&&(0,t.jsx)("div",{className:"flex justify-center py-4 text-sm font-medium",children:(0,t.jsxs)("span",{className:"flex items-center gap-2",children:[(0,t.jsx)("span",{title:"Sign out",children:(0,t.jsx)(d.gt,{className:"cursor-pointer",onClick:n})}),e.email]})})}function h(e){let{children:n,className:s}=e,{data:r}=(0,c.kP)(),l=(null==r?void 0:r.isAdmin)||!1;return(0,t.jsxs)("div",{className:(0,o.cn)("grid overflow-hidden lg:grid-cols-[280px_1fr]",s),children:[(0,t.jsx)("div",{className:"hidden border-r lg:block",children:(0,t.jsxs)("div",{className:"flex h-full flex-col gap-2",children:[(0,t.jsx)("div",{className:"h-[12px]"}),(0,t.jsx)("div",{className:"flex-1",children:(0,t.jsxs)("nav",{className:"grid items-start gap-2 px-4 text-sm font-medium",children:[(0,t.jsxs)(f,{href:"/",children:[(0,t.jsx)(d.A2,{})," Home"]}),l&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(f,{href:"/cluster",children:[(0,t.jsx)(d.im,{})," Cluster Information"]}),(0,t.jsxs)(f,{href:"/team",children:[(0,t.jsx)(d.Sr,{})," Team Management"]})]})]})}),(0,t.jsx)("div",{className:"mt-auto",children:(0,t.jsx)(u,{})})]})}),(0,t.jsx)("div",{className:"flex flex-1 flex-col overflow-auto",children:n})]})}s(2265);let x=(0,i.j)("flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-accent",{variants:{state:{selected:"bg-accent","not-selected":""}},defaultVariants:{state:"not-selected"}});function f(e){let{href:n,children:s}=e,r=(0,a.usePathname)();return(0,t.jsx)(l(),{className:x({state:r==n?"selected":"not-selected"}),href:n,children:s})}},93079:function(e,n,s){"use strict";s.r(n),s.d(n,{Header:function(){return b}});var t=s(57437),r=s(2265),l=s(61396),a=s.n(l),i=s(73737),c=s(91067),o=s(70349),d=s(13287),u=s(1589),h=s(8724),x=s(88809),f=s(39311),m=s(93023),j=s(84168),v=s(6435);function p(){let{setTheme:e,theme:n}=(0,v.F)(),[s,l]=r.useTransition();return(0,t.jsxs)(m.z,{variant:"ghost",size:"icon",onClick:()=>{l(()=>{e("light"===n?"dark":"light")})},children:["dark"===n?(0,t.jsx)(j.C9,{className:"transition-all"}):(0,t.jsx)(j.O3,{className:"transition-all"}),(0,t.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}function b(){var e;(0,x.av)();let{data:n}=(0,d.Q)(),s=(0,h.s)(),r=(0,c.Z)(s,o.xj.Chat),l=null==n?void 0:null===(e=n.version)||void 0===e?void 0:e.git_describe,{data:a}=(0,u.Z)("https://api.github.com/repos/TabbyML/tabby/releases/latest",e=>fetch(e).then(e=>e.json())),v=function(e,n){try{return e&&n&&(0,i.q)(n.name,e,">")}catch(e){return console.warn(e),!0}}(l,a);return(0,t.jsxs)("header",{className:"sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b px-4 backdrop-blur-xl",children:[(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("span",{className:"hidden select-none px-2 font-logo font-semibold sm:inline-block",children:"Tabby"}),(0,t.jsx)(g,{href:"/",children:"Dashboard"}),(0,t.jsx)(g,{href:"/api",children:"API"}),r&&(0,t.jsx)(g,{href:"/playground",children:"Playground"})]}),(0,t.jsxs)("div",{className:"flex items-center justify-end space-x-2",children:[(0,t.jsx)(p,{}),v&&(0,t.jsxs)("a",{target:"_blank",href:"https://github.com/TabbyML/tabby/releases/latest",rel:"noopener noreferrer",className:(0,m.d)({variant:"ghost"}),children:[(0,t.jsx)(j.Qs,{className:"text-yellow-600 dark:text-yellow-400"}),(0,t.jsxs)("span",{className:"ml-2 hidden md:flex",children:["New version (",null==a?void 0:a.name,") available"]})]}),(0,t.jsxs)("a",{target:"_blank",href:"https://github.com/TabbyML/tabby",rel:"noopener noreferrer",className:(0,f.cn)((0,m.d)({variant:"outline"})),children:[(0,t.jsx)(j.Mr,{}),(0,t.jsx)("span",{className:"ml-2 hidden md:flex",children:"GitHub"})]})]})]})}let g=e=>{let{children:n,href:s}=e;return(0,t.jsx)(a(),{href:s,className:(0,f.cn)((0,m.d)({variant:"link"}),"text-foreground"),children:n})}},13287:function(e,n,s){"use strict";s.d(n,{Q:function(){return a}});var t=s(30713),r=s(1592),l=s(88809);function a(){return(0,t.ZP)((0,l.X0)("/v1/health"),r.Z)}},8724:function(e,n,s){"use strict";s.d(n,{s:function(){return f}});var t=s(2265),r=s(16630),l=s(91317),a=s(35512),i=s(58835),c=s(70349),o=s(7820),d=s(13287);let u={[c.xj.Chat]:"chat_model",[c.xj.Completion]:"model"};function h(e,n){var s;return{kind:n,device:e.device,addr:"localhost",arch:"",cpuInfo:e.cpu_info,name:null!==(s=null==e?void 0:e[u[n]])&&void 0!==s?s:"",cpuCount:e.cpu_count,cudaDevices:e.cuda_devices}}let x=(0,i.BX)("\n  query GetWorkers {\n    workers {\n      kind\n      name\n      addr\n      device\n      arch\n      cpuInfo\n      cpuCount\n      cudaDevices\n    }\n  }\n");function f(){let{data:e}=(0,d.Q)(),{data:n}=(0,o.J9)(x),s=null==n?void 0:n.workers,i=t.useMemo(()=>{let n=(0,a.Z)(s),t=(0,r.Z)(n,{kind:c.xj.Completion})>-1,i=(0,r.Z)(n,{kind:c.xj.Chat})>-1;return!t&&(null==e?void 0:e.model)&&n.push(h(e,c.xj.Completion)),!i&&(null==e?void 0:e.chat_model)&&n.push(h(e,c.xj.Chat)),(0,l.Z)(n,"kind")},[e,s]);return i}},1592:function(e,n,s){"use strict";function t(e){let[n,s]=e,t=new Headers;return t.append("authorization","Bearer ".concat(s)),fetch(n,{headers:t}).then(e=>e.json())}s.d(n,{Z:function(){return t}})}},function(e){e.O(0,[320,948,505,787,894,971,864,744],function(){return e(e.s=34602)}),_N_E=e.O()}]);