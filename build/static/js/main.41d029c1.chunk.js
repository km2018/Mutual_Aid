(this.webpackJsonpmutual_aid_webapp=this.webpackJsonpmutual_aid_webapp||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/requests-page.310253b8.png"},36:function(e,t,a){e.exports=a(77)},46:function(e,t,a){},50:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){e.exports=a.p+"static/media/banner.6ae1303d.png"},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){e.exports=a.p+"static/media/messages-page.6f5e68b5.png"},73:function(e,t,a){},74:function(e,t,a){e.exports=a.p+"static/media/app-store.2a80149d.png"},75:function(e,t,a){e.exports=a.p+"static/media/google-play.57a2b067.png"},77:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),c=a.n(r),o=(a(41),a(7)),s=a(8),i=a(9),m=a(11),u=a(10),d=a(14),h=a(12),p=a(6),f=a(28),E=(a(46),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).MakeTfPopup=function(){f.makePopup("https://kmurthy3.typeform.com/to/ma5svB",{mode:"popup",autoClose:3e3,hideHeaders:!1,hideFooters:!1,onSubmit:function(){console.log("Typeform successfully submitted")}}).open()},n.HomeButton=function(){return l.a.createElement(d.a,{className:"justify-content-left",onSelect:function(e){return alert("selected ".concat(e))}},l.a.createElement(d.a.Item,null,l.a.createElement(d.a.Link,{href:"#banner",className:"nav-text"}," Mutual Aid ")))},n.ContentLinks=function(){return l.a.createElement(d.a,{className:"justify-content-end"},l.a.createElement(d.a.Item,null,l.a.createElement(d.a.Link,{href:"#about",eventKey:"About",className:"nav-text"}," About ")),l.a.createElement(d.a.Item,null,l.a.createElement(d.a.Link,{href:"#download",eventKey:"Download",className:"nav-text"}," Download ")),l.a.createElement(d.a.Item,null,l.a.createElement(d.a.Link,{eventKey:"Contact",className:"btn-contact nav-text",onSelect:n.MakeTfPopup}," Contact")))},n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(o.a,null,l.a.createElement(h.a,null,l.a.createElement(p.a,null,l.a.createElement(this.HomeButton,null)),l.a.createElement(p.a,null,l.a.createElement(this.ContentLinks,null))))}}]),a}(l.a.Component)),g=(a(50),a(13)),b=a(33),N=a(34),v=(a(51),a(30)),y=(a(66),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleClose=function(){n.setState({show:!1})},n.handleShow=function(){n.setState({show:!0})},n.state={show:!1},n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(b.a,{variant:"light",onClick:this.handleShow}," Watch a Demo "),l.a.createElement(N.a,{show:this.state.show,onHide:this.handleClose},l.a.createElement(v.a,{videoId:"eBosNTyUF4I",className:"center-items"})))}}]),a}(l.a.Component)),w=(a(67),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).ComputerImage=function(){return l.a.createElement(g.a,{src:a(68),className:"banner-image"})},r.IntroductoryText=function(){return l.a.createElement("div",{className:"banner-text"},l.a.createElement("h3",null," Mutual Aid for COVID-19 "),l.a.createElement("h5",null," We are all in this together. "),l.a.createElement(y,null))},r}return Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement(o.a,{className:"p-3"},l.a.createElement(h.a,null,l.a.createElement(p.a,{className:"image-align"}," ",this.ComputerImage()," "),l.a.createElement(p.a,{className:"text-align"}," ",this.IntroductoryText()," ")))}}]),n}(l.a.Component)),x=(a(69),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).HomeScreenshot=function(){return l.a.createElement(g.a,{src:a(27),className:"home-image"})},r.HomeDescription=function(){return l.a.createElement("div",{className:"home-text"},l.a.createElement("h2",null,"Inform yourself about the ongoing needs of your community."),l.a.createElement("h5",null,"Share your story and learn about the hardships of others."))},r}return Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement(o.a,{className:"py-5"},l.a.createElement(h.a,null,l.a.createElement(p.a,{className:"image-align"}," ",this.HomeScreenshot()," "),l.a.createElement(p.a,{className:"text-align"}," ",this.HomeDescription()," ")))}}]),n}(l.a.Component)),O=(a(70),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).RequestsScreenshot=function(){return l.a.createElement(g.a,{src:a(27),className:"requests-image"})},r.RequestsDescription=function(){return l.a.createElement("div",{className:"requests-text"},l.a.createElement("h2",null,"Receive support from those who are willing to help."),l.a.createElement("h5",null,"You're not alone. Submit requests through the app for PPE, food, and disinfectants."))},r}return Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement(o.a,{className:"py-5"},l.a.createElement(h.a,null,l.a.createElement(p.a,{className:"text-align"}," ",this.RequestsDescription()," "),l.a.createElement(p.a,{className:"image-align"}," ",this.RequestsScreenshot()," ")))}}]),n}(l.a.Component)),j=(a(71),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).MessageScreenshot=function(){return l.a.createElement(g.a,{src:a(72),className:"messages-image"})},r.MessageDescription=function(){return l.a.createElement("div",{className:"messages-text"},l.a.createElement("h2",null,"Engage with people in your community."),l.a.createElement("h4",{className:"lighter-font"},"Share your story and learn about the hardships of others."))},r}return Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement(o.a,{className:"py-5"},l.a.createElement(h.a,null,l.a.createElement(p.a,{className:"image-align"}," ",this.MessageScreenshot()," "),l.a.createElement(p.a,{className:"text-align"}," ",this.MessageDescription()," ")))}}]),n}(l.a.Component)),k=(a(73),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).DownloadText=function(){return l.a.createElement("h3",{className:"download-text"},"Download the app")},r.AppStoreButton=function(){return l.a.createElement(g.a,{src:a(74),className:"download-image"})},r.GooglePlayButton=function(){return l.a.createElement(g.a,{src:a(75),className:"download-image"})},r.DownloadInfoText=function(){return l.a.createElement("p",{className:"download-text bold-text"},"Our app is available on the leading platforms. Download now on iOS or Android.")},r}return Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement(o.a,{className:"pt-5"},l.a.createElement(h.a,{className:"margin-top margin-bottom"},l.a.createElement(p.a,{className:"text-align"}," ",this.DownloadText()," ")),l.a.createElement(h.a,{md:4,className:"margin-top margin-bottom text-align"},l.a.createElement(p.a,{md:"auto"}," ",this.GooglePlayButton()," "),l.a.createElement(p.a,{md:"auto"}," ",this.AppStoreButton()," ")),l.a.createElement(h.a,{className:"margin-top margin-bottom"},l.a.createElement(p.a,{className:"download-info text-align"}," ",this.DownloadInfoText()," ")),l.a.createElement("h6",{className:"text-align download-text"}," Copyright \xa9 2020 Mutual Aid Inc. All rights reserved. "))}}]),n}(l.a.Component)),C=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"maroon-background fill-width sticky-nav"},l.a.createElement(E,null)),l.a.createElement("div",{id:"banner",className:"maroon-background fill-width"},l.a.createElement(o.a,{className:"py-5"},l.a.createElement(w,null))),l.a.createElement("div",{id:"about",className:"white-background fill-width"},l.a.createElement(o.a,{className:"py-5"},l.a.createElement(x,null))),l.a.createElement("div",{className:"maroon-background fill-width"},l.a.createElement(o.a,{className:"py-5"},l.a.createElement(O,null))),l.a.createElement("div",{className:"white-background fill-width"},l.a.createElement(o.a,{className:"py-5"},l.a.createElement(j,null))),l.a.createElement("div",{id:"download",className:"maroon-background fill-width"},l.a.createElement(o.a,{className:"py-5"},l.a.createElement(k,{name:"download"}))))};a(76);c.a.render(l.a.createElement(C,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.41d029c1.chunk.js.map