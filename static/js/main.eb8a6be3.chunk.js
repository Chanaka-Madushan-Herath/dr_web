(this.webpackJsonpdr_web=this.webpackJsonpdr_web||[]).push([[0],{103:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},127:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(23),s=a.n(r),i=(a(89),a(90),a(58)),o=a(41),l=a(65),d=a(64),u=(a(91),a(81)),j=(a(96),a(97),a(98),u.a.initializeApp({apiKey:"AIzaSyDabzW_-vlymaOTqx_npOiHKZWY88Lgmkw",authDomain:"e-dr-6637d.firebaseapp.com",databaseURL:"https://e-dr-6637d-default-rtdb.firebaseio.com",projectId:"e-dr-6637d",storageBucket:"e-dr-6637d.appspot.com",messagingSenderId:"754784507400",appId:"1:754784507400:web:76e91aee4ea88d13c563bd",measurementId:"G-HLREL2JLGQ"})),A=a(22),b=(a(74),a(160)),h=a(3),O=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:"",fireErrors:""},e.login=function(t){t.preventDefault(),j.auth().signInWithEmailAndPassword(e.state.email,e.state.password).catch((function(t){e.setState({fireErrors:t.message})}))},e.handleChange=function(t){e.setState(Object(A.a)({},t.target.name,t.target.value))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.fireErrors?Object(h.jsxs)(b.a,{variant:"danger",children:[" ",this.state.fireErrors," "]}):null;return Object(h.jsxs)("div",{className:"container",children:[e,Object(h.jsxs)("form",{children:[Object(h.jsx)("input",{type:"text",className:"regField",placeholder:"Email",value:this.state.email,onChange:this.handleChange,name:"email"}),Object(h.jsx)("input",{className:"regField",placeholder:"Pasword",value:this.state.password,onChange:this.handleChange,name:"password",type:"password"}),Object(h.jsx)("input",{className:"submitBtn",type:"submit",onClick:this.login,value:"ENTER"})]})]})}}]),a}(n.Component),p=a(15),m=a(7),x=a(152),f="data:image/png;base64,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",g=function(){var e=Object(n.useState)({email:"",password:"",displayName:"",tp:"",fireErrors:"",image:null,progress:0}),t=Object(m.a)(e,2),a=t[0],c=t[1],r=function(e){c(Object(p.a)(Object(p.a)({},a),{},Object(A.a)({},e.target.name,e.target.value)))},s=a.image?URL.createObjectURL(a.image):f,i=a.fireErrors?Object(h.jsxs)(b.a,{variant:"danger",children:[" ",a.fireErrors," "]}):null;return Object(h.jsxs)("div",{className:"container",children:[i,Object(h.jsxs)("form",{children:[Object(h.jsx)(x.a,{src:s,alt:"profile",width:"150px",height:"150px",roundedCircle:!0}),Object(h.jsx)("input",{type:"file",onChange:function(e){c(Object(p.a)(Object(p.a)({},a),{},{image:e.target.files[0]}))}}),Object(h.jsx)("input",{type:"text",className:"regField",placeholder:"Your Name",value:a.displayName,onChange:r,name:"displayName"}),Object(h.jsx)("input",{type:"text",className:"regField",placeholder:"Your Address",value:a.address,onChange:r,name:"address"}),Object(h.jsx)("input",{type:"text",className:"regField",placeholder:"Your Phone Number",value:a.tp,onChange:r,name:"tp"}),Object(h.jsx)("input",{type:"text",className:"regField",placeholder:"Email",value:a.email,onChange:r,name:"email"}),Object(h.jsx)("input",{className:"regField",placeholder:"Pasword",value:a.password,onChange:r,name:"password",type:"password"}),Object(h.jsx)("input",{className:"submitBtn",type:"submit",onClick:function(e){e.preventDefault(),j.auth().createUserWithEmailAndPassword(a.email,a.password).then((function(e){var t=j.auth().currentUser,n=a.image;j.storage().ref("images/").child(t.uid).put(n).then().catch((function(e){c(Object(p.a)(Object(p.a)({},a),{},{fireErrors:e.message})),console.log("photo didnt save")})),t.updateProfile({displayName:a.displayName}).catch((function(e){c(Object(p.a)(Object(p.a)({},a),{},{fireErrors:e.message}))})),j.firestore().collection("users").doc(t.uid).set({Name:a.displayName,Email:a.email,Address:a.address,Tp:a.tp,Password:a.password})})).catch((function(e){c(Object(p.a)(Object(p.a)({},a),{},{fireErrors:e.message}))}))},value:"REGISTER"})]})]})},v=a(17),w=a.n(v),N=a(28),y=a(153),k=a.p+"static/media/Logo.5190756d.png",B=function(){return Object(h.jsx)("img",{src:k,width:"100px",alt:"Logo"})},E=a(159),C=a(157),I=a(155),D=(a(103),a(158)),S=a(24),T=function(){j.auth().signOut()};function U(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],r=a[1],s=j.auth().currentUser;return j.storage().ref("images/").child(s.uid).getDownloadURL().then((function(e){return r(e)})).catch((function(e){r(null)})),Object(h.jsx)("div",{children:Object(h.jsxs)(E.a,{className:"Navbar",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(h.jsxs)(E.a.Brand,{className:"logo",children:["  ",Object(h.jsx)(B,{})]}),Object(h.jsx)(E.a.Brand,{className:"tittle",children:Object(h.jsx)(y.a,{variant:"h2",className:"title",children:"E-DOC"})}),Object(h.jsx)(C.a.Link,{children:Object(h.jsx)(D.a,{title:"Profile",children:null==e.link?Object(h.jsxs)(S.b,{to:"/dr_web/Profile",children:[" ",Object(h.jsx)(x.a,{src:f,height:"50px",width:"50px",alt:"profile",roundedCircle:!0})]}):Object(h.jsx)(S.b,{to:"/dr_web/Profile",children:Object(h.jsx)(x.a,{src:c,height:"50px",width:"50px",alt:"profile",roundedCircle:!0})})})}),Object(h.jsx)(E.a.Toggle,{className:"buttons","aria-controls":"responsive-navbar-nav"}),Object(h.jsx)(E.a.Collapse,{id:"responsive-navbar-nav",children:Object(h.jsxs)(C.a,{children:[Object(h.jsx)(C.a.Link,{children:Object(h.jsx)(D.a,{title:"Home",children:Object(h.jsx)(S.b,{to:"/dr_web",refresh:"true",children:Object(h.jsx)(I.a,{variant:"secondary",children:"Home"})})})}),Object(h.jsx)(C.a.Link,{children:Object(h.jsx)(D.a,{title:"My Bookings",children:Object(h.jsx)(S.b,{to:"/dr_web/Bookings",children:Object(h.jsx)(I.a,{variant:"secondary",children:"My Bookings"})})})}),Object(h.jsx)(C.a.Link,{eventKey:2,children:Object(h.jsx)(D.a,{title:"Sign out",children:Object(h.jsx)(I.a,{variant:"danger",onClick:T,children:"Sign out"})})})]})})]})})}a(112),a(113),a(114);var Q=a(78),F=a.n(Q),M=(a(115),function(e){return Object(h.jsxs)("div",{className:"loader",children:[Object(h.jsx)("div",{children:Object(h.jsx)(F.a,{color:"#36D7B7",loading:e.load,size:50})}),Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Please Wait...!"})})]})}),L=a(40),R=a(35),Y="SELECT_BOOK",W="BOOK_DOCTOR",J=function(e){return{type:Y,payload:e}},G=function(e){return{type:W,payload:e}},P=a.p+"static/media/doctor.5bcc10de.png";var K=Object(L.b)(null,(function(e){return Object(R.b)({selectItem:J},e)}))((function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),i=Object(m.a)(s,2);i[0],i[1];Object(n.useEffect)((function(){r(!0),setTimeout((function(){r(!1)}),2e3)}),[]);return Object(h.jsx)("div",{children:c?Object(h.jsx)(M,{load:c}):Object(h.jsxs)("div",{className:"searchResult",children:[Object(h.jsxs)(I.a,{className:"btn",variant:"danger",onClick:function(){window.location.reload()},children:[" ",Object(h.jsx)("span",{"aria-hidden":"true",children:"\xd7"})]}),Object(h.jsx)(S.b,{to:"/dr_web/Create Appointment",children:e.Results.map((function(t){return Object(h.jsxs)("div",{className:"item",onClick:function(){return e.selectItem(t)},children:[Object(h.jsx)(x.a,{src:P,height:"50px",width:"50px"}),Object(h.jsxs)("div",{clasename:"details",children:[Object(h.jsxs)("div",{className:"doctorName",children:["Dr.",t.Name]}),Object(h.jsxs)("div",{className:"hospital",children:[" ",t.Hospital]})]}),Object(h.jsx)(I.a,{variant:"danger",children:" Chanel "})]})}))})]})})})),V=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(m.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)([]),d=Object(m.a)(l,2),u=d[0],A=d[1],b=Object(n.useState)([]),O=Object(m.a)(b,2),x=O[0],f=O[1],g=Object(n.useState)(!1),v=Object(m.a)(g,2),y=v[0],k=v[1],B=function(){var e=Object(N.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j.firestore().collection("doctors").orderBy("Specialization").get().then((function(e){var t=[];e.forEach((function(e){var a={Specialization:e.data().Specialization};t.push(a)})),f(t)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){B(),k(!0),setTimeout((function(){k(!1)}),2e3)}),[]),Object(h.jsx)("div",{children:y?Object(h.jsx)(M,{load:y}):Object(h.jsx)("div",{children:i?Object(h.jsx)("div",{children:Object(h.jsx)(K,{Results:u})}):Object(h.jsx)("div",{className:"search",children:Object(h.jsxs)("form",{children:[Object(h.jsxs)("label",{children:["Pick your doctor Specialization:",Object(h.jsxs)("select",{value:a,onChange:function(e){c(e.target.value.toLowerCase())},children:[Object(h.jsx)("option",{value:"",children:"Show all doctors"}),x.map((function(e){return Object(h.jsx)("option",{value:e.Specialization,children:e.Specialization})}))]})]}),Object(h.jsx)(S.b,{to:"/dr_web/SearchResults",children:Object(h.jsx)("input",{className:"submitBtn",type:"submit",onClick:function(e){j.firestore().collection("doctors").orderBy("Specialization").startAt(a).endAt(a+"\uf8ff").get().then((function(e){var t=[];e.forEach((function(e){var a=Object(p.a)({id:e.id},e.data());t.push(a)})),A(t)})),o(!0),e.preventDefault()},value:"Search"})})]})})})})},H=a(20),z=(a(122),function(){var e=j.auth().currentUser,t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)([]),i=Object(m.a)(s,2),o=i[0],l=i[1],d=function(){var t=Object(N.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:j.firestore().collection("users").doc(e.uid).collection("bookings").get().then((function(e){var t=[];e.forEach((function(e){var a=Object(p.a)({id:e.id},e.data());t.push(a)})),l(t)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){d(),r(!0),setTimeout((function(){r(!1)}),2e3)}),[]),Object(h.jsx)("div",{children:c?Object(h.jsx)(M,{load:c}):Object(h.jsx)("div",{className:"bookings",children:Object(h.jsxs)("table",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Reference Number"}),Object(h.jsx)("th",{children:"Doctor's Name"}),Object(h.jsx)("th",{children:"Date And Time"})]}),Object(h.jsx)("tbody",{children:o.map((function(e){return Object(h.jsx)("tr",{children:Object(h.jsx)("td",{children:e.Reservation_ID},e.id)})}))})]})})})}),Z=(a(123),function(){var e=j.auth().currentUser,t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),i=Object(m.a)(s,2),o=i[0],l=i[1],d=Object(n.useState)({Name:"",Email:"",Address:"",Tp:"",Password:"",fireErrors:""}),u=Object(m.a)(d,2),O=u[0],g=u[1],v=function(){var t=Object(N.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:j.firestore().collection("users").doc(e.uid).get().then((function(e){g(e.data())}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(N.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:j.storage().ref("images/").child(e.uid).getDownloadURL().then((function(e){return l(e)})).catch((function(e){l(null)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){v(),y(),r(!0),setTimeout((function(){r(!1)}),2e3)}),[]);var k=function(e){g(Object(p.a)(Object(p.a)({},O),{},Object(A.a)({},e.target.name,e.target.value)))},B=O.fireErrors?Object(h.jsxs)(b.a,{variant:"danger",children:[" ",O.fireErrors," "]}):null;return Object(h.jsx)("div",{children:c?Object(h.jsx)(M,{load:c}):Object(h.jsx)("div",{className:"profile",children:Object(h.jsxs)("form",{children:[B,null==o?Object(h.jsx)(x.a,{src:f,height:"250px",width:"250px",alt:"profile",roundedCircle:!0}):Object(h.jsx)(x.a,{src:o,height:"250px",width:"250px",alt:"profile",roundedCircle:!0}),Object(h.jsx)("input",{type:"text",className:"regField",placeholder:"Your Name",value:O.Name,onChange:k,name:"Name"}),Object(h.jsx)("input",{type:"text",className:"regField",placeholder:"Email",value:O.Email,onChange:k,name:"Email"}),Object(h.jsx)("input",{type:"text",className:"regField",placeholder:"Your Address",value:O.Address,onChange:k,name:"Address"}),Object(h.jsx)("input",{type:"text",className:"regField",placeholder:"Your Phone Number",value:O.Tp,onChange:k,name:"Tp"}),Object(h.jsx)(S.b,{to:"/dr_web",children:Object(h.jsx)("input",{className:"submitBtn",type:"submit",onClick:function(t){var a=j.firestore().collection("users");e.updateProfile({displayName:O.Name,address:O.Address,tp:O.Tp}),a.doc(e.uid).set({Name:O.Name,Email:O.Email,Address:O.Address,Tp:O.Tp,Password:O.Password}).catch((function(e){console.log(e.message)}))},value:"Save Changes"})})]})})})}),X=a(156),q=function(e){var t=Object(n.useState)(!0),a=Object(m.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){r(!1)}),2e3);return function(){clearTimeout(e)}}),[]),c?Object(h.jsx)("div",{"aria-live":"polite","aria-atomic":"true",style:{position:"relative",minHeight:"200px"},children:Object(h.jsx)("div",{style:{position:"absolute",top:10,right:20},children:Object(h.jsxs)(X.a,{variant:"filled",severity:"success",children:["Hi ",e.name,"!!"]})})}):null};a(124);var _=Object(L.b)((function(e){return{selectedItem:e.selectedItem}}),(function(e){return Object(R.b)({BookDoctor:G},e)}))((function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)([]),i=Object(m.a)(s,2),o=i[0],l=i[1],d=function(){var t=Object(N.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:j.firestore().collection("doctors").doc(e.selectedItem.id).collection("Times").get().then((function(e){var t=[];e.forEach((function(e){var a=Object(p.a)({id:e.id},e.data());t.push(a)})),l(t)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){d(),r(!0),setTimeout((function(){r(!1)}),2e3)}),[]),e.selectedItem?Object(h.jsx)("div",{children:c?Object(h.jsx)(M,{load:c}):Object(h.jsxs)("div",{className:"createAppointment",children:[Object(h.jsx)("img",{src:P,height:"200px",width:"200px"}),Object(h.jsxs)("h1",{children:["Dr.",e.selectedItem.Name]}),Object(h.jsxs)("h2",{children:["(",e.selectedItem.Specialization,")"]}),Object(h.jsx)("h2",{children:e.selectedItem.Hospital}),o.map((function(t){return Object(h.jsxs)(S.b,{to:"/dr_web/Book",children:[Object(h.jsxs)("div",{className:"item",onClick:function(){return e.BookDoctor(t)},children:[Object(h.jsx)("div",{children:new Date(1e3*t.Time.seconds).toLocaleDateString("en-US")},t.id),Object(h.jsx)("div",{children:new Date(1e3*t.Time.seconds).toLocaleTimeString("en-US")},t.id),Object(h.jsx)("div",{children:Object(h.jsx)(I.a,{variant:"danger",children:"Book"})})]})," "]})}))]})}):Object(h.jsx)("h2",{children:"Select a doctor ...."})}));a(125);var $=Object(L.b)((function(e){return{selectedItem:e.selectedItem,BookDoctor:e.BookDoctor}}))((function(e){var t=j.auth().currentUser,a=Object(n.useState)(!1),c=Object(m.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)({Name:"",Email:"",Address:"",Tp:""}),o=Object(m.a)(i,2),l=o[0],d=o[1],u=function(){var e=Object(N.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j.firestore().collection("users").doc(t.uid).get().then((function(e){d(e.data())}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(Object(n.useEffect)((function(){s(!0),setTimeout((function(){s(!1)}),2e3)}),[]),!e.selectedItem)return Object(h.jsx)("h2",{children:"Select a doctor ...."});var b=function(e){d(Object(p.a)(Object(p.a)({},l),{},Object(A.a)({},e.target.name,e.target.value)))},O=function(){var a=Object(N.a)(w.a.mark((function a(n){var c;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,j.firestore().collection("Reservations").doc();case 2:(c=a.sent).set({Name:l.Name,Email:l.Email,Address:l.Address,Tp:l.Tp,Doctor:e.selectedItem.Name,Specialization:e.selectedItem.Specialization,Hospital:e.selectedItem.Hospital,Time:e.BookDoctor.Time}),j.firestore().collection("users").doc(t.uid).collection("bookings").doc().set({Reservation_ID:c.id});case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(h.jsx)("div",{children:r?Object(h.jsx)(M,{load:r}):Object(h.jsxs)("div",{className:"BookSession",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:P,height:"200px",width:"200px"}),Object(h.jsxs)("h1",{children:["Dr.",e.selectedItem.Name]}),Object(h.jsxs)("h2",{children:["(",e.selectedItem.Specialization,")"]}),Object(h.jsx)("h2",{children:e.selectedItem.Hospital}),Object(h.jsxs)("h2",{children:[new Date(1e3*e.BookDoctor.Time.seconds).toLocaleDateString("en-US")," ",new Date(1e3*e.BookDoctor.Time.seconds).toLocaleTimeString("en-US")]})]}),Object(h.jsx)("div",{children:Object(h.jsxs)("form",{children:[Object(h.jsxs)("label",{children:["Appointment for:",Object(h.jsxs)("select",{onChange:function(e){"Myself"==e.target.value?u():d({Name:"",Email:"",Address:"",Tp:""})},children:[Object(h.jsx)("option",{value:"Other",children:"Other"}),Object(h.jsx)("option",{value:"Myself",children:"Myself"})]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Name "}),Object(h.jsx)("input",{type:"text",className:"regField",placeholder:"Your Name",value:l.Name,onChange:b,name:"Name"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Email"}),Object(h.jsx)("input",{type:"text",className:"regField",placeholder:"Email",value:l.Email,onChange:b,name:"Email"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Address "}),Object(h.jsx)("input",{type:"text",className:"regField",placeholder:"Your Address",value:l.Address,onChange:b,name:"Address"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:" Phone Number "}),Object(h.jsx)("input",{type:"text",className:"regField",placeholder:"Your Phone Number",value:l.Tp,onChange:b,name:"Tp"})]}),Object(h.jsx)(S.b,{to:"/dr_web",children:Object(h.jsx)("input",{className:"submitBtn",type:"submit",onClick:O,value:"BOOK"})})]})})]})})})),ee=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(m.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)({Name:"",Email:"",Address:"",Tp:"",Password:""}),d=Object(m.a)(l,2),u=d[0],A=d[1],b=j.auth().currentUser,O=function(){var e=Object(N.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j.firestore().collection("users").doc(b.uid).get().then((function(e){A(e.data())}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(N.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j.storage().ref("images/").child(b.uid).getDownloadURL().then((function(e){return o(e)})).catch((function(e){o(null)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){O(),p(),c(!0),setTimeout((function(){c(!1)}),2e3)}),[]),console.log(i),console.log(u.Name),Object(h.jsx)("div",{className:"home",children:a?Object(h.jsx)(M,{load:a}):Object(h.jsxs)(S.a,{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(U,{link:i}),Object(h.jsx)(q,{name:u.Name})]}),Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)(H.a,{path:"/dr_web",exact:!0,render:function(){return Object(h.jsx)(V,{})}}),Object(h.jsx)(H.a,{path:"/dr_web/Profile",exact:!0,render:function(){return Object(h.jsx)(Z,{})}}),Object(h.jsx)(H.a,{path:"/dr_web/Bookings",exact:!0,render:function(){return Object(h.jsx)(z,{})}}),Object(h.jsx)(H.a,{path:"/dr_web/Create Appointment",exact:!0,render:function(){return Object(h.jsx)(_,{})}}),Object(h.jsx)(H.a,{path:"/dr_web/Book",exact:!0,render:function(){return Object(h.jsx)($,{})}})]})]})})},te=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={user:1,loading:!0},e.formSwitcher=function(t){e.setState({formSwitcher:"register"===t})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;j.auth().onAuthStateChanged((function(t){t?e.setState({user:t}):e.setState({user:null})}))}},{key:"render",value:function(){var e=this,t=this.state.formSwitcher?Object(h.jsx)(g,{}):Object(h.jsx)(O,{});return 1===this.state.user?Object(h.jsx)("div",{children:Object(h.jsx)(M,{})}):Object(h.jsx)("div",{className:"main",children:this.state.user?Object(h.jsx)(ee,{}):Object(h.jsxs)("div",{className:"mainBlock",children:[t,this.state.formSwitcher?Object(h.jsxs)("span",{className:"underLine",children:["Have an account already? ",Object(h.jsx)("button",{onClick:function(){return e.formSwitcher(e.state.formSwitcher?"login":"register")},className:"linkBtn",children:"Sign in here"})]}):Object(h.jsxs)("span",{className:"underLine",children:["Not registered? ",Object(h.jsx)("button",{onClick:function(){return e.formSwitcher(e.state.formSwitcher?"login":"register")},className:"linkBtn",children:"Create an account"})]})]})})}}]),a}(n.Component);var ae=function(){return Object(h.jsx)(te,{})},ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,162)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},ce=(a(126),a(80)),re=Object(R.c)({selectedItem:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return t.payload}return e},BookDoctor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return t.payload}return e}}),se=[ce.a],ie=Object(R.e)(re,{},Object(R.d)(R.a.apply(void 0,se)));s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(L.a,{store:ie,children:Object(h.jsx)(ae,{})})}),document.getElementById("root")),ne()},74:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){}},[[127,1,2]]]);
//# sourceMappingURL=main.eb8a6be3.chunk.js.map