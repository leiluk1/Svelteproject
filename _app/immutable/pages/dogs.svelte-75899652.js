import{S as C,i as R,s as $,e as g,k as z,t as q,Q as B,c as v,d as e,m as D,a as b,h as N,b as t,K as l,g as I,R as S,n as x,T as A}from"../chunks/index-4b5036f9.js";const{document:j}=A;function G(r){let s,p,n,i,c,d,f,o,h,_,y;return{c(){s=g("meta"),p=z(),n=g("div"),i=g("div"),c=g("div"),d=g("div"),f=z(),o=g("button"),h=q("Click to see dog"),this.h()},l(a){const u=B('[data-svelte="svelte-19xsc8s"]',j.head);s=v(u,"META",{name:!0,class:!0}),u.forEach(e),p=D(a),n=v(a,"DIV",{class:!0});var k=b(n);i=v(k,"DIV",{class:!0});var m=b(i);c=v(m,"DIV",{class:!0});var w=b(c);d=v(w,"DIV",{id:!0,class:!0});var V=b(d);V.forEach(e),w.forEach(e),f=D(m),o=v(m,"BUTTON",{class:!0,id:!0});var E=b(o);h=N(E,"Click to see dog"),E.forEach(e),m.forEach(e),k.forEach(e),this.h()},h(){j.title="Dogs",t(s,"name","description"),t(s,"class","svelte-1ibrvj4"),t(d,"id","dog"),t(d,"class","svelte-1ibrvj4"),t(c,"class","dog_image svelte-1ibrvj4"),t(o,"class","button svelte-1ibrvj4"),t(o,"id","btn"),t(i,"class","container_dog svelte-1ibrvj4"),t(n,"class","intro svelte-1ibrvj4")},m(a,u){l(j.head,s),I(a,p,u),I(a,n,u),l(n,i),l(i,c),l(c,d),l(i,f),l(i,o),l(o,h),_||(y=S(o,"click",T),_=!0)},p:x,i:x,o:x,d(a){e(s),a&&e(p),a&&e(n),_=!1,y()}}}function T(){fetch("https://random.dog/woof.json").then(r=>r.json()).then(r=>{r.url.includes(".mp4")?T():document.getElementById("dog").style.backgroundImage=`url(${r.url})`})}function K(r){return[]}class O extends C{constructor(s){super(),R(this,s,K,G,$,{})}}export{O as default};
