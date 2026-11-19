import{au as jn,av as Sn,aw as Pn,$ as Be,ax as it,ay as mt,az as He,aA as Cn,aB as $n,aC as Tn,aD as Rn,aE as In,a0 as On,a5 as Fn,a3 as Nn,a4 as Ln,a2 as Dn,a1 as Mn,H as An,I as Un,aF as Bn,Y as Wn,K as Vn,aG as zn,M as Hn,x as Et,V as Jn,U as un,ab as Gn,W as Kn,X as qn,_ as Yn,O as Zn,Q as Qn,J as Xn,Z as er,u as tr,k as Wt,aH as nr,t as W,a6 as rr,aI as ir,r as J,aJ as sr,j as w,af as ar,aK as or,aL as lr,aM as ut,a7 as cr,a9 as zt,l as ur,aa as dr,ag as Ht,aq as fr,ap as hr,a8 as mr,at as Lt}from"./index-CD7jgRlp.js";import"./preload-helper-CS1eXPs2.js";function pr(r,e){if(r==null)return{};var o={};for(var s in r)if({}.hasOwnProperty.call(r,s)){if(e.indexOf(s)!==-1)continue;o[s]=r[s]}return o}class Jt{constructor(e,o,s){this.from=e,this.to=o,this.diagnostic=s}}class Xe{constructor(e,o,s){this.diagnostics=e,this.panel=o,this.selected=s}static init(e,o,s){let f=s.facet(ft).markerFilter;f&&(e=f(e,s));let g=e.slice().sort((se,C)=>se.from-C.from||se.to-C.to),O=new Tn,R=[],F=0,B=s.doc.iter(),Z=0,ie=s.doc.length;for(let se=0;;){let C=se==g.length?null:g[se];if(!C&&!R.length)break;let A,Q;if(R.length)A=F,Q=R.reduce((N,le)=>Math.min(N,le.to),C&&C.from>A?C.from:1e8);else{if(A=C.from,A>ie)break;Q=C.to,R.push(C),se++}for(;se<g.length;){let N=g[se];if(N.from==A&&(N.to>N.from||N.to==A))R.push(N),se++,Q=Math.min(N.to,Q);else{Q=Math.min(N.from,Q);break}}Q=Math.min(Q,ie);let ye=!1;if(R.some(N=>N.from==A&&(N.to==Q||Q==ie))&&(ye=A==Q,!ye&&Q-A<10)){let N=A-(Z+B.value.length);N>0&&(B.next(N),Z=A);for(let le=A;;){if(le>=Q){ye=!0;break}if(!B.lineBreak&&Z+B.value.length>le)break;le=Z+B.value.length,Z+=B.value.length,B.next()}}let _e=Cr(R);if(ye)O.add(A,A,it.widget({widget:new Er(_e),diagnostics:R.slice()}));else{let N=R.reduce((le,ge)=>ge.markClass?le+" "+ge.markClass:le,"");O.add(A,Q,it.mark({class:"cm-lintRange cm-lintRange-"+_e+N,diagnostics:R.slice(),inclusiveEnd:R.some(le=>le.to>Q)}))}if(F=Q,F==ie)break;for(let N=0;N<R.length;N++)R[N].to<=F&&R.splice(N--,1)}let ae=O.finish();return new Xe(ae,o,Ze(ae))}}function Ze(r,e=null,o=0){let s=null;return r.between(o,1e9,(f,g,{spec:O})=>{if(!(e&&O.diagnostics.indexOf(e)<0))if(!s)s=new Jt(f,g,e||O.diagnostics[0]);else{if(O.diagnostics.indexOf(s.diagnostic)<0)return!1;s=new Jt(s.from,g,s.diagnostic)}}),s}function gr(r,e){let o=e.pos,s=e.end||o,f=r.state.facet(ft).hideOn(r,o,s);if(f!=null)return f;let g=r.startState.doc.lineAt(e.pos);return!!(r.effects.some(O=>O.is(dn))||r.changes.touchesRange(g.from,Math.max(g.to,s)))}function yr(r,e){return r.field($e,!1)?e:e.concat(mt.appendConfig.of($r))}const dn=mt.define(),Vt=mt.define(),fn=mt.define(),$e=Sn.define({create(){return new Xe(it.none,null,null)},update(r,e){if(e.docChanged&&r.diagnostics.size){let o=r.diagnostics.map(e.changes),s=null,f=r.panel;if(r.selected){let g=e.changes.mapPos(r.selected.from,1);s=Ze(o,r.selected.diagnostic,g)||Ze(o,null,g)}!o.size&&f&&e.state.facet(ft).autoPanel&&(f=null),r=new Xe(o,f,s)}for(let o of e.effects)if(o.is(dn)){let s=e.state.facet(ft).autoPanel?o.value.length?ht.open:null:r.panel;r=Xe.init(o.value,s,e.state)}else o.is(Vt)?r=new Xe(r.diagnostics,o.value?ht.open:null,r.selected):o.is(fn)&&(r=new Xe(r.diagnostics,r.panel,o.value));return r},provide:r=>[Pn.from(r,e=>e.panel),Be.decorations.from(r,e=>e.diagnostics)]}),br=it.mark({class:"cm-lintRange cm-lintRange-active"});function wr(r,e,o){let{diagnostics:s}=r.state.field($e),f,g=-1,O=-1;s.between(e-(o<0?1:0),e+(o>0?1:0),(F,B,{spec:Z})=>{if(e>=F&&e<=B&&(F==B||(e>F||o>0)&&(e<B||o<0)))return f=Z.diagnostics,g=F,O=B,!1});let R=r.state.facet(ft).tooltipFilter;return f&&R&&(f=R(f,r.state)),f?{pos:g,end:O,above:r.state.doc.lineAt(g).to<O,create(){return{dom:vr(r,f)}}}:null}function vr(r,e){return He("ul",{class:"cm-tooltip-lint"},e.map(o=>mn(r,o,!1)))}const xr=r=>{let e=r.state.field($e,!1);(!e||!e.panel)&&r.dispatch({effects:yr(r.state,[Vt.of(!0)])});let o=jn(r,ht.open);return o&&o.dom.querySelector(".cm-panel-lint ul").focus(),!0},Gt=r=>{let e=r.state.field($e,!1);return!e||!e.panel?!1:(r.dispatch({effects:Vt.of(!1)}),!0)},kr=r=>{let e=r.state.field($e,!1);if(!e)return!1;let o=r.state.selection.main,s=Ze(e.diagnostics,null,o.to+1);return!s&&(s=Ze(e.diagnostics,null,0),!s||s.from==o.from&&s.to==o.to)?!1:(r.dispatch({selection:{anchor:s.from,head:s.to},scrollIntoView:!0}),!0)},_r=[{key:"Mod-Shift-m",run:xr,preventDefault:!0},{key:"F8",run:kr}],ft=Cn.define({combine(r){return{sources:r.map(e=>e.source).filter(e=>e!=null),...$n(r.map(e=>e.config),{delay:750,markerFilter:null,tooltipFilter:null,needsRefresh:null,hideOn:()=>null},{delay:Math.max,markerFilter:Kt,tooltipFilter:Kt,needsRefresh:(e,o)=>e?o?s=>e(s)||o(s):e:o,hideOn:(e,o)=>e?o?(s,f,g)=>e(s,f,g)||o(s,f,g):e:o,autoPanel:(e,o)=>e||o})}}});function Kt(r,e){return r?e?(o,s)=>e(r(o,s),s):r:e}function hn(r){let e=[];if(r)e:for(let{name:o}of r){for(let s=0;s<o.length;s++){let f=o[s];if(/[a-zA-Z]/.test(f)&&!e.some(g=>g.toLowerCase()==f.toLowerCase())){e.push(f);continue e}}e.push("")}return e}function mn(r,e,o){var s;let f=o?hn(e.actions):[];return He("li",{class:"cm-diagnostic cm-diagnostic-"+e.severity},He("span",{class:"cm-diagnosticText"},e.renderMessage?e.renderMessage(r):e.message),(s=e.actions)===null||s===void 0?void 0:s.map((g,O)=>{let R=!1,F=se=>{if(se.preventDefault(),R)return;R=!0;let C=Ze(r.state.field($e).diagnostics,e);C&&g.apply(r,C.from,C.to)},{name:B}=g,Z=f[O]?B.indexOf(f[O]):-1,ie=Z<0?B:[B.slice(0,Z),He("u",B.slice(Z,Z+1)),B.slice(Z+1)],ae=g.markClass?" "+g.markClass:"";return He("button",{type:"button",class:"cm-diagnosticAction"+ae,onclick:F,onmousedown:F,"aria-label":` Action: ${B}${Z<0?"":` (access key "${f[O]})"`}.`},ie)}),e.source&&He("div",{class:"cm-diagnosticSource"},e.source))}class Er extends In{constructor(e){super(),this.sev=e}eq(e){return e.sev==this.sev}toDOM(){return He("span",{class:"cm-lintPoint cm-lintPoint-"+this.sev})}}class qt{constructor(e,o){this.diagnostic=o,this.id="item_"+Math.floor(Math.random()*4294967295).toString(16),this.dom=mn(e,o,!0),this.dom.id=this.id,this.dom.setAttribute("role","option")}}class ht{constructor(e){this.view=e,this.items=[];let o=f=>{if(!(f.ctrlKey||f.altKey||f.metaKey)){if(f.keyCode==27)Gt(this.view),this.view.focus();else if(f.keyCode==38||f.keyCode==33)this.moveSelection((this.selectedIndex-1+this.items.length)%this.items.length);else if(f.keyCode==40||f.keyCode==34)this.moveSelection((this.selectedIndex+1)%this.items.length);else if(f.keyCode==36)this.moveSelection(0);else if(f.keyCode==35)this.moveSelection(this.items.length-1);else if(f.keyCode==13)this.view.focus();else if(f.keyCode>=65&&f.keyCode<=90&&this.selectedIndex>=0){let{diagnostic:g}=this.items[this.selectedIndex],O=hn(g.actions);for(let R=0;R<O.length;R++)if(O[R].toUpperCase().charCodeAt(0)==f.keyCode){let F=Ze(this.view.state.field($e).diagnostics,g);F&&g.actions[R].apply(e,F.from,F.to)}}else return;f.preventDefault()}},s=f=>{for(let g=0;g<this.items.length;g++)this.items[g].dom.contains(f.target)&&this.moveSelection(g)};this.list=He("ul",{tabIndex:0,role:"listbox","aria-label":this.view.state.phrase("Diagnostics"),onkeydown:o,onclick:s}),this.dom=He("div",{class:"cm-panel-lint"},this.list,He("button",{type:"button",name:"close","aria-label":this.view.state.phrase("close"),onclick:()=>Gt(this.view)},"×")),this.update()}get selectedIndex(){let e=this.view.state.field($e).selected;if(!e)return-1;for(let o=0;o<this.items.length;o++)if(this.items[o].diagnostic==e.diagnostic)return o;return-1}update(){let{diagnostics:e,selected:o}=this.view.state.field($e),s=0,f=!1,g=null,O=new Set;for(e.between(0,this.view.state.doc.length,(R,F,{spec:B})=>{for(let Z of B.diagnostics){if(O.has(Z))continue;O.add(Z);let ie=-1,ae;for(let se=s;se<this.items.length;se++)if(this.items[se].diagnostic==Z){ie=se;break}ie<0?(ae=new qt(this.view,Z),this.items.splice(s,0,ae),f=!0):(ae=this.items[ie],ie>s&&(this.items.splice(s,ie-s),f=!0)),o&&ae.diagnostic==o.diagnostic?ae.dom.hasAttribute("aria-selected")||(ae.dom.setAttribute("aria-selected","true"),g=ae):ae.dom.hasAttribute("aria-selected")&&ae.dom.removeAttribute("aria-selected"),s++}});s<this.items.length&&!(this.items.length==1&&this.items[0].diagnostic.from<0);)f=!0,this.items.pop();this.items.length==0&&(this.items.push(new qt(this.view,{from:-1,to:-1,severity:"info",message:this.view.state.phrase("No diagnostics")})),f=!0),g?(this.list.setAttribute("aria-activedescendant",g.id),this.view.requestMeasure({key:this,read:()=>({sel:g.dom.getBoundingClientRect(),panel:this.list.getBoundingClientRect()}),write:({sel:R,panel:F})=>{let B=F.height/this.list.offsetHeight;R.top<F.top?this.list.scrollTop-=(F.top-R.top)/B:R.bottom>F.bottom&&(this.list.scrollTop+=(R.bottom-F.bottom)/B)}})):this.selectedIndex<0&&this.list.removeAttribute("aria-activedescendant"),f&&this.sync()}sync(){let e=this.list.firstChild;function o(){let s=e;e=s.nextSibling,s.remove()}for(let s of this.items)if(s.dom.parentNode==this.list){for(;e!=s.dom;)o();e=s.dom.nextSibling}else this.list.insertBefore(s.dom,e);for(;e;)o()}moveSelection(e){if(this.selectedIndex<0)return;let o=this.view.state.field($e),s=Ze(o.diagnostics,this.items[e].diagnostic);s&&this.view.dispatch({selection:{anchor:s.from,head:s.to},scrollIntoView:!0,effects:fn.of(s)})}static open(e){return new ht(e)}}function jr(r,e='viewBox="0 0 40 40"'){return`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(r)}</svg>')`}function xt(r){return jr(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${r}" fill="none" stroke-width=".7"/>`,'width="6" height="3"')}const Sr=Be.baseTheme({".cm-diagnostic":{padding:"3px 6px 3px 8px",marginLeft:"-1px",display:"block",whiteSpace:"pre-wrap"},".cm-diagnostic-error":{borderLeft:"5px solid #d11"},".cm-diagnostic-warning":{borderLeft:"5px solid orange"},".cm-diagnostic-info":{borderLeft:"5px solid #999"},".cm-diagnostic-hint":{borderLeft:"5px solid #66d"},".cm-diagnosticAction":{font:"inherit",border:"none",padding:"2px 4px",backgroundColor:"#444",color:"white",borderRadius:"3px",marginLeft:"8px",cursor:"pointer"},".cm-diagnosticSource":{fontSize:"70%",opacity:.7},".cm-lintRange":{backgroundPosition:"left bottom",backgroundRepeat:"repeat-x",paddingBottom:"0.7px"},".cm-lintRange-error":{backgroundImage:xt("#d11")},".cm-lintRange-warning":{backgroundImage:xt("orange")},".cm-lintRange-info":{backgroundImage:xt("#999")},".cm-lintRange-hint":{backgroundImage:xt("#66d")},".cm-lintRange-active":{backgroundColor:"#ffdd9980"},".cm-tooltip-lint":{padding:0,margin:0},".cm-lintPoint":{position:"relative","&:after":{content:'""',position:"absolute",bottom:0,left:"-2px",borderLeft:"3px solid transparent",borderRight:"3px solid transparent",borderBottom:"4px solid #d11"}},".cm-lintPoint-warning":{"&:after":{borderBottomColor:"orange"}},".cm-lintPoint-info":{"&:after":{borderBottomColor:"#999"}},".cm-lintPoint-hint":{"&:after":{borderBottomColor:"#66d"}},".cm-panel.cm-panel-lint":{position:"relative","& ul":{maxHeight:"100px",overflowY:"auto","& [aria-selected]":{backgroundColor:"#ddd","& u":{textDecoration:"underline"}},"&:focus [aria-selected]":{background_fallback:"#bdf",backgroundColor:"Highlight",color_fallback:"white",color:"HighlightText"},"& u":{textDecoration:"none"},padding:0,margin:0},"& [name=close]":{position:"absolute",top:"0",right:"2px",background:"inherit",border:"none",font:"inherit",padding:0,margin:0}},"&dark .cm-lintRange-active":{backgroundColor:"#86714a80"},"&dark .cm-panel.cm-panel-lint ul":{"& [aria-selected]":{backgroundColor:"#2e343e"}}});function Pr(r){return r=="error"?4:r=="warning"?3:r=="info"?2:1}function Cr(r){let e="hint",o=1;for(let s of r){let f=Pr(s.severity);f>o&&(o=f,e=s.severity)}return e}const $r=[$e,Be.decorations.compute([$e],r=>{let{selected:e,panel:o}=r.field($e);return!e||!o||e.from==e.to?it.none:it.set([br.range(e.from,e.to)])}),Rn(wr,{hideOn:gr}),Sr];var Yt=function(e){e===void 0&&(e={});var{crosshairCursor:o=!1}=e,s=[];e.closeBracketsKeymap!==!1&&(s=s.concat(On)),e.defaultKeymap!==!1&&(s=s.concat(Fn)),e.searchKeymap!==!1&&(s=s.concat(Nn)),e.historyKeymap!==!1&&(s=s.concat(Ln)),e.foldKeymap!==!1&&(s=s.concat(Dn)),e.completionKeymap!==!1&&(s=s.concat(Mn)),e.lintKeymap!==!1&&(s=s.concat(_r));var f=[];return e.lineNumbers!==!1&&f.push(An()),e.highlightActiveLineGutter!==!1&&f.push(Un()),e.highlightSpecialChars!==!1&&f.push(Bn()),e.history!==!1&&f.push(Wn()),e.foldGutter!==!1&&f.push(Vn()),e.drawSelection!==!1&&f.push(zn()),e.dropCursor!==!1&&f.push(Hn()),e.allowMultipleSelections!==!1&&f.push(Et.allowMultipleSelections.of(!0)),e.indentOnInput!==!1&&f.push(Jn()),e.syntaxHighlighting!==!1&&f.push(un(Gn,{fallback:!0})),e.bracketMatching!==!1&&f.push(Kn()),e.closeBrackets!==!1&&f.push(qn()),e.autocompletion!==!1&&f.push(Yn()),e.rectangularSelection!==!1&&f.push(Zn()),o!==!1&&f.push(Qn()),e.highlightActiveLine!==!1&&f.push(Xn()),e.highlightSelectionMatches!==!1&&f.push(er()),e.tabSize&&typeof e.tabSize=="number"&&f.push(tr.of(" ".repeat(e.tabSize))),f.concat([Wt.of(s.flat())]).filter(Boolean)};const Tr="#e5c07b",Zt="#e06c75",Rr="#56b6c2",Ir="#ffffff",kt="#abb2bf",Ut="#7d8799",Or="#61afef",Fr="#98c379",Qt="#d19a66",Nr="#c678dd",Lr="#21252b",Xt="#2c313a",en="#282c34",Dt="#353a42",Dr="#3E4451",tn="#528bff",Mr=Be.theme({"&":{color:kt,backgroundColor:en},".cm-content":{caretColor:tn},".cm-cursor, .cm-dropCursor":{borderLeftColor:tn},"&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":{backgroundColor:Dr},".cm-panels":{backgroundColor:Lr,color:kt},".cm-panels.cm-panels-top":{borderBottom:"2px solid black"},".cm-panels.cm-panels-bottom":{borderTop:"2px solid black"},".cm-searchMatch":{backgroundColor:"#72a1ff59",outline:"1px solid #457dff"},".cm-searchMatch.cm-searchMatch-selected":{backgroundColor:"#6199ff2f"},".cm-activeLine":{backgroundColor:"#6699ff0b"},".cm-selectionMatch":{backgroundColor:"#aafe661a"},"&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket":{backgroundColor:"#bad0f847"},".cm-gutters":{backgroundColor:en,color:Ut,border:"none"},".cm-activeLineGutter":{backgroundColor:Xt},".cm-foldPlaceholder":{backgroundColor:"transparent",border:"none",color:"#ddd"},".cm-tooltip":{border:"none",backgroundColor:Dt},".cm-tooltip .cm-tooltip-arrow:before":{borderTopColor:"transparent",borderBottomColor:"transparent"},".cm-tooltip .cm-tooltip-arrow:after":{borderTopColor:Dt,borderBottomColor:Dt},".cm-tooltip-autocomplete":{"& > ul > li[aria-selected]":{backgroundColor:Xt,color:kt}}},{dark:!0}),Ar=nr.define([{tag:W.keyword,color:Nr},{tag:[W.name,W.deleted,W.character,W.propertyName,W.macroName],color:Zt},{tag:[W.function(W.variableName),W.labelName],color:Or},{tag:[W.color,W.constant(W.name),W.standard(W.name)],color:Qt},{tag:[W.definition(W.name),W.separator],color:kt},{tag:[W.typeName,W.className,W.number,W.changed,W.annotation,W.modifier,W.self,W.namespace],color:Tr},{tag:[W.operator,W.operatorKeyword,W.url,W.escape,W.regexp,W.link,W.special(W.string)],color:Rr},{tag:[W.meta,W.comment],color:Ut},{tag:W.strong,fontWeight:"bold"},{tag:W.emphasis,fontStyle:"italic"},{tag:W.strikethrough,textDecoration:"line-through"},{tag:W.link,color:Ut,textDecoration:"underline"},{tag:W.heading,fontWeight:"bold",color:Zt},{tag:[W.atom,W.bool,W.special(W.variableName)],color:Qt},{tag:[W.processingInstruction,W.string,W.inserted],color:Fr},{tag:W.invalid,color:Ir}]),Ur=[Mr,un(Ar)];var Br=Be.theme({"&":{backgroundColor:"#fff"}},{dark:!1}),Wr=function(e){e===void 0&&(e={});var{indentWithTab:o=!0,editable:s=!0,readOnly:f=!1,theme:g="light",placeholder:O="",basicSetup:R=!0}=e,F=[];switch(o&&F.unshift(Wt.of([rr])),R&&(typeof R=="boolean"?F.unshift(Yt()):F.unshift(Yt(R))),O&&F.unshift(ir(O)),g){case"light":F.push(Br);break;case"dark":F.push(Ur);break;case"none":break;default:F.push(g);break}return s===!1&&F.push(Be.editable.of(!1)),f&&F.push(Et.readOnly.of(!0)),[...F]},Vr=r=>({line:r.state.doc.lineAt(r.state.selection.main.from),lineCount:r.state.doc.lines,lineBreak:r.state.lineBreak,length:r.state.doc.length,readOnly:r.state.readOnly,tabSize:r.state.tabSize,selection:r.state.selection,selectionAsSingle:r.state.selection.asSingle().main,ranges:r.state.selection.ranges,selectionCode:r.state.sliceDoc(r.state.selection.main.from,r.state.selection.main.to),selections:r.state.selection.ranges.map(e=>r.state.sliceDoc(e.from,e.to)),selectedText:r.state.selection.ranges.some(e=>!e.empty)}),nn=sr.define(),zr=[];function Hr(r){var{value:e,selection:o,onChange:s,onStatistics:f,onCreateEditor:g,onUpdate:O,extensions:R=zr,autoFocus:F,theme:B="light",height:Z=null,minHeight:ie=null,maxHeight:ae=null,width:se=null,minWidth:C=null,maxWidth:A=null,placeholder:Q="",editable:ye=!0,readOnly:_e=!1,indentWithTab:N=!0,basicSetup:le=!0,root:ge,initialState:Ee}=r,[Pe,oe]=J.useState(),[v,je]=J.useState(),[Se,Te]=J.useState(),fe=Be.theme({"&":{height:Z,minHeight:ie,maxHeight:ae,width:se,minWidth:C,maxWidth:A},"& .cm-scroller":{height:"100% !important"}}),we=Be.updateListener.of(ke=>{if(ke.docChanged&&typeof s=="function"&&!ke.transactions.some(et=>et.annotation(nn))){var Me=ke.state.doc,We=Me.toString();s(We,ke)}f&&f(Vr(ke))}),Je=Wr({theme:B,editable:ye,readOnly:_e,placeholder:Q,indentWithTab:N,basicSetup:le}),De=[we,fe,...Je];return O&&typeof O=="function"&&De.push(Be.updateListener.of(O)),De=De.concat(R),J.useEffect(()=>{if(Pe&&!Se){var ke={doc:e,selection:o,extensions:De},Me=Ee?Et.fromJSON(Ee.json,ke,Ee.fields):Et.create(ke);if(Te(Me),!v){var We=new Be({state:Me,parent:Pe,root:ge});je(We),g&&g(We,Me)}}return()=>{v&&(Te(void 0),je(void 0))}},[Pe,Se]),J.useEffect(()=>oe(r.container),[r.container]),J.useEffect(()=>()=>{v&&(v.destroy(),je(void 0))},[v]),J.useEffect(()=>{F&&v&&v.focus()},[F,v]),J.useEffect(()=>{v&&v.dispatch({effects:mt.reconfigure.of(De)})},[B,R,Z,ie,ae,se,C,A,Q,ye,_e,N,le,s,O]),J.useEffect(()=>{if(e!==void 0){var ke=v?v.state.doc.toString():"";v&&e!==ke&&v.dispatch({changes:{from:0,to:ke.length,insert:e||""},annotations:[nn.of(!0)]})}},[e,v]),{state:Se,setState:Te,view:v,setView:je,container:Pe,setContainer:oe}}var Jr=["className","value","selection","extensions","onChange","onStatistics","onCreateEditor","onUpdate","autoFocus","theme","height","minHeight","maxHeight","width","minWidth","maxWidth","basicSetup","placeholder","indentWithTab","editable","readOnly","root","initialState"],pn=J.forwardRef((r,e)=>{var{className:o,value:s="",selection:f,extensions:g=[],onChange:O,onStatistics:R,onCreateEditor:F,onUpdate:B,autoFocus:Z,theme:ie="light",height:ae,minHeight:se,maxHeight:C,width:A,minWidth:Q,maxWidth:ye,basicSetup:_e,placeholder:N,indentWithTab:le,editable:ge,readOnly:Ee,root:Pe,initialState:oe}=r,v=pr(r,Jr),je=J.useRef(null),{state:Se,view:Te,container:fe}=Hr({container:je.current,root:Pe,value:s,autoFocus:Z,theme:ie,height:ae,minHeight:se,maxHeight:C,width:A,minWidth:Q,maxWidth:ye,basicSetup:_e,placeholder:N,indentWithTab:le,editable:ge,readOnly:Ee,selection:f,onChange:O,onStatistics:R,onCreateEditor:F,onUpdate:B,extensions:g,initialState:oe});if(J.useImperativeHandle(e,()=>({editor:je.current,state:Se,view:Te}),[je,fe,Se,Te]),typeof s!="string")throw new Error("value must be typeof string but got "+typeof s);var we=typeof ie=="string"?"cm-theme-"+ie:"cm-theme";return w.jsx("div",ar({ref:je,className:""+we+(o?" "+o:"")},v))});pn.displayName="CodeMirror";function Gr(r,e){return r}function dt(r,...e){let o=0;return r.replace(/%[sd]/g,()=>String(e[o++]??""))}const gn="PHP error_log";function Ye(r){return r.name===gn}function Kr(r,{withErrorLog:e=!1,getErrors:o}){const[s,f]=J.useState(r||[]),[g,O]=J.useState(0),R=s[g],F=J.useCallback((C,A=g)=>{f(s.map((Q,ye)=>ye===A?C(Q):Q))},[g,s,f]),B=J.useCallback((C=g)=>{f(s.filter((A,Q)=>Q!==C))},[g,s]),Z=J.useCallback((C,A=s.length)=>{f([...s.slice(0,A),C,...s.slice(A)])},[s,f]);async function ie(C){try{const Q=await(await fetch(C.remoteUrl)).text();F(ye=>({...ye,contents:Q}),s.indexOf(C))}catch{F(A=>({...A,contents:dt("Failed to fetch the remote file from %s",C.remoteUrl),name:dt("%s (Failed to fetch)",A.name)}),s.indexOf(C))}}const[ae,se]=J.useState(s.filter(C=>C.remoteUrl).length>0);return J.useEffect(()=>{async function C(){try{await Promise.all(s.filter(A=>A.remoteUrl).map(ie))}finally{se(!1)}}C()},[]),J.useEffect(()=>{async function C(){const A=s.findIndex(Ye);e?A===-1&&Z({name:gn,contents:await o?.()||""},1):A!==-1&&B(A)}C()},[e]),J.useEffect(()=>{if(!e)return;const C=setInterval(async function(){const A=s.findIndex(Ye);if(A===-1)return;const Q=await o?.()||"";Q!==s[A].contents&&F(ye=>({...ye,contents:Q}),A)},1e3);return()=>clearInterval(C)},[e,s,o,F]),{files:s,addFile:Z,isLoading:ae,updateFile:F,removeFile:B,activeFile:R,activeFileIndex:g,setActiveFileIndex:O}}async function qr(r,e){const s=`${await r.documentRoot}/wp-content/plugins/demo-plugin`;await r.fileExists(s)&&await r.rmdir(s,{recursive:!0}),await r.mkdir(s);for(const g of e){const O=`${s}/${g.name}`,R=O.substring(0,O.lastIndexOf("/"));R!==s&&await r.mkdir(R),await r.writeFile(O,g.contents)}try{await or(r,{pluginPath:s})}catch(g){console.error("Failed to activate plugin:",g)}}async function Yr(r,e){const o=await r.documentRoot,s="demo-theme",f=o+"/wp-content/themes/"+s;await r.fileExists(f)&&await r.rmdir(f,{recursive:!0}),await r.mkdir(f);for(const O of e){const R=`${f}/${O.name}`,F=R.substring(0,R.lastIndexOf("/"));F!==f&&await r.mkdir(F),await r.writeFile(R,O.contents)}try{await lr(r,{themeFolderName:s})}catch(O){console.error("Failed to activate theme:",O)}}async function Zr(r,e){const o=await r.documentRoot,s=e==="theme",f=s?`${o}/wp-content/themes/demo-theme`:`${o}/wp-content/plugins/demo-plugin`,g=s?"demo-theme.zip":"demo-plugin.zip",O=await Qr(r,f),R=new Blob([O],{type:"application/zip"});Xr(R,g)}async function Qr(r,e){const o="/tmp/package.zip";try{await r.unlink(o)}catch{}return await r.run({code:`<?php
			$zip = new ZipArchive();
			$zip->open('${o}', ZipArchive::CREATE | ZipArchive::OVERWRITE);

			$path = '${e}';
			$iterator = new RecursiveIteratorIterator(
				new RecursiveDirectoryIterator($path, RecursiveDirectoryIterator::SKIP_DOTS),
				RecursiveIteratorIterator::SELF_FIRST
			);

			foreach ($iterator as $file) {
				$filePath = $file->getRealPath();
				$relativePath = substr($filePath, strlen($path) + 1);

				if ($file->isDir()) {
					$zip->addEmptyDir($relativePath);
				} else {
					$zip->addFile($filePath, $relativePath);
				}
			}

			$zip->close();
		`}),await r.readFileAsBuffer(o)}function Xr(r,e){const o=URL.createObjectURL(r),s=document.createElement("a");s.href=o,s.download=e,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(o)}function rn({isOpen:r,onClose:e,onSubmit:o,initialName:s="",initialRemoteUrl:f="",title:g,submitLabel:O,isLoading:R=!1,error:F=null}){const[B,Z]=J.useState(s),[ie,ae]=J.useState(f);if(!r)return null;const se=C=>{C.preventDefault(),o(B,ie||void 0)};return w.jsx("div",{className:"playground-modal-overlay",onClick:e,children:w.jsxs("div",{className:"playground-modal",onClick:C=>C.stopPropagation(),role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:[w.jsx("h2",{id:"modal-title",children:g}),w.jsxs("form",{onSubmit:se,children:[w.jsxs("div",{className:"playground-modal-field",children:[w.jsx("label",{htmlFor:"file-name",children:"File name"}),w.jsx("input",{id:"file-name",type:"text",value:B,onChange:C=>Z(C.target.value),placeholder:"example.php",autoFocus:!0,disabled:R})]}),w.jsxs("div",{className:"playground-modal-field",children:[w.jsx("label",{htmlFor:"remote-url",children:"Remote URL (optional)"}),w.jsx("input",{id:"remote-url",type:"url",value:ie,onChange:C=>ae(C.target.value),placeholder:"https://example.com/file.php",disabled:R}),w.jsx("p",{className:"playground-modal-help",children:"If provided, the file contents will be fetched from this URL."})]}),F&&w.jsx("p",{className:"playground-modal-error",children:F}),w.jsxs("div",{className:"playground-modal-actions",children:[w.jsx("button",{type:"button",onClick:e,disabled:R,className:"playground-button playground-button-secondary",children:"Cancel"}),w.jsx("button",{type:"submit",disabled:!B||R,className:"playground-button playground-button-primary",children:R?"Loading...":O})]})]})]})})}const ei=J.forwardRef(function({updateFile:e,addFile:o,setActiveFileIndex:s,files:f,activeFileIndex:g},O){const[R,F]=J.useState(!1),[B,Z]=J.useState(!1),[ie,ae]=J.useState(!1),[se,C]=J.useState(null);J.useImperativeHandle(O,()=>({setEditFileNameModalOpen:N=>{C(null),F(N)},setNewFileModalOpen:N=>{C(null),Z(N)}}));async function A(N){if(!N)return"";const le=await fetch(N,{credentials:"omit"});if(!le.ok)throw new Error(`Failed to fetch: ${le.statusText}`);return await le.text()}async function Q(N,le){ae(!0),C(null);try{const ge=await A(le);e(Ee=>({...Ee,name:N,remoteUrl:le,contents:le?ge:Ee.contents})),F(!1)}catch(ge){C(ge instanceof Error?ge.message:"Failed to fetch file")}finally{ae(!1)}}async function ye(N,le){ae(!0),C(null);try{const ge=await A(le);o({name:N,contents:ge,remoteUrl:le}),s(f.length),Z(!1)}catch(ge){C(ge instanceof Error?ge.message:"Failed to fetch file")}finally{ae(!1)}}const _e=f[g];return w.jsxs(w.Fragment,{children:[w.jsx(rn,{isOpen:R,onClose:()=>F(!1),onSubmit:Q,initialName:_e?.name||"",initialRemoteUrl:_e?.remoteUrl||"",title:"Edit File Name",submitLabel:"Save",isLoading:ie,error:se}),w.jsx(rn,{isOpen:B,onClose:()=>Z(!1),onSubmit:ye,title:"New File",submitLabel:"Create",isLoading:ie,error:se})]})});var yn={exports:{}};(function(r){(e=>{var o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,f=Object.getOwnPropertyNames,g=Object.prototype.hasOwnProperty,O=(n,i)=>{for(var a in i)o(n,a,{get:i[a],enumerable:!0})},R=(n,i,a,p)=>{if(i&&typeof i=="object"||typeof i=="function")for(let x of f(i))!g.call(n,x)&&x!==a&&o(n,x,{get:()=>i[x],enumerable:!(p=s(i,x))||p.enumerable});return n},F=n=>R(o({},"__esModule",{value:!0}),n),B=(n,i,a)=>new Promise((p,x)=>{var S=m=>{try{T(a.next(m))}catch(L){x(L)}},y=m=>{try{T(a.throw(m))}catch(L){x(L)}},T=m=>m.done?p(m.value):Promise.resolve(m.value).then(S,y);T((a=a.apply(n,i)).next())}),Z={};O(Z,{analyzeMetafile:()=>ue,analyzeMetafileSync:()=>Ft,build:()=>Rt,buildSync:()=>Oe,context:()=>It,default:()=>xn,formatMessages:()=>te,formatMessagesSync:()=>Ue,initialize:()=>wn,stop:()=>Nt,transform:()=>Ot,transformSync:()=>Fe,version:()=>Tt}),e.exports=F(Z);function ie(n){let i=p=>{if(p===null)a.write8(0);else if(typeof p=="boolean")a.write8(1),a.write8(+p);else if(typeof p=="number")a.write8(2),a.write32(p|0);else if(typeof p=="string")a.write8(3),a.write(C(p));else if(p instanceof Uint8Array)a.write8(4),a.write(p);else if(p instanceof Array){a.write8(5),a.write32(p.length);for(let x of p)i(x)}else{let x=Object.keys(p);a.write8(6),a.write32(x.length);for(let S of x)a.write(C(S)),i(p[S])}},a=new se;return a.write32(0),a.write32(n.id<<1|+!n.isRequest),i(n.value),_e(a.buf,a.len-4,0),a.buf.subarray(0,a.len)}function ae(n){let i=()=>{switch(a.read8()){case 0:return null;case 1:return!!a.read8();case 2:return a.read32();case 3:return A(a.read());case 4:return a.read();case 5:{let y=a.read32(),T=[];for(let m=0;m<y;m++)T.push(i());return T}case 6:{let y=a.read32(),T={};for(let m=0;m<y;m++)T[A(a.read())]=i();return T}default:throw new Error("Invalid packet")}},a=new se(n),p=a.read32(),x=(p&1)===0;p>>>=1;let S=i();if(a.ptr!==n.length)throw new Error("Invalid packet");return{id:p,isRequest:x,value:S}}var se=class{constructor(n=new Uint8Array(1024)){this.buf=n,this.len=0,this.ptr=0}_write(n){if(this.len+n>this.buf.length){let i=new Uint8Array((this.len+n)*2);i.set(this.buf),this.buf=i}return this.len+=n,this.len-n}write8(n){let i=this._write(1);this.buf[i]=n}write32(n){let i=this._write(4);_e(this.buf,n,i)}write(n){let i=this._write(4+n.length);_e(this.buf,n.length,i),this.buf.set(n,i+4)}_read(n){if(this.ptr+n>this.buf.length)throw new Error("Invalid packet");return this.ptr+=n,this.ptr-n}read8(){return this.buf[this._read(1)]}read32(){return ye(this.buf,this._read(4))}read(){let n=this.read32(),i=new Uint8Array(n),a=this._read(i.length);return i.set(this.buf.subarray(a,a+n)),i}},C,A,Q;if(typeof TextEncoder<"u"&&typeof TextDecoder<"u"){let n=new TextEncoder,i=new TextDecoder;C=a=>n.encode(a),A=a=>i.decode(a),Q='new TextEncoder().encode("")'}else if(typeof Buffer<"u")C=n=>Buffer.from(n),A=n=>{let{buffer:i,byteOffset:a,byteLength:p}=n;return Buffer.from(i,a,p).toString()},Q='Buffer.from("")';else throw new Error("No UTF-8 codec found");if(!(C("")instanceof Uint8Array))throw new Error(`Invariant violation: "${Q} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);function ye(n,i){return n[i++]|n[i++]<<8|n[i++]<<16|n[i++]<<24}function _e(n,i,a){n[a++]=i,n[a++]=i>>8,n[a++]=i>>16,n[a++]=i>>24}var N=JSON.stringify,le="warning",ge="silent";function Ee(n){if(be(n,"target"),n.indexOf(",")>=0)throw new Error(`Invalid target: ${n}`);return n}var Pe=()=>null,oe=n=>typeof n=="boolean"?null:"a boolean",v=n=>typeof n=="string"?null:"a string",je=n=>n instanceof RegExp?null:"a RegExp object",Se=n=>typeof n=="number"&&n===(n|0)?null:"an integer",Te=n=>typeof n=="function"?null:"a function",fe=n=>Array.isArray(n)?null:"an array",we=n=>typeof n=="object"&&n!==null&&!Array.isArray(n)?null:"an object",Je=n=>typeof n=="object"&&n!==null?null:"an array or an object",De=n=>n instanceof WebAssembly.Module?null:"a WebAssembly.Module",ke=n=>typeof n=="object"&&!Array.isArray(n)?null:"an object or null",Me=n=>typeof n=="string"||typeof n=="boolean"?null:"a string or a boolean",We=n=>typeof n=="string"||typeof n=="object"&&n!==null&&!Array.isArray(n)?null:"a string or an object",et=n=>typeof n=="string"||Array.isArray(n)?null:"a string or an array",st=n=>typeof n=="string"||n instanceof Uint8Array?null:"a string or a Uint8Array",Re=n=>typeof n=="string"||n instanceof URL?null:"a string or a URL";function c(n,i,a,p){let x=n[a];if(i[a+""]=!0,x===void 0)return;let S=p(x);if(S!==null)throw new Error(`${N(a)} must be ${S}`);return x}function me(n,i,a){for(let p in n)if(!(p in i))throw new Error(`Invalid option ${a}: ${N(p)}`)}function at(n){let i=Object.create(null),a=c(n,i,"wasmURL",Re),p=c(n,i,"wasmModule",De),x=c(n,i,"worker",oe);return me(n,i,"in initialize() call"),{wasmURL:a,wasmModule:p,worker:x}}function Ae(n){let i;if(n!==void 0){i=Object.create(null);for(let a in n){let p=n[a];if(typeof p=="string"||p===!1)i[a]=p;else throw new Error(`Expected ${N(a)} in mangle cache to map to either a string or false`)}}return i}function Qe(n,i,a,p,x){let S=c(i,a,"color",oe),y=c(i,a,"logLevel",v),T=c(i,a,"logLimit",Se);S!==void 0?n.push(`--color=${S}`):p&&n.push("--color=true"),n.push(`--log-level=${y||x}`),n.push(`--log-limit=${T||0}`)}function be(n,i,a){if(typeof n!="string")throw new Error(`Expected value for ${i}${a!==void 0?" "+N(a):""} to be a string, got ${typeof n} instead`);return n}function pt(n,i,a){let p=c(i,a,"legalComments",v),x=c(i,a,"sourceRoot",v),S=c(i,a,"sourcesContent",oe),y=c(i,a,"target",et),T=c(i,a,"format",v),m=c(i,a,"globalName",v),L=c(i,a,"mangleProps",je),U=c(i,a,"reserveProps",je),V=c(i,a,"mangleQuoted",oe),de=c(i,a,"minify",oe),ee=c(i,a,"minifySyntax",oe),K=c(i,a,"minifyWhitespace",oe),ve=c(i,a,"minifyIdentifiers",oe),E=c(i,a,"lineLimit",Se),ne=c(i,a,"drop",fe),re=c(i,a,"dropLabels",fe),_=c(i,a,"charset",v),h=c(i,a,"treeShaking",oe),u=c(i,a,"ignoreAnnotations",oe),d=c(i,a,"jsx",v),k=c(i,a,"jsxFactory",v),j=c(i,a,"jsxFragment",v),I=c(i,a,"jsxImportSource",v),M=c(i,a,"jsxDev",oe),t=c(i,a,"jsxSideEffects",oe),l=c(i,a,"define",we),b=c(i,a,"logOverride",we),P=c(i,a,"supported",we),D=c(i,a,"pure",fe),q=c(i,a,"keepNames",oe),G=c(i,a,"platform",v),X=c(i,a,"tsconfigRaw",We);if(p&&n.push(`--legal-comments=${p}`),x!==void 0&&n.push(`--source-root=${x}`),S!==void 0&&n.push(`--sources-content=${S}`),y&&(Array.isArray(y)?n.push(`--target=${Array.from(y).map(Ee).join(",")}`):n.push(`--target=${Ee(y)}`)),T&&n.push(`--format=${T}`),m&&n.push(`--global-name=${m}`),G&&n.push(`--platform=${G}`),X&&n.push(`--tsconfig-raw=${typeof X=="string"?X:JSON.stringify(X)}`),de&&n.push("--minify"),ee&&n.push("--minify-syntax"),K&&n.push("--minify-whitespace"),ve&&n.push("--minify-identifiers"),E&&n.push(`--line-limit=${E}`),_&&n.push(`--charset=${_}`),h!==void 0&&n.push(`--tree-shaking=${h}`),u&&n.push("--ignore-annotations"),ne)for(let H of ne)n.push(`--drop:${be(H,"drop")}`);if(re&&n.push(`--drop-labels=${Array.from(re).map(H=>be(H,"dropLabels")).join(",")}`),L&&n.push(`--mangle-props=${L.source}`),U&&n.push(`--reserve-props=${U.source}`),V!==void 0&&n.push(`--mangle-quoted=${V}`),d&&n.push(`--jsx=${d}`),k&&n.push(`--jsx-factory=${k}`),j&&n.push(`--jsx-fragment=${j}`),I&&n.push(`--jsx-import-source=${I}`),M&&n.push("--jsx-dev"),t&&n.push("--jsx-side-effects"),l)for(let H in l){if(H.indexOf("=")>=0)throw new Error(`Invalid define: ${H}`);n.push(`--define:${H}=${be(l[H],"define",H)}`)}if(b)for(let H in b){if(H.indexOf("=")>=0)throw new Error(`Invalid log override: ${H}`);n.push(`--log-override:${H}=${be(b[H],"log override",H)}`)}if(P)for(let H in P){if(H.indexOf("=")>=0)throw new Error(`Invalid supported: ${H}`);const z=P[H];if(typeof z!="boolean")throw new Error(`Expected value for supported ${N(H)} to be a boolean, got ${typeof z} instead`);n.push(`--supported:${H}=${z}`)}if(D)for(let H of D)n.push(`--pure:${be(H,"pure")}`);q&&n.push("--keep-names")}function jt(n,i,a,p,x){var S;let y=[],T=[],m=Object.create(null),L=null,U=null;Qe(y,i,m,a,p),pt(y,i,m);let V=c(i,m,"sourcemap",Me),de=c(i,m,"bundle",oe),ee=c(i,m,"splitting",oe),K=c(i,m,"preserveSymlinks",oe),ve=c(i,m,"metafile",oe),E=c(i,m,"outfile",v),ne=c(i,m,"outdir",v),re=c(i,m,"outbase",v),_=c(i,m,"tsconfig",v),h=c(i,m,"resolveExtensions",fe),u=c(i,m,"nodePaths",fe),d=c(i,m,"mainFields",fe),k=c(i,m,"conditions",fe),j=c(i,m,"external",fe),I=c(i,m,"packages",v),M=c(i,m,"alias",we),t=c(i,m,"loader",we),l=c(i,m,"outExtension",we),b=c(i,m,"publicPath",v),P=c(i,m,"entryNames",v),D=c(i,m,"chunkNames",v),q=c(i,m,"assetNames",v),G=c(i,m,"inject",fe),X=c(i,m,"banner",we),H=c(i,m,"footer",we),z=c(i,m,"entryPoints",Je),ce=c(i,m,"absWorkingDir",v),Y=c(i,m,"stdin",we),he=(S=c(i,m,"write",oe))!=null?S:x,xe=c(i,m,"allowOverwrite",oe),Ne=c(i,m,"mangleCache",we);if(m.plugins=!0,me(i,m,`in ${n}() call`),V&&y.push(`--sourcemap${V===!0?"":`=${V}`}`),de&&y.push("--bundle"),xe&&y.push("--allow-overwrite"),ee&&y.push("--splitting"),K&&y.push("--preserve-symlinks"),ve&&y.push("--metafile"),E&&y.push(`--outfile=${E}`),ne&&y.push(`--outdir=${ne}`),re&&y.push(`--outbase=${re}`),_&&y.push(`--tsconfig=${_}`),I&&y.push(`--packages=${I}`),h){let $=[];for(let pe of h){if(be(pe,"resolve extension"),pe.indexOf(",")>=0)throw new Error(`Invalid resolve extension: ${pe}`);$.push(pe)}y.push(`--resolve-extensions=${$.join(",")}`)}if(b&&y.push(`--public-path=${b}`),P&&y.push(`--entry-names=${P}`),D&&y.push(`--chunk-names=${D}`),q&&y.push(`--asset-names=${q}`),d){let $=[];for(let pe of d){if(be(pe,"main field"),pe.indexOf(",")>=0)throw new Error(`Invalid main field: ${pe}`);$.push(pe)}y.push(`--main-fields=${$.join(",")}`)}if(k){let $=[];for(let pe of k){if(be(pe,"condition"),pe.indexOf(",")>=0)throw new Error(`Invalid condition: ${pe}`);$.push(pe)}y.push(`--conditions=${$.join(",")}`)}if(j)for(let $ of j)y.push(`--external:${be($,"external")}`);if(M)for(let $ in M){if($.indexOf("=")>=0)throw new Error(`Invalid package name in alias: ${$}`);y.push(`--alias:${$}=${be(M[$],"alias",$)}`)}if(X)for(let $ in X){if($.indexOf("=")>=0)throw new Error(`Invalid banner file type: ${$}`);y.push(`--banner:${$}=${be(X[$],"banner",$)}`)}if(H)for(let $ in H){if($.indexOf("=")>=0)throw new Error(`Invalid footer file type: ${$}`);y.push(`--footer:${$}=${be(H[$],"footer",$)}`)}if(G)for(let $ of G)y.push(`--inject:${be($,"inject")}`);if(t)for(let $ in t){if($.indexOf("=")>=0)throw new Error(`Invalid loader extension: ${$}`);y.push(`--loader:${$}=${be(t[$],"loader",$)}`)}if(l)for(let $ in l){if($.indexOf("=")>=0)throw new Error(`Invalid out extension: ${$}`);y.push(`--out-extension:${$}=${be(l[$],"out extension",$)}`)}if(z)if(Array.isArray(z))for(let $=0,pe=z.length;$<pe;$++){let Le=z[$];if(typeof Le=="object"&&Le!==null){let ze=Object.create(null),Ce=c(Le,ze,"in",v),ct=c(Le,ze,"out",v);if(me(Le,ze,"in entry point at index "+$),Ce===void 0)throw new Error('Missing property "in" for entry point at index '+$);if(ct===void 0)throw new Error('Missing property "out" for entry point at index '+$);T.push([ct,Ce])}else T.push(["",be(Le,"entry point at index "+$)])}else for(let $ in z)T.push([$,be(z[$],"entry point",$)]);if(Y){let $=Object.create(null),pe=c(Y,$,"contents",st),Le=c(Y,$,"resolveDir",v),ze=c(Y,$,"sourcefile",v),Ce=c(Y,$,"loader",v);me(Y,$,'in "stdin" object'),ze&&y.push(`--sourcefile=${ze}`),Ce&&y.push(`--loader=${Ce}`),Le&&(U=Le),typeof pe=="string"?L=C(pe):pe instanceof Uint8Array&&(L=pe)}let rt=[];if(u)for(let $ of u)$+="",rt.push($);return{entries:T,flags:y,write:he,stdinContents:L,stdinResolveDir:U,absWorkingDir:ce,nodePaths:rt,mangleCache:Ae(Ne)}}function St(n,i,a,p){let x=[],S=Object.create(null);Qe(x,i,S,a,p),pt(x,i,S);let y=c(i,S,"sourcemap",Me),T=c(i,S,"sourcefile",v),m=c(i,S,"loader",v),L=c(i,S,"banner",v),U=c(i,S,"footer",v),V=c(i,S,"mangleCache",we);return me(i,S,`in ${n}() call`),y&&x.push(`--sourcemap=${y===!0?"external":y}`),T&&x.push(`--sourcefile=${T}`),m&&x.push(`--loader=${m}`),L&&x.push(`--banner=${L}`),U&&x.push(`--footer=${U}`),{flags:x,mangleCache:Ae(V)}}function gt(n){const i={},a={didClose:!1,reason:""};let p={},x=0,S=0,y=new Uint8Array(16*1024),T=0,m=_=>{let h=T+_.length;if(h>y.length){let d=new Uint8Array(h*2);d.set(y),y=d}y.set(_,T),T+=_.length;let u=0;for(;u+4<=T;){let d=ye(y,u);if(u+4+d>T)break;u+=4,K(y.subarray(u,u+d)),u+=d}u>0&&(y.copyWithin(0,u,T),T-=u)},L=_=>{a.didClose=!0,_&&(a.reason=": "+(_.message||_));const h="The service was stopped"+a.reason;for(let u in p)p[u](h,null);p={}},U=(_,h,u)=>{if(a.didClose)return u("The service is no longer running"+a.reason,null);let d=x++;p[d]=(k,j)=>{try{u(k,j)}finally{_&&_.unref()}},_&&_.ref(),n.writeToStdin(ie({id:d,isRequest:!0,value:h}))},V=(_,h)=>{if(a.didClose)throw new Error("The service is no longer running"+a.reason);n.writeToStdin(ie({id:_,isRequest:!1,value:h}))},de=(_,h)=>B(this,null,function*(){try{if(h.command==="ping"){V(_,{});return}if(typeof h.key=="number"){const u=i[h.key];if(!u)return;const d=u[h.command];if(d){yield d(_,h);return}}throw new Error("Invalid command: "+h.command)}catch(u){const d=[Ge(u,n,null,void 0,"")];try{V(_,{errors:d})}catch{}}}),ee=!0,K=_=>{if(ee){ee=!1;let u=String.fromCharCode(..._);if(u!=="0.20.1")throw new Error(`Cannot start service: Host version "0.20.1" does not match binary version ${N(u)}`);return}let h=ae(_);if(h.isRequest)de(h.id,h.value);else{let u=p[h.id];delete p[h.id],h.value.error?u(h.value.error,{}):u(null,h.value)}};return{readFromStdout:m,afterClose:L,service:{buildOrContext:({callName:_,refs:h,options:u,isTTY:d,defaultWD:k,callback:j})=>{let I=0;const M=S++,t={},l={ref(){++I===1&&h&&h.ref()},unref(){--I===0&&(delete i[M],h&&h.unref())}};i[M]=t,l.ref(),Pt(_,M,U,V,l,n,t,u,d,k,(b,P)=>{try{j(b,P)}finally{l.unref()}})},transform:({callName:_,refs:h,input:u,options:d,isTTY:k,fs:j,callback:I})=>{const M=yt();let t=l=>{try{if(typeof u!="string"&&!(u instanceof Uint8Array))throw new Error('The input to "transform" must be a string or a Uint8Array');let{flags:b,mangleCache:P}=St(_,d,k,ge),D={command:"transform",flags:b,inputFS:l!==null,input:l!==null?C(l):typeof u=="string"?C(u):u};P&&(D.mangleCache=P),U(h,D,(q,G)=>{if(q)return I(new Error(q),null);let X=Ke(G.errors,M),H=Ke(G.warnings,M),z=1,ce=()=>{if(--z===0){let Y={warnings:H,code:G.code,map:G.map,mangleCache:void 0,legalComments:void 0};"legalComments"in G&&(Y.legalComments=G?.legalComments),G.mangleCache&&(Y.mangleCache=G?.mangleCache),I(null,Y)}};if(X.length>0)return I(qe("Transform failed",X,H),null);G.codeFS&&(z++,j.readFile(G.code,(Y,he)=>{Y!==null?I(Y,null):(G.code=he,ce())})),G.mapFS&&(z++,j.readFile(G.map,(Y,he)=>{Y!==null?I(Y,null):(G.map=he,ce())})),ce()})}catch(b){let P=[];try{Qe(P,d,{},k,ge)}catch{}const D=Ge(b,n,M,void 0,"");U(h,{command:"error",flags:P,error:D},()=>{D.detail=M.load(D.detail),I(qe("Transform failed",[D],[]),null)})}};if((typeof u=="string"||u instanceof Uint8Array)&&u.length>1024*1024){let l=t;t=()=>j.writeFile(u,l)}t(null)},formatMessages:({callName:_,refs:h,messages:u,options:d,callback:k})=>{if(!d)throw new Error(`Missing second argument in ${_}() call`);let j={},I=c(d,j,"kind",v),M=c(d,j,"color",oe),t=c(d,j,"terminalWidth",Se);if(me(d,j,`in ${_}() call`),I===void 0)throw new Error(`Missing "kind" in ${_}() call`);if(I!=="error"&&I!=="warning")throw new Error(`Expected "kind" to be "error" or "warning" in ${_}() call`);let l={command:"format-msgs",messages:Ie(u,"messages",null,"",t),isWarning:I==="warning"};M!==void 0&&(l.color=M),t!==void 0&&(l.terminalWidth=t),U(h,l,(b,P)=>{if(b)return k(new Error(b),null);k(null,P.messages)})},analyzeMetafile:({callName:_,refs:h,metafile:u,options:d,callback:k})=>{d===void 0&&(d={});let j={},I=c(d,j,"color",oe),M=c(d,j,"verbose",oe);me(d,j,`in ${_}() call`);let t={command:"analyze-metafile",metafile:u};I!==void 0&&(t.color=I),M!==void 0&&(t.verbose=M),U(h,t,(l,b)=>{if(l)return k(new Error(l),null);k(null,b.result)})}}}}function Pt(n,i,a,p,x,S,y,T,m,L,U){const V=yt(),de=n==="context",ee=(E,ne)=>{const re=[];try{Qe(re,T,{},m,le)}catch{}const _=Ge(E,S,V,void 0,ne);a(x,{command:"error",flags:re,error:_},()=>{_.detail=V.load(_.detail),U(qe(de?"Context failed":"Build failed",[_],[]),null)})};let K;if(typeof T=="object"){const E=T.plugins;if(E!==void 0){if(!Array.isArray(E))return ee(new Error('"plugins" must be an array'),"");K=E}}if(K&&K.length>0){if(S.isSync)return ee(new Error("Cannot use plugins in synchronous API calls"),"");Ct(i,a,p,x,S,y,T,K,V).then(E=>{if(!E.ok)return ee(E.error,E.pluginName);try{ve(E.requestPlugins,E.runOnEndCallbacks,E.scheduleOnDisposeCallbacks)}catch(ne){ee(ne,"")}},E=>ee(E,""));return}try{ve(null,(E,ne)=>ne([],[]),()=>{})}catch(E){ee(E,"")}function ve(E,ne,re){const _=S.hasFS,{entries:h,flags:u,write:d,stdinContents:k,stdinResolveDir:j,absWorkingDir:I,nodePaths:M,mangleCache:t}=jt(n,T,m,le,_);if(d&&!S.hasFS)throw new Error('The "write" option is unavailable in this environment');const l={command:"build",key:i,entries:h,flags:u,write:d,stdinContents:k,stdinResolveDir:j,absWorkingDir:I||L,nodePaths:M,context:de};E&&(l.plugins=E),t&&(l.mangleCache=t);const b=(q,G)=>{const X={errors:Ke(q.errors,V),warnings:Ke(q.warnings,V),outputFiles:void 0,metafile:void 0,mangleCache:void 0},H=X.errors.slice(),z=X.warnings.slice();q.outputFiles&&(X.outputFiles=q.outputFiles.map($t)),q.metafile&&(X.metafile=JSON.parse(q.metafile)),q.mangleCache&&(X.mangleCache=q.mangleCache),q.writeToStdout!==void 0&&console.log(A(q.writeToStdout).replace(/\n$/,"")),ne(X,(ce,Y)=>{if(H.length>0||ce.length>0){const he=qe("Build failed",H.concat(ce),z.concat(Y));return G(he,null,ce,Y)}G(null,X,ce,Y)})};let P,D;de&&(y["on-end"]=(q,G)=>new Promise(X=>{b(G,(H,z,ce,Y)=>{const he={errors:ce,warnings:Y};D&&D(H,z),P=void 0,D=void 0,p(q,he),X()})})),a(x,l,(q,G)=>{if(q)return U(new Error(q),null);if(!de)return b(G,(z,ce)=>(re(),U(z,ce)));if(G.errors.length>0)return U(qe("Context failed",G.errors,G.warnings),null);let X=!1;const H={rebuild:()=>(P||(P=new Promise((z,ce)=>{let Y;D=(xe,Ne)=>{Y||(Y=()=>xe?ce(xe):z(Ne))};const he=()=>{a(x,{command:"rebuild",key:i},(Ne,rt)=>{Ne?ce(new Error(Ne)):Y?Y():he()})};he()})),P),watch:(z={})=>new Promise((ce,Y)=>{if(!S.hasFS)throw new Error('Cannot use the "watch" API in this environment');me(z,{},"in watch() call"),a(x,{command:"watch",key:i},Ne=>{Ne?Y(new Error(Ne)):ce(void 0)})}),serve:(z={})=>new Promise((ce,Y)=>{if(!S.hasFS)throw new Error('Cannot use the "serve" API in this environment');const he={},xe=c(z,he,"port",Se),Ne=c(z,he,"host",v),rt=c(z,he,"servedir",v),$=c(z,he,"keyfile",v),pe=c(z,he,"certfile",v),Le=c(z,he,"fallback",v),ze=c(z,he,"onRequest",Te);me(z,he,"in serve() call");const Ce={command:"serve",key:i,onRequest:!!ze};xe!==void 0&&(Ce.port=xe),Ne!==void 0&&(Ce.host=Ne),rt!==void 0&&(Ce.servedir=rt),$!==void 0&&(Ce.keyfile=$),pe!==void 0&&(Ce.certfile=pe),Le!==void 0&&(Ce.fallback=Le),a(x,Ce,(ct,kn)=>{if(ct)return Y(new Error(ct));ze&&(y["serve-request"]=(_n,En)=>{ze(En.args),p(_n,{})}),ce(kn)})}),cancel:()=>new Promise(z=>{if(X)return z();a(x,{command:"cancel",key:i},()=>{z()})}),dispose:()=>new Promise(z=>{if(X)return z();X=!0,a(x,{command:"dispose",key:i},()=>{z(),re(),x.unref()})})};x.ref(),U(null,H)})}}var Ct=(n,i,a,p,x,S,y,T,m)=>B(void 0,null,function*(){let L=[],U=[],V={},de={},ee=[],K=0,ve=0,E=[],ne=!1;T=[...T];for(let h of T){let u={};if(typeof h!="object")throw new Error(`Plugin at index ${ve} must be an object`);const d=c(h,u,"name",v);if(typeof d!="string"||d==="")throw new Error(`Plugin at index ${ve} is missing a name`);try{let k=c(h,u,"setup",Te);if(typeof k!="function")throw new Error("Plugin is missing a setup function");me(h,u,`on plugin ${N(d)}`);let j={name:d,onStart:!1,onEnd:!1,onResolve:[],onLoad:[]};ve++;let M=k({initialOptions:y,resolve:(t,l={})=>{if(!ne)throw new Error('Cannot call "resolve" before plugin setup has completed');if(typeof t!="string")throw new Error("The path to resolve must be a string");let b=Object.create(null),P=c(l,b,"pluginName",v),D=c(l,b,"importer",v),q=c(l,b,"namespace",v),G=c(l,b,"resolveDir",v),X=c(l,b,"kind",v),H=c(l,b,"pluginData",Pe);return me(l,b,"in resolve() call"),new Promise((z,ce)=>{const Y={command:"resolve",path:t,key:n,pluginName:d};if(P!=null&&(Y.pluginName=P),D!=null&&(Y.importer=D),q!=null&&(Y.namespace=q),G!=null&&(Y.resolveDir=G),X!=null)Y.kind=X;else throw new Error('Must specify "kind" when calling "resolve"');H!=null&&(Y.pluginData=m.store(H)),i(p,Y,(he,xe)=>{he!==null?ce(new Error(he)):z({errors:Ke(xe.errors,m),warnings:Ke(xe.warnings,m),path:xe.path,external:xe.external,sideEffects:xe.sideEffects,namespace:xe.namespace,suffix:xe.suffix,pluginData:m.load(xe.pluginData)})})})},onStart(t){let l='This error came from the "onStart" callback registered here:',b=tt(new Error(l),x,"onStart");L.push({name:d,callback:t,note:b}),j.onStart=!0},onEnd(t){let l='This error came from the "onEnd" callback registered here:',b=tt(new Error(l),x,"onEnd");U.push({name:d,callback:t,note:b}),j.onEnd=!0},onResolve(t,l){let b='This error came from the "onResolve" callback registered here:',P=tt(new Error(b),x,"onResolve"),D={},q=c(t,D,"filter",je),G=c(t,D,"namespace",v);if(me(t,D,`in onResolve() call for plugin ${N(d)}`),q==null)throw new Error("onResolve() call is missing a filter");let X=K++;V[X]={name:d,callback:l,note:P},j.onResolve.push({id:X,filter:q.source,namespace:G||""})},onLoad(t,l){let b='This error came from the "onLoad" callback registered here:',P=tt(new Error(b),x,"onLoad"),D={},q=c(t,D,"filter",je),G=c(t,D,"namespace",v);if(me(t,D,`in onLoad() call for plugin ${N(d)}`),q==null)throw new Error("onLoad() call is missing a filter");let X=K++;de[X]={name:d,callback:l,note:P},j.onLoad.push({id:X,filter:q.source,namespace:G||""})},onDispose(t){ee.push(t)},esbuild:x.esbuild});M&&(yield M),E.push(j)}catch(k){return{ok:!1,error:k,pluginName:d}}}S["on-start"]=(h,u)=>B(void 0,null,function*(){let d={errors:[],warnings:[]};yield Promise.all(L.map(k=>B(void 0,[k],function*({name:j,callback:I,note:M}){try{let t=yield I();if(t!=null){if(typeof t!="object")throw new Error(`Expected onStart() callback in plugin ${N(j)} to return an object`);let l={},b=c(t,l,"errors",fe),P=c(t,l,"warnings",fe);me(t,l,`from onStart() callback in plugin ${N(j)}`),b!=null&&d.errors.push(...Ie(b,"errors",m,j,void 0)),P!=null&&d.warnings.push(...Ie(P,"warnings",m,j,void 0))}}catch(t){d.errors.push(Ge(t,x,m,M&&M(),j))}}))),a(h,d)}),S["on-resolve"]=(h,u)=>B(void 0,null,function*(){let d={},k="",j,I;for(let M of u.ids)try{({name:k,callback:j,note:I}=V[M]);let t=yield j({path:u.path,importer:u.importer,namespace:u.namespace,resolveDir:u.resolveDir,kind:u.kind,pluginData:m.load(u.pluginData)});if(t!=null){if(typeof t!="object")throw new Error(`Expected onResolve() callback in plugin ${N(k)} to return an object`);let l={},b=c(t,l,"pluginName",v),P=c(t,l,"path",v),D=c(t,l,"namespace",v),q=c(t,l,"suffix",v),G=c(t,l,"external",oe),X=c(t,l,"sideEffects",oe),H=c(t,l,"pluginData",Pe),z=c(t,l,"errors",fe),ce=c(t,l,"warnings",fe),Y=c(t,l,"watchFiles",fe),he=c(t,l,"watchDirs",fe);me(t,l,`from onResolve() callback in plugin ${N(k)}`),d.id=M,b!=null&&(d.pluginName=b),P!=null&&(d.path=P),D!=null&&(d.namespace=D),q!=null&&(d.suffix=q),G!=null&&(d.external=G),X!=null&&(d.sideEffects=X),H!=null&&(d.pluginData=m.store(H)),z!=null&&(d.errors=Ie(z,"errors",m,k,void 0)),ce!=null&&(d.warnings=Ie(ce,"warnings",m,k,void 0)),Y!=null&&(d.watchFiles=nt(Y,"watchFiles")),he!=null&&(d.watchDirs=nt(he,"watchDirs"));break}}catch(t){d={id:M,errors:[Ge(t,x,m,I&&I(),k)]};break}a(h,d)}),S["on-load"]=(h,u)=>B(void 0,null,function*(){let d={},k="",j,I;for(let M of u.ids)try{({name:k,callback:j,note:I}=de[M]);let t=yield j({path:u.path,namespace:u.namespace,suffix:u.suffix,pluginData:m.load(u.pluginData),with:u.with});if(t!=null){if(typeof t!="object")throw new Error(`Expected onLoad() callback in plugin ${N(k)} to return an object`);let l={},b=c(t,l,"pluginName",v),P=c(t,l,"contents",st),D=c(t,l,"resolveDir",v),q=c(t,l,"pluginData",Pe),G=c(t,l,"loader",v),X=c(t,l,"errors",fe),H=c(t,l,"warnings",fe),z=c(t,l,"watchFiles",fe),ce=c(t,l,"watchDirs",fe);me(t,l,`from onLoad() callback in plugin ${N(k)}`),d.id=M,b!=null&&(d.pluginName=b),P instanceof Uint8Array?d.contents=P:P!=null&&(d.contents=C(P)),D!=null&&(d.resolveDir=D),q!=null&&(d.pluginData=m.store(q)),G!=null&&(d.loader=G),X!=null&&(d.errors=Ie(X,"errors",m,k,void 0)),H!=null&&(d.warnings=Ie(H,"warnings",m,k,void 0)),z!=null&&(d.watchFiles=nt(z,"watchFiles")),ce!=null&&(d.watchDirs=nt(ce,"watchDirs"));break}}catch(t){d={id:M,errors:[Ge(t,x,m,I&&I(),k)]};break}a(h,d)});let re=(h,u)=>u([],[]);U.length>0&&(re=(h,u)=>{B(void 0,null,function*(){const d=[],k=[];for(const{name:j,callback:I,note:M}of U){let t,l;try{const b=yield I(h);if(b!=null){if(typeof b!="object")throw new Error(`Expected onEnd() callback in plugin ${N(j)} to return an object`);let P={},D=c(b,P,"errors",fe),q=c(b,P,"warnings",fe);me(b,P,`from onEnd() callback in plugin ${N(j)}`),D!=null&&(t=Ie(D,"errors",m,j,void 0)),q!=null&&(l=Ie(q,"warnings",m,j,void 0))}}catch(b){t=[Ge(b,x,m,M&&M(),j)]}if(t){d.push(...t);try{h.errors.push(...t)}catch{}}if(l){k.push(...l);try{h.warnings.push(...l)}catch{}}}u(d,k)})});let _=()=>{for(const h of ee)setTimeout(()=>h(),0)};return ne=!0,{ok:!0,requestPlugins:E,runOnEndCallbacks:re,scheduleOnDisposeCallbacks:_}});function yt(){const n=new Map;let i=0;return{load(a){return n.get(a)},store(a){if(a===void 0)return-1;const p=i++;return n.set(p,a),p}}}function tt(n,i,a){let p,x=!1;return()=>{if(x)return p;x=!0;try{let S=(n.stack+"").split(`
`);S.splice(1,1);let y=bt(i,S,a);if(y)return p={text:n.message,location:y},p}catch{}}}function Ge(n,i,a,p,x){let S="Internal error",y=null;try{S=(n&&n.message||n)+""}catch{}try{y=bt(i,(n.stack+"").split(`
`),"")}catch{}return{id:"",pluginName:x,text:S,location:y,notes:p?[p]:[],detail:a?a.store(n):-1}}function bt(n,i,a){let p="    at ";if(n.readFileSync&&!i[0].startsWith(p)&&i[1].startsWith(p))for(let x=1;x<i.length;x++){let S=i[x];if(S.startsWith(p))for(S=S.slice(p.length);;){let y=/^(?:new |async )?\S+ \((.*)\)$/.exec(S);if(y){S=y[1];continue}if(y=/^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(S),y){S=y[1];continue}if(y=/^(\S+):(\d+):(\d+)$/.exec(S),y){let T;try{T=n.readFileSync(y[1],"utf8")}catch{break}let m=T.split(/\r\n|\r|\n|\u2028|\u2029/)[+y[2]-1]||"",L=+y[3]-1,U=m.slice(L,L+a.length)===a?a.length:0;return{file:y[1],namespace:"file",line:+y[2],column:C(m.slice(0,L)).length,length:C(m.slice(L,L+U)).length,lineText:m+`
`+i.slice(1).join(`
`),suggestion:""}}break}}return null}function qe(n,i,a){let p=5;n+=i.length<1?"":` with ${i.length} error${i.length<2?"":"s"}:`+i.slice(0,p+1).map((S,y)=>{if(y===p)return`
...`;if(!S.location)return`
error: ${S.text}`;let{file:T,line:m,column:L}=S.location,U=S.pluginName?`[plugin: ${S.pluginName}] `:"";return`
${T}:${m}:${L}: ERROR: ${U}${S.text}`}).join("");let x=new Error(n);for(const[S,y]of[["errors",i],["warnings",a]])Object.defineProperty(x,S,{configurable:!0,enumerable:!0,get:()=>y,set:T=>Object.defineProperty(x,S,{configurable:!0,enumerable:!0,value:T})});return x}function Ke(n,i){for(const a of n)a.detail=i.load(a.detail);return n}function ot(n,i,a){if(n==null)return null;let p={},x=c(n,p,"file",v),S=c(n,p,"namespace",v),y=c(n,p,"line",Se),T=c(n,p,"column",Se),m=c(n,p,"length",Se),L=c(n,p,"lineText",v),U=c(n,p,"suggestion",v);if(me(n,p,i),L){const V=L.slice(0,(T&&T>0?T:0)+(m&&m>0?m:0)+(a&&a>0?a:80));!/[\x7F-\uFFFF]/.test(V)&&!/\n/.test(L)&&(L=V)}return{file:x||"",namespace:S||"",line:y||0,column:T||0,length:m||0,lineText:L||"",suggestion:U||""}}function Ie(n,i,a,p,x){let S=[],y=0;for(const T of n){let m={},L=c(T,m,"id",v),U=c(T,m,"pluginName",v),V=c(T,m,"text",v),de=c(T,m,"location",ke),ee=c(T,m,"notes",fe),K=c(T,m,"detail",Pe),ve=`in element ${y} of "${i}"`;me(T,m,ve);let E=[];if(ee)for(const ne of ee){let re={},_=c(ne,re,"text",v),h=c(ne,re,"location",ke);me(ne,re,ve),E.push({text:_||"",location:ot(h,ve,x)})}S.push({id:L||"",pluginName:U||p,text:V||"",location:ot(de,ve,x),notes:E,detail:a?a.store(K):-1}),y++}return S}function nt(n,i){const a=[];for(const p of n){if(typeof p!="string")throw new Error(`${N(i)} must be an array of strings`);a.push(p)}return a}function $t({path:n,contents:i,hash:a}){let p=null;return{path:n,contents:i,hash:a,get text(){const x=this.contents;return(p===null||x!==i)&&(i=x,p=A(x)),p}}}var Tt="0.20.1",Rt=n=>lt().build(n),It=n=>lt().context(n),Ot=(n,i)=>lt().transform(n,i),te=(n,i)=>lt().formatMessages(n,i),ue=(n,i)=>lt().analyzeMetafile(n,i),Oe=()=>{throw new Error('The "buildSync" API only works in node')},Fe=()=>{throw new Error('The "transformSync" API only works in node')},Ue=()=>{throw new Error('The "formatMessagesSync" API only works in node')},Ft=()=>{throw new Error('The "analyzeMetafileSync" API only works in node')},Nt=()=>(wt&&wt(),Promise.resolve()),Ve,wt,vt,lt=()=>{if(vt)return vt;throw Ve?new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this'):new Error('You need to call "initialize" before calling this')},wn=n=>{n=at(n||{});let i=n.wasmURL,a=n.wasmModule,p=n.worker!==!1;if(!i&&!a)throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');if(Ve)throw new Error('Cannot call "initialize" more than once');return Ve=vn(i||"",a,p),Ve.catch(()=>{Ve=void 0}),Ve},vn=(n,i,a)=>B(void 0,null,function*(){let p;if(a){let L=new Blob([`onmessage=((postMessage) => {
      // Copyright 2018 The Go Authors. All rights reserved.
      // Use of this source code is governed by a BSD-style
      // license that can be found in the LICENSE file.
      var __async = (__this, __arguments, generator) => {
        return new Promise((resolve, reject) => {
          var fulfilled = (value) => {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          };
          var rejected = (value) => {
            try {
              step(generator.throw(value));
            } catch (e) {
              reject(e);
            }
          };
          var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
          step((generator = generator.apply(__this, __arguments)).next());
        });
      };
      let onmessage;
      let globalThis = {};
      for (let o = self; o; o = Object.getPrototypeOf(o))
        for (let k of Object.getOwnPropertyNames(o))
          if (!(k in globalThis))
            Object.defineProperty(globalThis, k, { get: () => self[k] });
      "use strict";
      (() => {
        const enosys = () => {
          const err = new Error("not implemented");
          err.code = "ENOSYS";
          return err;
        };
        if (!globalThis.fs) {
          let outputBuf = "";
          globalThis.fs = {
            constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 },
            // unused
            writeSync(fd, buf) {
              outputBuf += decoder.decode(buf);
              const nl = outputBuf.lastIndexOf("\\n");
              if (nl != -1) {
                console.log(outputBuf.substring(0, nl));
                outputBuf = outputBuf.substring(nl + 1);
              }
              return buf.length;
            },
            write(fd, buf, offset, length, position, callback) {
              if (offset !== 0 || length !== buf.length || position !== null) {
                callback(enosys());
                return;
              }
              const n = this.writeSync(fd, buf);
              callback(null, n);
            },
            chmod(path, mode, callback) {
              callback(enosys());
            },
            chown(path, uid, gid, callback) {
              callback(enosys());
            },
            close(fd, callback) {
              callback(enosys());
            },
            fchmod(fd, mode, callback) {
              callback(enosys());
            },
            fchown(fd, uid, gid, callback) {
              callback(enosys());
            },
            fstat(fd, callback) {
              callback(enosys());
            },
            fsync(fd, callback) {
              callback(null);
            },
            ftruncate(fd, length, callback) {
              callback(enosys());
            },
            lchown(path, uid, gid, callback) {
              callback(enosys());
            },
            link(path, link, callback) {
              callback(enosys());
            },
            lstat(path, callback) {
              callback(enosys());
            },
            mkdir(path, perm, callback) {
              callback(enosys());
            },
            open(path, flags, mode, callback) {
              callback(enosys());
            },
            read(fd, buffer, offset, length, position, callback) {
              callback(enosys());
            },
            readdir(path, callback) {
              callback(enosys());
            },
            readlink(path, callback) {
              callback(enosys());
            },
            rename(from, to, callback) {
              callback(enosys());
            },
            rmdir(path, callback) {
              callback(enosys());
            },
            stat(path, callback) {
              callback(enosys());
            },
            symlink(path, link, callback) {
              callback(enosys());
            },
            truncate(path, length, callback) {
              callback(enosys());
            },
            unlink(path, callback) {
              callback(enosys());
            },
            utimes(path, atime, mtime, callback) {
              callback(enosys());
            }
          };
        }
        if (!globalThis.process) {
          globalThis.process = {
            getuid() {
              return -1;
            },
            getgid() {
              return -1;
            },
            geteuid() {
              return -1;
            },
            getegid() {
              return -1;
            },
            getgroups() {
              throw enosys();
            },
            pid: -1,
            ppid: -1,
            umask() {
              throw enosys();
            },
            cwd() {
              throw enosys();
            },
            chdir() {
              throw enosys();
            }
          };
        }
        if (!globalThis.crypto) {
          throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");
        }
        if (!globalThis.performance) {
          throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");
        }
        if (!globalThis.TextEncoder) {
          throw new Error("globalThis.TextEncoder is not available, polyfill required");
        }
        if (!globalThis.TextDecoder) {
          throw new Error("globalThis.TextDecoder is not available, polyfill required");
        }
        const encoder = new TextEncoder("utf-8");
        const decoder = new TextDecoder("utf-8");
        globalThis.Go = class {
          constructor() {
            this.argv = ["js"];
            this.env = {};
            this.exit = (code) => {
              if (code !== 0) {
                console.warn("exit code:", code);
              }
            };
            this._exitPromise = new Promise((resolve) => {
              this._resolveExitPromise = resolve;
            });
            this._pendingEvent = null;
            this._scheduledTimeouts = /* @__PURE__ */ new Map();
            this._nextCallbackTimeoutID = 1;
            const setInt64 = (addr, v) => {
              this.mem.setUint32(addr + 0, v, true);
              this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);
            };
            const getInt64 = (addr) => {
              const low = this.mem.getUint32(addr + 0, true);
              const high = this.mem.getInt32(addr + 4, true);
              return low + high * 4294967296;
            };
            const loadValue = (addr) => {
              const f = this.mem.getFloat64(addr, true);
              if (f === 0) {
                return void 0;
              }
              if (!isNaN(f)) {
                return f;
              }
              const id = this.mem.getUint32(addr, true);
              return this._values[id];
            };
            const storeValue = (addr, v) => {
              const nanHead = 2146959360;
              if (typeof v === "number" && v !== 0) {
                if (isNaN(v)) {
                  this.mem.setUint32(addr + 4, nanHead, true);
                  this.mem.setUint32(addr, 0, true);
                  return;
                }
                this.mem.setFloat64(addr, v, true);
                return;
              }
              if (v === void 0) {
                this.mem.setFloat64(addr, 0, true);
                return;
              }
              let id = this._ids.get(v);
              if (id === void 0) {
                id = this._idPool.pop();
                if (id === void 0) {
                  id = this._values.length;
                }
                this._values[id] = v;
                this._goRefCounts[id] = 0;
                this._ids.set(v, id);
              }
              this._goRefCounts[id]++;
              let typeFlag = 0;
              switch (typeof v) {
                case "object":
                  if (v !== null) {
                    typeFlag = 1;
                  }
                  break;
                case "string":
                  typeFlag = 2;
                  break;
                case "symbol":
                  typeFlag = 3;
                  break;
                case "function":
                  typeFlag = 4;
                  break;
              }
              this.mem.setUint32(addr + 4, nanHead | typeFlag, true);
              this.mem.setUint32(addr, id, true);
            };
            const loadSlice = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return new Uint8Array(this._inst.exports.mem.buffer, array, len);
            };
            const loadSliceOfValues = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              const a = new Array(len);
              for (let i = 0; i < len; i++) {
                a[i] = loadValue(array + i * 8);
              }
              return a;
            };
            const loadString = (addr) => {
              const saddr = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));
            };
            const timeOrigin = Date.now() - performance.now();
            this.importObject = {
              go: {
                // Go's SP does not change as long as no Go code is running. Some operations (e.g. calls, getters and setters)
                // may synchronously trigger a Go event handler. This makes Go code get executed in the middle of the imported
                // function. A goroutine can switch to a new stack if the current stack is too small (see morestack function).
                // This changes the SP, thus we have to update the SP used by the imported function.
                // func wasmExit(code int32)
                "runtime.wasmExit": (sp) => {
                  sp >>>= 0;
                  const code = this.mem.getInt32(sp + 8, true);
                  this.exited = true;
                  delete this._inst;
                  delete this._values;
                  delete this._goRefCounts;
                  delete this._ids;
                  delete this._idPool;
                  this.exit(code);
                },
                // func wasmWrite(fd uintptr, p unsafe.Pointer, n int32)
                "runtime.wasmWrite": (sp) => {
                  sp >>>= 0;
                  const fd = getInt64(sp + 8);
                  const p = getInt64(sp + 16);
                  const n = this.mem.getInt32(sp + 24, true);
                  globalThis.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));
                },
                // func resetMemoryDataView()
                "runtime.resetMemoryDataView": (sp) => {
                  sp >>>= 0;
                  this.mem = new DataView(this._inst.exports.mem.buffer);
                },
                // func nanotime1() int64
                "runtime.nanotime1": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);
                },
                // func walltime() (sec int64, nsec int32)
                "runtime.walltime": (sp) => {
                  sp >>>= 0;
                  const msec = (/* @__PURE__ */ new Date()).getTime();
                  setInt64(sp + 8, msec / 1e3);
                  this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);
                },
                // func scheduleTimeoutEvent(delay int64) int32
                "runtime.scheduleTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this._nextCallbackTimeoutID;
                  this._nextCallbackTimeoutID++;
                  this._scheduledTimeouts.set(id, setTimeout(
                    () => {
                      this._resume();
                      while (this._scheduledTimeouts.has(id)) {
                        console.warn("scheduleTimeoutEvent: missed timeout event");
                        this._resume();
                      }
                    },
                    getInt64(sp + 8) + 1
                    // setTimeout has been seen to fire up to 1 millisecond early
                  ));
                  this.mem.setInt32(sp + 16, id, true);
                },
                // func clearTimeoutEvent(id int32)
                "runtime.clearTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getInt32(sp + 8, true);
                  clearTimeout(this._scheduledTimeouts.get(id));
                  this._scheduledTimeouts.delete(id);
                },
                // func getRandomData(r []byte)
                "runtime.getRandomData": (sp) => {
                  sp >>>= 0;
                  crypto.getRandomValues(loadSlice(sp + 8));
                },
                // func finalizeRef(v ref)
                "syscall/js.finalizeRef": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getUint32(sp + 8, true);
                  this._goRefCounts[id]--;
                  if (this._goRefCounts[id] === 0) {
                    const v = this._values[id];
                    this._values[id] = null;
                    this._ids.delete(v);
                    this._idPool.push(id);
                  }
                },
                // func stringVal(value string) ref
                "syscall/js.stringVal": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, loadString(sp + 8));
                },
                // func valueGet(v ref, p string) ref
                "syscall/js.valueGet": (sp) => {
                  sp >>>= 0;
                  const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));
                  sp = this._inst.exports.getsp() >>> 0;
                  storeValue(sp + 32, result);
                },
                // func valueSet(v ref, p string, x ref)
                "syscall/js.valueSet": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));
                },
                // func valueDelete(v ref, p string)
                "syscall/js.valueDelete": (sp) => {
                  sp >>>= 0;
                  Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));
                },
                // func valueIndex(v ref, i int) ref
                "syscall/js.valueIndex": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));
                },
                // valueSetIndex(v ref, i int, x ref)
                "syscall/js.valueSetIndex": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));
                },
                // func valueCall(v ref, m string, args []ref) (ref, bool)
                "syscall/js.valueCall": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const m = Reflect.get(v, loadString(sp + 16));
                    const args = loadSliceOfValues(sp + 32);
                    const result = Reflect.apply(m, v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, result);
                    this.mem.setUint8(sp + 64, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, err);
                    this.mem.setUint8(sp + 64, 0);
                  }
                },
                // func valueInvoke(v ref, args []ref) (ref, bool)
                "syscall/js.valueInvoke": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.apply(v, void 0, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueNew(v ref, args []ref) (ref, bool)
                "syscall/js.valueNew": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.construct(v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueLength(v ref) int
                "syscall/js.valueLength": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 16, parseInt(loadValue(sp + 8).length));
                },
                // valuePrepareString(v ref) (ref, int)
                "syscall/js.valuePrepareString": (sp) => {
                  sp >>>= 0;
                  const str = encoder.encode(String(loadValue(sp + 8)));
                  storeValue(sp + 16, str);
                  setInt64(sp + 24, str.length);
                },
                // valueLoadString(v ref, b []byte)
                "syscall/js.valueLoadString": (sp) => {
                  sp >>>= 0;
                  const str = loadValue(sp + 8);
                  loadSlice(sp + 16).set(str);
                },
                // func valueInstanceOf(v ref, t ref) bool
                "syscall/js.valueInstanceOf": (sp) => {
                  sp >>>= 0;
                  this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);
                },
                // func copyBytesToGo(dst []byte, src ref) (int, bool)
                "syscall/js.copyBytesToGo": (sp) => {
                  sp >>>= 0;
                  const dst = loadSlice(sp + 8);
                  const src = loadValue(sp + 32);
                  if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                // func copyBytesToJS(dst ref, src []byte) (int, bool)
                "syscall/js.copyBytesToJS": (sp) => {
                  sp >>>= 0;
                  const dst = loadValue(sp + 8);
                  const src = loadSlice(sp + 16);
                  if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                "debug": (value) => {
                  console.log(value);
                }
              }
            };
          }
          run(instance) {
            return __async(this, null, function* () {
              if (!(instance instanceof WebAssembly.Instance)) {
                throw new Error("Go.run: WebAssembly.Instance expected");
              }
              this._inst = instance;
              this.mem = new DataView(this._inst.exports.mem.buffer);
              this._values = [
                // JS values that Go currently has references to, indexed by reference id
                NaN,
                0,
                null,
                true,
                false,
                globalThis,
                this
              ];
              this._goRefCounts = new Array(this._values.length).fill(Infinity);
              this._ids = /* @__PURE__ */ new Map([
                // mapping from JS values to reference ids
                [0, 1],
                [null, 2],
                [true, 3],
                [false, 4],
                [globalThis, 5],
                [this, 6]
              ]);
              this._idPool = [];
              this.exited = false;
              let offset = 4096;
              const strPtr = (str) => {
                const ptr = offset;
                const bytes = encoder.encode(str + "\\0");
                new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);
                offset += bytes.length;
                if (offset % 8 !== 0) {
                  offset += 8 - offset % 8;
                }
                return ptr;
              };
              const argc = this.argv.length;
              const argvPtrs = [];
              this.argv.forEach((arg) => {
                argvPtrs.push(strPtr(arg));
              });
              argvPtrs.push(0);
              const keys = Object.keys(this.env).sort();
              keys.forEach((key) => {
                argvPtrs.push(strPtr(\`\${key}=\${this.env[key]}\`));
              });
              argvPtrs.push(0);
              const argv = offset;
              argvPtrs.forEach((ptr) => {
                this.mem.setUint32(offset, ptr, true);
                this.mem.setUint32(offset + 4, 0, true);
                offset += 8;
              });
              const wasmMinDataAddr = 4096 + 8192;
              if (offset >= wasmMinDataAddr) {
                throw new Error("total length of command line and environment variables exceeds limit");
              }
              this._inst.exports.run(argc, argv);
              if (this.exited) {
                this._resolveExitPromise();
              }
              yield this._exitPromise;
            });
          }
          _resume() {
            if (this.exited) {
              throw new Error("Go program has already exited");
            }
            this._inst.exports.resume();
            if (this.exited) {
              this._resolveExitPromise();
            }
          }
          _makeFuncWrapper(id) {
            const go = this;
            return function() {
              const event = { id, this: this, args: arguments };
              go._pendingEvent = event;
              go._resume();
              return event.result;
            };
          }
        };
      })();
      onmessage = ({ data: wasm }) => {
        let decoder = new TextDecoder();
        let fs = globalThis.fs;
        let stderr = "";
        fs.writeSync = (fd, buffer) => {
          if (fd === 1) {
            postMessage(buffer);
          } else if (fd === 2) {
            stderr += decoder.decode(buffer);
            let parts = stderr.split("\\n");
            if (parts.length > 1)
              console.log(parts.slice(0, -1).join("\\n"));
            stderr = parts[parts.length - 1];
          } else {
            throw new Error("Bad write");
          }
          return buffer.length;
        };
        let stdin = [];
        let resumeStdin;
        let stdinPos = 0;
        onmessage = ({ data }) => {
          if (data.length > 0) {
            stdin.push(data);
            if (resumeStdin)
              resumeStdin();
          }
          return go;
        };
        fs.read = (fd, buffer, offset, length, position, callback) => {
          if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {
            throw new Error("Bad read");
          }
          if (stdin.length === 0) {
            resumeStdin = () => fs.read(fd, buffer, offset, length, position, callback);
            return;
          }
          let first = stdin[0];
          let count = Math.max(0, Math.min(length, first.length - stdinPos));
          buffer.set(first.subarray(stdinPos, stdinPos + count), offset);
          stdinPos += count;
          if (stdinPos === first.length) {
            stdin.shift();
            stdinPos = 0;
          }
          callback(null, count);
        };
        let go = new globalThis.Go();
        go.argv = ["", \`--service=\${"0.20.1"}\`];
        tryToInstantiateModule(wasm, go).then(
          (instance) => {
            postMessage(null);
            go.run(instance);
          },
          (error) => {
            postMessage(error);
          }
        );
        return go;
      };
      function tryToInstantiateModule(wasm, go) {
        return __async(this, null, function* () {
          if (wasm instanceof WebAssembly.Module) {
            return WebAssembly.instantiate(wasm, go.importObject);
          }
          const res = yield fetch(wasm);
          if (!res.ok)
            throw new Error(\`Failed to download \${JSON.stringify(wasm)}\`);
          if ("instantiateStreaming" in WebAssembly && /^application\\/wasm($|;)/i.test(res.headers.get("Content-Type") || "")) {
            const result2 = yield WebAssembly.instantiateStreaming(res, go.importObject);
            return result2.instance;
          }
          const bytes = yield res.arrayBuffer();
          const result = yield WebAssembly.instantiate(bytes, go.importObject);
          return result.instance;
        });
      }
      return (m) => onmessage(m);
    })(postMessage)`],{type:"text/javascript"});p=new Worker(URL.createObjectURL(L))}else{let L=(V=>{var de=(E,ne,re)=>new Promise((_,h)=>{var u=j=>{try{k(re.next(j))}catch(I){h(I)}},d=j=>{try{k(re.throw(j))}catch(I){h(I)}},k=j=>j.done?_(j.value):Promise.resolve(j.value).then(u,d);k((re=re.apply(E,ne)).next())});let ee,K={};for(let E=self;E;E=Object.getPrototypeOf(E))for(let ne of Object.getOwnPropertyNames(E))ne in K||Object.defineProperty(K,ne,{get:()=>self[ne]});(()=>{const E=()=>{const _=new Error("not implemented");return _.code="ENOSYS",_};if(!K.fs){let _="";K.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(h,u){_+=re.decode(u);const d=_.lastIndexOf(`
`);return d!=-1&&(console.log(_.substring(0,d)),_=_.substring(d+1)),u.length},write(h,u,d,k,j,I){if(d!==0||k!==u.length||j!==null){I(E());return}const M=this.writeSync(h,u);I(null,M)},chmod(h,u,d){d(E())},chown(h,u,d,k){k(E())},close(h,u){u(E())},fchmod(h,u,d){d(E())},fchown(h,u,d,k){k(E())},fstat(h,u){u(E())},fsync(h,u){u(null)},ftruncate(h,u,d){d(E())},lchown(h,u,d,k){k(E())},link(h,u,d){d(E())},lstat(h,u){u(E())},mkdir(h,u,d){d(E())},open(h,u,d,k){k(E())},read(h,u,d,k,j,I){I(E())},readdir(h,u){u(E())},readlink(h,u){u(E())},rename(h,u,d){d(E())},rmdir(h,u){u(E())},stat(h,u){u(E())},symlink(h,u,d){d(E())},truncate(h,u,d){d(E())},unlink(h,u){u(E())},utimes(h,u,d,k){k(E())}}}if(K.process||(K.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw E()},pid:-1,ppid:-1,umask(){throw E()},cwd(){throw E()},chdir(){throw E()}}),!K.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!K.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!K.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!K.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");const ne=new TextEncoder("utf-8"),re=new TextDecoder("utf-8");K.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=t=>{t!==0&&console.warn("exit code:",t)},this._exitPromise=new Promise(t=>{this._resolveExitPromise=t}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const _=(t,l)=>{this.mem.setUint32(t+0,l,!0),this.mem.setUint32(t+4,Math.floor(l/4294967296),!0)},h=t=>{const l=this.mem.getUint32(t+0,!0),b=this.mem.getInt32(t+4,!0);return l+b*4294967296},u=t=>{const l=this.mem.getFloat64(t,!0);if(l===0)return;if(!isNaN(l))return l;const b=this.mem.getUint32(t,!0);return this._values[b]},d=(t,l)=>{if(typeof l=="number"&&l!==0){if(isNaN(l)){this.mem.setUint32(t+4,2146959360,!0),this.mem.setUint32(t,0,!0);return}this.mem.setFloat64(t,l,!0);return}if(l===void 0){this.mem.setFloat64(t,0,!0);return}let P=this._ids.get(l);P===void 0&&(P=this._idPool.pop(),P===void 0&&(P=this._values.length),this._values[P]=l,this._goRefCounts[P]=0,this._ids.set(l,P)),this._goRefCounts[P]++;let D=0;switch(typeof l){case"object":l!==null&&(D=1);break;case"string":D=2;break;case"symbol":D=3;break;case"function":D=4;break}this.mem.setUint32(t+4,2146959360|D,!0),this.mem.setUint32(t,P,!0)},k=t=>{const l=h(t+0),b=h(t+8);return new Uint8Array(this._inst.exports.mem.buffer,l,b)},j=t=>{const l=h(t+0),b=h(t+8),P=new Array(b);for(let D=0;D<b;D++)P[D]=u(l+D*8);return P},I=t=>{const l=h(t+0),b=h(t+8);return re.decode(new DataView(this._inst.exports.mem.buffer,l,b))},M=Date.now()-performance.now();this.importObject={go:{"runtime.wasmExit":t=>{t>>>=0;const l=this.mem.getInt32(t+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(l)},"runtime.wasmWrite":t=>{t>>>=0;const l=h(t+8),b=h(t+16),P=this.mem.getInt32(t+24,!0);K.fs.writeSync(l,new Uint8Array(this._inst.exports.mem.buffer,b,P))},"runtime.resetMemoryDataView":t=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":t=>{t>>>=0,_(t+8,(M+performance.now())*1e6)},"runtime.walltime":t=>{t>>>=0;const l=new Date().getTime();_(t+8,l/1e3),this.mem.setInt32(t+16,l%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":t=>{t>>>=0;const l=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(l,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(l);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},h(t+8)+1)),this.mem.setInt32(t+16,l,!0)},"runtime.clearTimeoutEvent":t=>{t>>>=0;const l=this.mem.getInt32(t+8,!0);clearTimeout(this._scheduledTimeouts.get(l)),this._scheduledTimeouts.delete(l)},"runtime.getRandomData":t=>{t>>>=0,crypto.getRandomValues(k(t+8))},"syscall/js.finalizeRef":t=>{t>>>=0;const l=this.mem.getUint32(t+8,!0);if(this._goRefCounts[l]--,this._goRefCounts[l]===0){const b=this._values[l];this._values[l]=null,this._ids.delete(b),this._idPool.push(l)}},"syscall/js.stringVal":t=>{t>>>=0,d(t+24,I(t+8))},"syscall/js.valueGet":t=>{t>>>=0;const l=Reflect.get(u(t+8),I(t+16));t=this._inst.exports.getsp()>>>0,d(t+32,l)},"syscall/js.valueSet":t=>{t>>>=0,Reflect.set(u(t+8),I(t+16),u(t+32))},"syscall/js.valueDelete":t=>{t>>>=0,Reflect.deleteProperty(u(t+8),I(t+16))},"syscall/js.valueIndex":t=>{t>>>=0,d(t+24,Reflect.get(u(t+8),h(t+16)))},"syscall/js.valueSetIndex":t=>{t>>>=0,Reflect.set(u(t+8),h(t+16),u(t+24))},"syscall/js.valueCall":t=>{t>>>=0;try{const l=u(t+8),b=Reflect.get(l,I(t+16)),P=j(t+32),D=Reflect.apply(b,l,P);t=this._inst.exports.getsp()>>>0,d(t+56,D),this.mem.setUint8(t+64,1)}catch(l){t=this._inst.exports.getsp()>>>0,d(t+56,l),this.mem.setUint8(t+64,0)}},"syscall/js.valueInvoke":t=>{t>>>=0;try{const l=u(t+8),b=j(t+16),P=Reflect.apply(l,void 0,b);t=this._inst.exports.getsp()>>>0,d(t+40,P),this.mem.setUint8(t+48,1)}catch(l){t=this._inst.exports.getsp()>>>0,d(t+40,l),this.mem.setUint8(t+48,0)}},"syscall/js.valueNew":t=>{t>>>=0;try{const l=u(t+8),b=j(t+16),P=Reflect.construct(l,b);t=this._inst.exports.getsp()>>>0,d(t+40,P),this.mem.setUint8(t+48,1)}catch(l){t=this._inst.exports.getsp()>>>0,d(t+40,l),this.mem.setUint8(t+48,0)}},"syscall/js.valueLength":t=>{t>>>=0,_(t+16,parseInt(u(t+8).length))},"syscall/js.valuePrepareString":t=>{t>>>=0;const l=ne.encode(String(u(t+8)));d(t+16,l),_(t+24,l.length)},"syscall/js.valueLoadString":t=>{t>>>=0;const l=u(t+8);k(t+16).set(l)},"syscall/js.valueInstanceOf":t=>{t>>>=0,this.mem.setUint8(t+24,u(t+8)instanceof u(t+16)?1:0)},"syscall/js.copyBytesToGo":t=>{t>>>=0;const l=k(t+8),b=u(t+32);if(!(b instanceof Uint8Array||b instanceof Uint8ClampedArray)){this.mem.setUint8(t+48,0);return}const P=b.subarray(0,l.length);l.set(P),_(t+40,P.length),this.mem.setUint8(t+48,1)},"syscall/js.copyBytesToJS":t=>{t>>>=0;const l=u(t+8),b=k(t+16);if(!(l instanceof Uint8Array||l instanceof Uint8ClampedArray)){this.mem.setUint8(t+48,0);return}const P=b.subarray(0,l.length);l.set(P),_(t+40,P.length),this.mem.setUint8(t+48,1)},debug:t=>{console.log(t)}}}}run(_){return de(this,null,function*(){if(!(_ instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=_,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,K,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[K,5],[this,6]]),this._idPool=[],this.exited=!1;let h=4096;const u=t=>{const l=h,b=ne.encode(t+"\0");return new Uint8Array(this.mem.buffer,h,b.length).set(b),h+=b.length,h%8!==0&&(h+=8-h%8),l},d=this.argv.length,k=[];this.argv.forEach(t=>{k.push(u(t))}),k.push(0),Object.keys(this.env).sort().forEach(t=>{k.push(u(`${t}=${this.env[t]}`))}),k.push(0);const I=h;if(k.forEach(t=>{this.mem.setUint32(h,t,!0),this.mem.setUint32(h+4,0,!0),h+=8}),h>=12288)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(d,I),this.exited&&this._resolveExitPromise(),yield this._exitPromise})}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(_){const h=this;return function(){const u={id:_,this:this,args:arguments};return h._pendingEvent=u,h._resume(),u.result}}}})(),ee=({data:E})=>{let ne=new TextDecoder,re=K.fs,_="";re.writeSync=(j,I)=>{if(j===1)V(I);else if(j===2){_+=ne.decode(I);let M=_.split(`
`);M.length>1&&console.log(M.slice(0,-1).join(`
`)),_=M[M.length-1]}else throw new Error("Bad write");return I.length};let h=[],u,d=0;ee=({data:j})=>(j.length>0&&(h.push(j),u&&u()),k),re.read=(j,I,M,t,l,b)=>{if(j!==0||M!==0||t!==I.length||l!==null)throw new Error("Bad read");if(h.length===0){u=()=>re.read(j,I,M,t,l,b);return}let P=h[0],D=Math.max(0,Math.min(t,P.length-d));I.set(P.subarray(d,d+D),M),d+=D,d===P.length&&(h.shift(),d=0),b(null,D)};let k=new K.Go;return k.argv=["","--service=0.20.1"],ve(E,k).then(j=>{V(null),k.run(j)},j=>{V(j)}),k};function ve(E,ne){return de(this,null,function*(){if(E instanceof WebAssembly.Module)return WebAssembly.instantiate(E,ne.importObject);const re=yield fetch(E);if(!re.ok)throw new Error(`Failed to download ${JSON.stringify(E)}`);if("instantiateStreaming"in WebAssembly&&/^application\/wasm($|;)/i.test(re.headers.get("Content-Type")||""))return(yield WebAssembly.instantiateStreaming(re,ne.importObject)).instance;const _=yield re.arrayBuffer();return(yield WebAssembly.instantiate(_,ne.importObject)).instance})}return E=>ee(E)})(V=>p.onmessage({data:V})),U;p={onmessage:null,postMessage:V=>setTimeout(()=>U=L({data:V})),terminate(){if(U)for(let V of U._scheduledTimeouts.values())clearTimeout(V)}}}let x,S;const y=new Promise((L,U)=>{x=L,S=U});p.onmessage=({data:L})=>{p.onmessage=({data:U})=>T(U),L?S(L):x()},p.postMessage(i||new URL(n,location.href).toString());let{readFromStdout:T,service:m}=gt({writeToStdin(L){p.postMessage(L)},isSync:!1,hasFS:!1,esbuild:Z});yield y,wt=()=>{p.terminate(),Ve=void 0,wt=void 0,vt=void 0},vt={build:L=>new Promise((U,V)=>m.buildOrContext({callName:"build",refs:null,options:L,isTTY:!1,defaultWD:"/",callback:(de,ee)=>de?V(de):U(ee)})),context:L=>new Promise((U,V)=>m.buildOrContext({callName:"context",refs:null,options:L,isTTY:!1,defaultWD:"/",callback:(de,ee)=>de?V(de):U(ee)})),transform:(L,U)=>new Promise((V,de)=>m.transform({callName:"transform",refs:null,input:L,options:U||{},isTTY:!1,fs:{readFile(ee,K){K(new Error("Internal error"),null)},writeFile(ee,K){K(null)}},callback:(ee,K)=>ee?de(ee):V(K)})),formatMessages:(L,U)=>new Promise((V,de)=>m.formatMessages({callName:"formatMessages",refs:null,messages:L,options:U,callback:(ee,K)=>ee?de(ee):V(K)})),analyzeMetafile:(L,U)=>new Promise((V,de)=>m.analyzeMetafile({callName:"analyzeMetafile",refs:null,metafile:typeof L=="string"?L:JSON.stringify(L),options:U,callback:(ee,K)=>ee?de(ee):V(K)}))}}),xn=Z})(r)})(yn);var sn=yn.exports;const ti="/assets/esbuild-DPD0d1iy.wasm";let Mt;const ni=/^(?:[ \t]*<\?php)?[ \t/*#@]*Plugin Name:(.*)$/im,ri=async r=>{Mt===void 0&&(Mt=sn.initialize({worker:!0,wasmURL:ti}));const e=r.map(async g=>{if(g.name.match(/(\/|^)block.json$/))return[g,{name:g.name+".esmodule.js",contents:`export default ${g.contents}`}];if(g.name.endsWith(".php")&&ni.test(g.contents.substring(0,4096)))return[{...g,contents:ii(g.contents,r)}];if(g.name.endsWith(".js")){await Mt;try{const O=await sn.transform(g.contents,{loader:"jsx",target:"esnext",jsxFactory:"wp.element.createElement",format:"esm"});return[{name:g.name+".src",contents:g.contents},{name:g.name,contents:O.code}]}catch(O){return[{file:g,error:O}]}}return[g]}),o=(await Promise.all(e)).flatMap(g=>g),s=o.filter(g=>"name"in g),f=o.filter(g=>g.error!==void 0);return{transpiledFiles:s,failures:f}};function ii(r,e){const o=e.map(f=>f.name).filter(f=>f.endsWith(".json")),s=e.map(f=>f.name).filter(f=>f.endsWith(".js")).concat(o.map(f=>f+".esmodule.js"));return r=r.trim(),r.endsWith("?>")||(r+="?>"),`${r}<?php
	// Preload ES Modules using <link rel="modulepreload" href="" /> to prevent a
	// "block isn't registered" warning in the editor. This ensures the registerBlockType()
	// call is done before the block is rendered.
	function playground_block_add_modulepreload_in_admin() {
		$js_relative_paths = ${ut(s)};
		foreach($js_relative_paths as $relative_path) {
			$file = basename($relative_path);
			$url = json_encode(plugins_url($relative_path, __FILE__));
			$script = <<<SCRIPT
			(function() {
			  const link = document.createElement("link");
			  link.rel = "modulepreload";
			  link.href = $url;
			  document.head.append(link);
			})();
SCRIPT;
			wp_add_inline_script('wp-blocks', $script);
		}
	}
	add_action('enqueue_block_editor_assets', 'playground_block_add_modulepreload_in_admin');
	
	// Remap ESM imports from block.json, that aren't widely supported,
	// to imports from a JavaScript file, that are widely supported.
	function playground_wp_esm_import_map($import_map) {
		$json_paths = ${ut(o)};
		$json_mapping = array();
		foreach($json_paths as $json_path) {
			$json_path = plugins_url($json_path, __FILE__);
			$js_path = plugins_url($json_path . '.esmodule.js', __FILE__);
			$json_mapping[$json_path] = $js_path;
		}
		return array_merge($import_map, $json_mapping);
	}
	add_filter('wp_esm_import_map', 'playground_wp_esm_import_map');
	`}const bn=["blueprint","blueprintUrl","codeEditorErrorLog","constants","files"];function si(r){return new TextEncoder().encode(r)}function ai(r){return new TextDecoder().decode(r)}function oi(r){let e="";for(let o=0;o<r.byteLength;o++)e+=String.fromCharCode(r[o]);return window.btoa(e)}function li(r){const e=window.atob(r),o=new Uint8Array(e.length);for(let s=0;s<e.length;s++)o[s]=e.charCodeAt(s);return o}function _t(r){return oi(si(r))}function Bt(r){return ai(li(r))}function ci(r){const e={};for(const[o,s]of Object.entries(r))bn.includes(o)?o==="files"&&Array.isArray(s)?e[o]=[_t(JSON.stringify(s))]:typeof s=="string"?e[o]=_t(s):typeof s=="object"&&s!==null?e[o]=_t(JSON.stringify(s)):e[o]=s:e[o]=s;return e}function an(r){const e={};for(const o in r){let s=r[o];if(o==="files"&&(s=s[0]),!bn.includes(o)||typeof s!="string"){e[o]=r[o];continue}if(o in r)try{e[o]=JSON.parse(Bt(s))}catch{e[o]=r[o]}}return e}function ui({className:r,size:e=24}){return w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:e,height:e,className:r,"aria-hidden":"true",focusable:"false",children:w.jsx("path",{d:"M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"})})}function di({className:r,size:e=24}){return w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:e,height:e,className:r,"aria-hidden":"true",focusable:"false",children:w.jsx("path",{d:"M18 11.3l-1-1.1-4.5 4.55V4h-1.5v10.75L6.5 10.2l-1 1.1 6.5 6.45 6-6.45zM17.5 18.5v-1.5h-11v1.5h11z"})})}function fi({className:r,size:e=24}){return w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:e,height:e,className:r,"aria-hidden":"true",focusable:"false",children:w.jsx("path",{d:"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM15.5303 8.46967L12 12L8.46967 8.46967L7.46967 9.46967L11 13L7.46967 16.5303L8.46967 17.5303L12 14L15.5303 17.5303L16.5303 16.5303L13 13L16.5303 9.46967L15.5303 8.46967Z"})})}function hi({className:r,size:e=24}){return w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24",width:e,height:e,className:r,"aria-hidden":"true",focusable:"false",children:w.jsx("path",{d:"M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"})})}function mi({className:r,size:e=24}){return w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:e,height:e,className:r,"aria-hidden":"true",focusable:"false",children:w.jsx("path",{d:"M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h16v-1.5H4v1.5z"})})}function pi({className:r,size:e=24}){return w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:e,height:e,className:r,"aria-hidden":"true",focusable:"false",children:w.jsx("path",{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})})}function gi({className:r,size:e=24}){return w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:e,height:e,className:r,"aria-hidden":"true",focusable:"false",children:w.jsx("path",{d:"M6 4l14 8-14 8V4z"})})}const on={css:dr(),html:ur(),js:zt(),jsx:zt({jsx:!0}),json:mr(),php:cr()};function yi(r){return r in on?[on[r]]:[]}function bi(r){const e=new URL(r,"https://playground.wordpress.net");return e.searchParams.has("__playground_refresh")?e.searchParams.delete("__playground_refresh"):e.searchParams.set("__playground_refresh","1"),e.pathname+e.search}function ln(...r){const e=[];for(const o of r)if(typeof o=="string")e.push(o);else if(typeof o=="object"&&o!==null)for(const[s,f]of Object.entries(o))f&&e.push(s);return e.join(" ")}function At({blueprint:r="",blueprintUrl:e="",configurationSource:o="block-attributes",codeEditor:s=!0,codeEditorMode:f="plugin",codeEditorSideBySide:g=!0,codeEditorReadOnly:O=!1,codeEditorTranspileJsx:R=!1,codeEditorErrorLog:F=!1,constants:B={},logInUser:Z=!0,createNewPost:ie=!1,createNewPostType:ae="post",createNewPostTitle:se=Gr("New post"),createNewPostContent:C="",redirectToPost:A=!1,redirectToPostType:Q="front",landingPageUrl:ye="/",files:_e=[],showAddNewFile:N=!1,showFileControls:le=!1,requireLivePreviewActivation:ge=!0,inFullPageView:Ee=!1,baseAttributesForFullPageView:Pe={},onStateChange:oe}){const{files:v,addFile:je,isLoading:Se,updateFile:Te,removeFile:fe,activeFile:we,activeFileIndex:Je,setActiveFileIndex:De}=Kr(_e||[],{withErrorLog:F,getErrors:async()=>await Re.current?.readFileAsText("/internal/stderr")||""}),ke=J.useId(),Me=J.useId(),We=J.useRef(null),et=J.useRef(null),st=J.useRef(null),Re=J.useRef(null),c=J.useRef(null),me=J.useRef(null),at=J.useRef(null);J.useEffect(()=>{if(!at.current?.view)return;const te=at.current.view;function ue(Oe){Oe.stopPropagation()}return te.dom.addEventListener("keydown",ue),te.dom.addEventListener("keypress",ue),te.dom.addEventListener("keyup",ue),()=>{te.dom.removeEventListener("keydown",ue),te.dom.removeEventListener("keyup",ue),te.dom.removeEventListener("keypress",ue)}},[]);const[Ae,Qe]=J.useState(!ge),[be,pt]=J.useState(0),[jt,St]=J.useState(!1),gt="playground-block-dismiss-exit-editor-tip",[Pt,Ct]=J.useState(typeof localStorage<"u"&&localStorage[gt]==="true");function yt(){me?.current&&me.current.focus(),typeof localStorage<"u"&&(localStorage[gt]="true"),Ct(!0),Ht("Notice dismissed.","polite")}J.useEffect(()=>{oe?.({client:Re.current,postId:be,files:v})},[Re.current,be,v,oe]);const tt=we?.name.split(".").pop()||"";J.useEffect(()=>{async function te(){if(!Ae||!We.current)return;let ue;try{o==="blueprint-json"?r&&(ue=JSON.parse(r)):o==="blueprint-url"?e&&(ue=await fetch(e).then(Ue=>Ue.json())):ue={preferredVersions:{wp:"latest",php:"7.4"},steps:[{step:"defineWpConfigConsts",consts:B},Z&&{step:"login",username:"admin",password:"password"}].filter(Boolean)}}catch(Ue){console.error("Failed to parse blueprint:",Ue)}const Oe={iframe:We.current,remoteUrl:fr().href};ue&&(Oe.blueprint=ue),console.log("Initializing Playground");const Fe=await hr(Oe);if(await Fe.isReady(),Re.current=Fe,St(!0),setTimeout(()=>Ht("WordPress Playground loaded.","polite"),500),await ot(),o==="block-attributes"){let Ue=0;if(ie){const Nt=await Fe.documentRoot,{text:Ve}=await Fe.run({code:`<?php
						require("${Nt}/wp-load.php");

						$post_id = wp_insert_post([
							'post_title' => ${ut(se)},
							'post_content' => ${ut(C)},
							'post_status' => 'publish',
							'post_type' => ${ut(ae)},
						]);

						echo $post_id;
					`});pt(parseInt(Ve)),Ue=parseInt(Ve)}const Ft=bt(Ue);await Fe.goTo(Ft)}else ue||await Fe.goTo("/")}te()},[Ae]);function Ge(){const te=new URL(window.location.href);te.search="?playground-full-page";const ue={...Pe,requireLivePreviewActivation:!1,files:v.filter(Fe=>!Ye(Fe))},Oe=_t(JSON.stringify(ci(ue)));return te.searchParams.append("playground-attributes",Oe),te.toString()}function bt(te=be){if(ie&&A){if(Q==="front")return`/?p=${te}`;if(Q==="admin")return`/wp-admin/post.php?post=${te}&action=edit`}return ye}const[qe,Ke]=J.useState([]);async function ot(){if(!Re.current||!s)return;Ke([]);const te=Re.current;let ue=v;if(R){const{failures:Oe,transpiledFiles:Fe}=await ri(ue);if(Oe.length){for(const Ue of Oe)console.error(`Failed to transpile ${Ue.file.name}:`,Ue.error);Ke(Oe);return}ue=Fe}f==="theme"?await Yr(te,ue):await qr(te,ue)}async function Ie(){if(!Ae)Qe(!0);else{await ot();const te=await Re.current.getCurrentURL();await Re.current.goTo(bi(te))}}const nt=Wt.of([{key:"Mod-s",run(){return Ie(),!0}}]),$t=ln("wordpress-playground-main-container",{"is-full-page-view":Ee}),Tt=ln("wordpress-playground-content-container",{"is-one-under-another":!g,"is-side-by-side":g}),Rt=jt?"Loaded":"Loading",It="Not Activated",Ot=dt("Beginning of Playground Preview - %s",Ae?Rt:It);return w.jsxs("section",{"aria-label":"WordPress Playground",className:`wp-block-wordpress-playground-playground ${$t}`,children:[w.jsxs("div",{className:Tt,children:[s&&w.jsxs("div",{className:"code-container",children:[w.jsx(ei,{ref:c,updateFile:Te,addFile:je,setActiveFileIndex:De,files:v,activeFileIndex:Je}),w.jsxs("div",{className:"file-tabs",children:[Se?w.jsxs("div",{className:"file-tab file-tab-loading",children:[w.jsx("span",{className:"spinner"})," ","Loading files..."]}):v.map((te,ue)=>w.jsxs("button",{type:"button",className:`file-tab ${ue===Je?"file-tab-active":""}`,"aria-label":O||Ye(te)?dt("Read-only file: %s",te.name):dt("File: %s",te.name),"aria-current":ue===Je?"true":"false",onClick:()=>De(ue),onDoubleClick:()=>c.current?.setEditFileNameModalOpen(!0),children:[te.remoteUrl&&w.jsx(pi,{}),te.name]},te.name)),N&&w.jsx("button",{type:"button","aria-label":"Add File",className:"file-tab file-tab-extra",onClick:()=>c.current?.setNewFileModalOpen(!0),children:w.jsx(ui,{})}),w.jsx("button",{ref:me,type:"button","aria-label":"Download Code as a Zip file",className:"file-tab file-tab-extra",onClick:()=>{Re.current&&Zr(Re.current,f)},children:w.jsx(di,{})})]}),!Pt&&w.jsxs("button",{type:"button",className:"playground-block-exit-editor-tip",onClick:yt,children:["Press ",w.jsx("code",{children:"Esc"}),", ",w.jsx("code",{children:"Tab"})," to exit the editor. ",w.jsx("span",{className:"playground-block-exit-editor-tip-dismiss-notice",children:"(Click to dismiss this notice.)"})]}),w.jsx("div",{className:"code-editor-wrapper",children:w.jsx(pn,{ref:at,value:we?.contents||"",extensions:[nt,Be.lineWrapping,...yi(tt)],readOnly:O||Ye(v[Je]),onChange:te=>Te(ue=>({...ue,contents:te}))})}),w.jsxs("div",{className:"actions-bar",children:[le?w.jsxs("div",{className:"file-actions",children:[we&&!Ye(we)&&w.jsxs("button",{type:"button",onClick:()=>c.current?.setEditFileNameModalOpen(!0),className:"wordpress-playground-block-button button-non-destructive",children:[w.jsx(mi,{})," ","Edit file name"]}),!Ye(we)&&v.filter(te=>!Ye(te)).length>1&&w.jsxs("button",{type:"button",className:"wordpress-playground-block-button button-destructive",onClick:()=>{De(0),fe(Je)},children:[w.jsx(fi,{})," ","Remove file"]})]}):w.jsx("div",{className:"file-actions"}),w.jsxs("button",{type:"button",onClick:Ie,className:"wordpress-playground-run-button playground-button playground-button-primary","aria-describedby":ge&&!Ae?ke:void 0,children:["Run"," ",w.jsx(gi,{})]}),ge&&!Ae&&w.jsx("span",{id:ke,className:"screen-reader-text",children:"This button runs the code in the Preview iframe. If the Preview iframe has not yet been activated, this button creates the Preview iframe which contains a full WordPress website and may be a challenge for screen readers."})]})]}),w.jsxs("div",{className:"playground-container",children:[!Ee&&w.jsxs(w.Fragment,{children:[w.jsx("span",{className:"screen-reader-text wordpress-playground-before-preview",tabIndex:-1,ref:et,children:Ot}),w.jsx("button",{type:"button",className:"screen-reader-text",onClick:()=>{st.current?.focus()},children:"Skip Playground Preview"})]}),!Ae&&w.jsxs("div",{className:"playground-activation-placeholder",children:[w.jsx("button",{type:"button",className:"wordpress-playground-activate-button playground-button playground-button-primary",onClick:()=>{Qe(!0),et.current?.focus()},"aria-describedby":Me,children:"Activate Live Preview"}),w.jsx("span",{id:Me,className:"screen-reader-text",children:"This button creates the Preview iframe containing a full WordPress website which may be a challenge for screen readers."})]}),qe.length>0&&w.jsxs("div",{className:"playground-transpilation-failures",children:[w.jsx("h3",{children:"Transpilation Error"}),w.jsx("p",{children:"There were errors while transpiling the code. Please fix the errors and try again."}),w.jsx("ul",{children:qe.map(({file:te,error:ue})=>w.jsxs("li",{children:[w.jsx("b",{children:te.name}),w.jsx("p",{children:ue.message})]},te.name))})]}),Ae&&w.jsx("iframe",{title:"Live Preview in WordPress Playground",ref:We,className:"playground-iframe"},"playground-iframe"),!Ee&&w.jsx("span",{className:"screen-reader-text wordpress-playground-end-of-preview",tabIndex:-1,ref:st,children:"End of Playground Preview"})]})]}),w.jsxs("footer",{className:"wordpress-playground-footer",children:[w.jsxs("a",{href:"https://w.org/playground",className:"wordpress-playground-footer__powered_by_link",target:"_blank",rel:"noopener noreferrer","aria-label":"Powered by WordPress Playground",children:[w.jsx("span",{className:"wordpress-playground-footer__powered_text",children:"Powered by"}),w.jsx("span",{className:"wordpress-playground-footer__spacing",children:" "}),w.jsx(hi,{className:"wordpress-playground-footer__icon"}),w.jsx("span",{className:"wordpress-playground-footer__powered_by_link-text",children:"WordPress Playground"})]}),!Ee&&w.jsx("button",{type:"button",className:"wordpress-playground-footer__full-page-link",onClick:()=>window.open(Ge(),"_blank"),"aria-label":"Open in New Tab",children:"Open in New Tab"})]})]})}function cn(){const r=document.getElementById("root");if(!r){console.error("Root element not found");return}const e=new URLSearchParams(window.location.search);if(e.has("playground-full-page")&&e.has("playground-attributes")){const o=e.get("playground-attributes");try{const s=Bt(o),f=an(JSON.parse(s));Lt(r).render(w.jsx(At,{...f,inFullPageView:!0}))}catch(s){console.error("Failed to parse playground attributes:",s),r.innerHTML=`
				<div style="padding: 20px; font-family: sans-serif;">
					<h1>Error Loading Playground</h1>
					<p>Failed to parse the playground configuration from the URL.</p>
					<p>Error: ${s instanceof Error?s.message:"Unknown error"}</p>
				</div>
			`}}else if(e.has("playground-attributes")){const o=e.get("playground-attributes");try{const s=Bt(o),f=an(JSON.parse(s));Lt(r).render(w.jsx(At,{...f,baseAttributesForFullPageView:f}))}catch(s){console.error("Failed to parse playground attributes:",s),r.innerHTML=`
				<div style="padding: 20px; font-family: sans-serif;">
					<h1>Error Loading Playground</h1>
					<p>Failed to parse the playground configuration from the URL.</p>
				</div>
			`}}else Lt(r).render(w.jsx(At,{codeEditor:!0,codeEditorReadOnly:!1,codeEditorSideBySide:!0,codeEditorTranspileJsx:!1,codeEditorMultipleFiles:!0,codeEditorMode:"plugin",logInUser:!0,landingPageUrl:"/",createNewPost:!1,createNewPostType:"post",createNewPostTitle:"New post",createNewPostContent:"",redirectToPost:!1,redirectToPostType:"front",blueprint:"",blueprintUrl:"",configurationSource:"block-attributes",requireLivePreviewActivation:!0,codeEditorErrorLog:!1,constants:{},files:[{name:"plugin.php",contents:`<?php
/**
 * Plugin Name: My first plugin
 */

add_filter('the_content', function($content) {
    return '<h1>Hello from my plugin!</h1>' . $content;
});
`}],inFullPageView:!1,baseAttributesForFullPageView:{}}))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",cn):cn();
//# sourceMappingURL=main-Bv6A3csW.js.map
