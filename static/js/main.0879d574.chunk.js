(this.webpackJsonpdough=this.webpackJsonpdough||[]).push([[0],{141:function(e,t,a){},235:function(e,t,a){e.exports=a.p+"static/media/sun-putt.4c66966b.jpg"},298:function(e,t,a){e.exports=a(485)},303:function(e,t,a){},485:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(16),c=a.n(l),o=(a(303),a(17)),i=(a(141),a(536)),u=a(487),s=a(538),m=a(84),d=a(533),f=Object(d.a)((function(e){return{root:{paddingLeft:e.spacing(1)}}})),p=function(e){var t=e.title,a=e.subtitle,n=f();return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{variant:"h2",classes:{root:n.root}},t),a&&r.a.createElement(m.a,{variant:"subtitle1",classes:{root:n.root}},a))},g=a(537),E=a(18),h=a(117),v=a(118),b=function(){function e(){Object(h.a)(this,e),this.STORAGE_PREFIX="dough_",this.GAMES_KEY="games",this.SETTINGS_KEY="settings"}return Object(v.a)(e,[{key:"activeGame",value:function(){return this.loadGames().filter((function(e){return!e.endTime}))[0]||null}},{key:"createGame",value:function(e){var t={id:"game-".concat((new Date).getTime()),result:this.buildInitResult(),venueId:e,startTime:new Date,note:"",labels:[]};return this.addGame(t),t}},{key:"updateGame",value:function(e){return this.writeGames(this.loadGames().map((function(t){return t.id===e.id?e:t}))),this.getGame(e.id)}},{key:"getGame",value:function(e){var t=this.loadGames().find((function(t){return t.id===e}));if(t)return t;throw new Error("Game not found")}},{key:"deleteGame",value:function(e){this.writeGames(this.loadGames().filter((function(t){return t.id!==e})))}},{key:"listGames",value:function(){return this.loadGames()}},{key:"getSettings",value:function(){return this.get(this.SETTINGS_KEY,(function(){return{darkMode:!1,showFeet:!0,showMetric:!1}}))}},{key:"updateSettings",value:function(e){return this.set(this.SETTINGS_KEY,e),this.getSettings()}},{key:"listVenues",value:function(){throw new Error("Method not implemented.")}},{key:"getVenue",value:function(e){throw new Error("Method not implemented.")}},{key:"resetGame",value:function(e){return e.result=this.buildInitResult(),this.updateGame(e)}},{key:"completeGame",value:function(e){return e.endTime=new Date,this.updateGame(e)}},{key:"resetAll",value:function(){localStorage.clear()}},{key:"updateSpecialLayout",value:function(e,t){var a="layout_".concat(e);return this.set(a,t),this.get(a,(function(e){return t}))}},{key:"specialLayout",value:function(e){var t="layout_".concat(e);return this.get(t,(function(e){return[10,15,20,23,25,27]}))}},{key:"getSpecialBonus",value:function(e,t){var a="bonus_".concat(e);return this.get(a,(function(){return t}))}},{key:"setSpecialBonus",value:function(e,t,a){var n="bonus_".concat(e);return this.set(n,t),this.get(n,(function(){return a}))}},{key:"addGame",value:function(e){var t=this.loadGames();t.unshift(e),this.writeGames(t)}},{key:"loadGames",value:function(){return this.get(this.GAMES_KEY,(function(){return[]}))}},{key:"writeGames",value:function(e){this.set(this.GAMES_KEY,e)}},{key:"set",value:function(e,t){return localStorage.setItem("".concat(this.STORAGE_PREFIX).concat(e),JSON.stringify(t)),this.get(e,(function(){return t}))}},{key:"get",value:function(e,t){var a=localStorage.getItem("".concat(this.STORAGE_PREFIX).concat(e));return a?JSON.parse(a):t(e)}},{key:"buildInitResult",value:function(){return[[[!1,!1],[!1,!1],[!1,!1],[!1,!1],[!1,!1],[!1,!1]],[[!1,!1],[!1,!1],[!1,!1],[!1,!1],[!1,!1],[!1,!1]],[[!1,!1],[!1,!1],[!1,!1],[!1,!1],[!1,!1],[!1,!1]]]}}]),e}(),y=new b,k=[{id:"standard-1",name:"Cirkel 1",description:"",layout:[10,15,20,25,30,35],address:"F\xf6rtab\xe4sta korgv\xe4gen 1",location:{lon:0,lat:0},defaultBonus:5,longBonus:10,special:!1},{id:"standard-2",name:"Cirkel 2",description:"",layout:[35,40,45,50,55,60],address:"F\xf6rtab\xe4sta korgv\xe4gen 1",location:{lon:0,lat:0},defaultBonus:10,longBonus:20,special:!1},{id:"standard-mix",name:"Mix",description:"",layout:[10,20,30,40,50,60],address:"F\xf6rtab\xe4sta korgv\xe4gen 1",location:{lon:0,lat:0},defaultBonus:10,longBonus:20,special:!1},{id:"special-1",name:"D.I.Y.",description:"",get layout(){return e=this.id,y.specialLayout(e);var e},set layout(e){y.updateSpecialLayout(this.id,e)},address:"F\xf6rtab\xe4sta korgv\xe4gen 1",location:{lon:0,lat:0},get defaultBonus(){return y.getSpecialBonus("default-".concat(this.id),10)},set defaultBonus(e){y.setSpecialBonus("default-".concat(this.id),e,10)},get longBonus(){return y.getSpecialBonus("long-".concat(this.id),20)},set longBonus(e){y.setSpecialBonus("long-".concat(this.id),e,20)},special:!0}],w=function(e){var t=k.find((function(t){return t.id===e}));return t||k[0]},S=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{title:"Banor"}),r.a.createElement(i.a,null,k.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.id},r.a.createElement(g.a,{variant:"middle"}),r.a.createElement(u.a,{button:!0,component:E.b,to:"/venues/".concat(e.id)},r.a.createElement(s.a,{primary:e.name,secondary:"Distanser: ".concat(e.layout.join(", ")," Bonus: ").concat(e.defaultBonus," / ").concat(e.longBonus)})))}))))},x=a(57),j=a(567),C=a(568),O=a(565),B=a(547),G=a(570),T=a(551),P=a(257),N=a.n(P),A=a(262),F=a.n(A),R=a(260),I=a.n(R),D=a(259),L=a.n(D),M=a(131),K=a.n(M),z=a(566),_=a(258),Y=a.n(_),V=a(38),q=function(){function e(t){Object(h.a)(this,e),this.game=void 0,this.venue=void 0,this.game=t,this.venue=w(t.venueId)}return Object(v.a)(e,[{key:"fullRow",value:function(e){return this.game.result.flatMap((function(t){return t[e]})).every(Boolean)}},{key:"bonusPosition",value:function(e,t){return this.firstBonusPosition(e,t)||this.lastBonusPosition(e,t)}},{key:"firstBonusPosition",value:function(e,t){return 0===e&&0===t}},{key:"lastBonusPosition",value:function(e,t){return 2===e&&1===t}},{key:"scoreAttempt",value:function(e,t,a){return this.game.result[e][t][a]?this.venue.layout[t]+(this.bonusPosition(e,a)?this.bonusLevel(t):0):0}},{key:"scoreGame",value:function(){var e=this;return this.game.result.reduce((function(t,a,n){return t+a.reduce((function(t,a,r){return t+e.scoreAttempt(n,r,0)+e.scoreAttempt(n,r,1)}),0)}),0)+this.venue.layout.reduce((function(t,a,n){return t+(e.fullRow(n)?a:0)}),0)}},{key:"succcessCount",value:function(){return this.countBy((function(e,t,a,n){return n}))}},{key:"successPercent",value:function(){return(this.succcessCount()/36*100).toFixed(1)}},{key:"bonusPositionCount",value:function(){var e=this;return{firstPositionCount:this.countBy((function(t,a,n,r){return e.firstBonusPosition(t,n)&&r})),lastPositionCount:this.countBy((function(t,a,n,r){return e.lastBonusPosition(t,n)&&r}))}}},{key:"bonusPositionPercent",value:function(){var e=this.bonusPositionCount(),t=e.firstPositionCount,a=e.lastPositionCount;return{first:(t/6*100).toFixed(1),last:(a/6*100).toFixed(1),both:((t+a)/12*100).toFixed(1)}}},{key:"positionCount",value:function(){var e=this;return Object(V.a)(Array(6)).map((function(t,a){return e.countBy((function(e,t,n,r){return t===a&&r}))}))}},{key:"positionPercent",value:function(){return this.positionCount().map((function(e){return(e/6*100).toFixed(1)}))}},{key:"roundPercent",value:function(){var e=this;return this.game.result.map((function(t,a){return Math.round(e.countBy((function(e,t,n,r){return e===a&&r}))/12*100)}))}},{key:"fullRound",value:function(){return this.roundPercent().map((function(e){return e>=100}))}},{key:"countBy",value:function(e){return this.game.result.reduce((function(t,a,n){return t+a.reduce((function(t,a,r){return t+a.reduce((function(t,a,l){return t+(e(n,r,l,a)?1:0)}),0)}),0)}),0)}},{key:"bonusLevel",value:function(e){return e<=3?this.venue.defaultBonus:this.venue.longBonus}}]),e}(),J=new b,X=function(e){var t=Object(x.g)(),a=Object(n.useState)(J.listGames()),l=Object(o.a)(a,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{title:"Resultat"}),r.a.createElement(i.a,null,l.map((function(e){var a=new q(e);return r.a.createElement(r.a.Fragment,{key:e.id},r.a.createElement(g.a,{variant:"middle"}),r.a.createElement(u.a,{button:!0,onClick:function(){return t.push("/games/".concat(e.id))},key:e.id},r.a.createElement(s.a,{primary:a.scoreGame(),secondary:"".concat(a.venue.name," - ").concat(new Date(e.startTime).toLocaleString())})))}))))},W=a(539),U=a(540),H=a(543),Z=a(542),$=a(541),Q=a(544),ee=a(235),te=a.n(ee),ae=Object(d.a)((function(e){return{card:{marginLeft:e.spacing(1),marginRight:e.spacing(1),marginBottom:e.spacing(1)}}})),ne=new b,re=function(e){var t=ae(),a=Object(x.g)();return Object(n.useEffect)((function(){var e=ne.activeGame();e&&a.push("/play/".concat(e.id))})),r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{title:"1025"}),r.a.createElement(W.a,{className:t.card},r.a.createElement(U.a,null,r.a.createElement($.a,{component:"img",alt:"Contemplative Reptile",height:"200",image:te.a,title:"Contemplative Reptile"}),r.a.createElement(Z.a,null,r.a.createElement(m.a,{gutterBottom:!0,variant:"h5",component:"h2"},"V\xe4lkommen!"),r.a.createElement(m.a,{variant:"body2",color:"textSecondary",component:"p"},"Denna 1025 app \xe4r utvecklad av Spinndisc FK. F\xf6r mer info om regler se klubbens hemsida."))),r.a.createElement(H.a,null,r.a.createElement(Q.a,{size:"small",color:"primary",onClick:function(){return window.location.assign("https://www.spinndiscfk.se/index.php/klubben/putt-traning")}},"L\xe4r dig mer"))))},le=a(546),ce=a(545);function oe(e){var t=e.onClose,a=e.open;return r.a.createElement(ce.a,{onClose:function(){t(null)},open:a},r.a.createElement(le.a,null,"V\xe4lj bana"),r.a.createElement(i.a,null,k.map((function(e){return r.a.createElement(u.a,{button:!0,onClick:function(){return a=e.id,void t(a);var a},key:e.id},r.a.createElement(s.a,{primary:e.name}))}))))}var ie=a(121),ue=a(85),se=a(49),me=a.n(se),de=a(237),fe=a.n(de),pe=a(92),ge=a.n(pe),Ee=a(47),he=a.n(Ee),ve=a(61),be=a.n(ve),ye=a(236),ke=a(238),we=a.n(ke),Se=a(239),xe=a.n(Se),je=[me.a[100],me.a[200],me.a[300]],Ce=[me.a[400],me.a[600],me.a[800]],Oe=function(e){var t=e.round,a=e.success,n=e.rowBonus,r=e.bonusPosition,l=e.staticBackground;return n?fe.a[500]:r&&a?ge.a.A400:a?ge.a.A200:l?me.a[100]:je[t]},Be=function(e){var t=e.round,a=e.success,n=e.rowBonus,r=e.bonusPosition,l=e.staticBackground;return n?be.a[800]:r&&a?he.a[800]:a?he.a[600]:l?me.a[100]:Ce[t]},Ge=Object(d.a)((function(e){return{swipeContainer:{flexGrow:1,flexShrink:0,flexBasis:0},root:function(t){return Object(ie.a)({},e.typography.button,{width:"100%",height:"100%",borderWidth:1,borderStyle:"solid",borderColor:e.palette.background.default,backgroundColor:"dark"===e.palette.type?Be(t):Oe(t)})}}})),Te=function(e){var t=e.success,a=e.score,l=e.onClick,c=e.onSwipe,i=Ge(e),u=Object(n.useState)(null),s=Object(o.a)(u,2),m=s[0],d=s[1];return r.a.createElement(ye.a,{onSwiped:function(e){m&&m.done&&c(),d(null)},onSwiping:function(e){e.first&&d({done:!1}),Math.abs(e.deltaX)>100?d({done:!0}):d({done:!1})},preventDefaultTouchmoveEvent:!0,className:i.swipeContainer},r.a.createElement(ue.a,{classes:{root:i.root},onClick:l},t?a:m?m.done?r.a.createElement(we.a,{style:{color:he.a.A700}}):r.a.createElement(xe.a,null):""))},Pe=a(571),Ne=a(126),Ae=a.n(Ne),Fe=a(125),Re=a.n(Fe),Ie=Object(d.a)((function(e){return{root:function(t){return{textAlign:"center",paddingTop:e.spacing(),visibility:t?"hidden":"initial",color:e.palette.text.hint}}}})),De=function(e){var t=e.roundNumber,a=e.hidden,n=void 0!==a&&a,l=e.checked,c=void 0!==l&&l,o=e.onClick,i=void 0===o?function(){}:o,u=Ie(n);return r.a.createElement(m.a,{variant:"h6",classes:{root:u.root},gutterBottom:!0},r.a.createElement(Pe.a,{label:t,clickable:!0,icon:c?r.a.createElement(Re.a,null):r.a.createElement(Ae.a,null),onClick:i}))},Le=Object(d.a)({root:{width:"100%",textAlign:"center"}}),Me=function(e){var t=e.score,a=Le();return r.a.createElement(m.a,{variant:"h1",classes:{root:a.root}},t)},Ke=a(40),ze=new b,_e=function(e){var t=[];return ze.getSettings().showFeet&&t.push("".concat(e,"'")),ze.getSettings().showMetric&&t.push("".concat((e/3.281).toFixed(1),"m")),t.join("/")},Ye=new b,Ve=Object(d.a)((function(e){return{position:{textAlign:"center",paddingLeft:e.spacing(1),paddingRight:e.spacing(1),color:e.palette.text.hint}}}));function qe(){var e=Object(x.g)(),t=Object(x.i)().id,a=Object(n.useState)(Ye.getGame(t)),l=Object(o.a)(a,2),c=l[0],i=l[1],u=Object(Ke.b)(),s=new q(c),m=Ve(),d=s.fullRound();return r.a.createElement(C.a,{display:"flex",flexDirection:"column",flexGrow:1},r.a.createElement(C.a,{display:"flex",flexGrow:3,flexDirection:"row",flexShrink:0,flexBasis:0},r.a.createElement(C.a,{display:"flex",flexDirection:"column"},r.a.createElement(De,{roundNumber:0,hidden:!0}),s.venue.layout.map((function(e,t){return r.a.createElement(C.a,{flexGrow:1,flexShrink:0,flexBasis:0,display:"flex",justifyContent:"center",key:"position-".concat(t)},r.a.createElement(C.a,{alignSelf:"center",className:m.position},_e(e)))}))),c.result.map((function(e,t){return r.a.createElement(C.a,{flexGrow:1,flexShrink:0,flexBasis:0,display:"flex",flexDirection:"column",key:"round-col-".concat(t)},r.a.createElement(De,{roundNumber:t+1,checked:d[t],onClick:(a=t,function(){d[a]||(c.result[a]=c.result[a].map((function(e){return[!0,!0]})),i(Ye.updateGame(c)))})}),e.map((function(e,a){return r.a.createElement(C.a,{flexGrow:1,flexShrink:0,flexBasis:0,display:"flex",key:"attepmt-row-".concat(a)},e.map((function(e,n){return r.a.createElement(Te,{round:t,bonusPosition:s.bonusPosition(t,n),position:a,rowBonus:s.fullRow(a),score:s.scoreAttempt(t,a,n),success:e,key:"attempt-".concat(t,"-").concat(a,"-").concat(n),onClick:function(){return function(e,t,a){c.result[e][t][a]=!c.result[e][t][a],i(Ye.updateGame(c))}(t,a,n)},onSwipe:function(){return function(e,t,a){for(var n=[0,0],r=0;r<=t;r++)for(var l=0;l<=1;l++)c.result[e][r][l]&&(n=[r,l]);1===n[1]&&(n[0]++,n[1]=0);for(var o=n[0];o<=t;o++)for(var u=n[1];u<=(o<t?1:a);u++)c.result[e][o][u]=!0;i(Ye.updateGame(c))}(t,a,n)}})})))})));var a}))),r.a.createElement(C.a,null,r.a.createElement(B.a,null,r.a.createElement(Q.a,{onClick:function(){u({title:"\xc4r du s\xe4ker?"}).then((function(){Ye.deleteGame(c.id),e.push("/")})).catch((function(){}))}},"Sl\xe4ng"),r.a.createElement(Q.a,{onClick:function(){u({title:"\xc4r du s\xe4ker?"}).then((function(){i(Ye.resetGame(c))})).catch((function(){}))}},"Rensa"),r.a.createElement(C.a,{flexGrow:1}),r.a.createElement(Q.a,{onClick:function(){u({title:"Bra jobbat!",description:"S\xe4ker p\xe5 att du ska avsluta?"}).then((function(){Ye.completeGame(c),e.push("/games/".concat(c.id))})).catch((function(){}))},color:"primary",variant:"contained"},"Klar!"))),r.a.createElement(C.a,{flexGrow:1},r.a.createElement(Me,{score:s.scoreGame()})))}var Je=a(489),Xe=a(548),We=a(549),Ue=a(550),He=a(572),Ze=a(128),$e=a.n(Ze),Qe=Object(d.a)((function(e){return{root:{marginTop:e.spacing(2),marginLeft:e.spacing(1),marginRight:e.spacing(1)}}}));function et(e){var t=e.title,a=Qe();return r.a.createElement(m.a,{variant:"button",className:a.root},t)}var tt=new b,at=Object(d.a)((function(e){return{card:{marginLeft:e.spacing(1),marginRight:e.spacing(1)}}}));function nt(e){var t=r.a.useState(tt.getSettings()),a=Object(o.a)(t,2),n=a[0],l=a[1],c=Object(x.g)(),i=at(),u=Object(Ke.b)(),s=function(e){l(tt.updateSettings(e))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{title:"St\xe4ll in"}),r.a.createElement(W.a,{className:i.card},r.a.createElement(Z.a,null,r.a.createElement(Xe.a,{component:"fieldset"},r.a.createElement(Je.a,{component:"legend"},"Utseende"),r.a.createElement(We.a,null,r.a.createElement(Ue.a,{control:r.a.createElement(He.a,{checked:n.darkMode,onChange:function(){n.darkMode=!n.darkMode,e.toggleDarkMode(n.darkMode),s(n)}}),label:"Dark mode"}),r.a.createElement(Ue.a,{control:r.a.createElement(He.a,{checked:n.showFeet,onChange:function(){n.showFeet=!n.showFeet,n.showFeet||n.showMetric||(n.showMetric=!0),s(n)}}),label:"Visa fot"}),r.a.createElement(Ue.a,{control:r.a.createElement(He.a,{checked:n.showMetric,onChange:function(){n.showMetric=!n.showMetric,n.showFeet||n.showMetric||(n.showFeet=!0),s(n)}}),label:"Visa meter"}))))),r.a.createElement(et,{title:"Danger Zone"}),r.a.createElement(W.a,{className:i.card},r.a.createElement(Z.a,null,r.a.createElement(Q.a,{variant:"contained",color:"secondary",startIcon:r.a.createElement($e.a,null),onClick:function(){return u({title:"\xc4r du RIKTIGT s\xe4ker?",description:"All speldata kommer raderas!"}).then((function(){tt.resetAll(),c.push("/")})).catch((function(){}))}},"Nollst\xe4ll all data"))))}var rt=a(263),lt=a(563),ct=a(564),ot=a(4),it=a(11),ut=a(169),st=a.n(ut),mt=a(29);function dt(){var e=Object(x.h)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var ft=Object(d.a)((function(e){return{scoreCard:{marginLeft:e.spacing(1),marginRight:e.spacing(1),marginBottom:e.spacing(1)},gridRow:{height:30},gridIcon:{fontSize:30},gridIconSuccess:{color:e.palette.success.main},gridIconFail:{color:e.palette.error.main},gridLabel:{paddingLeft:e.spacing(1),paddingRight:e.spacing(1),flexGrow:2},cardHeader:{marginTop:e.spacing(1),marginLeft:e.spacing(1),marginRight:e.spacing(1)},divider:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},venueChip:{margin:e.spacing(1)}}})),pt=new b;function gt(e){for(var t=Object(x.i)().id,a=Object(mt.a)(),l=Object(n.useState)(pt.getGame(t)),c=Object(o.a)(l,1)[0],i=Object(Ke.b)(),u=Object(x.g)(),s=new q(c),m=ft(),d=[],f=0;f<3;f++)for(var h=0;h<6;h++)d[h]||(d[h]=[]),d[h]=[].concat(Object(V.a)(d[h]),Object(V.a)(c.result[f][h]));var v=s.positionPercent().map((function(e,t){return{name:"".concat(_e(s.venue.layout[t])," \u2192 ").concat(e,"%"),value:Number(e),fill:a.palette.grey[100*t+400]}})),b=s.bonusPositionPercent(),y=s.venue.layout.map((function(e,t){return{position:_e(e),a:c.result[0][t].filter((function(e){return e})).length,b:c.result[1][t].filter((function(e){return e})).length,c:c.result[2][t].filter((function(e){return e})).length,fullMark:2}})),k=s.roundPercent();return r.a.createElement(C.a,{flexGrow:1},r.a.createElement(dt,null),r.a.createElement(p,{title:"".concat(s.scoreGame()),subtitle:new Date(c.startTime).toLocaleString()}),r.a.createElement(Pe.a,{component:E.b,to:"/venues/".concat(s.venue.id),variant:"outlined",label:s.venue.name,icon:r.a.createElement(K.a,null),color:"primary",clickable:!0,className:m.venueChip}),r.a.createElement(W.a,{classes:{root:m.scoreCard}},r.a.createElement(Z.a,null,d.map((function(e,t){return r.a.createElement(C.a,{key:"row-".concat(t),className:m.gridRow,display:"flex",justifyContent:"center"},r.a.createElement(C.a,{alignSelf:"center",className:m.gridLabel},_e(s.venue.layout[t])),e.map((function(t,a){return t?r.a.createElement(Re.a,{key:"attempt-".concat(e,"-").concat(a),className:Object(ot.a)(m.gridIcon,m.gridIconSuccess)}):r.a.createElement(Ae.a,{key:"attempt-".concat(e,"-").concat(a),className:Object(ot.a)(m.gridIcon,m.gridIconFail)})})))})))),r.a.createElement(W.a,{classes:{root:m.scoreCard}},r.a.createElement(C.a,{display:"flex"},r.a.createElement(Et,{value:Number(s.successPercent()),title:"Totalt"}),r.a.createElement(Et,{value:Number(b.first),title:"F\xf6rsta"}),r.a.createElement(Et,{value:Number(b.last),title:"Sista"}))),r.a.createElement(et,{title:"Tr\xe4ffar per distans"}),r.a.createElement(W.a,{classes:{root:m.scoreCard}},r.a.createElement(it.p,{width:"100%",height:180},r.a.createElement(it.n,{innerRadius:"20%",outerRadius:"80%",data:v,startAngle:90,endAngle:-270,cx:"25%",margin:{top:0,right:0,bottom:0,left:0}},r.a.createElement(it.h,{type:"number",domain:[0,100],angleAxisId:0,tick:!1}),r.a.createElement(it.m,{label:!1,background:!0,dataKey:"value",legendType:"square"}),r.a.createElement(it.c,{iconSize:10,layout:"vertical",verticalAlign:"middle",align:"right"})))),r.a.createElement(et,{title:"Tr\xe4ffar per omg\xe5ng"}),r.a.createElement(W.a,{classes:{root:m.scoreCard}},r.a.createElement(C.a,{display:"flex"},k.map((function(e,t){return r.a.createElement(Et,{value:e,title:String(t+1),key:"hits-per-round-".concat(t)})}))),r.a.createElement(g.a,{variant:"middle",className:m.divider}),r.a.createElement(it.p,{width:"100%",height:200},r.a.createElement(it.l,{data:y},r.a.createElement(it.i,null),r.a.createElement(it.h,{dataKey:"position",tick:{fill:a.palette.text.primary}}),r.a.createElement(it.j,{angle:30,domain:[0,2]}),r.a.createElement(it.k,{name:"1",dataKey:"a",stroke:st.a[400],fill:st.a[400],fillOpacity:.2}),r.a.createElement(it.k,{name:"2",dataKey:"b",stroke:he.a[400],fill:he.a[400],fillOpacity:.2}),r.a.createElement(it.k,{name:"3",dataKey:"c",stroke:be.a[400],fill:be.a[400],fillOpacity:.2}),r.a.createElement(it.q,null),r.a.createElement(it.c,{wrapperStyle:{paddingTop:a.spacing(2)}})))),r.a.createElement(et,{title:"Farozonen"}),r.a.createElement(W.a,{classes:{root:m.scoreCard}},r.a.createElement(Z.a,null,r.a.createElement(Q.a,{variant:"contained",color:"secondary",startIcon:r.a.createElement($e.a,null),onClick:function(){return i({title:"\xc4r du s\xe4ker?",description:"Spelet kommer sl\xe4ngas f\xf6r all evighet!"}).then((function(){pt.deleteGame(c.id),u.push("/")})).catch((function(){}))}},"Sl\xe4ng"))),r.a.createElement(C.a,{style:{height:100}}))}var Et=function(e){var t=e.title,a=e.value,n=Object(mt.a)();return r.a.createElement(C.a,{flexGrow:1,flexShrink:0,flexBasis:0,display:"flex",flexDirection:"column",alignItems:"center"},r.a.createElement(m.a,{variant:"button"},t),r.a.createElement(it.p,{width:"100%",height:100},r.a.createElement(it.g,null,r.a.createElement(it.f,{data:[{name:"score",value:a,fill:n.palette.grey[500]},{name:"max",value:100-a,fill:n.palette.grey[200]}],cx:"50%",cy:"50%",dataKey:"value",startAngle:90,endAngle:-270,innerRadius:"60%",outerRadius:"80%",stroke:"none"},r.a.createElement(it.b,{value:"".concat(a,"%"),position:"center",fill:n.palette.text.primary})))))},ht=a(122),vt=a(553),bt=a(557),yt=a(556),kt=a(552),wt=a(554),St=a(555),xt=a(252),jt=a.n(xt),Ct=a(253),Ot=a.n(Ct),Bt=a(573),Gt=Object(d.a)((function(e){return{card:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},positionTableCell:{padding:0},saveButton:{marginTop:e.spacing(1)},input:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}));function Tt(e){var t=Object(x.i)().id,a=Object(n.useState)(w(t)),l=Object(o.a)(a,1)[0],c=Object(n.useState)(l.layout),i=Object(o.a)(c,2),u=i[0],s=i[1],d=Object(n.useState)({short:l.defaultBonus,long:l.longBonus}),f=Object(o.a)(d,2),g=f[0],E=f[1],h=Gt(),v=function(e){return function(t){var a=Number(t.target.value);isNaN(a)||s([].concat(Object(V.a)(u.slice(0,e)),[a],Object(V.a)(u.slice(e+1))))}},b=function(e){return function(t){console.log(t.target.value);var a=Number(t.target.value);isNaN(a)||E(Object(ie.a)({},g,Object(ht.a)({},e,a)))}};return r.a.createElement(C.a,{flexGrow:1},r.a.createElement(dt,null),r.a.createElement(p,{title:l.name}),l.special?r.a.createElement(r.a.Fragment,null,r.a.createElement(et,{title:"Konfiguration"}),r.a.createElement(W.a,{classes:{root:h.card}},r.a.createElement(Z.a,null,r.a.createElement("form",{noValidate:!0,autoComplete:"off",className:h.input},r.a.createElement("div",null,r.a.createElement(Bt.a,{required:!0,value:g.short,id:"default-bonus",label:"Kort bonus",onChange:b("short")}),r.a.createElement(Bt.a,{required:!0,value:g.long,id:"long-bonus",label:"L\xe5ng bonus",onChange:b("long")}),u.map((function(e,t){return r.a.createElement(Bt.a,{required:!0,value:e,id:"position-".concat(t),key:"position-".concat(t),label:"Position ".concat(t+1),onChange:v(t)})}))),r.a.createElement(Q.a,{variant:"contained",onClick:function(){l.layout=u,l.defaultBonus=g.short,l.longBonus=g.long},className:h.saveButton},"Spara"))))):r.a.createElement(r.a.Fragment,null,r.a.createElement(et,{title:"Layout"}),r.a.createElement(W.a,{classes:{root:h.card}},r.a.createElement(Z.a,null,r.a.createElement(kt.a,null,r.a.createElement(vt.a,{size:"small"},r.a.createElement(wt.a,null,r.a.createElement(St.a,null,r.a.createElement(yt.a,{classes:{sizeSmall:h.positionTableCell}},"Positioner"),r.a.createElement(yt.a,{classes:{sizeSmall:h.positionTableCell}},"1"),r.a.createElement(yt.a,{classes:{sizeSmall:h.positionTableCell}},"2"),r.a.createElement(yt.a,{classes:{sizeSmall:h.positionTableCell}},"3"),r.a.createElement(yt.a,{classes:{sizeSmall:h.positionTableCell}},"4"),r.a.createElement(yt.a,{classes:{sizeSmall:h.positionTableCell}},"5"),r.a.createElement(yt.a,{classes:{sizeSmall:h.positionTableCell}},"6"))),r.a.createElement(bt.a,null,r.a.createElement(St.a,null,r.a.createElement(yt.a,{variant:"head",align:"left",classes:{sizeSmall:h.positionTableCell}},"Fot"),u.map((function(e,t){return r.a.createElement(yt.a,{classes:{sizeSmall:h.positionTableCell},key:"feet-position-".concat(t)},e)}))),r.a.createElement(St.a,null,r.a.createElement(yt.a,{variant:"head",align:"left",classes:{sizeSmall:h.positionTableCell}},"Meter"),u.map((function(e,t){return r.a.createElement(yt.a,{classes:{sizeSmall:h.positionTableCell},key:"meter-position-".concat(t)},"".concat((e/3.281).toFixed(1)))})))))))),r.a.createElement(et,{title:"Info"}),r.a.createElement(W.a,{classes:{root:h.card}},r.a.createElement(Z.a,null,r.a.createElement(C.a,{display:"flex",justifyContent:"space-between",alignItems:"center"},r.a.createElement(m.a,{variant:"body2"},"Bonus:"),r.a.createElement(Pe.a,{icon:r.a.createElement(jt.a,null),label:"Kort: ".concat(l.defaultBonus)}),r.a.createElement(Pe.a,{icon:r.a.createElement(Ot.a,null),label:"L\xe5ng: ".concat(l.longBonus)}))))))}var Pt=a(261),Nt=a.n(Pt),At=a(561),Ft=a(575),Rt=a(569),It=a(560),Dt=a(562),Lt=function(e){var t=e.title,a=e.value,n=Object(mt.a)(),l=Math.round(a);return r.a.createElement(C.a,{flexGrow:1,flexShrink:0,flexBasis:0,display:"flex",flexDirection:"column",alignItems:"center"},r.a.createElement(m.a,{variant:"button"},t),r.a.createElement(it.p,{width:"100%",height:100},r.a.createElement(it.g,null,r.a.createElement(it.f,{data:[{name:"score",value:l,fill:n.palette.grey[500]},{name:"max",value:100-l,fill:n.palette.grey[200]}],cx:"50%",cy:"50%",dataKey:"value",startAngle:90,endAngle:-270,innerRadius:"60%",outerRadius:"80%",stroke:"none"},r.a.createElement(it.b,{value:"".concat(l,"%"),position:"center",fill:n.palette.text.primary})))))},Mt=a(254),Kt=a.n(Mt),zt=a(255),_t=a.n(zt),Yt=a(256),Vt=a.n(Yt),qt=new b,Jt=Object(d.a)((function(e){return{rangeSelectorGroup:{width:"100%"},rangeSelectorButton:{flexGrow:1},card:{marginLeft:e.spacing(1),marginRight:e.spacing(1),marginBottom:e.spacing(1)},venueSelector:{width:"100%",marginTop:e.spacing(1)},chartCard:{paddingTop:e.spacing(1),paddingBottom:e.spacing(1)}}})),Xt=function(e){var t=Object(mt.a)(),a=Object(n.useState)("all"),l=Object(o.a)(a,2),c=l[0],i=l[1],u=Object(n.useState)(k[0].id),s=Object(o.a)(u,2),d=s[0],f=s[1],g=Jt(),h=w(d),v=Wt(c,d),b=v.countGames,y=v.top5,S=v.scoreAvg,x=v.scoreSeries,j=v.totalPctByDistance,O=v.accPctByDistanceSeries,B=v.totalPct,G=v.totalPctFirstPutts,T=v.totalPctLastPutts,P=j.map((function(e,a){return{name:"".concat(_e(h.layout[a])," \u2192 ").concat(e.toFixed(0),"%"),value:Number(e),fill:t.palette.grey[100*a+400]}}));return r.a.createElement(C.a,{flexGrow:1},r.a.createElement(dt,null),r.a.createElement(p,{title:"Statistik"}),r.a.createElement(W.a,{className:g.card},r.a.createElement(Z.a,null,r.a.createElement(Ft.a,{exclusive:!0,value:c,onChange:function(e,t){null!==t&&i(t)},className:g.rangeSelectorGroup},r.a.createElement(At.a,{className:g.rangeSelectorButton,value:"all"},"Allt"),r.a.createElement(At.a,{className:g.rangeSelectorButton,value:"year"},(new Date).getFullYear()),r.a.createElement(At.a,{className:g.rangeSelectorButton,value:"20"},"Sista 20"),r.a.createElement(At.a,{className:g.rangeSelectorButton,value:"5"},"Sista 5")),r.a.createElement(Xe.a,{className:g.venueSelector},r.a.createElement(It.a,null,"V\xe4lj bana"),r.a.createElement(Rt.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:d,onChange:function(e,t){f(e.target.value)}},k.map((function(e,t){return r.a.createElement(Dt.a,{value:e.id,key:"select-venue-".concat(e.id)},e.name)})))))),r.a.createElement(C.a,{display:"flex",justifyContent:"center"},r.a.createElement(m.a,{variant:"h6"},"Visar data f\xf6r ",b," spel")),r.a.createElement(et,{title:"Top 5"}),r.a.createElement(C.a,{display:"flex",justifyContent:"space-between",className:g.card},y.map((function(e){return r.a.createElement(Pe.a,{color:"primary",variant:"outlined",clickable:!0,key:"top-score-".concat(e.id),component:E.b,to:"/games/".concat(e.id),label:e.score})}))),r.a.createElement(et,{title:"Po\xe4ng - utveckling"}),r.a.createElement(W.a,{className:Object(ot.a)(g.card,g.chartCard)},r.a.createElement(it.p,{height:200,width:"100%"},r.a.createElement(it.e,{data:x},r.a.createElement(it.a,{strokeDasharray:"3 3",vertical:!1,stroke:t.palette.text.hint}),r.a.createElement(it.r,{mirror:!0,axisLine:!1,tickLine:!1,stroke:t.palette.text.hint}),r.a.createElement(it.o,{y:S,stroke:"red",strokeDasharray:"3 3"}),r.a.createElement(it.d,{isAnimationActive:!1,dot:!1,type:"step",dataKey:"value",stroke:t.palette.getContrastText(t.palette.background.paper)})))),r.a.createElement(et,{title:"Tr\xe4ffs\xe4kerhet - utveckling"}),r.a.createElement(W.a,{className:Object(ot.a)(g.card,g.chartCard)},r.a.createElement(it.p,{height:200,width:"100%"},r.a.createElement(it.e,{data:O},r.a.createElement(it.a,{strokeDasharray:"3 3",vertical:!1,stroke:t.palette.text.hint}),r.a.createElement(it.r,{mirror:!0,axisLine:!1,tickLine:!1,stroke:t.palette.text.hint}),r.a.createElement(it.c,{iconType:"plainline",formatter:function(e,t,a){return _e(h.layout[Number(e)])}}),r.a.createElement(it.d,{isAnimationActive:!1,dot:!1,type:"monotone",dataKey:"0",stroke:he.a[500]}),r.a.createElement(it.d,{isAnimationActive:!1,dot:!1,type:"monotone",dataKey:"1",stroke:ge.a[500]}),r.a.createElement(it.d,{isAnimationActive:!1,dot:!1,type:"monotone",dataKey:"2",stroke:Kt.a[500]}),r.a.createElement(it.d,{isAnimationActive:!1,dot:!1,type:"monotone",dataKey:"3",stroke:_t.a[500]}),r.a.createElement(it.d,{isAnimationActive:!1,dot:!1,type:"monotone",dataKey:"4",stroke:Vt.a[500]}),r.a.createElement(it.d,{isAnimationActive:!1,dot:!1,type:"monotone",dataKey:"5",stroke:be.a[500]})))),r.a.createElement(et,{title:"Tr\xe4ffs\xe4kerhet"}),r.a.createElement(W.a,{className:g.card},r.a.createElement(C.a,{display:"flex"},r.a.createElement(Lt,{title:"Totalt",value:B}),r.a.createElement(Lt,{title:"F\xf6rsta",value:G}),r.a.createElement(Lt,{title:"Sista",value:T}))),r.a.createElement(et,{title:"Tr\xe4ffar per distans"}),r.a.createElement(W.a,{classes:{root:g.card}},r.a.createElement(it.p,{width:"100%",height:180},r.a.createElement(it.n,{innerRadius:"20%",outerRadius:"80%",data:P,startAngle:90,endAngle:-270,cx:"25%",margin:{top:0,right:0,bottom:0,left:0}},r.a.createElement(it.h,{type:"number",domain:[0,100],angleAxisId:0,tick:!1}),r.a.createElement(it.m,{label:!1,background:!0,dataKey:"value",legendType:"square"}),r.a.createElement(it.c,{iconSize:10,layout:"vertical",verticalAlign:"middle",align:"right"})))),r.a.createElement(C.a,{style:{height:100}}))},Wt=function(e,t){for(var a=function(e,t){var a=qt.listGames().filter((function(e){return e.venueId===t&&void 0!==e.endTime}));return"year"===e?a=a.filter((function(e){return new Date(e.startTime).getFullYear()===(new Date).getFullYear()})):["20","5"].some((function(t){return t===e}))&&(a=a.slice(0,Number(e))),a.map((function(e){return new q(e)})).reverse()}(e,t),n=Array.from(a).sort((function(e,t){return t.scoreGame()-e.scoreGame()})).slice(0,5).map((function(e){return{id:e.game.id,score:e.scoreGame(),startDate:e.game.startTime}})),r=a.map((function(e){return{name:e.game.id,date:new Date(e.game.startTime),value:e.scoreGame()}})),l=r.reduce((function(e,t){return e+t.value}),0)/a.length,c=a.reduce((function(e,t){return e+t.succcessCount()}),0)/(6*a.length*6)*100,o=a.reduce((function(e,t){var a=t.positionCount();return e.map((function(e,t){return e+a[t]}))}),[0,0,0,0,0,0]).map((function(e){return e/(6*a.length)*100})),i=a.map((function(e){var t=e.positionPercent().map(Number);return{game:e.game,position1:t[0],position2:t[1],position3:t[2],position4:t[3],position5:t[4],position6:t[5]}})),u=a.map((function(e){return e.positionCount().map(Number)})),s=function(e){u[e]=u[e].map((function(t,a){return t+u[e-1][a]}))},m=1;m<u.length;m++)s(m);var d=u.map((function(e,t){return e.map((function(e){return e/(6*(t+1))*100}))})).map((function(e){return{0:e[0],1:e[1],2:e[2],3:e[3],4:e[4],5:e[5]}})),f=a.reduce((function(e,t){var a=t.bonusPositionCount(),n=a.firstPositionCount,r=a.lastPositionCount;return{first:e.first+n,last:e.last+r}}),{first:0,last:0}),p=f.first/(6*a.length)*100,g=f.last/(6*a.length)*100;return{countGames:a.length,top5:n,scoreAvg:l,scoreSeries:r,totalPct:c,totalPctByDistance:o,pctByDistanceSeries:i,accPctByDistanceSeries:d,totalPctFirstPutts:p,totalPctLastPutts:g}},Ut=Object(d.a)((function(e){return{position:{textAlign:"center",paddingLeft:e.spacing(1),paddingRight:e.spacing(1),color:e.palette.text.hint}}})),Ht=function(){return Object(V.a)(Array(6)).map((function(){return Object(V.a)(Array(5)).map((function(){return!1}))}))},Zt=[25,30,35,40,45,50];function $t(){var e=Object(n.useState)(Ht()),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(Ke.b)(),i=Ut(),u=function(e){return e<=1?1:e<=3?2:3};return r.a.createElement(C.a,{display:"flex",flexDirection:"column",flexGrow:1},a.map((function(e,t){return r.a.createElement(C.a,{flexGrow:1,flexShrink:0,flexBasis:0,display:"flex",key:"attepmt-row-".concat(t)},r.a.createElement(C.a,{flexGrow:2,flexShrink:0,flexBasis:0,display:"flex",justifyContent:"center",key:"position-".concat(t)},r.a.createElement(C.a,{alignSelf:"center",className:i.position},_e(Zt[t]))),e.map((function(e,n){return r.a.createElement(Te,{round:t,bonusPosition:!1,position:t,rowBonus:!1,score:u(t),success:e,key:"attempt-".concat(t,"-").concat(n),onClick:function(){return function(e,t){a[e][t]=!a[e][t],l(JSON.parse(JSON.stringify(a)))}(t,n)},onSwipe:function(){},staticBackground:!0})})))})),r.a.createElement(C.a,null,r.a.createElement(B.a,null,r.a.createElement(C.a,{flexGrow:1}),r.a.createElement(Q.a,{onClick:function(){c({title:"\xc4r du s\xe4ker?"}).then((function(){l(Ht())})).catch((function(){}))}},"Rensa"))),r.a.createElement(C.a,{flexGrow:1},r.a.createElement(Me,{score:a.reduce((function(e,t,a){return e+t.filter(Boolean).length*u(a)}),0)})))}var Qt=a(170),ea=new b,ta=Object(d.a)((function(e){return{wrapper:{height:"100vh"},appBar:{top:"auto",bottom:0},drawerPaper:{width:250},fab:{position:"absolute",bottom:e.spacing(9),right:e.spacing(2),zIndex:1},logo:{position:"absolute",right:0,width:150,marginRight:e.spacing(1)}}}));var aa=function(){var e=ta(),t=Object(x.g)(),a=r.a.useState(!1),l=Object(o.a)(a,2),c=l[0],i=l[1],m=r.a.useState(ea.getSettings().darkMode),d=Object(o.a)(m,2),f=d[0],p=d[1],h=r.a.useState(!1),v=Object(o.a)(h,2),b=v[0],y=v[1];Object(n.useEffect)((function(){Qt.a.initialize("UA-166285768-1")})),Object(n.useEffect)((function(){return t.listen((function(e){Qt.a.pageview(e.pathname)}))}),[t]);var k=function(){i(!1)},w=Object(rt.a)({palette:{type:f?"dark":"light"}});return r.a.createElement(lt.a,{theme:w},r.a.createElement(ct.a,null),r.a.createElement(Ke.a,null,r.a.createElement(C.a,{display:"flex",className:e.wrapper,flexDirection:"column"},r.a.createElement(O.a,{position:"fixed",className:e.appBar},r.a.createElement(B.a,null,r.a.createElement(T.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:function(){return i(!0)}},r.a.createElement(N.a,null)),r.a.createElement(x.b,{path:["/start","/games","/games","/settings","/venues","/stats"]},r.a.createElement(z.a,{className:e.fab,color:"secondary",onClick:function(){var e=ea.activeGame();if(e)return t.push("/play/".concat(e.id));y(!0)}},r.a.createElement(Y.a,null))))),r.a.createElement(oe,{open:b,onClose:function(e){if(y(!1),e){var a=ea.createGame(e);t.push("/play/".concat(a.id))}}}),r.a.createElement(G.a,{anchor:"left",open:c,disableBackdropTransition:!0,onClose:function(){return i(!1)},onOpen:function(){return i(!0)},classes:{paper:e.drawerPaper}},r.a.createElement(u.a,{button:!0,component:E.b,to:"/",onClick:k},r.a.createElement(j.a,null,r.a.createElement(L.a,null)),r.a.createElement(s.a,{primary:"Spela"})),r.a.createElement(g.a,null),r.a.createElement(u.a,{button:!0,component:E.b,to:"/games",onClick:k},r.a.createElement(j.a,null,r.a.createElement(I.a,null)),r.a.createElement(s.a,{primary:"Resultat"})),r.a.createElement(u.a,{button:!0,component:E.b,to:"/stats",onClick:k},r.a.createElement(j.a,null,r.a.createElement(Nt.a,null)),r.a.createElement(s.a,{primary:"Statistik"})),r.a.createElement(u.a,{button:!0,component:E.b,to:"/venues",onClick:k},r.a.createElement(j.a,null,r.a.createElement(K.a,null)),r.a.createElement(s.a,{primary:"Banor"})),r.a.createElement(g.a,null),r.a.createElement(u.a,{button:!0,component:E.b,to:"/settings",onClick:k},r.a.createElement(j.a,null,r.a.createElement(F.a,null)),r.a.createElement(s.a,{primary:"Inst\xe4llningar"}))),r.a.createElement(x.d,null,r.a.createElement(x.b,{exact:!0,path:"/"},r.a.createElement(x.a,{to:"/start"})),r.a.createElement(x.b,{exact:!0,path:"/start"},r.a.createElement(re,null)),r.a.createElement(x.b,{path:"/play/:id"},r.a.createElement(qe,null)),r.a.createElement(x.b,{path:"/play-virtual"},r.a.createElement($t,null)),r.a.createElement(x.b,{path:"/games/:id"},r.a.createElement(gt,null)),r.a.createElement(x.b,{path:"/games"},r.a.createElement(X,null)),r.a.createElement(x.b,{path:"/stats"},r.a.createElement(Xt,null)),r.a.createElement(x.b,{path:"/settings"},r.a.createElement(nt,{toggleDarkMode:p})),r.a.createElement(x.b,{path:"/venues/:id"},r.a.createElement(Tt,null)),r.a.createElement(x.b,{path:"/venues"},r.a.createElement(S,null))),r.a.createElement(B.a,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(484);c.a.render(r.a.createElement(E.a,{basename:"/"},r.a.createElement(aa,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[298,1,2]]]);
//# sourceMappingURL=main.0879d574.chunk.js.map