import{s as I,q as P,l as k,n as x,d as g,t as E,j as A,o as H,E as ee,v as X,e as q,b as j,f as G,g as J,c as O,k as B,z as y,y as te,m as C,A as R,F as ne,G as le,H as re,r as he,u as ie,a1 as ke,w as ye,x as K,D as ve,a2 as Te,L as Ne,a3 as we}from"./scheduler.BZkyrStM.js";import{S as M,i as V,t as p,b as d,g as z,e as F,c as v,a as T,m as N,d as w}from"./index.BLFDKRva.js";import{l as Se,q as oe,r as De,t as Le,v as Ee,u as se,j as ae,w as Ae,x as Pe,_ as Re,y as fe}from"./pages.DVj_Mfgi.js";import{T as Y,S as Ce,a as je,b as Oe,c as Ue,C as Be}from"./PreviousNextPage.6qkd0nou.js";import{L as qe}from"./ChevronDown.DPaiuwSA.js";function Ge(i){let e=(i[0]??"-")+"",l;return{c(){l=E(e)},l(t){l=A(t,e)},m(t,n){k(t,l,n)},p(t,n){n&1&&e!==(e=(t[0]??"-")+"")&&H(l,e)},d(t){t&&g(l)}}}function Ie(i){let e=JSON.stringify(i[0],null,2)+"",l;return{c(){l=E(e)},l(t){l=A(t,e)},m(t,n){k(t,l,n)},p(t,n){n&1&&e!==(e=JSON.stringify(t[0],null,2)+"")&&H(l,e)},d(t){t&&g(l)}}}function Me(i){let e,l,t;return{c(){e=E('"'),l=E(i[0]),t=E('"')},l(n){e=A(n,'"'),l=A(n,i[0]),t=A(n,'"')},m(n,r){k(n,e,r),k(n,l,r),k(n,t,r)},p(n,r){r&1&&H(l,n[0])},d(n){n&&(g(e),g(l),g(t))}}}function Ve(i){let e;function l(r,o){return typeof r[0]=="string"?Me:typeof r[0]=="object"?Ie:Ge}let t=l(i),n=t(i);return{c(){n.c(),e=P()},l(r){n.l(r),e=P()},m(r,o){n.m(r,o),k(r,e,o)},p(r,[o]){t===(t=l(r))&&n?n.p(r,o):(n.d(1),n=t(r),n&&(n.c(),n.m(e.parentNode,e)))},i:x,o:x,d(r){r&&g(e),n.d(r)}}}function Je(i,e,l){let{value:t}=e;return i.$$set=n=>{"value"in n&&l(0,t=n.value)},[t]}class ze extends M{constructor(e){super(),V(this,e,Je,Ve,I,{value:0})}}const Fe=i=>({}),ue=i=>({});function He(i){let e;return{c(){e=E(i[2])},l(l){e=A(l,i[2])},m(l,t){k(l,e,t)},p(l,t){t&4&&H(e,l[2])},d(l){l&&g(e)}}}function Ke(i){let e,l,t,n,r,o,a;const f=i[10].default,c=ee(f,i,i[9],null),D=i[10].tooltip,_=ee(D,i,i[9],ue),$=_||He(i);let S=[i[8]],L={};for(let s=0;s<S.length;s+=1)L=X(L,S[s]);return{c(){e=q("span"),l=q("button"),c&&c.c(),t=j(),n=q("div"),$&&$.c(),this.h()},l(s){e=G(s,"SPAN",{});var u=J(e);l=G(u,"BUTTON",{type:!0,"aria-describedby":!0});var m=J(l);c&&c.l(m),m.forEach(g),t=O(u),n=G(u,"DIV",{role:!0,id:!0});var h=J(n);$&&$.l(h),h.forEach(g),u.forEach(g),this.h()},h(){B(l,"type","button"),B(l,"aria-describedby",i[5]),y(l,"bx--tooltip--a11y",!0),y(l,"bx--tooltip__trigger",!0),y(l,"bx--tooltip__trigger--definition",!0),y(l,"bx--tooltip--hidden",!i[0]),y(l,"bx--tooltip--visible",i[0]),y(l,"bx--tooltip--top",i[4]==="top"),y(l,"bx--tooltip--bottom",i[4]==="bottom"),y(l,"bx--tooltip--align-start",i[3]==="start"),y(l,"bx--tooltip--align-center",i[3]==="center"),y(l,"bx--tooltip--align-end",i[3]==="end"),B(n,"role","tooltip"),B(n,"id",i[5]),y(n,"bx--assistive-text",!0),te(e,L),y(e,"bx--tooltip--definition",!0),y(e,"bx--tooltip--a11y",!0)},m(s,u){k(s,e,u),C(e,l),c&&c.m(l,null),i[17](l),C(e,t),C(e,n),$&&$.m(n,null),r=!0,o||(a=[R(window,"keydown",i[16]),R(l,"click",i[11]),R(l,"mouseover",i[12]),R(l,"mouseenter",i[13]),R(l,"mouseleave",i[14]),R(l,"focus",i[15]),R(l,"focus",i[7]),R(l,"blur",i[6]),R(e,"mouseenter",i[7]),R(e,"mouseleave",i[6])],o=!0)},p(s,[u]){c&&c.p&&(!r||u&512)&&ne(c,f,s,s[9],r?re(f,s[9],u,null):le(s[9]),null),(!r||u&32)&&B(l,"aria-describedby",s[5]),(!r||u&1)&&y(l,"bx--tooltip--hidden",!s[0]),(!r||u&1)&&y(l,"bx--tooltip--visible",s[0]),(!r||u&16)&&y(l,"bx--tooltip--top",s[4]==="top"),(!r||u&16)&&y(l,"bx--tooltip--bottom",s[4]==="bottom"),(!r||u&8)&&y(l,"bx--tooltip--align-start",s[3]==="start"),(!r||u&8)&&y(l,"bx--tooltip--align-center",s[3]==="center"),(!r||u&8)&&y(l,"bx--tooltip--align-end",s[3]==="end"),_?_.p&&(!r||u&512)&&ne(_,D,s,s[9],r?re(D,s[9],u,Fe):le(s[9]),ue):$&&$.p&&(!r||u&4)&&$.p(s,r?u:-1),(!r||u&32)&&B(n,"id",s[5]),te(e,L=Se(S,[u&256&&s[8]])),y(e,"bx--tooltip--definition",!0),y(e,"bx--tooltip--a11y",!0)},i(s){r||(p(c,s),p($,s),r=!0)},o(s){d(c,s),d($,s),r=!1},d(s){s&&g(e),c&&c.d(s),i[17](null),$&&$.d(s),o=!1,he(a)}}}function Qe(i,e,l){const t=["tooltipText","open","align","direction","id","ref"];let n=ie(e,t),{$$slots:r={},$$scope:o}=e,{tooltipText:a=""}=e,{open:f=!1}=e,{align:c="center"}=e,{direction:D="bottom"}=e,{id:_="ccs-"+Math.random().toString(36)}=e,{ref:$=null}=e;const S=ke(),L=()=>l(0,f=!1),s=()=>l(0,f=!0);function u(b){K.call(this,i,b)}function m(b){K.call(this,i,b)}function h(b){K.call(this,i,b)}function U(b){K.call(this,i,b)}function Q(b){K.call(this,i,b)}const W=({key:b})=>{b==="Escape"&&L()};function be(b){ve[b?"unshift":"push"](()=>{$=b,l(1,$)})}return i.$$set=b=>{e=X(X({},e),ye(b)),l(8,n=ie(e,t)),"tooltipText"in b&&l(2,a=b.tooltipText),"open"in b&&l(0,f=b.open),"align"in b&&l(3,c=b.align),"direction"in b&&l(4,D=b.direction),"id"in b&&l(5,_=b.id),"ref"in b&&l(1,$=b.ref),"$$scope"in b&&l(9,o=b.$$scope)},i.$$.update=()=>{i.$$.dirty&1&&S(f?"open":"close")},[f,$,a,c,D,_,L,s,n,o,r,u,m,h,U,Q,W,be]}class We extends M{constructor(e){super(),V(this,e,Qe,Ke,I,{tooltipText:2,open:0,align:3,direction:4,id:5,ref:1})}}function ce(i){let e,l;return e=new Y({props:{type:"red",$$slots:{default:[Ye]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&3&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function Xe(i){let e;return{c(){e=E("Deprecated")},l(l){e=A(l,"Deprecated")},m(l,t){k(l,e,t)},d(l){l&&g(e)}}}function Ye(i){let e,l;return e=new We({props:{tooltipText:i[0],$$slots:{default:[Xe]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.tooltipText=t[0]),n&2&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function Ze(i){let e,l,t=i[0]&&ce(i);return{c(){t&&t.c(),e=P()},l(n){t&&t.l(n),e=P()},m(n,r){t&&t.m(n,r),k(n,e,r),l=!0},p(n,[r]){n[0]?t?(t.p(n,r),r&1&&p(t,1)):(t=ce(n),t.c(),p(t,1),t.m(e.parentNode,e)):t&&(z(),d(t,1,1,()=>{t=null}),F())},i(n){l||(p(t),l=!0)},o(n){d(t),l=!1},d(n){n&&g(e),t&&t.d(n)}}}function xe(i,e,l){let{reason:t}=e;return i.$$set=n=>{"reason"in n&&l(0,t=n.reason)},[t]}class et extends M{constructor(e){super(),V(this,e,xe,Ze,I,{reason:0})}}function pe(i){let e,l;return e=new Y({props:{type:"purple",$$slots:{default:[tt]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function tt(i){let e;return{c(){e=E("Non-null")},l(l){e=A(l,"Non-null")},m(l,t){k(l,e,t)},d(l){l&&g(e)}}}function nt(i){let e=!oe(i[0]),l,t,n=e&&pe(i);return{c(){n&&n.c(),l=P()},l(r){n&&n.l(r),l=P()},m(r,o){n&&n.m(r,o),k(r,l,o),t=!0},p(r,[o]){o&1&&(e=!oe(r[0])),e?n?o&1&&p(n,1):(n=pe(r),n.c(),p(n,1),n.m(l.parentNode,l)):n&&(z(),d(n,1,1,()=>{n=null}),F())},i(r){t||(p(n),t=!0)},o(r){d(n),t=!1},d(r){r&&g(l),n&&n.d(r)}}}function lt(i,e,l){let{type:t}=e;return i.$$set=n=>{"type"in n&&l(0,t=n.type)},[t]}class rt extends M{constructor(e){super(),V(this,e,lt,nt,I,{type:0})}}function it(i){let e,l;return e=new qe({props:{href:se.joinUrlPaths(ae(),"types",String(i[0].name)),$$slots:{default:[at]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.href=se.joinUrlPaths(ae(),"types",String(t[0].name))),n&3&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function ot(i){let e,l,t;return e=new Z({props:{type:i[0].ofType}}),{c(){v(e.$$.fragment),l=E("!")},l(n){T(e.$$.fragment,n),l=A(n,"!")},m(n,r){N(e,n,r),k(n,l,r),t=!0},p(n,r){const o={};r&1&&(o.type=n[0].ofType),e.$set(o)},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){d(e.$$.fragment,n),t=!1},d(n){n&&g(l),w(e,n)}}}function st(i){let e,l,t,n;return l=new Z({props:{type:i[0].ofType}}),{c(){e=E("["),v(l.$$.fragment),t=E("]")},l(r){e=A(r,"["),T(l.$$.fragment,r),t=A(r,"]")},m(r,o){k(r,e,o),N(l,r,o),k(r,t,o),n=!0},p(r,o){const a={};o&1&&(a.type=r[0].ofType),l.$set(a)},i(r){n||(p(l.$$.fragment,r),n=!0)},o(r){d(l.$$.fragment,r),n=!1},d(r){r&&(g(e),g(t)),w(l,r)}}}function at(i){let e=i[0].name+"",l;return{c(){l=E(e)},l(t){l=A(t,e)},m(t,n){k(t,l,n)},p(t,n){n&1&&e!==(e=t[0].name+"")&&H(l,e)},d(t){t&&g(l)}}}function ft(i){let e,l,t,n,r,o,a;const f=[st,ot,it],c=[];function D(_,$){return $&1&&(e=null),$&1&&(l=null),$&1&&(t=null),e==null&&(e=!!De(_[0])),e?0:(l==null&&(l=!!Le(_[0])),l?1:(t==null&&(t=!!Ee(_[0])),t?2:-1))}return~(n=D(i,-1))&&(r=c[n]=f[n](i)),{c(){r&&r.c(),o=P()},l(_){r&&r.l(_),o=P()},m(_,$){~n&&c[n].m(_,$),k(_,o,$),a=!0},p(_,[$]){let S=n;n=D(_,$),n===S?~n&&c[n].p(_,$):(r&&(z(),d(c[S],1,1,()=>{c[S]=null}),F()),~n?(r=c[n],r?r.p(_,$):(r=c[n]=f[n](_),r.c()),p(r,1),r.m(o.parentNode,o)):r=null)},i(_){a||(p(r),a=!0)},o(_){d(r),a=!1},d(_){_&&g(o),~n&&c[n].d(_)}}}function ut(i,e,l){let{type:t}=e;return i.$$set=n=>{"type"in n&&l(0,t=n.type)},[t]}class Z extends M{constructor(e){super(),V(this,e,ut,ft,I,{type:0})}}function ct(i){let e,l;return e=new Z({props:{type:i[0]}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.type=t[0]),e.$set(r)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function pt(i){let e,l;return e=new Y({props:{type:"blue",$$slots:{default:[ct]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,[n]){const r={};n&3&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function _t(i,e,l){let{type:t}=e;return i.$$set=n=>{"type"in n&&l(0,t=n.type)},[t]}class mt extends M{constructor(e){super(),V(this,e,_t,pt,I,{type:0})}}function _e(i,e,l){const t=i.slice();return t[3]=e[l],t}function me(i){let e,l="=",t,n,r,o;return r=new ze({props:{value:i[3].default}}),{c(){e=q("span"),e.textContent=l,t=j(),n=q("span"),v(r.$$.fragment)},l(a){e=G(a,"SPAN",{"data-svelte-h":!0}),we(e)!=="svelte-u057kv"&&(e.textContent=l),t=O(a),n=G(a,"SPAN",{});var f=J(n);T(r.$$.fragment,f),f.forEach(g)},m(a,f){k(a,e,f),k(a,t,f),k(a,n,f),N(r,n,null),o=!0},p(a,f){const c={};f&1&&(c.value=a[3].default),r.$set(c)},i(a){o||(p(r.$$.fragment,a),o=!0)},o(a){d(r.$$.fragment,a),o=!1},d(a){a&&(g(e),g(t),g(n)),w(r)}}}function $e(i){let e,l;return e=new Be({props:{source:i[3].description}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.source=t[3].description),e.$set(r)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function $t(i){let e,l,t=i[3].name+"",n,r,o,a,f,c,D,_,$,S,L,s=i[3].default&&me(i);a=new mt({props:{type:i[3].type}}),c=new et({props:{reason:i[3].deprecationReason}}),_=new rt({props:{type:i[3].type}});let u=i[3].description&&$e(i);return{c(){e=q("p"),l=q("span"),n=E(t),r=j(),s&&s.c(),o=j(),v(a.$$.fragment),f=j(),v(c.$$.fragment),D=j(),v(_.$$.fragment),$=j(),u&&u.c(),S=P(),this.h()},l(m){e=G(m,"P",{class:!0});var h=J(e);l=G(h,"SPAN",{style:!0});var U=J(l);n=A(U,t),U.forEach(g),r=O(h),s&&s.l(h),o=O(h),T(a.$$.fragment,h),f=O(h),T(c.$$.fragment,h),D=O(h),T(_.$$.fragment,h),h.forEach(g),$=O(m),u&&u.l(m),S=P(),this.h()},h(){Ne(l,"font-weight","bold"),B(e,"class","arg-name-section svelte-9cf7d2")},m(m,h){k(m,e,h),C(e,l),C(l,n),C(e,r),s&&s.m(e,null),C(e,o),N(a,e,null),C(e,f),N(c,e,null),C(e,D),N(_,e,null),k(m,$,h),u&&u.m(m,h),k(m,S,h),L=!0},p(m,h){(!L||h&1)&&t!==(t=m[3].name+"")&&H(n,t),m[3].default?s?(s.p(m,h),h&1&&p(s,1)):(s=me(m),s.c(),p(s,1),s.m(e,o)):s&&(z(),d(s,1,1,()=>{s=null}),F());const U={};h&1&&(U.type=m[3].type),a.$set(U);const Q={};h&1&&(Q.reason=m[3].deprecationReason),c.$set(Q);const W={};h&1&&(W.type=m[3].type),_.$set(W),m[3].description?u?(u.p(m,h),h&1&&p(u,1)):(u=$e(m),u.c(),p(u,1),u.m(S.parentNode,S)):u&&(z(),d(u,1,1,()=>{u=null}),F())},i(m){L||(p(s),p(a.$$.fragment,m),p(c.$$.fragment,m),p(_.$$.fragment,m),p(u),L=!0)},o(m){d(s),d(a.$$.fragment,m),d(c.$$.fragment,m),d(_.$$.fragment,m),d(u),L=!1},d(m){m&&(g(e),g($),g(S)),s&&s.d(),w(a),w(c),w(_),u&&u.d(m)}}}function dt(i){let e,l,t;return e=new Ue({props:{$$slots:{default:[$t]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment),l=j()},l(n){T(e.$$.fragment,n),l=O(n)},m(n,r){N(e,n,r),k(n,l,r),t=!0},p(n,r){const o={};r&65&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){d(e.$$.fragment,n),t=!1},d(n){n&&g(l),w(e,n)}}}function de(i){let e,l;return e=new Oe({props:{$$slots:{default:[dt]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&65&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function gt(i){let e,l,t=fe(i[0]),n=[];for(let o=0;o<t.length;o+=1)n[o]=de(_e(i,t,o));const r=o=>d(n[o],1,1,()=>{n[o]=null});return{c(){for(let o=0;o<n.length;o+=1)n[o].c();e=P()},l(o){for(let a=0;a<n.length;a+=1)n[a].l(o);e=P()},m(o,a){for(let f=0;f<n.length;f+=1)n[f]&&n[f].m(o,a);k(o,e,a),l=!0},p(o,a){if(a&1){t=fe(o[0]);let f;for(f=0;f<t.length;f+=1){const c=_e(o,t,f);n[f]?(n[f].p(c,a),p(n[f],1)):(n[f]=de(c),n[f].c(),p(n[f],1),n[f].m(e.parentNode,e))}for(z(),f=t.length;f<n.length;f+=1)r(f);F()}},i(o){if(!l){for(let a=0;a<t.length;a+=1)p(n[a]);l=!0}},o(o){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)d(n[a]);l=!1},d(o){o&&g(e),Te(n,o)}}}function bt(i){let e,l;return e=new je({props:{$$slots:{default:[gt]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&65&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function ht(i){let e,l;return e=new Ce({props:{condensed:!0,$$slots:{default:[bt]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,[n]){const r={};n&65&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function ge(i){return i.map(e=>({id:e.name,deprecationReason:e.deprecationReason,name:e.name,description:e.description,default:e.defaultValue,type:e.type}))}function kt(i,e,l){let{data:t}=e;const n=Ae(Pe.ARGUMENTS_SORTING,"default");let r;return i.$$set=o=>{"data"in o&&l(1,t=o.data)},i.$$.update=()=>{i.$$.dirty&2&&(n==="alphabetical"?l(0,r=Re.sortBy(ge(t),o=>o.name)):l(0,r=ge(t)))},[r,t]}class St extends M{constructor(e){super(),V(this,e,kt,ht,I,{data:1})}}export{St as A,et as D,rt as N,We as T,mt as a,Z as b,ze as c};
