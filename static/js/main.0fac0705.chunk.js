(this.webpackJsonpmovie_app_2019=this.webpackJsonpmovie_app_2019||[]).push([[0],{38:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),i=a.n(s),c=a(25),r=a.n(c),o=a(10),j=a(2);a(38);var m=function(){return Object(n.jsxs)("div",{className:"aboutContainer",children:[Object(n.jsx)("p",{children:"This app is built based on YTS API, and nomadacademy."}),Object(n.jsx)("p",{children:"https://yts.mx/api"})]})},d=a(13),l=a.n(d),u=a(26),b=a(27),v=a(28),h=a(32),p=a(31),x=a(29),O=a.n(x);a(57);var g=function(e){var t=e.year,a=e.title,s=e.summary,i=e.poster,c=e.genres,r=e.rating;return Object(n.jsxs)("div",{className:"movie",children:[Object(n.jsx)("img",{src:i,alt:a,title:a}),Object(n.jsxs)("div",{className:"movie__data",children:[Object(n.jsxs)("h3",{className:"movie__title_year",children:[a," (",t,")"]}),Object(n.jsx)("h5",{className:"movie__genres",children:c.join(", ")}),Object(n.jsxs)("h5",{className:"movie__rating",children:[r," / 10"]}),Object(n.jsx)("p",{className:"movie__summary",children:s.slice(0,270)})]})]})},_=(a(58),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(n.jsx)("section",{className:"container",children:t?Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)("span",{className:"loader__text",children:"Data Loading..."})}):Object(n.jsx)("div",{className:"movies",children:a.map((function(e){return Object(n.jsx)(g,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres,runtime:e.runtime,rating:e.rating},e.id)}))})})}}]),a}(i.a.Component));var y=function(){return Object(n.jsxs)("div",{className:"navigation",children:[Object(n.jsx)(o.b,{to:"/",children:"Home"}),"/",Object(n.jsx)(o.b,{to:"/About",children:"About"})]})};var f=function(){return Object(n.jsxs)(o.a,{children:[Object(n.jsx)(y,{}),Object(n.jsx)(j.a,{path:"/",exact:!0,component:_}),Object(n.jsx)(j.a,{path:"/about",component:m})]})};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.0fac0705.chunk.js.map