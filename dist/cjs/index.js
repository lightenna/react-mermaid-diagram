"use strict";var e=require("react"),t=require("mermaid");exports.MermaidDiagram=a=>{const[r,s]=e.useState(),[i,n]=e.useState(),c=`${a.id||"d"+Date.now()}-mermaid`,d=a.children;e.useEffect((()=>{t.initialize({startOnLoad:!0,logLevel:5})}),[]);const l=e.useCallback((e=>{e&&s(e)}),[]);return e.useEffect((()=>{r&&i?.svg&&(r.innerHTML=i.svg,i.bindFunctions?.(r))}),[r,i]),e.useEffect((()=>{(d||0!==d.length)&&(async()=>{try{const e=await t.render(`${c}-svg`,d);n(e)}catch(e){a.onError?.(e)}})()}),[d]),e.createElement("div",{className:a.className,onClick:a.onClick,id:c,"data-testid":a.testId,ref:l})};
//# sourceMappingURL=index.js.map
