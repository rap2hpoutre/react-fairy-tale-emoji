(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=(n(16),n(1)),m=n(9),s=n(5),u=n(6),h=n(8),l=n(7),g=n(10),f=(n(18),n(2)),d=function(e){return"f"===e?"her":"his"},p=function(){var e=Object(f.a)([{name:"ghost",gender:"m",img:"\ud83d\udc7b"},{name:"clown",gender:"m",img:"\ud83e\udd21"},{name:"robot",gender:"m",img:"\ud83e\udd16"},{name:"martian",gender:"m",img:"\ud83d\udc7d"},{name:"farmer",gender:"f",img:"\ud83d\udc69\u200d\ud83c\udf3e"},{name:"princess",gender:"f",img:"\ud83d\udc78"}]),t=Object(f.a)([{name:"poultry leg",img:"\ud83c\udf57"},{name:"broccoli",img:"\ud83e\udd66"},{name:"pretzel",img:"\ud83e\udd68"},{name:"taco",img:"\ud83c\udf2e"},{name:"hamburger",img:"\ud83c\udf54"},{name:"bento box",img:"\ud83c\udf71"},{name:"baby bottle",img:"\ud83c\udf7c"}]),n=Object(f.a)([{name:"gorilla",img:"\ud83e\udd8d"},{name:"wolf",img:"\ud83d\udc3a"},{name:"dragon",img:"\ud83d\udc09"},{name:"snail",img:"\ud83d\udc0c"},{name:"T-Rex",img:"\ud83e\udd96"},{name:"rooster",img:"\ud83d\udc13"}]);return[{text:function(e){return"One upon a time, there was..."},choices:function(t){return[e[0],e[1]].map(function(e){return{text:function(t){return"A ".concat(e.name)},img:function(t){return e.img},state:function(t){return{hero:e,story:Object(c.a)(t.story).concat(["Once upon a time, there was a ".concat(e.name,".")])}}}})}},{text:function(e){return"The ".concat(e.hero.name," lived with ").concat(d(e.hero.gender)," mother.")}},{text:function(e){return"One day, ".concat(d(e.hero.gender),' mother says: "Take this..."')},choices:function(e){return[t[0],t[1]].map(function(e){return{text:function(t){return e.name},img:function(t){return e.img},state:function(t){return{food:e,story:Object(c.a)(t.story).concat(["One day, ".concat(d(t.hero.gender),' mother says: "Take this ').concat(e.name,' to your grandmother. She is ill and weak."')])}}}})}},{text:function(e){return"The ".concat(e.hero.name," set out immediately to go to her grandmother, who lived in another village.")}},{text:function(e){return"As she was going through the wood, she met with the..."},choices:function(e){return[n[0],n[1]].map(function(e){return{text:function(t){return e.name},img:function(t){return e.img},state:function(t){return{animal:e,story:Object(c.a)(t.story).concat(["As she was going through the wood, she met with the ".concat(e.name,"!")])}}}})}},{text:function(e){return"The ".concat(e.animal.name," says")}}]},y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(h.a)(this,Object(l.a)(t).call(this))).handleClick=function(t,n){if(n)e.setState(Object(m.a)({},n.state(e.state)));else{var a=Object(c.a)(e.state.story).concat([e.items[e.state.current].text(e.state)]);e.setState({story:a})}e.setState({current:e.state.current+1})},e.story=function(){return e.state.story.map(function(e){return r.a.createElement("p",null,r.a.createElement("i",null,e))})},e.items=p(),e.state={current:0,story:[]},e}return Object(g.a)(t,e),Object(u.a)(t,[{key:"current",value:function(){var e=this;if(this.state.current===this.items.length)return r.a.createElement("p",{className:"App-intro"},"The end.");var t,n=this.items[this.state.current],a=n.text(this.state);return t=n.choices?n.choices(this.state).map(function(t){return r.a.createElement("button",{onClick:function(n){return e.handleClick(n,t)},key:t.text(e.state)},t.text(e.state),t.img?r.a.createElement("span",null,t.img()):r.a.createElement("span",null))}):r.a.createElement("button",{onClick:this.handleClick},"Next"),r.a.createElement("div",null,r.a.createElement("p",{className:"App-intro"},a),t)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"App-title"},"Fairy tale")),this.story(),this.current())}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.343ead61.chunk.js.map