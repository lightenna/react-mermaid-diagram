"use strict";var e=require("react"),t=require("mermaid");function n(e,t,n,r){return new(n||(n=Promise))((function(i,a){function c(e){try{s(r.next(e))}catch(e){a(e)}}function o(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,o)}s((r=r.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;exports.MermaidDiagram=r=>{const[i,a]=e.useState(),[c,o]=e.useState(),s=`${r.id||"d"+Date.now()}-mermaid`,u=r.children;e.useEffect((()=>{t.initialize({startOnLoad:!0,logLevel:5})}),[]);const l=e.useCallback((e=>{e&&a(e)}),[]);return e.useEffect((()=>{var e;i&&(null==c?void 0:c.svg)&&(i.innerHTML=c.svg,null===(e=c.bindFunctions)||void 0===e||e.call(c,i))}),[i,c]),e.useEffect((()=>{(u||0!==u.length)&&n(void 0,void 0,void 0,(function*(){var e;try{const e=yield t.render(`${s}-svg`,u);o(e)}catch(t){null===(e=r.onError)||void 0===e||e.call(r,t)}}))}),[u]),e.createElement("div",{className:r.className,onClick:r.onClick,id:s,"data-testid":r.testId,ref:l})};
//# sourceMappingURL=index.js.map
