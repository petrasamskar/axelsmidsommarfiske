(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,a,t){e.exports=t(69)},37:function(e,a,t){},38:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},39:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(28),c=t.n(r),s=(t(37),t(2)),m=t(3),o=t(5),i=t(4),d=t(6),u=(t(38),t(39),t(16)),p=t(11),h=t(12),g=t.n(h);var v=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(i.a)(a).call(this))).state={years:[]},e}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("http://localhost:3001/api/years").catch(function(e){console.log(e)}).then(function(a){var t=Array.from(a.data);e.setState({years:t})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"dropdown show"},l.a.createElement("a",{className:"btn btn-secondary dropdown-toggle",href:"#",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"V\xe4lj \xc5r"),l.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuLink"},this.state.years.map(function(e){return l.a.createElement(E,{year:e,key:e})}))),l.a.createElement("p",null),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("p",{className:"card-text"},"P\xe5 midsommardagen varje \xe5r samlas sl\xe4kt och v\xe4nner f\xf6r den stora fisket\xe4vlingen i Konrads tj\xe4rn. M\xe5nga abborrar har dragits upp genom \xe5ren. F\xf6rutom \xe4ran vinner segraren en guldskimrande vandringspokal."),l.a.createElement("p",{className:"card-text"},'Tr\xf6stpriset "Trollet" delas ocks\xe5 ut till en lycklig vinnare.')),l.a.createElement("img",{className:"card-img-top",src:"./images/group/group_2017.JPG"})))}}]),a}(l.a.Component),E=function(e){return l.a.createElement(u.b,{className:"dropdown-item",to:"competition/"+e.year},e.year)},f=v,b=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"page-header"},l.a.createElement("h2",null,"Regler och stadgar")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-8 col-md-12 col-lg-12"},l.a.createElement("p",null,"Enligt EU-fiskekommision finns det regler som m\xe5ste f\xf6ljas n\xe4r det g\xe4ller t\xe4vling. De t\xe4vlande skall tr\xe4ffas vid bryggan med sp\xf6n, fl\xf6te, s\xe4nke och krok. Kastsp\xf6n f\xe5r anv\xe4ndas samt reservkrokar. Fisket skall p\xe5g\xe5 i en timme och trettio minuter. Fisket bedrivs medsols och alla skall g\xe5 runt tj\xe4rnen."),l.a.createElement("p",null,"Po\xe4ngr\xe4kningen \xe4r f\xf6ljande:"),l.a.createElement("p",null,l.a.createElement("code",null,"Aborre 1 po\xe4ng")),l.a.createElement("p",null,l.a.createElement("code",null,"Annan fisk 2 po\xe4ng")),l.a.createElement("p",null,"Fisken medf\xf6res i plastp\xe5se och r\xe4knas under uppsikt av fiskedomaren ",l.a.createElement("mark",null,"Kerstin Strandberg"),". Skulle po\xe4ngen vara lika hos flera fiskare skall vikten avg\xf6ra. Var tionde minut ger fiskedomaren en signal och d\xe5 m\xe5ste varje fiskare g\xf6ra en f\xf6rflyttning."),l.a.createElement("p",null,"Ordf\xf6randen \xf6nskar god fiskelycka. Kom ih\xe5g myggmedel!"),l.a.createElement("p",{className:"sign"},"Axel Strandberg"),l.a.createElement("small",null,"PS. Som bete f\xe5r anv\xe4ndas mask, maggot och r\xe4ka."))))}}]),a}(l.a.Component),k=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(i.a)(a).call(this))).state={winners:[]},e}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("http://localhost:3001/api/winners").catch(function(e){console.log(e)}).then(function(a){var t=Array.from(a.data);e.setState({winners:t})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"page-header"},l.a.createElement("h2",null,"Statistik")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-8 col-md-12 col-lg-12"},l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Deltagare/Lag"),l.a.createElement("td",null,"Antal vinster"))),l.a.createElement("tbody",null,this.state.winners.map(function(e){return l.a.createElement(y,{name:e._id,total:e.total,key:e._id})}))))))}}]),a}(l.a.Component),y=function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.total))},N=k,j=t(31),O=t.n(j),w=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(i.a)(a).call(this))).state={participants:[]},e}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e,a=this;(e=this.props.match.params.year,g.a.get("http://localhost:3001/api/competition?year="+e).catch(function(e){console.log(e)})).then(function(e){var t=Array.from(e.data);a.setState({participants:t})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"page-header"},l.a.createElement("h2",null,"Resultat ",this.props.match.params.year)),l.a.createElement("div",{className:"card"},l.a.createElement(O.a,{src:"./images/group/group_"+this.props.match.params.year+".JPG",fallbackImage:"./images/no_image.jpg",className:"card-img-top"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"card-text"},l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Deltagare/Lag"))),l.a.createElement("tbody",null,this.state.participants.map(function(e){return l.a.createElement(C,{place:e.place,score:e.score,name:e.name,key:e.name})})))))))}}]),a}(l.a.Component),C=function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.place,". ",e.name),l.a.createElement("td",null,e.score,"p"))},x=w,S=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(i.a)(a).call(this))).state={images:[]},e}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("http://localhost:3001/api/images").catch(function(e){console.log(e)}).then(function(a){var t=Array.from(a.data);e.setState({images:t})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container gal-container"},l.a.createElement("div",{className:"row text-center text-lg-left"},this.state.images.map(function(e){return l.a.createElement(A,{name:e,key:e})}))))}}]),a}(l.a.Component),A=function(e){return l.a.createElement("div",{className:"col-md-4 col-sm-6 co-xs-12 gal-item"},l.a.createElement("div",{className:"box"},l.a.createElement("a",{href:"#","data-toggle":"modal","data-target":"#"+e.name.substring(0,e.name.indexOf("."))},l.a.createElement("img",{src:"./images/other/"+e.name})),l.a.createElement("div",{className:"modal fade",id:e.name.substring(0,e.name.indexOf(".")),tabIndex:"-1",role:"dialog"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")),l.a.createElement("div",{className:"modal-body"},l.a.createElement("img",{src:"./images/other/"+e.name})))))))},D=S,M=t(14),_=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(i.a)(a).call(this,e))).state={year:"",score:"",name:"",place:""},t.handleChanged=t.handleChanged.bind(Object(M.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(M.a)(t)),t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"handleChanged",value:function(e){"score"==e.target.id?this.setState({score:e.target.value}):"year"==e.target.id?this.setState({year:e.target.value}):"place"==e.target.id?this.setState({place:e.target.value}):"name"==e.target.id&&this.setState({name:e.target.value})}},{key:"handleSubmit",value:function(e){var a;e.preventDefault(),a=this.state,console.log("add participant"),g()({method:"post",url:"http://localhost:3001/api/adscores",data:{year:a.year,place:a.place,name:a.name,score:a.score}}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Administrera fiskeresultat"),l.a.createElement("p",null,"L\xe4gg in resultat efter t\xe4vlingen."),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-8 col-md-12 col-lg-12"},l.a.createElement("form",{className:"form-horizontal",role:"form",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label col-sm-2",htmlFor:"year"},"\xc5r:"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"text",className:"form-control",id:"year",placeholder:"\xc5r",value:this.state.year,onChange:this.handleChanged}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label col-sm-2",htmlFor:"year"},"Placering:"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"text",className:"form-control",id:"place",placeholder:"Placering",value:this.state.place,onChange:this.handleChanged}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label col-sm-2",htmlFor:"name"},"Namn"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"text",className:"form-control",id:"name",placeholder:"Namn",value:this.state.name,onChange:this.handleChanged}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label col-sm-2",htmlFor:"score"},"Antal fiskar"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"text",className:"form-control",id:"score",placeholder:"Antal fiskar",value:this.state.score,onChange:this.handleChanged}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"col-sm-offset-2 col-sm-10"},l.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Spara"})))))))}}]),a}(l.a.Component),F=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"_getDaysRemaining",value:function(e){var a=Date.parse(e)-Date.parse(new Date);return Math.floor(a/864e5)}},{key:"_updateClock",value:function(){return this._getDaysRemaining("2019-06-21")}},{key:"render",value:function(){return l.a.createElement("span",{className:"badge badge-pill badge-danger",id:"clock"},"N\xe4sta t\xe4vling om ",this._updateClock()," dagar")}}]),a}(l.a.Component),P=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u.a,null,l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},l.a.createElement("div",{className:"navbar-nav"},l.a.createElement("a",{className:"navbar-brand mb-0 h1",href:"#"},"Axels midsommarfiske ",l.a.createElement("span",{className:"sr-only"})),l.a.createElement("a",{className:"nav-item nav-link",href:"#/rules"},"Regler och stadgar"),l.a.createElement("a",{className:"nav-item nav-link",href:"#/images"},"Bilder"),l.a.createElement("a",{className:"nav-item nav-link",href:"#/winners"},"Statistik"),l.a.createElement("div",{className:"align-self-center",id:"clockdiv"},l.a.createElement(F,null)))))),l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"jumbotron"},l.a.createElement(p.a,{exact:!0,path:"/",component:f}),l.a.createElement(p.a,{path:"/rules",component:b}),l.a.createElement(p.a,{path:"/images",component:D}),l.a.createElement(p.a,{path:"/winners",component:N}),l.a.createElement(p.a,{path:"/competition/:year",component:x}),l.a.createElement(p.a,{path:"/admin",component:_})))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.664f52a2.chunk.js.map