(this["webpackJsonpspotify-backup-new"]=this["webpackJsonpspotify-backup-new"]||[]).push([[0],{95:function(e,t,n){"use strict";n.r(t);var a,r,c,i,o,s,u,l,p,d,b=n(0),f=n.n(b),j=n(23),O=n.n(j),h=n(59),x=n(6),m=n(49),g=n.n(m),y={clientId:"2aefdc08c981420ea73a1f7e8486e821",redirectUri:"http://localhost:3000/callback"},k=n(20),v=n(11),w=n(12),S=w.b.div(a||(a=Object(v.a)(["\n  //text-align: center;\n  line-height: 1.5;\n  margin-bottom: 30px;\n"]))),T=n(22),C=n(2),_=Object(b.createContext)(),E=function(e){var t=Object(b.useState)(!1),n=Object(T.a)(t,2),a=n[0],r=n[1];return Object(C.jsx)(_.Provider,{value:{isAuthenticated:a,setIsAuthenticated:r},children:e.children})},A=n(111),I=Object(w.b)(A.a)(r||(r=Object(v.a)(["\n  &.green {\n    background-color: #26a328;\n  },\n  &.purple {\n    background-color: #4e0b3e;\n  },\n  && {\n    color: #fff;\n    margin-left: 8px;\n    margin-right: 8px;\n    font-size: 0.8rem;\n  }\n"]))),B=n(16),P=n(110),z=function(e){return Object(C.jsx)(P.a,Object(B.a)(Object(B.a)({},e),{},{children:e.children}))},L=n.p+"static/media/trail.3ec63967.svg",R=n.p+"static/media/background.0e94f6ff.svg",F=Object(w.a)(c||(c=Object(v.a)(["\n  * {\n    box-sizing: border-box;\n  }\n\n  :root {\n    font-size: 20px;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    width: 100%;\n    font-family: 'Montserrat', sans-serif;\n    ",";\n    background-position: top;\n    background-repeat: no-repeat;\n  }\n"])),(function(e){return e.setBackground?"background-image: url(".concat(L,"), url(").concat(R,")"):""})),N=w.b.div(i||(i=Object(v.a)(["\n  text-align: center;\n"]))),U=function(){var e=Object(k.c)((function(e){return e.accessToken})),t=Object(b.useContext)(_).setIsAuthenticated,n=Object(k.b)(),a=Object(b.useMemo)((function(){return new BroadcastChannel("access-token")}),[]);Object(b.useEffect)((function(){return a.onmessage=function(e){return n({type:"SET_ACCESS_TOKEN",accessToken:e.data})},a.close}),[a,n]),Object(b.useEffect)((function(){""!==e&&t(!0)}),[t,e]);return Object(C.jsxs)(N,{children:[Object(C.jsxs)(S,{children:["Backup your Spotify playlists in",Object(C.jsx)(I,{label:"JSON",className:"green"}),"format or restore from file."]}),Object(C.jsx)(z,{variant:"contained",color:"primary",onClick:function(){var e={client_id:y.clientId,redirect_uri:y.redirectUri,scope:"playlist-read playlist-read-private playlist-modify-public playlist-modify-private user-library-read user-library-modify",response_type:"token",show_dialog:"true"},t=g.a.stringify(e);window.open("https://accounts.spotify.com/authorize?".concat(t),"Spotify","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=480, height=900 left=1000 top=0")},children:"Login to Spotify"})]})},M=n.p+"static/media/line.437ec098.svg",J=w.b.div(o||(o=Object(v.a)(["\n  border: 1px solid #adadad8c;\n  width: 500px;\n  height: 600px;\n  margin: 90px auto 0 auto;\n  padding: 15px;\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.4);\n  box-shadow: 7px 7px 19px -5px rgba(0, 0, 0, 0.42);\n"]))),D=w.b.div(s||(s=Object(v.a)(["\n  margin: auto;\n  font-size: 3rem;\n  border-bottom: 3px solid;\n  padding: 5px 20px 0 20px;\n  border-image: url(",") 1;\n  text-align: center;\n  max-width: 800px;\n"])),M),G=n(24),H=n.n(G),K=n(32),X="SET_ACCESS_TOKEN",Y="API_FETCH_START",V="API_FETCH_STOP",q="GET_API_SUCCESS",Q="GET_PLAYLISTS_SUCCESS",W="GET_PLAYLIST_SUCCESS",Z=n(29),$=n.n(Z),ee=$.a.create({baseURL:"https://api.spotify.com/v1"}),te=function(e){return{type:q,payload:e}},ne=w.b.div(u||(u=Object(v.a)(["\n  padding: 8px 0;\n"]))),ae=w.b.div(l||(l=Object(v.a)(["\n  text-align: center;\n  font-size: 1.6rem;\n  font-weight: bold;\n"]))),re=w.b.div(p||(p=Object(v.a)(["\n  display: flex;\n  justify-content: space-around;\n  margin-top: 20px;\n"]))),ce=w.b.hr(d||(d=Object(v.a)(["\n  border: 1px solid #f9f9f9;\n"]))),ie=function(){return Object(C.jsx)(ce,{})},oe=n(58),se=function(){var e=Object(k.c)((function(e){return e.accessToken})),t=Object(k.c)((function(e){return e.api.accountInformation})),n=Object(k.c)((function(e){return e.api.apiResponse})),a=Object(k.b)(),r=Object(b.useRef)();Object(b.useEffect)((function(){a(function(e){return function(){var t=Object(K.a)(H.a.mark((function t(n){var a,r;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:Y}),t.prev=1,t.next=4,ee.get("/me/playlists",{headers:{Authorization:"Bearer ".concat(e)}});case 4:return a=t.sent,n({type:Q,payload:a}),t.next=8,ee.get("/me",{headers:{Authorization:"Bearer ".concat(e)}});case 8:r=t.sent,n(te(r)),n({type:V}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}()}(e))}),[e,a]);var c=function(e,t){for(var n=[],a=0;a<e.length;a+=t){var r=e.slice(a,a+t);n.push(r)}return n},i=function(){var a=Object(K.a)(H.a.mark((function a(){var r,c,i,o,s,u,l,p,d,b,f,j;return H.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:c={},i={playlists:[],followers:[]},o=0,s=Object.entries(n.playlists.data.items);case 3:if(!(o<s.length)){a.next=18;break}if(u=Object(T.a)(s[o],2),(l=u[1]).owner.display_name!==t.username){a.next=14;break}return a.next=8,$.a.get(l.href,{headers:{Authorization:"Bearer ".concat(e)}});case 8:for(r=a.sent,c={name:r.data.name,id:r.data.id,tracks:[]},p=0,d=Object.entries(r.data.tracks.items);p<d.length;p++)b=Object(T.a)(d[p],2),f=b[1],c.tracks.push({uri:f.track.uri});i.playlists.push(c),a.next=15;break;case 14:i.followers.push({id:l.id});case 15:o++,a.next=3;break;case 18:j=new Blob([JSON.stringify(i)],{type:"application/json"}),Object(oe.saveAs)(j,"SpotifyBackup.json");case 20:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),o=function(){var n=Object(K.a)(H.a.mark((function n(a){var r,i,o,s,u,l,p,d,b,f;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,new Response(a.target.files[0]).json();case 2:for(r=n.sent,o=0,s=Object.entries(r.playlists);o<s.length;o++)u=Object(T.a)(s[o],2),l=u[1],i=c(l.tracks.map((function(e){return e.uri})),100),ee("/users/".concat(t.userId,"/playlists"),{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},data:{name:l.name}}).then((function(t){i.forEach((function(n){ee("/playlists/".concat(t.data.id,"/tracks"),{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},data:{uris:n}})}))}));for(p=0,d=Object.entries(r.followers);p<d.length;p++)b=Object(T.a)(d[p],2),f=b[1],ee("playlists/".concat(f.id,"/followers"),{method:"PUT",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(C.jsxs)(b.Fragment,{children:[Object(C.jsx)(ae,{children:t.username}),Object(C.jsx)(ie,{}),Object(C.jsxs)(ne,{children:["Number of playlists: ",Object(C.jsx)(I,{label:t.numberOfPlaylists,className:"purple"})]}),Object(C.jsxs)(ne,{children:["Total number of tracks: ",Object(C.jsx)(I,{label:t.numberOfTracks,className:"purple"})]}),Object(C.jsx)(ie,{}),Object(C.jsxs)(re,{children:[Object(C.jsx)("input",{type:"file",id:"file",ref:r,onChange:function(e){return o(e)},style:{display:"none"}}),Object(C.jsx)(z,{variant:"contained",color:"primary",onClick:function(){r.current.click()},children:"Restore"}),Object(C.jsx)(z,{variant:"contained",color:"secondary",onClick:function(){return i()},children:"Backup"})]})]})},ue=function(){var e=Object(b.useContext)(_).isAuthenticated,t=Object(C.jsx)(U,{});return e&&(t=Object(C.jsx)(se,{})),Object(C.jsxs)(b.Fragment,{children:[Object(C.jsx)(D,{children:"Spotify backup & restore"}),Object(C.jsx)(J,{children:t})]})},le=function(e){var t=Object(b.useMemo)((function(){return new BroadcastChannel("access-token")}),[]);return Object(b.useEffect)((function(){t.postMessage(e.location.hash.slice(e.location.hash.indexOf("=")+1)),window.close()}),[t,e.location.hash]),Object(C.jsx)(b.Fragment,{})},pe=function(){return Object(C.jsx)(b.Fragment,{children:Object(C.jsxs)(h.a,{children:[Object(C.jsx)(F,{setBackground:"/"===window.location.pathname}),Object(C.jsx)(x.a,{path:"/callback",component:le}),Object(C.jsx)(x.a,{exact:!0,path:"/",component:ue})]})})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,112)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},be=n(26),fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return t.accessToken}return e},je={isLoading:!1,accountInformation:{userId:"",username:"",numberOfPlaylists:null,numberOfTracks:null},apiResponse:{playlists:null}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(B.a)(Object(B.a)({},e),{},{isLoading:!0});case V:return Object(B.a)(Object(B.a)({},e),{},{isLoading:!1});case q:for(var n=0,a=0,r=Object.entries(e.apiResponse.playlists.data.items);a<r.length;a++){var c=Object(T.a)(r[a],2),i=c[1];n+=i.tracks.total}return Object(B.a)(Object(B.a)({},e),{},{accountInformation:{username:t.payload.data.display_name,userId:t.payload.data.id,numberOfPlaylists:e.apiResponse.playlists.data.total,numberOfTracks:n}});case Q:return Object(B.a)(Object(B.a)({},e),{},{apiResponse:{playlists:t.payload}});case W:return t.payload;default:return e}},he=n(60),xe=Object(be.c)({accessToken:fe,api:Oe}),me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.d,ge=Object(be.e)(xe,me(Object(be.a)((function(e){return function(e){return function(t){return e(t)}}}),he.a)));O.a.render(Object(C.jsx)(k.a,{store:ge,children:Object(C.jsx)(f.a.StrictMode,{children:Object(C.jsx)(E,{children:Object(C.jsx)(pe,{})})})}),document.getElementById("root")),de()}},[[95,1,2]]]);
//# sourceMappingURL=main.7307fe0f.chunk.js.map