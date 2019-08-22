(window["webpackJsonpweather-app"]=window["webpackJsonpweather-app"]||[]).push([[0],{14:function(e,t,a){e.exports=a(30)},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),s=(a(19),a(4),a(2)),o=a.n(s),l=a(7),u=a(8),m=a(9),d=a(12),p=a(10),h=a(13),y=a(11),v=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"location-container",style:{opacity:"".concat(e.opacity)}},r.a.createElement("p",{className:"location-container__city"},e.city),r.a.createElement("p",{className:"location-container__country"},e.country_full)))},w=function(e){return r.a.createElement("form",{onSubmit:e.getWeather},r.a.createElement("input",{type:"text",name:"city",placeholder:"City...",autoComplete:"off"}),r.a.createElement("input",{type:"text",name:"country",placeholder:"Country (optional)",autoComplete:"off"}),r.a.createElement("button",null,"Get Weather"))},f=function(e){return r.a.createElement("div",{className:"weather__info"},e.titleVisibile&&r.a.createElement("div",{className:"title-container"},r.a.createElement("h1",{className:"title-container__title"},"Your Weather App"),r.a.createElement("p",{className:"title-container__subtitle"},"Check the weather anywhere anytime!")),e.city&&e.country&&r.a.createElement("p",{className:"weather__key__title"},"The Weather for You"),e.city&&e.country&&r.a.createElement("p",{className:"weather__key"},"Location: ",r.a.createElement("span",{className:"weather__value"}," ",e.city,", ",e.country)),e.temperature&&r.a.createElement("p",{className:"weather__key"},"Temperature: ",r.a.createElement("span",{className:"weather__value"}," ",e.temperature,"\xb0C")),e.humidity&&r.a.createElement("p",{className:"weather__key"},"Humidity: ",r.a.createElement("span",{className:"weather__value"}," ",e.humidity,"%")),e.wind&&r.a.createElement("p",{className:"weather__key"},"Wind: ",r.a.createElement("span",{className:"weather__value"}," ",e.wind," m/sec")),e.description&&r.a.createElement("p",{className:"weather__key"},"Conditions: ",r.a.createElement("span",{className:"weather__value"}," ",e.description)),e.sunrise&&r.a.createElement("p",{className:"weather__key"},"Sunrise: ",r.a.createElement("span",{className:"weather__value"}," ",e.sunrise)),e.sunset&&r.a.createElement("p",{className:"weather__key"},"Sunset: ",r.a.createElement("span",{className:"weather__value"}," ",e.sunset)),e.error&&r.a.createElement("p",{className:"weather__error"},e.error))},_="f7c1fddfc8e25ad4eb6f224be8db72e0",E="1f58255b5a31b6ff84cf63304d9e5ff36f42369cc7d83579e07d7fa98ef48edb",N="https://images.unsplash.com/photo-1541251680333-ae8ae4c943af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",b=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={temperature:void 0,city:void 0,country:void 0,country_full:void 0,humidity:void 0,wind:void 0,description:void 0,sunrise:void 0,sunset:void 0,photo:N,opacity:0,titleVisibile:!0,error:void 0},a.getWeather=function(){var e=Object(l.a)(o.a.mark(function e(t){var n,r,c,i,s,l,u,m,d,p,h,v,w,f,b,g,k;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=t.target.elements.city.value,r=t.target.elements.country.value,!n){e.next=10;break}return e.next=6,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=").concat(_,"&units=metric"));case 6:return c=e.sent,e.next=9,c.json();case 9:i=e.sent;case 10:if(!n||!r){e.next=17;break}return e.next=13,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(n,",").concat(r,"&appid=").concat(_,"&units=metric"));case 13:return c=e.sent,e.next=16,c.json();case 16:i=e.sent;case 17:if(!(n&&"name"in i)){e.next=42;break}return e.next=20,fetch("https://api.unsplash.com/search/photos/?client_id=".concat(E,"&page=1&query=").concat(n,"-").concat(r));case 20:return s=e.sent,e.next=23,s.json();case 23:l=e.sent,u=l.results[0].urls.full,m=i.timezone/3600,d=new Date(1e3*i.sys.sunrise),(p=d.getUTCHours()+m)>24&&(p=m-(24-d.getUTCHours())),h=d.getUTCMinutes(),p<10&&(p="0"+p),h<10&&(h="0"+h),v=p+":"+h,w=new Date(1e3*i.sys.sunset),(f=w.getUTCHours()+m)<=0&&(f=m+(24+f.getUTCHours())),b=w.getUTCMinutes(),f<10&&(f="0"+f),b<10&&(b="0"+b),g=f+":"+b,k=y.countries[i.sys.country].name,a.setState({temperature:i.main.temp,city:i.name,country:i.sys.country,country_full:k,humidity:i.main.humidity,wind:i.wind.speed,description:i.weather[0].description,sunrise:v,sunset:g,photo:u,opacity:.7,titleVisibile:!1,error:void 0});case 42:n||a.setState({temperature:void 0,city:void 0,country:void 0,country_full:void 0,humidity:void 0,wind:void 0,description:void 0,sunrise:void 0,sunset:void 0,photo:N,opacity:0,titleVisibile:!1,error:"Please enter the city value."}),n&&"404"===i.cod&&a.setState({temperature:void 0,city:void 0,country:void 0,country_full:void 0,humidity:void 0,wind:void 0,description:void 0,sunrise:void 0,sunset:void 0,photo:N,opacity:0,titleVisibile:!1,error:"Please enter the city (country) name correctly."});case 44:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"dyn-1"}),r.a.createElement("div",{className:"dyn-2"}),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 form-container"},r.a.createElement(w,{getWeather:this.getWeather}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-6 media-container",style:{background:"url(".concat(this.state.photo,") center center no-repeat")}},r.a.createElement(v,this.state)),r.a.createElement("div",{className:"col-xs-6 weather-container"},r.a.createElement(f,this.state)))))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},4:function(e,t,a){}},[[14,1,2]]]);
//# sourceMappingURL=main.b1fe7bf0.chunk.js.map