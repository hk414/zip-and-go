(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{961:function(e,t,r){Promise.resolve().then(r.bind(r,5357)),Promise.resolve().then(r.t.bind(r,215,23))},5357:function(e,t,r){"use strict";var n=r(7437),s=r(2265),i=r(2222);t.default=()=>{let[e,t]=(0,s.useState)(!1),[r,a]=(0,s.useState)([]),[o,l]=(0,s.useState)(""),d=()=>{t(!e),e||a([{text:"Hi! How can I help you today?",sender:"bot"}])},c=async()=>{if(!o.trim())return;let e=[...r,{text:o,sender:"user"}];a(e),l("");let t=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:o})});a([...e,{text:(await t.json()).reply,sender:"bot"}])};return(0,n.jsxs)("div",{className:"fixed bottom-4 right-4 z-50 transition-all ".concat(e?"w-96":"w-16"),children:[!e&&(0,n.jsx)("button",{onClick:d,className:"w-16 h-16 bg-indigo-600 text-white rounded-full flex justify-center items-center shadow-lg transition-all duration-300",children:(0,n.jsx)(i.Z,{className:"h-6 w-6"})}),e&&(0,n.jsxs)("div",{className:"bg-indigo-100 w-96 h-96 rounded-lg shadow-lg flex flex-col overflow-hidden",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center p-4 bg-indigo-600 text-white",children:[(0,n.jsx)("h2",{className:"text-sm font-medium",children:"Chat with Us"}),(0,n.jsx)("button",{onClick:d,className:"text-white text-xl font-semibold transition-transform duration-300 hover:rotate-45",children:"X"})]}),(0,n.jsx)("div",{className:"flex-1 p-4 overflow-y-auto space-y-4",children:r.map((e,t)=>(0,n.jsx)("div",{className:"flex ".concat("user"===e.sender?"justify-end":"justify-start"),children:(0,n.jsx)("div",{className:"p-3 rounded-lg max-w-xs ".concat("user"===e.sender?"bg-indigo-600 text-white":"bg-white text-gray-800"),children:e.text})},t))}),(0,n.jsxs)("div",{className:"p-4 border-t bg-gray-50",children:[(0,n.jsx)("input",{type:"text",value:o,onChange:e=>{l(e.target.value)},onKeyDown:e=>"Enter"===e.key&&c(),className:"w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm",placeholder:"Type your message..."}),(0,n.jsx)("button",{onClick:c,className:"mt-2 w-full bg-indigo-600 text-white p-2 rounded-lg text-sm",children:"Send"})]})]})]})}},9205:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(2265);let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:d="",children:c,iconNode:u,...h}=e;return(0,n.createElement)("svg",{ref:t,...a,width:s,height:s,stroke:r,strokeWidth:l?24*Number(o)/Number(s):o,className:i("lucide",d),...h},[...u.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(c)?c:[c]])}),l=(e,t)=>{let r=(0,n.forwardRef)((r,a)=>{let{className:l,...d}=r;return(0,n.createElement)(o,{ref:a,iconNode:t,className:i("lucide-".concat(s(e)),l),...d})});return r.displayName="".concat(e),r}},2222:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});let n=(0,r(9205).Z)("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]])},215:function(){}},function(e){e.O(0,[565,971,117,744],function(){return e(e.s=961)}),_N_E=e.O()}]);