import{S as C,i as R,s as $,e as p,k as E,t as q,Q as B,c as g,d as e,m as D,a as v,h as N,b as t,K as l,g as I,R as S,n as _,T as A}from"../chunks/index-4b5036f9.js";const{document:z}=A;function G(i){let s,x,r,o,c,d,f,a,h,b,j;return{c(){s=p("meta"),x=E(),r=p("div"),o=p("div"),c=p("div"),d=p("div"),f=E(),a=p("button"),h=q("Click to see dog"),this.h()},l(n){const u=B('[data-svelte="svelte-19xsc8s"]',z.head);s=g(u,"META",{name:!0,class:!0}),u.forEach(e),x=D(n),r=g(n,"DIV",{class:!0});var y=v(r);o=g(y,"DIV",{class:!0});var m=v(o);c=g(m,"DIV",{class:!0});var k=v(c);d=g(k,"DIV",{id:!0,class:!0});var V=v(d);V.forEach(e),k.forEach(e),f=D(m),a=g(m,"BUTTON",{class:!0,id:!0});var w=v(a);h=N(w,"Click to see dog"),w.forEach(e),m.forEach(e),y.forEach(e),this.h()},h(){z.title="Dogs",t(s,"name","description"),t(s,"class","svelte-pj9pzx"),t(d,"id","dog"),t(d,"class","svelte-pj9pzx"),t(c,"class","dog_image svelte-pj9pzx"),t(a,"class","button svelte-pj9pzx"),t(a,"id","btn"),t(o,"class","container_dog svelte-pj9pzx"),t(r,"class","intro svelte-pj9pzx")},m(n,u){l(z.head,s),I(n,x,u),I(n,r,u),l(r,o),l(o,c),l(c,d),l(o,f),l(o,a),l(a,h),b||(j=S(a,"click",T),b=!0)},p:_,i:_,o:_,d(n){e(s),n&&e(x),n&&e(r),b=!1,j()}}}const O=!0;function T(){fetch("https://random.dog/woof.json").then(i=>i.json()).then(i=>{i.url.includes(".mp4")?T():document.getElementById("dog").style.backgroundImage=`url(${i.url})`})}function K(i){return[]}class Q extends C{constructor(s){super(),R(this,s,K,G,$,{})}}export{Q as default,O as prerender};