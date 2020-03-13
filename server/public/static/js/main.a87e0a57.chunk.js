(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,a){e.exports=a(76)},43:function(e,t,a){},48:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(35),c=a.n(s),l=a(2),i=a(3),o=a(5),u=a(4),h=a(6),m=a(7),p=a(15),d=(a(43),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"Header"},r.a.createElement(m.b,{to:"/"},r.a.createElement("h1",null,"SPartyTime")))}}]),t}(n.Component)),y=(a(48),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"Footer"},r.a.createElement("p",null,"Developed at Ironhack by"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/jcarlosmateo/"},"Jota")))}}]),t}(n.Component)),f=a(9),g=a(18),E=a.n(g),v=function e(){var t=this;Object(l.a)(this,e),this.loggedin=function(){return t.service.get("/currentUser").then((function(e){return e.data}))},this.logout=function(){return t.service.get("/logout").then((function(e){return e.data}))},this.service=E.a.create({baseURL:"https://spartytime.herokuapp.com/api/auth",withCredentials:!0})},b=function e(){var t=this;Object(l.a)(this,e),this.getAllParties=function(){return t.service.get("/all").then((function(e){return e.data}))},this.getPartyDetails=function(e){return t.service.get("/"+e).then((function(e){return e.data}))},this.createParty=function(e){return t.service.post("/create",e).then((function(e){return e.data}))},this.updateParty=function(e,a){return t.service.put("/"+e,a).then((function(e){return e.data}))},this.deleteParty=function(e){return t.service.delete("/"+e).then((function(e){return e.data}))},this.service=E.a.create({baseURL:"https://spartytime.herokuapp.com/api/parties",withCredentials:!0})},S=(a(65),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).logout=function(){a.authService.logout().then((function(){a.setState({loggedInUser:null})}))},a.getUserParties=function(){a.partyService.getAllParties().then((function(e){a.setState({userParties:e.filter((function(e){return e.user===a.state.loggedInUser._id}))},a.updateAccessToken())}))},a.state={loggedInUser:a.props.user,userParties:[]},a.partyService=new b,a.authService=new v,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"updateAccessToken",value:function(){var e=Object(f.a)({},this.state);e.userParties=e.userParties.map((function(t){return t.userToken=e.loggedInUser.token})),this.setState(e)}},{key:"componentDidMount",value:function(){this.getUserParties()}},{key:"render",value:function(){var e=this;return console.log(this.state),this.state.loggedInUser?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"Logout",onClick:function(){return e.logout()}},"Log Out x"),r.a.createElement("section",{className:"Home"},r.a.createElement("div",{className:"dashboard"},r.a.createElement("div",{className:"userInfo"},r.a.createElement("h2",null," ","Welcome, ",this.state.loggedInUser.spotifyID.toUpperCase()),r.a.createElement("img",{src:this.state.loggedInUser.photo,alt:this.state.loggedInUser.username})),0!==this.state.userParties.length?r.a.createElement("p",{className:"parties"},"Check your Sparties (Total: ",this.state.userParties.length,")"):r.a.createElement("p",{className:"parties"},"You haven't active Sparties"),r.a.createElement("div",{className:"partiesSlider"},this.state.userParties.map((function(e,t){return r.a.createElement(m.b,{to:"/party/"+e._id,key:t},r.a.createElement("div",{className:"partyIcon"},r.a.createElement("img",{src:e.image_url,alt:e.name}),r.a.createElement("h5",null,e.name)))})))),r.a.createElement("div",{className:"newSparty"},r.a.createElement(m.b,{to:"/party/name"},r.a.createElement("button",null,r.a.createElement("h2",null,"New Sparty")))))):r.a.createElement(p.a,{to:"/"})}}]),t}(n.Component)),N=(a(66),a(17)),k=a(14),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a.service=new v,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"Login"},r.a.createElement("div",{className:"LoginBox"},r.a.createElement("a",{className:"spotifyButton",href:"https://spartytime.herokuapp.com/api/auth/spotify"},r.a.createElement(N.a,{className:"icon",icon:k.b,size:"2x"}),"Log In with Spotify"),r.a.createElement("p",null,"* Remember, you will need a Spotify Premium account to use SPartyTime")))}}]),t}(n.Component),O=(a(69),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"CreateName"},""===this.props.party.name?r.a.createElement("h2",null,"New Sparty"):r.a.createElement("h2",null,this.props.party.name),r.a.createElement("label",{htmlFor:"name"},"Enter a name for your Sparty!"),r.a.createElement("input",{onChange:function(t){return e.props.updateName(t)},type:"text",placeholder:"New Sparty"}),r.a.createElement(m.b,{to:"/party/event"},r.a.createElement("button",{className:"nextButton",onClick:function(){return e.props.handleCreatePlaylist()}},r.a.createElement("h5",null,"Next"))))}}]),t}(n.Component)),P=(a(70),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"CreateEvent"},this.props.party?r.a.createElement("h2",null,this.props.party.name):r.a.createElement("h2",null,"New Party"),r.a.createElement("label",{htmlFor:"googleAddress"},"Main address:"),r.a.createElement("input",{type:"search",onChange:function(t){return e.props.updateAddress(t)}}),r.a.createElement("label",{htmlFor:"addressDeatails"},"Address Details:"),r.a.createElement("input",{onChange:function(t){return e.props.updateAddressDetails(t)},type:"text",placeholder:"Portal, floor, door,..."}),r.a.createElement("button",{className:"nextButton",onClick:function(){return e.props.handleCreateParty()}},r.a.createElement("h5",null,"Create")))}}]),t}(n.Component)),C=(a(71),function e(){var t=this;Object(l.a)(this,e),this.createPlaylist=function(e,a,n){var r={Authorization:"Bearer "+n};return t.service.post("users/".concat(a,"/playlists"),e,{headers:r}).then((function(e){return e.data}))},this.searchSongs=function(e,a){var n={Authorization:"Bearer "+a};return t.service.get("search?q=".concat(e,"&type=track&limit=20"),{headers:n}).then((function(e){return e.data}))},this.addSongToPlaylist=function(e,a,n,r){console.log(e),console.log(a);var s={Authorization:"Bearer "+n},c={uris:[e]};t.service.post("users/".concat(r,"/playlists/").concat(a,"/tracks"),c,{headers:s}).then((function(e){return e.data}))},this.addSongToQueue=function(e,a){var n={Authorization:"Bearer "+a};t.service.post("me/player/queue?uri=".concat(e),{body:{}},{headers:n}).then((function(e){return e.data}))},this.service=E.a.create({baseURL:"https://api.spotify.com/v1/"})}),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={loggedInUser:a.props.user,partyID:window.location.href.split("party/")[1],foundedSongs:[],addedSong:!1},a.partyService=new b,a.spotifyService=new C,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"getPartyDetails",value:function(){var e=this;this.partyService.getPartyDetails(this.state.partyID).then((function(t){return e.setState(Object(f.a)({},e.state,{party:t}))}))}},{key:"searchSongs",value:function(e){var t=this;if(""===e.target.value)return this.setState(Object(f.a)({},this.state,{foundedSongs:[]}));this.spotifyService.searchSongs(e.target.value,this.state.party.userToken).then((function(e){return t.setState(Object(f.a)({},t.state,{foundedSongs:e.tracks.items,addedSong:!1}))}))}},{key:"addSong",value:function(e){this.spotifyService.addSongToQueue(e,this.state.party.userToken),this.spotifyService.addSongToPlaylist(e,this.state.party.playlist,this.state.party.userToken,this.state.party.user);var t=Object(f.a)({},this.state);t.addedSong=!0,t.foundedSongs=[],this.setState(t),document.querySelector("input").value=""}},{key:"componentDidMount",value:function(){this.getPartyDetails()}},{key:"render",value:function(){var e=this;return console.log(this.state),this.state.party&&this.state.loggedInUser?this.state.loggedInUser._id===this.state.party.user?r.a.createElement("section",{className:"Party"},r.a.createElement("nav",null,r.a.createElement("button",{className:"no-bg"},r.a.createElement(m.b,{to:"/home"},"\u21e6 Back")),r.a.createElement("button",{className:"no-bg"},r.a.createElement(m.b,{to:"/party/"+this.state.party._id+"/edit"},"Edit")),r.a.createElement("button",{className:"no-bg delete",onClick:function(){return e.props.deleteParty(e.state.partyID)}},"Delete")),r.a.createElement("p",{className:"spartyName"},r.a.createElement("h1",null,"Sparty"),r.a.createElement("h2",null,this.state.party.name)),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com/maps/search/"+this.state.party.address,className:"spartyDetails"},"Google Maps:"," ",r.a.createElement("span",null,this.state.party.address,". ",this.state.party.addressDetails,".")),r.a.createElement("div",{className:"buttonContainer"},r.a.createElement("a",{className:"spotifyButton",href:"spotify:playlist:"+this.state.party.playlist},r.a.createElement(N.a,{className:"icon",icon:k.b,size:"1x"}),"Check the playlist on Spotify"),r.a.createElement("div",{className:"socialShare"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"whatsapp",href:"https://web.whatsapp.com/send?text=Click to Sparty! "+encodeURI(window.location.href)},r.a.createElement(N.a,{className:"icon",icon:k.c,size:"1x"}),"Share via Whatsapp"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"facebook",href:"https://www.facebook.com/sharer/sharer.php?u="+window.location.href},r.a.createElement(N.a,{className:"icon",icon:k.a,size:"1x"}),"Share via facebook"))),r.a.createElement("div",{className:"searchContainer"},r.a.createElement("label",{htmlFor:"search"},"Add next song:"),r.a.createElement("input",{className:"spotiSearch",type:"search",placeholder:"Search...",onChange:function(t){return e.searchSongs(t)}}),r.a.createElement("p",null,"Matchs: ",r.a.createElement("span",null,this.state.foundedSongs.length))),r.a.createElement("div",{className:"searchResults"},this.state.addedSong&&r.a.createElement("div",{className:"addedSong"},r.a.createElement("h2",null,"Song added!")),this.state.foundedSongs.map((function(t,a){return r.a.createElement("div",{className:"resultCard",key:a},r.a.createElement("div",{className:"songInfo"},r.a.createElement("img",{src:t.album.images[1].url,alt:t.album.name}),r.a.createElement("div",{className:"songName"},r.a.createElement("h3",null,t.name),r.a.createElement("h4",null,t.artists[0].name))),r.a.createElement("div",{className:"actions"},r.a.createElement("audio",{controls:!0},r.a.createElement("source",{src:t.preview_url})),r.a.createElement("button",{onClick:function(){return e.addSong(t.uri)}},"Add to Sparty")))})))):void 0:this.state.party?r.a.createElement("section",{className:"Party"},r.a.createElement("nav",null,r.a.createElement("button",{className:"no-bg"},r.a.createElement(m.b,{to:"/login"},"Login"))),r.a.createElement("p",{className:"spartyName"},r.a.createElement("h1",null,"Sparty"),r.a.createElement("h2",null,this.state.party.name)),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com/maps/search/"+this.state.party.address,className:"spartyDetails"},"Google Maps:"," ",r.a.createElement("span",null,this.state.party.address,". ",this.state.party.addressDetails,".")),r.a.createElement("div",{className:"buttonContainer"},r.a.createElement("a",{className:"spotifyButton",href:"spotify:playlist:"+this.state.party.playlist},r.a.createElement(N.a,{className:"icon",icon:k.b,size:"1x"}),"Check the playlist on Spotify")),r.a.createElement("div",{className:"searchContainer"},r.a.createElement("label",{htmlFor:"search"},"Add next song:"),r.a.createElement("input",{className:"spotiSearch",type:"search",placeholder:"Search...",onChange:function(t){return e.searchSongs(t)}}),r.a.createElement("p",null,"Matchs: ",r.a.createElement("span",null,this.state.foundedSongs.length))),r.a.createElement("div",{className:"searchResults"},this.state.addedSong&&r.a.createElement("div",{className:"addedSong"},r.a.createElement("h2",null,"Song added!")),this.state.foundedSongs.map((function(t,a){return r.a.createElement("div",{className:"resultCard",key:a},r.a.createElement("div",{className:"songInfo"},r.a.createElement("img",{src:t.album.images[1].url,alt:t.album.name}),r.a.createElement("div",{className:"songName"},r.a.createElement("h3",null,t.name),r.a.createElement("h4",null,t.artists[0].name))),r.a.createElement("div",{className:"actions"},r.a.createElement("audio",{controls:!0},r.a.createElement("source",{src:t.preview_url})),r.a.createElement("button",{onClick:function(){return e.addSong(t.uri)}},"Add to Sparty")))})))):r.a.createElement("h1",null,"Loading...")}}]),t}(n.Component),I=(a(72),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={loggedInUser:a.props.user,partyID:window.location.href.split("party/")[1].split("/edit")[0]},a.partyService=new b,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"getPartyDetails",value:function(){var e=this;this.partyService.getPartyDetails(this.state.partyID).then((function(t){return e.setState(Object(f.a)({},e.state,{party:t}))}))}},{key:"updateParty",value:function(e,t){var a=Object(f.a)({},this.state);a.party[t]=e.target.value,this.setState(a)}},{key:"saveChanges",value:function(){var e=this;this.partyService.updateParty(this.state.partyID,this.state.party).then((function(t){return e.props.history.push("/party/"+e.state.partyID)}))}},{key:"componentDidMount",value:function(){this.getPartyDetails()}},{key:"render",value:function(){var e=this;return console.log(this.state),this.state.party&&this.state.loggedInUser?this.state.loggedInUser._id===this.state.party.user?r.a.createElement("section",{className:"Edit"},r.a.createElement("nav",null,r.a.createElement("button",{className:"no-bg"},r.a.createElement(m.b,{to:"/party/"+this.state.partyID},"Cancel")),r.a.createElement("button",{className:"no-bg",onClick:function(){return e.props.deleteParty(e.state.partyID)}},"Delete")),r.a.createElement("div",{className:"form"},r.a.createElement("label",null,"Sparty"),r.a.createElement("input",{type:"text",placeholder:this.state.party.name,onChange:function(t){return e.updateParty(t,"name")}}),r.a.createElement("label",null,"Address"),r.a.createElement("input",{type:"text",placeholder:this.state.party.address,onChange:function(t){return e.updateParty(t,"address")}}),r.a.createElement("input",{type:"text",placeholder:this.state.party.addressDetails,onChange:function(t){return e.updateParty(t,"addressDetails")}}),r.a.createElement("button",null,r.a.createElement("h1",{onClick:function(){return e.saveChanges()}},"Save changes")))):void 0:r.a.createElement("h1",null,"Loading...")}}]),t}(n.Component)),D=(a(73),function(e){function t(e){var a,n,r;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={loggedInUser:a.props.user,party:{user:a.props.user._id,userToken:a.props.user.token,image_url:"../images/default".concat((n=1,r=4,Math.floor(Math.random()*(r-n+1)+n)),".jpg")},playlistDetails:{public:!1,collaborative:!0}},a.partyService=new b,a.spotifyService=new C,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"updateName",value:function(e){var t=Object(f.a)({},this.state);t.party.name=e.target.value,t.playlistDetails.name=e.target.value,t.playlistDetails.description=e.target.value+". Made with SpartyTime",this.setState(t)}},{key:"updateAddress",value:function(e){var t=Object(f.a)({},this.state);t.party.address=e.target.value,this.setState(t)}},{key:"updateAddressDetails",value:function(e){var t=Object(f.a)({},this.state);t.party.addressDetails=e.target.value,this.setState(t)}},{key:"createPlaylist",value:function(){var e=Object(f.a)({},this.state);this.spotifyService.createPlaylist(this.state.playlistDetails,this.state.loggedInUser.spotifyID,this.state.loggedInUser.token).then((function(t){e.party.playlist=t.id})),this.setState(e)}},{key:"handleCreateParty",value:function(){var e=this;this.partyService.createParty(this.state.party).then((function(t){return e.setState(Object(f.a)({},e.state,{party:t}),(function(){return e.props.history.push("/party/"+t._id)}))}))}},{key:"deleteParty",value:function(e){var t=this;this.partyService.deleteParty(e).then((function(e){return t.props.history.push("/home")}))}},{key:"render",value:function(){var e=this;return r.a.createElement(p.d,null,r.a.createElement(p.b,{extact:!0,path:"/party/name",render:function(){return r.a.createElement(O,{updateName:function(t){return e.updateName(t)},handleCreatePlaylist:function(){return e.createPlaylist()},party:e.state.party})}}),r.a.createElement(p.b,{extact:!0,path:"/party/event",render:function(){return r.a.createElement(P,{updateAddress:function(t){return e.updateAddress(t)},updateAddressDetails:function(t){return e.updateAddressDetails(t)},party:e.state.party,handleCreateParty:function(){return e.handleCreateParty()}})}}),r.a.createElement(p.b,{extact:!0,path:"/party/:id/edit",render:function(){return r.a.createElement(I,{user:e.state.loggedInUser,deleteParty:function(t){return e.deleteParty(t)},history:e.props.history})}}),r.a.createElement(p.b,{extact:!0,path:"/party/:id",render:function(){return r.a.createElement(w,{user:e.state.loggedInUser,deleteParty:function(t){return e.deleteParty(t)}})}}))}}]),t}(n.Component)),U=Object(p.g)(D),x=(a(74),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={loggedInUser:null},a.authservice=new v,a.fetchUser(),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"fetchUser",value:function(){var e=this;return this.authservice.loggedin().then((function(t){e.setState({loggedInUser:t})})).catch((function(t){e.setState({loggedInUser:!1})}))}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"Container"},r.a.createElement(d,null),r.a.createElement(p.d,null,r.a.createElement(p.b,{extact:!0,path:"/home",render:function(){return r.a.createElement(S,{user:e.state.loggedInUser})}}),r.a.createElement(p.b,{extact:!0,path:"/party",render:function(){return r.a.createElement(U,{user:e.state.loggedInUser,history:e.props.history})}}),r.a.createElement(p.b,{extact:!0,path:"/",render:function(){return r.a.createElement("section",{className:"Landing"},r.a.createElement(m.b,{to:"/home"},r.a.createElement("button",{className:"SpartyButton"},r.a.createElement("h2",null,"Let's Sparty!"))))}})),r.a.createElement(y,null))):r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"Container"},r.a.createElement(d,null),r.a.createElement(p.d,null,r.a.createElement(p.b,{extact:!0,path:"/login",render:function(){return r.a.createElement(j,null)}}),r.a.createElement(p.b,{extact:!0,path:"/party/:id",render:function(){return r.a.createElement(w,{user:e.state.loggedInUser})}}),r.a.createElement(p.b,{extact:!0,path:"/",render:function(){return r.a.createElement("section",{className:"Landing"},r.a.createElement(m.b,{to:"/login"},r.a.createElement("button",{className:"SpartyButton"},r.a.createElement("h2",null,"Let's Sparty!"))))}})),r.a.createElement(y,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(75);c.a.render(r.a.createElement(m.a,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.a87e0a57.chunk.js.map