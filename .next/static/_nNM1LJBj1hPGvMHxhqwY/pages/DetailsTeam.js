(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/eyX":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/DetailsTeam",function(){return a("zu+3")}])},yJua:function(e,t,a){"use strict";var n=a("1OyB"),l=a("vuIU"),s=a("md7G"),c=a("foSv"),i=a("Ji7U"),r=a("q1tI"),o=a.n(r),u=a("8Kt/"),f=a.n(u),m=o.a.createElement;function d(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var p=function(e){Object(i.a)(r,e);var t,a=(t=r,function(){var e,a=Object(c.a)(t);if(d()){var n=Object(c.a)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return Object(s.a)(this,e)});function r(){return Object(n.a)(this,r),a.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return m("div",null,m(f.a,null,m("link",{href:"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap",rel:"stylesheet"}),m("link",{href:"/static/style.css",rel:"stylesheet"})),m("div",{className:"bottom-block shape",style:{backgroundImage:"url(images/img17.jpg)"}},m("div",{className:"container"},m("div",{className:"textblock"},m("h3",null,"Try Aesthetic Record with your team for free "),m("a",{href:"#",className:"btn full"},"Get Started")))))}}]),r}(r.Component);t.a=p},"zu+3":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),s=a("1OyB"),c=a("vuIU"),i=a("JX7q"),r=a("md7G"),o=a("foSv"),u=a("Ji7U"),f=a("rePB"),m=a("nOHt"),d=a.n(m),p=a("8Kt/"),b=a.n(p),h=a("NGwb"),y=a.n(h),j=l.a.createElement;function O(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var v=function(e){Object(u.a)(n,e);var t,a=(t=n,function(){var e,a=Object(o.a)(t);if(O()){var n=Object(o.a)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return Object(r.a)(this,e)});function n(e){var t;return Object(s.a)(this,n),t=a.call(this,e),Object(f.a)(Object(i.a)(t),"setDetailTeamObj",(function(){t.setState({detailTeamObj:t.props.detailTeamObj.url.query})})),Object(f.a)(Object(i.a)(t),"setDetailedRole",(function(){t.setState({detailedRole:JSON.parse(localStorage.getItem("detailedRole"))})})),Object(f.a)(Object(i.a)(t),"getDetailTeamObj",(function(){if(t.state.detailTeamObj){var e=t.state.detailTeamObj;return j("div",{className:"team-detail"},j(y.a,{animateIn:"fadeIn"},j("div",{className:"container"},j("div",{className:"img-user"},j("img",{src:e.image,alt:"Justin Harper"}),j("a",{className:"back",onClick:function(){return t.backToTeams()}},j("img",{src:e.backArrow,alt:"Image description"})," See All Leadership")),j("div",{className:"textblock"},j("div",{className:"holder"},j("h2",null,e.name),j("span",{className:"designation"},e.designation),t.detailedRole())))))}})),Object(f.a)(Object(i.a)(t),"detailedRole",(function(){if(t.state.detailedRole)return t.state.detailedRole.map((function(e,t){return j("p",{key:t},e.roles)}))})),Object(f.a)(Object(i.a)(t),"backToTeams",(function(){d.a.push({pathname:"/Teams"})})),t.state={detailTeamObj:"",detailedRole:""},t}return Object(c.a)(n,[{key:"UNSAFE_componentWillMount",value:function(){this.setDetailTeamObj()}},{key:"componentDidMount",value:function(){this.setDetailedRole()}},{key:"render",value:function(){return j("div",null,j(b.a,null,j("link",{href:"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap",rel:"stylesheet"}),j("link",{href:"/static/style.css",rel:"stylesheet"}),j("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"})),j("main",{className:"main"},j("ul",{className:"breadcrumbs container"},j("li",null,j("a",null,"Home")),j("li",{className:"current"},j("a",null,"Elevate by Aesthetic Record"))),this.getDetailTeamObj()))}}]),n}(n.Component),g=a("Cgje"),k=a("yJua"),R=a("n9PM"),N=a("naWs"),T=l.a.createElement;t.default=function(e){return T("div",null,T(b.a,null,T("link",{href:"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap",rel:"stylesheet"}),T("link",{href:"/static/style.css",rel:"stylesheet"})),T("div",{className:"wrapper"},T(g.a,null),T(v,{detailTeamObj:e}),T(k.a,null),T(R.a,null),T(N.a,null)))}}},[["/eyX",0,2,1,3]]]);