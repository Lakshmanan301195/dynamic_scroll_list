(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{20:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(6),r=n.n(a),s=(n(20),n(11)),i=n.n(s),o=n(13),u=n(8),l=n(2),j=n(14),b=(n(26),n(1));var h=function(e){var t=e.index,n=e.image,c=e.name;return Object(b.jsxs)("div",{className:"layout-item",children:[Object(b.jsx)("img",{src:"/Slices/".concat(n),onError:function(e){e.target.onerror=null,e.target.src="/Slices/placeholder_for_missing_posters.png"},loading:"lazy",alt:"movie"}),Object(b.jsx)("br",{}),c.length>15?Object(b.jsx)("marquee",{behavior:"scroll",id:"marquee",direction:"left",children:c}):Object(b.jsx)("span",{children:c})]},t)};n(28);var m=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return[e.pageNumber,e.filteredItems,e.fetchingData]})),n=Object(u.a)(t,3),a=n[0],r=n[1],s=n[2];Object(c.useEffect)((function(){m()}),[]);var m=function(){var t=Object(o.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!0!==s){t.next=3;break}return t.next=3,fetch("/data/CONTENTLISTINGPAGE-PAGE".concat(a+1,".json")).then((function(e){return e.json()})).then((function(t){var n,c;e((n=t.page["content-items"].content,c=t.page.title,{type:"NEW-DATA",contentItems:n,title:c}))})).catch((function(e){console.log(e," error")}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(j.a,{dataLength:r.length,next:m,hasMore:!0,children:Object(b.jsx)("div",{className:"layout",children:r&&r.map((function(e,t){return Object(b.jsx)(h,{name:e.name,image:e["poster-image"]},t)}))})})})};n(29);var f=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return[e.searchInput,e.title]})),n=Object(u.a)(t,2),c=n[0],a=n[1];return Object(b.jsxs)("div",{className:"navBar",style:{backgroundImage:"url('/Slices/nav_bar.png')"},children:[Object(b.jsxs)("div",{className:"topHeader",children:[Object(b.jsx)("img",{className:"backButton",src:"/Slices/Back.png",alt:"back"}),Object(b.jsx)("span",{className:"title",children:a}),Object(b.jsx)("span",{className:"search",children:Object(b.jsx)("img",{src:"/Slices/search.png",alt:"search"})})]}),Object(b.jsx)("input",{type:"text",name:"search",placeholder:"Search Movie List",className:"inputText",value:c,onChange:function(t){return e({type:"SEARCH",searchValue:t.target.value})}})]})};var g=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{}),Object(b.jsx)(m,{})]})};n(30);var O=function(){return Object(b.jsx)(g,{})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},p=n(15),v=n(4),x=n(5),I={pageNumber:0,contentLength:0,contentItems:[],filteredItems:[],fetchingData:!0,searchInput:"",title:""},N=Object(p.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW-DATA":return Object(x.a)(Object(x.a)({},e),{},{fetchingData:20===t.contentItems.length,pageNumber:e.pageNumber+1,title:t.title,initialScroll:!1,contentItems:[].concat(Object(v.a)(e.contentItems),Object(v.a)(t.contentItems)),filteredItems:[].concat(Object(v.a)(e.contentItems),Object(v.a)(t.contentItems))});case"SEARCH":var n=JSON.parse(JSON.stringify(e.contentItems)),c=new RegExp(t.searchValue,"i"),a=n.filter((function(e){var t=e.name;return c.test(t)}));return Object(x.a)(Object(x.a)({},e),{},{searchInput:t.searchValue,filteredItems:a});default:return e}}));r.a.render(Object(b.jsx)(l.a,{store:N,children:Object(b.jsx)(O,{})}),document.getElementById("root")),d()}},[[31,1,2]]]);
//# sourceMappingURL=main.15edb774.chunk.js.map