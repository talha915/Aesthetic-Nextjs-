(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{M4gJ:function(t,e,a){"use strict";a.r(e),a.d(e,"__N_SSG",(function(){return _}));var r=a("q1tI"),n=a.n(r),s=a("Cgje"),c=a("1OyB"),i=a("vuIU"),l=a("JX7q"),o=a("md7G"),u=a("foSv"),f=a("Ji7U"),m=a("rePB"),h=a("8Kt/"),p=a.n(h),k=n.a.createElement;function b(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var d=function(t){Object(f.a)(r,t);var e,a=(e=r,function(){var t,a=Object(u.a)(e);if(b()){var r=Object(u.a)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(o.a)(this,t)});function r(t){var e;return Object(c.a)(this,r),e=a.call(this,t),Object(m.a)(Object(l.a)(e),"setMarketData",(function(){e.setState({marketDetailData:e.props.marketIntro})})),Object(m.a)(Object(l.a)(e),"getMarketData",(function(){if(e.state.marketDetailData){var t=e.state.marketDetailData;return k("div",{className:"intro market"},k("h1",null," ",t.heading,"  ",k("span",null,k("img",{src:t.image,alt:"Image Description"})," ",t.furtherHeading),"  "),k("p",null,t.detail))}})),e.state={marketDetailData:""},e}return Object(i.a)(r,[{key:"UNSAFE_componentWillMount",value:function(){this.setMarketData()}},{key:"render",value:function(){return k("div",null,k(p.a,null,k("link",{href:"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap",rel:"stylesheet"}),k("link",{href:"/static/style.css",rel:"stylesheet"})),this.getMarketData())}}]),r}(r.Component),y=a("nOHt"),v=a("NGwb"),g=a.n(v),j=n.a.createElement;function O(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var w=function(t){Object(f.a)(r,t);var e,a=(e=r,function(){var t,a=Object(u.a)(e);if(O()){var r=Object(u.a)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(o.a)(this,t)});function r(t){var e;return Object(c.a)(this,r),e=a.call(this,t),Object(m.a)(Object(l.a)(e),"setMarketUsers",(function(){e.setState({marketUser:e.props.marketUser})})),Object(m.a)(Object(l.a)(e),"getMarketUsers",(function(){if(e.state.marketUser)return e.state.marketUser.map((function(t,e){return j("div",{className:"image-box",key:e},j(g.a,{animateIn:"fadeIn"},j("div",{className:"slide"},j("img",{src:t.image,href:"https://market.aestheticrecord.com/",target:"_blank",alt:"Image description"}),j("h3",null,j("a",null,t.userType)))))}))})),e.state={marketUser:""},e}return Object(i.a)(r,[{key:"UNSAFE_componentWillMount",value:function(){this.setMarketUsers()}},{key:"render",value:function(){return j("div",null,j(p.a,null,j("link",{href:"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap",rel:"stylesheet"}),j("link",{href:"/static/style.css",rel:"stylesheet"}),j("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"})),j("div",{className:"container marketplace"},j("div",{className:"image-boxes"},this.getMarketUsers(),j("div",{className:"arrows"},j("a",{type:"button",className:"btn-arrow btn-left",href:"https://market.aestheticrecord.com/",target:"_blank"},j("i",{className:"icon-arrow-l"})),j("a",{type:"button",className:"btn-arrow btn-right",href:"https://market.aestheticrecord.com/",target:"_blank"},j("i",{className:"icon-arrow-r"}))))))}}]),r}(r.Component),N=Object(y.withRouter)(w),D=a("n9PM"),M=a("naWs"),U=n.a.createElement;var _=!0;e.default=function(t){return U("div",null,U(p.a,null,U("link",{href:"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap",rel:"stylesheet"}),U("link",{href:"/static/style.css",rel:"stylesheet"})),U("div",{className:"wrapper"},U("div",null,U(s.a,null),U("main",{className:"main"},U(d,{marketIntro:t.marketObj}),U(N,{marketUser:t.marketObj.marketUser})),U(D.a,null),U(M.a,null))))}},XVvi:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/MarketPlace",function(){return a("M4gJ")}])}},[["XVvi",0,2,1,3]]]);