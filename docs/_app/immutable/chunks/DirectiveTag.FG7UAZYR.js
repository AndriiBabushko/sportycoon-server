import{s as b,q as v,l as p,d as m,e as L,f as O,g as U,k as $,t as g,j as h,o as y}from"./scheduler.BZkyrStM.js";import{S as E,i as V,t as d,b as _,c as D,a as A,m as S,d as j}from"./index.BLFDKRva.js";import{s as B,i as I,u as T,j as w,k as q,K as l}from"./pages.DVj_Mfgi.js";import{T as x}from"./PreviousNextPage.6qkd0nou.js";import{T as C}from"./ArgsList.CPx9gB4-.js";function J(s){let n,a;return n=new x({props:{type:"blue",$$slots:{default:[P]},$$scope:{ctx:s}}}),{c(){D(n.$$.fragment)},l(i){A(n.$$.fragment,i)},m(i,e){S(n,i,e),a=!0},p(i,e){const t={};e&67&&(t.$$scope={dirty:e,ctx:i}),n.$set(t)},i(i){a||(d(n.$$.fragment,i),a=!0)},o(i){_(n.$$.fragment,i),a=!1},d(i){j(n,i)}}}function K(s){let n,a=s[0].name.value+"",i;return{c(){n=g("@"),i=g(a)},l(e){n=h(e,"@"),i=h(e,a)},m(e,t){p(e,n,t),p(e,i,t)},p(e,t){t&1&&a!==(a=e[0].name.value+"")&&y(i,a)},d(e){e&&(m(n),m(i))}}}function P(s){let n,a,i,e;return a=new C({props:{tooltipText:s[1],direction:"top",align:"center",$$slots:{default:[K]},$$scope:{ctx:s}}}),{c(){n=L("a"),D(a.$$.fragment),this.h()},l(t){n=O(t,"A",{href:!0,class:!0});var r=U(n);A(a.$$.fragment,r),r.forEach(m),this.h()},h(){$(n,"href",i=T.joinUrlPaths(w(),`/directives/${s[0].name.value}`)),$(n,"class","override-tooltip-width svelte-a6h330")},m(t,r){p(t,n,r),S(a,n,null),e=!0},p(t,r){const u={};r&2&&(u.tooltipText=t[1]),r&65&&(u.$$scope={dirty:r,ctx:t}),a.$set(u),(!e||r&1&&i!==(i=T.joinUrlPaths(w(),`/directives/${t[0].name.value}`)))&&$(n,"href",i)},i(t){e||(d(a.$$.fragment,t),e=!0)},o(t){_(a.$$.fragment,t),e=!1},d(t){t&&m(n),j(a)}}}function R(s){let n=s[2](),a,i,e=n&&J(s);return{c(){e&&e.c(),a=v()},l(t){e&&e.l(t),a=v()},m(t,r){e&&e.m(t,r),p(t,a,r),i=!0},p(t,[r]){n&&e.p(t,r)},i(t){i||(d(e),i=!0)},o(t){_(e),i=!1},d(t){t&&m(a),e&&e.d(t)}}}function F(s,n,a){let{directive:i}=n,e,t;function r(o){switch(o.kind){case l.INT:case l.BOOLEAN:case l.FLOAT:return String(o.value);case l.STRING:case l.ENUM:return`"${o.value}"`;case l.NULL:return"null";case l.LIST:return`[${o.values.map(r).join(", ")}]`;case l.OBJECT:return`{${o.fields.map(c=>`${c.name.value}: ${r(c.value)}`).join(", ")}}`}}function u(){return!!e&&q(e)}function k(o,c){const f=c.find(N=>N.name.value===o.name);return f?r(f.value):JSON.stringify(o.defaultValue)}return s.$$set=o=>{"directive"in o&&a(0,i=o.directive)},s.$$.update=()=>{if(s.$$.dirty&1&&a(3,e=B.getDirective(i.name.value)),s.$$.dirty&9){let o=`@${i.name.value}`;const c=e?I(e):[];c.length>0&&(o+=`(${c.map(f=>`${f.name}: ${k(f,i.arguments||[])}`).join(", ")})`),a(1,t=o.trim())}},[i,t,u,e]}class W extends E{constructor(n){super(),V(this,n,F,R,b,{directive:0})}}export{W as D};
