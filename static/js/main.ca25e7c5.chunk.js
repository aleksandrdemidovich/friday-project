(this["webpackJsonpfriday-project"]=this["webpackJsonpfriday-project"]||[]).push([[0],{101:function(e,t,a){e.exports={appError:"AppError_appError__2KEJ3"}},106:function(e,t,a){e.exports={default:"SuperButton_default__2tZIj","focus-visible":"SuperButton_focus-visible__9h7-y",red:"SuperButton_red__HzRdF","button-24":"SuperButton_button-24__1nia5"}},107:function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__1MDne",spanClassName:"SuperCheckbox_spanClassName__12xAq"}},108:function(e,t,a){e.exports={input:"InputMail_input__2edZE",InputMail:"InputMail_InputMail__209C0"}},109:function(e,t,a){e.exports={btn:"BtnShowCards_btn__3877p"}},110:function(e,t,a){e.exports={subtitle:"Subtitle_subtitle__1shbW"}},127:function(e,t,a){e.exports={preloader:"Preloader_preloader__3qIYi"}},132:function(e,t,a){e.exports={title:"Title_title__W18_g"}},134:function(e,t,a){e.exports={btn:"BtnActions_btn__2zb24"}},156:function(e,t,a){},157:function(e,t,a){},17:function(e,t,a){e.exports={packsList:"PacksList_packsList__1EFSF",contentLeft:"PacksList_contentLeft__3jmeT",titleForButtons:"PacksList_titleForButtons__3paX6",titleForSlider:"PacksList_titleForSlider__pkUmf",sliderWrap:"PacksList_sliderWrap__3M6K3",btnWrap:"PacksList_btnWrap__cNOzX",contentRight:"PacksList_contentRight__1wj06",contentRightTop:"PacksList_contentRightTop__1rTYx",btnBlue:"PacksList_btnBlue__12QYF",search:"PacksList_search__3BJjr",table:"PacksList_table__37cZm",tableHeader:"PacksList_tableHeader__3kx4W",tr:"PacksList_tr__1EygD",td:"PacksList_td__2knhV",th:"PacksList_th__1z1g0",btnBox:"PacksList_btnBox__1HM0u",contentRightBottom:"PacksList_contentRightBottom__3BdWv",pagination:"PacksList_pagination__1QD9r",choiceCard:"PacksList_choiceCard__2PvCC"}},188:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(44),s=a.n(c),i=(a(156),a(157),a(22)),o=a(24),l=a.n(o),d=a(46),u=a(15),j=a(127),b=a.n(j),p=a(249),O=a(0),h=function(){return Object(O.jsx)("div",{className:b.a.preloader,children:Object(O.jsx)(p.a,{})})},m=a(132),x=a.n(m);function f(){return Object(O.jsx)("div",{className:x.a.title,children:Object(O.jsx)("h2",{children:"It-incubator"})})}var _,g=a(101),v=a.n(g),k=a(241),P=function(e){return Object(O.jsx)("div",{className:v.a.appError,children:Object(O.jsx)(k.a,{className:v.a.errorRed,severity:"error",children:e.error})})},C=a(19),N=a.n(C),w=a(31),S=a(9),y=a(85),E=a.n(y),T=E.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),A={me:function(){var e=Object(w.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.post("auth/me");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),login:function(){var e=Object(w.a)(N.a.mark((function e(t,a,r){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.post("auth/login",{email:t,password:a,rememberMe:r});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),logout:function(){var e=Object(w.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.delete("auth/me");case 2:return t=e.sent,console.log("LOGOUT: ",t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),passRecovery:function(e,t){return T.post("auth/forgot",{email:e,message:t,from:"front-admin <demid.kbr@mail.ru>"})},inputNewPass:function(e,t){return T.post("auth/set-new-password",{password:e,resetPasswordToken:t})},signUp:function(e,t){return T.post("auth/register",{email:e,password:t})}},L={status:"idle",error:"",isInitialized:!1},I=function(e){return{type:"SET-APP-STATUS",payload:e}},F=function(e){return{type:"SET-APP-ERROR",payload:e}};function R(e,t){E.a.isAxiosError(e)&&e.response?t(F({error:e.response.data.error})):t(F({error:"Some error occurred, check your connection."})),t(I({status:"failed"}))}!function(e){e.SET_USER_DATA="SET_USER_DATA",e.LOGOUT="LOGOUT",e.SET_EMAIL="SET_EMAIL"}(_||(_={}));var B={user:null,isLoggedIn:!1,email:""},D=function(e){return{type:_.SET_USER_DATA,payload:e}},W=function(){return{type:_.LOGOUT}},U=function(e){return{type:_.SET_EMAIL,email:e}};var M=function(){var e=Object(u.c)((function(e){return e.app.error})),t=Object(u.c)((function(e){return e.app.status})),a=Object(u.b)(),r=Object(d.c)({initialValues:{email:"",password:"",confirmPassword:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<8&&(t.password="Length password should be 8 symbols"):t.password="Required",e.confirmPassword?e.confirmPassword.length<8?t.confirmPassword="Length password should be 8 symbols":e.password!==e.confirmPassword&&a(F({error:"Please make sure you passwords match"})):t.confirmPassword="Required",t},onSubmit:function(e){var t,n;a((t=e.email,n=e.password,function(e){e(I({status:"loading"})),A.signUp(t,n).then((function(t){console.log(t.data),e(I({status:"succeeded"}))})).catch((function(t){var a=t.response?t.response.data.error:t.message+", more details in the console";e(F({error:a})),e(I({status:"failed"}))}))})),r.resetForm()}});return"succeeded"===t?Object(O.jsx)(i.a,{to:pt.LOGIN}):Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:l.a.signUp,children:["loading"===t&&Object(O.jsx)(h,{}),Object(O.jsx)(f,{}),Object(O.jsx)("h3",{className:l.a.subtitle,children:"Sign Up"}),Object(O.jsxs)("form",{className:l.a.FormBox,onSubmit:r.handleSubmit,children:[Object(O.jsxs)("div",{className:l.a.registrWrap,children:[Object(O.jsx)("label",{className:l.a.label,children:"Email"}),Object(O.jsx)("input",{className:l.a.field,id:"email",name:"email",type:"email",onChange:r.handleChange,value:r.values.email,placeholder:"j&johnson@gmail.com\r ",onBlur:r.handleBlur})]}),r.touched.email&&r.errors.email&&Object(O.jsx)("div",{style:{color:"red"},children:r.errors.email}),Object(O.jsxs)("div",{className:l.a.registrWrap,children:[Object(O.jsx)("label",{className:l.a.label,children:"Password"}),Object(O.jsx)("div",{className:l.a.inputWrap,children:Object(O.jsx)("input",{className:l.a.field,id:"password",name:"password",type:"password",onChange:r.handleChange,value:r.values.password,placeholder:"*********",onBlur:r.handleBlur})})]}),r.touched.password&&r.errors.password&&Object(O.jsx)("div",{style:{color:"red"},children:r.errors.password}),Object(O.jsxs)("div",{className:l.a.registrWrap,children:[Object(O.jsx)("label",{className:l.a.label,children:"Confirm password"}),Object(O.jsx)("div",{className:l.a.inputWrap,children:Object(O.jsx)("input",{className:l.a.field,id:"confirmPassword",name:"confirmPassword",type:"password",onChange:r.handleChange,value:r.values.confirmPassword,placeholder:"*********",onBlur:r.handleBlur})})]}),Object(O.jsxs)("div",{className:l.a.btnWrap,children:[Object(O.jsx)("button",{className:l.a.btnLeft,type:"button",onClick:r.handleReset,children:"Cancel"}),Object(O.jsx)("button",{className:l.a.btnRight,type:"submit",disabled:"loading"===t,children:"Sign Up"})]}),null!==e&&Object(O.jsx)(P,{error:e})]})]})})};var G=function(){var e=Object(u.c)((function(e){return e.auth.user})),t=Object(u.c)((function(e){return e.auth.isLoggedIn})),a=Object(u.c)((function(e){return e.app.status})),r=Object(u.b)();return t?Object(O.jsxs)("div",{children:["loading"===a&&Object(O.jsx)(h,{}),Object(O.jsx)("div",{children:null!==e?Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:e.avatar,style:{width:"250px",height:"250px"},alt:"avatar"}),Object(O.jsx)("p",{}),"Name: ",e.name,Object(O.jsx)("p",{}),"E-Mail: ",e.email,Object(O.jsx)("p",{})]}):"No data"}),Object(O.jsx)("button",{onClick:function(){r(function(){var e=Object(w.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(F({error:""})),t(I({status:"loading"})),e.prev=2,e.next=5,A.logout();case 5:return a=e.sent,t(W()),t(I({status:"idle"})),e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(2);case 13:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}())},disabled:!t,children:"Logout"})]}):Object(O.jsx)(i.a,{to:pt.LOGIN})},H=a(20),K=a(72),Z=a.n(K);var z=function(){return Object(O.jsx)("div",{className:Z.a.wrap,children:Object(O.jsxs)("div",{className:Z.a.notfound,children:[Object(O.jsx)("div",{className:Z.a.notfound404,children:Object(O.jsx)("h1",{children:"404"})}),Object(O.jsx)("h2",{children:"Oops! This Page Could Not Be Found"}),Object(O.jsx)("p",{children:"Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable"}),Object(O.jsx)(H.b,{className:Z.a.navLink,to:pt.PROFILE,children:"Go To Homepage"})]})})},q=a(42),J=a.n(q),Y=a(243);var V=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.app.status})),a=Object(u.c)((function(e){return e.app.error})),r=Object(d.c)({initialValues:{email:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(t){var a,r;e((a=t.email,r="<div style={{'backgroundColor': 'lime', 'padding': '15px'}}>Password recovery link:<a href='http://localhost:3000/friday-project#/set-new-password/$token$'> link</a></div>",function(){var e=Object(w.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(F({error:""})),t(I({status:"loading"})),e.next=5,A.passRecovery(a,r);case 5:t(I({status:"succeeded"})),t(U(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),R(e.t0,t);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))}});return"succeeded"===t?Object(O.jsx)(i.a,{to:pt.CHECK_EMAIL}):Object(O.jsxs)("div",{className:J.a.forgotPassword,children:[Object(O.jsx)(f,{}),Object(O.jsx)("h3",{className:J.a.subtitle,children:"Forgot your password?"}),"loading"===t&&Object(O.jsx)(p.a,{}),Object(O.jsxs)("form",{className:J.a.formBox,onSubmit:r.handleSubmit,children:[Object(O.jsx)("div",{className:J.a.inputWrap,children:Object(O.jsx)("input",{className:J.a.field,id:"email",name:"email",type:"email",disabled:"loading"===t,onChange:r.handleChange,value:r.values.email,placeholder:"Email",onBlur:r.handleBlur})}),r.touched.email&&r.errors.email&&Object(O.jsx)("div",{style:{color:"red"},children:r.errors.email}),a&&Object(O.jsx)("div",{style:{color:"red"},children:a}),Object(O.jsx)("p",{className:J.a.textLight,children:"Enter your email address and we will send you further instructions"}),Object(O.jsx)("button",{className:J.a.btnBlue,type:"submit",disabled:"loading"===t,children:"Send Instructions"})]}),Object(O.jsxs)("div",{className:J.a.boxLink,children:[Object(O.jsx)("p",{className:J.a.textLight,children:"Did you remember your password?"}),Object(O.jsx)(H.b,{className:J.a.linkBlue,to:pt.LOGIN,children:"Try logging in"})]}),Object(O.jsx)(Y.a,{open:!!a.length,autoHideDuration:3e3,style:{position:"absolute",bottom:10,left:10},children:Object(O.jsx)(k.a,{severity:"error",children:a})})]})},Q=a(57),X=a.n(Q);var $=function(){var e=Object(i.g)().token,t=Object(u.b)(),a=Object(u.c)((function(e){return e.app.status})),r=Object(u.c)((function(e){return e.app.error})),n=Object(d.c)({initialValues:{password:""},validate:function(e){var t={};return e.password.length<3&&(t.password="Min length 7 symbols"),t},onSubmit:function(a){var r,n;t((r=a.password,n=e,function(){var e=Object(w.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(F({error:""})),t(I({status:"loading"})),e.next=5,A.inputNewPass(r,n);case 5:t(I({status:"succeeded"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),R(e.t0,t);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()))}});return Object(O.jsxs)("div",{className:X.a.newPassword,children:[Object(O.jsx)(f,{}),Object(O.jsx)("h3",{className:X.a.subtitle,children:"Create new password"}),"loading"===a&&Object(O.jsx)("p",{style:{color:"green",margin:0},children:"Loading..."}),Object(O.jsxs)("form",{className:X.a.FormBox,onSubmit:n.handleSubmit,children:[Object(O.jsx)("div",{className:X.a.inputWrap,children:Object(O.jsx)("input",{className:X.a.field,id:"password",name:"password",type:"password",autoComplete:"off",disabled:"loading"===a,onChange:n.handleChange,value:n.values.password,placeholder:"Password",onBlur:n.handleBlur})}),n.touched.password&&n.errors.password&&Object(O.jsx)("div",{style:{color:"red"},children:n.errors.password}),r&&Object(O.jsx)("div",{style:{color:"red"},children:r}),Object(O.jsx)("p",{className:X.a.textLight,children:"Create new password and we will send you further instructions to email"}),Object(O.jsx)("button",{className:X.a.btnBlue,type:"submit",disabled:"loading"===a,children:"Create new password"})]})]})},ee=a(55),te=a(106),ae=a.n(te),re=function(e){var t=e.red,a=e.className,r=Object(ee.a)(e,["red","className"]),n="".concat(t?ae.a.red:ae.a.default," ").concat(a);return Object(O.jsx)("button",Object(S.a)({className:n},r))},ne=a(107),ce=a.n(ne),se=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,r=e.className,n=(e.spanClassName,e.children),c=Object(ee.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(ce.a.checkbox," ").concat(r||"");return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",Object(S.a)({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked),t&&t(e)},className:s},c)),n&&Object(O.jsx)("span",{className:ce.a.spanClassName,children:n})]})},ie=a(58),oe=a.n(ie),le=function(e){e.type;var t=e.onChange,a=e.onChangeText,r=e.onKeyPress,n=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(ee.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(oe.a.error," ").concat(i||""),d="".concat(oe.a.input," ").concat(c?oe.a.errorInput:oe.a.superInput," ").concat(s);return Object(O.jsxs)("div",{className:oe.a.inputWrap,children:[Object(O.jsxs)("label",{htmlFor:"name",children:[Object(O.jsx)("input",Object(S.a)({type:"text",autoComplete:"off",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),n&&"Enter"===e.key&&n()},className:d,name:"name",id:"name"},o)),Object(O.jsx)("span",{className:""===o.value?oe.a.placeHolder:oe.a.hidePlaceHolder,children:"Type here"}),Object(O.jsx)("span",{children:"test n ew branch"})]}),c&&Object(O.jsx)("span",{className:l,children:c})]})};var de=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Test Page"}),Object(O.jsx)(le,{}),Object(O.jsx)(re,{children:"Test"}),Object(O.jsx)(se,{}),Object(O.jsx)(P,{error:"Error123"})]})};var ue=function(){return Object(O.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(O.jsx)(H.b,{to:pt.TEST,children:"Test Page"}),Object(O.jsx)(H.b,{to:pt.SIGN_UP,children:"Sign Up Page"}),Object(O.jsx)(H.b,{to:pt.LOGIN,children:"Login Page"}),Object(O.jsx)(H.b,{to:pt.PROFILE,children:"Profile"}),Object(O.jsx)(H.b,{to:pt.NEW_PASSWORD,children:"New Password Page"}),Object(O.jsx)(H.b,{to:pt.FORGOT_PASSWORD,children:"Forgot Password Page"}),Object(O.jsx)(H.b,{to:pt.PACKS_LIST,children:"Pack List Page"}),Object(O.jsx)(H.b,{to:pt.ERROR_404,children:"404 Error Page"})]})},je=a(14),be=a(43),pe=a.n(be),Oe=a(237),he=a(253),me=a(245),xe=a(252),fe=a(254),_e=a(251),ge=a(255),ve=a(242),ke=a(108),Pe=a.n(ke),Ce=a(234),Ne=a(235),we=function(e){var t=e.handleSubmit,a=e.getFieldProps,r=e.error,c=Object(u.c)((function(e){return e.app.status})),s=n.a.useState(!1),i=Object(je.a)(s,2),o=i[0],l=i[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:pe.a.login,children:[Object(O.jsx)(f,{}),Object(O.jsx)("h3",{className:pe.a.subtitle,children:"Sign In"}),Object(O.jsxs)(d.a,{className:pe.a.formBox,onSubmit:t,children:[Object(O.jsx)("div",{className:pe.a.registrWrap,children:Object(O.jsx)(Oe.a,Object(S.a)({id:"email",label:"Email",type:"email",variant:"standard",className:Pe.a.input},a("email")))}),Object(O.jsx)("p",{}),Object(O.jsx)("div",{className:pe.a.registrWrap,children:Object(O.jsxs)(he.a,{variant:"standard",children:[Object(O.jsx)(me.a,{htmlFor:"standard-adornment-password",children:"Password"}),Object(O.jsx)(xe.a,Object(S.a)(Object(S.a)({id:"standard-adornment-password",type:o?"text":"password",className:Pe.a.input},a("password")),{},{endAdornment:Object(O.jsx)(fe.a,{position:"end",children:Object(O.jsx)(_e.a,{"aria-label":"toggle password visibility",onClick:function(){l(!o)},children:o?Object(O.jsx)(Ce.a,{}):Object(O.jsx)(Ne.a,{})})})}))]})}),Object(O.jsx)(ge.a,{id:"rememberMe",control:Object(O.jsx)(ve.a,Object(S.a)({},a("rememberMe"))),label:"Remember me"}),Object(O.jsx)("p",{}),Object(O.jsx)(H.b,{className:pe.a.linkTransparent,to:pt.FORGOT_PASSWORD,children:"Forgot Password"}),Object(O.jsx)("button",{className:pe.a.btnBlue,type:"submit",disabled:"loading"===c,children:"Login"}),Object(O.jsxs)("div",{className:pe.a.linkWrap,children:[Object(O.jsx)("p",{className:pe.a.textLight,children:"Don\u2019t have an account?"}),Object(O.jsx)(H.b,{className:pe.a.linkBlue,to:pt.SIGN_UP,children:"Sign up"})]})]}),null!==r&&Object(O.jsx)(P,{error:r})]})})};var Se=function(){var e=Object(u.c)((function(e){return e.auth})).isLoggedIn,t=Object(u.c)((function(e){return e.app.status})),a=Object(u.c)((function(e){return e.app.error})),r=Object(u.b)();return e?Object(O.jsx)(i.a,{to:pt.PROFILE}):Object(O.jsxs)(O.Fragment,{children:["loading"===t&&Object(O.jsx)(h,{}),Object(O.jsx)(d.b,{initialValues:{email:"darya.gameza1@gmail.com",password:"gameza1986",rememberMe:!1},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email format"):t.email="This field is required!",e.password?e.password.length<8&&(t.password="Password must be more than 7 characters"):t.password="This field is required!",t},onSubmit:function(e){var t=e.email,a=e.password,n=e.rememberMe;r(function(e,t,a){return function(){var r=Object(w.a)(N.a.mark((function r(n){var c;return N.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n(F({error:""})),n(I({status:"loading"})),r.prev=2,r.next=5,A.login(e,t,a);case 5:c=r.sent,n(D(c)),n(I({status:"idle"})),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(2),R(r.t0,n);case 13:return r.prev=13,r.finish(13);case 15:case"end":return r.stop()}}),r,null,[[2,10,13,15]])})));return function(e){return r.apply(this,arguments)}}()}(t,a,n)),console.log(t,a,n)},children:function(e){return Object(O.jsx)(we,Object(S.a)(Object(S.a)({},e),{},{error:a}))}})]})},ye=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(Se,{})})},Ee=a(73),Te=a.n(Ee),Ae=a.p+"static/media/letter.005fbbd1.svg";var Le=function(){var e=Object(u.c)((function(e){return e.auth.email}));return Object(O.jsxs)("div",{className:Te.a.checkEmail,children:[Object(O.jsx)(f,{}),Object(O.jsx)("img",{className:Te.a.letterImg,src:Ae,alt:"latter"}),Object(O.jsx)("h3",{className:Te.a.subtitle,children:"Check Email"}),Object(O.jsxs)("p",{className:Te.a.textLight,children:["We've sent an Email with instructions to ",e]})]})},Ie=a(17),Fe=a.n(Ie),Re=function(e){return T.get("cards/pack",{params:e})},Be=function(e){return T.post("cards/pack",{cardsPack:e})},De=function(e){return T.delete("cards/pack?id=".concat(e))},We=function(e){return T.put("cards/pack",{cardsPack:e})},Ue={currentCardPacks:{cardPacks:[],page:1,pageCount:10,cardPacksTotalCount:0,minCardsCount:0,min:0,maxCardsCount:100,max:100,packName:"",sortPacks:null},currentCards:{cards:[],cardsTotalCount:0,maxGrade:0,minGrade:0,packUserId:"",page:1,pageCount:4,token:"",tokenDeathTime:0,sortCards:null},currentPackName:"",currentCardsPackId:"",user_id:null,newCardsPack:{name:"",path:"",grade:null,shots:null,rating:null,deckCover:"",private:!1,type:""}},Me=function(e){return{type:"SET-CARD-PACKS",payload:{cardPacks:e}}},Ge=function(e){return{type:"SET-USER-ID",payload:e}},He=function(){return function(){var e=Object(w.a)(N.a.mark((function e(t,a){var r,n,c,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a().cardPacks.currentCardPacks,r.cardPacks,n=Object(ee.a)(r,["cardPacks"]),c=a().cardPacks.user_id,e.prev=2,t(I({status:"loading"})),e.next=6,Re(Object(S.a)(Object(S.a)({},n),{},{user_id:c}));case 6:s=e.sent,t(F({error:""})),t(Me(s.data)),t(I({status:"succeeded"})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),R(e.t0,t);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,a){return e.apply(this,arguments)}}()},Ke=function(e){var t=new Date(e),a=t.getDate(),r=t.getMonth()+1,n=a<10?"0".concat(a):a,c=r<10?"0".concat(r):r;return"".concat(n,".").concat(c,".").concat(t.getFullYear())},Ze=a(244),ze=a(239),qe=a(256),Je=a(236),Ye=a(257),Ve=a(258),Qe=a(259),Xe=a(248),$e=a(134),et=a.n($e);function tt(e){return Object(O.jsx)("button",{className:et.a.btn,style:e.style,onClick:e.onClick,children:e.name})}var at=function(e){var t=Object(u.b)(),a=function(){e.setOpenAlertDialogForDeletePack(!1)};return Object(O.jsxs)("div",{children:[Object(O.jsx)(tt,{name:"Delete",onClick:function(){e.setOpenAlertDialogForDeletePack(!0)},style:{color:"#FFFFFF",background:"#F1453D"}}),Object(O.jsxs)(qe.a,{open:e.open,onClose:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(O.jsx)(Je.a,{id:"alert-dialog-title",children:"Delete Pack?"}),Object(O.jsx)(Ye.a,{children:Object(O.jsxs)(Ve.a,{id:"alert-dialog-description",children:["Do you really want to remove ",Object(O.jsxs)("strong",{children:["Pack - ",e.packName]}),"? All cards will be excluded from this course"]})}),Object(O.jsxs)(Qe.a,{children:[Object(O.jsx)(Xe.a,{onClick:a,children:"Cancel"}),Object(O.jsx)(Xe.a,{color:"error",onClick:function(){var a;t((a=e.packId,function(){var e=Object(w.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(I({status:"loading"})),e.next=4,De(a);case 4:t(I({status:"succeeded"})),t(He()),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),e.setOpenAlertDialogForDeletePack(!1)},autoFocus:!0,children:"Delete"})]})]})]})};var rt=function(e){var t=Object(r.useState)(""),a=Object(je.a)(t,2),n=a[0],c=a[1],s=Object(u.b)(),i=function(){e.setOpenAlertDialogForEditPack(!1)};return Object(O.jsxs)("div",{children:[Object(O.jsx)(tt,{name:"Edit",onClick:function(){e.setOpenAlertDialogForEditPack(!0)},style:{color:"#21268F",background:"#D7D8EF"}}),Object(O.jsxs)(qe.a,{open:e.open,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(O.jsx)(Je.a,{id:"alert-dialog-title",children:"Change Pack name?"}),Object(O.jsx)(Ye.a,{style:{width:"500px"},children:Object(O.jsx)(Ve.a,{id:"alert-dialog-description",children:Object(O.jsx)(Oe.a,{id:"outlined-basic",onChange:function(e){c(e.currentTarget.value)},fullWidth:!0,label:"New Pack name",variant:"standard"})})}),Object(O.jsxs)(Qe.a,{children:[Object(O.jsx)(Xe.a,{color:"error",onClick:i,children:"Cancel"}),Object(O.jsx)(Xe.a,{onClick:function(){var t;s((t={_id:e.packId,name:n},function(){var e=Object(w.a)(N.a.mark((function e(a){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(I({status:"loading"})),e.next=4,We(t);case 4:a(I({status:"succeeded"})),a(He()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),R(e.t0,a);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),e.setOpenAlertDialogForEditPack(!1)},autoFocus:!0,children:"Edit"})]})]})]})},nt=a(135),ct=a.n(nt);var st=function(e){var t=Object(r.useState)(""),a=Object(je.a)(t,2),n=a[0],c=a[1],s=Object(u.b)(),i=function(){e.setOpenAlertDialogForNewPack(!1)};return Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{className:Fe.a.btnBlue,onClick:function(){e.setOpenAlertDialogForNewPack(!0)},children:"Add new pack"}),Object(O.jsxs)(qe.a,{open:e.open,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(O.jsxs)(Je.a,{id:"alert-dialog-title",children:["Add new pack?",Object(O.jsx)(_e.a,{onClick:i,style:{float:"right"},children:Object(O.jsx)(ct.a,{})})]}),Object(O.jsx)(Ye.a,{style:{width:"500px"},children:Object(O.jsx)(Ve.a,{id:"alert-dialog-description",children:Object(O.jsx)(Oe.a,{id:"outlined-basic",onChange:function(e){c(e.currentTarget.value)},fullWidth:!0,label:"Name pack",variant:"standard"})})}),Object(O.jsxs)(Qe.a,{children:[Object(O.jsx)(Xe.a,{color:"error",onClick:i,children:"Cancel"}),Object(O.jsx)(Xe.a,{onClick:function(){var t;s((t=n,function(){var e=Object(w.a)(N.a.mark((function e(a){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(I({status:"loading"})),e.next=4,Be({name:t});case 4:a(I({status:"succeeded"})),a(He()),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),e.setOpenAlertDialogForNewPack(!1)},autoFocus:!0,children:"Save"})]})]})]})},it=a(109),ot=a.n(it);function lt(e){return Object(O.jsx)("div",{className:ot.a.btnShowCards,children:Object(O.jsx)("button",{className:ot.a.btn,style:e.style,onClick:e.onClick,children:e.name})})}var dt=a(110),ut=a.n(dt);function jt(e){return Object(O.jsx)("div",{className:ut.a.subtitleWrap,children:Object(O.jsx)("h3",{className:ut.a.subtitle,children:e.subtitle})})}var bt=function(){var e=Object(u.c)((function(e){return e.auth.isLoggedIn})),t=Object(u.c)((function(e){return e.cardPacks.currentCardPacks.cardPacks})),a=Object(u.c)((function(e){return e.cardPacks.currentCardPacks.page})),c=Object(u.c)((function(e){var t;return null===(t=e.auth.user)||void 0===t?void 0:t._id})),s=Object(u.c)((function(e){return e.cardPacks.user_id})),o=Object(u.c)((function(e){return e.app.status})),l=Object(u.c)((function(e){return e.cardPacks.currentCardPacks.minCardsCount})),d=Object(u.c)((function(e){return e.cardPacks.currentCardPacks.maxCardsCount})),j=Object(u.c)((function(e){return e.cardPacks.currentCardPacks.packName})),b=Object(u.c)((function(e){return e.cardPacks.currentCardPacks.page})),h=Object(u.c)((function(e){return e.cardPacks.currentCardPacks.pageCount})),m=Object(u.c)((function(e){return e.cardPacks.currentCardPacks.cardPacksTotalCount})),x=n.a.useState(!1),f=Object(je.a)(x,2),_=f[0],g=f[1],v=n.a.useState(!1),k=Object(je.a)(v,2),P=k[0],C=k[1],N=n.a.useState(!1),w=Object(je.a)(N,2),S=w[0],y=w[1],E=n.a.useState(""),T=Object(je.a)(E,2),A=T[0],L=T[1],I=n.a.useState([l,d]),F=Object(je.a)(I,2),R=F[0],B=F[1],D=Object(u.b)();if(Object(r.useEffect)((function(){D(He())}),[s,j,l,d,b,h]),Object(r.useEffect)((function(){var e=setTimeout((function(){D({type:"SET-SEARCH-PACKS-NAME",payload:{packName:A}})}),1e3);return function(){clearTimeout(e)}}),[A]),Object(r.useEffect)((function(){var e=setTimeout((function(){D({type:"SET-MIN-MAX-CARDS-COUNT",payload:{range:R}}),D(He())}),2e3);return function(){clearTimeout(e)}}),[R]),!e)return Object(O.jsx)(i.a,{to:pt.LOGIN});var W={color:"#21268F",background:"#D7D8EF"};return Object(O.jsxs)("div",{className:Fe.a.packsList,children:[Object(O.jsxs)("div",{className:Fe.a.contentLeft,children:[Object(O.jsx)("h3",{className:Fe.a.titleForButtons,children:"Show pack cards"}),Object(O.jsxs)("div",{className:Fe.a.btnWrap,children:[Object(O.jsx)(lt,{name:"My",onClick:function(){D(Ge({user_id:c}))},style:{color:"#2D2E46",background:"#FFFFFF"}}),Object(O.jsx)(lt,{name:"All",onClick:function(){D(Ge({user_id:""}))},style:{color:"#FFFFFF",background:"#9A91C8"}})]}),Object(O.jsx)("h3",{className:Fe.a.titleForSlider,children:"Number of cards"}),Object(O.jsx)("div",{className:Fe.a.sliderWrap,children:Object(O.jsx)(Ze.a,{className:Fe.a.slider,value:R,onChange:function(e,t){B(t)},valueLabelDisplay:"on"})})]}),Object(O.jsxs)("div",{className:Fe.a.contentRight,children:[Object(O.jsx)(jt,{subtitle:"Packs list"}),Object(O.jsxs)("div",{className:Fe.a.contentRightTop,children:[Object(O.jsx)("input",{className:Fe.a.search,type:"text",placeholder:"Search...",value:A,onChange:function(e){L(e.currentTarget.value)}}),Object(O.jsx)(st,{open:S,setOpenAlertDialogForNewPack:y})]}),"loading"===o?Object(O.jsx)(p.a,{style:{position:"absolute",right:"50%",top:"300px"}}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("table",{className:Fe.a.table,children:[Object(O.jsx)("thead",{className:Fe.a.tableHeader,children:Object(O.jsxs)("tr",{className:Fe.a.tr,children:[Object(O.jsx)("th",{className:Fe.a.th,children:"Name"}),Object(O.jsx)("th",{className:Fe.a.th,children:"Cards"}),Object(O.jsx)("th",{className:Fe.a.th,children:"Last updated"}),Object(O.jsx)("th",{className:Fe.a.th,children:"Created by"}),Object(O.jsx)("th",{className:Fe.a.th,children:"Actions"})]})}),Object(O.jsx)("tbody",{children:t.map((function(e){return Object(O.jsxs)("tr",{className:Fe.a.tr,children:[Object(O.jsx)("td",{className:Fe.a.td,children:e.name}),Object(O.jsx)("td",{className:Fe.a.td,children:e.cardsCount}),Object(O.jsx)("td",{className:Fe.a.td,children:Ke(e.updated)}),Object(O.jsx)("td",{className:Fe.a.td,children:e.user_name}),Object(O.jsx)("td",{className:Fe.a.td,children:Object(O.jsxs)("div",{className:Fe.a.btnBox,children:[c===e.user_id&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(at,{packName:e.name,packId:e._id,open:_,setOpenAlertDialogForDeletePack:g},e._id),Object(O.jsx)(rt,{packName:e.name,open:P,setOpenAlertDialogForEditPack:C,packId:e._id})]}),Object(O.jsx)(tt,{name:"Learn",style:W,onClick:function(){}})]})})]},e._id)}))})]}),Object(O.jsxs)("div",{className:Fe.a.contentRightBottom,children:[Object(O.jsx)(ze.a,{className:Fe.a.pagination,count:Math.ceil(m/h),color:"primary",page:a,onChange:function(e,t){D({type:"SET-PACKS-PAGE",payload:{page:t}})},shape:"rounded"}),Object(O.jsxs)("div",{className:Fe.a.choiceCard,children:[Object(O.jsx)("span",{children:"Show"}),Object(O.jsxs)("select",{value:h,onChange:function(e){return function(e){D({type:"SET-PACKS-PAGE-COUNT",payload:{pageCount:+e}})}(e.currentTarget.value)},children:[Object(O.jsx)("option",{value:"5",children:"5"}),Object(O.jsx)("option",{value:"10",children:"10"}),Object(O.jsx)("option",{value:"15",children:"15"}),Object(O.jsx)("option",{value:"20",children:"20"}),Object(O.jsx)("option",{value:"25",children:"25"})]}),Object(O.jsx)("span",{children:"Cards per Page"})]})]})]})]})]})},pt={LOGIN:"/login",SIGN_UP:"/signup",PROFILE:"/profile",ERROR_404:"/error404",FORGOT_PASSWORD:"/forgotpassword",NEW_PASSWORD:"/set-new-password/:token",CHECK_EMAIL:"/checkemail",TEST:"/test",PACKS_LIST:"/packs-list"};var Ot=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(ue,{}),Object(O.jsxs)(i.d,{children:[Object(O.jsx)(i.b,{path:"/",exact:!0,render:function(){return Object(O.jsx)(i.a,{to:pt.PROFILE})}}),Object(O.jsx)(i.b,{path:pt.LOGIN,render:function(){return Object(O.jsx)(ye,{})}}),Object(O.jsx)(i.b,{path:pt.SIGN_UP,render:function(){return Object(O.jsx)(M,{})}}),Object(O.jsx)(i.b,{path:pt.PROFILE,render:function(){return Object(O.jsx)(G,{})}}),Object(O.jsx)(i.b,{path:pt.FORGOT_PASSWORD,render:function(){return Object(O.jsx)(V,{})}}),Object(O.jsx)(i.b,{path:pt.NEW_PASSWORD,render:function(){return Object(O.jsx)($,{})}}),Object(O.jsx)(i.b,{path:pt.TEST,render:function(){return Object(O.jsx)(de,{})}}),Object(O.jsx)(i.b,{path:pt.CHECK_EMAIL,render:function(){return Object(O.jsx)(Le,{})}}),Object(O.jsx)(i.b,{path:pt.PACKS_LIST,render:function(){return Object(O.jsx)(bt,{})}}),Object(O.jsx)(i.b,{render:function(){return Object(O.jsx)(z,{})}})]})]})},ht=a(90),mt=a.n(ht);function xt(e){var t=e.isActive?"".concat(mt.a.headerBtn," ").concat(mt.a.active," "):"".concat(mt.a.headerBtn);return Object(O.jsxs)("button",{className:t,children:[Object(O.jsx)("img",{src:e.img,alt:""}),e.name]})}var ft=a(74),_t=a.n(ft),gt=a.p+"static/media/pack-list.5e469654.svg",vt=a.p+"static/media/profile.36eee9e3.svg";function kt(){return Object(O.jsx)("div",{className:_t.a.headerMain,children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:_t.a.wrapper,children:[Object(O.jsx)("h1",{className:_t.a.title,children:"It-incubator"}),Object(O.jsxs)("div",{className:_t.a.btnWrap,children:[Object(O.jsx)(xt,{isActive:!1,name:"Packs list",img:gt}),Object(O.jsx)(xt,{isActive:!0,name:"Profile",img:vt})]})]})})})}var Pt=function(){var e=Object(u.c)((function(e){return e.app.isInitialized})),t=Object(u.c)((function(e){return e.auth.isLoggedIn})),a=Object(u.b)();return Object(r.useEffect)((function(){t||a(function(){var e=Object(w.a)(N.a.mark((function e(t){var a,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(F({error:""})),t(I({status:"loading"})),e.prev=2,e.next=5,A.me();case 5:a=e.sent,t(D(a)),t(I({status:"idle"})),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),r=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",t(F({error:r})),t(I({status:"failed"}));case 15:return e.prev=15,t({type:"SET-APP-IS-INITIALIZED",payload:{isInitialized:!0}}),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[2,10,15,18]])})));return function(t){return e.apply(this,arguments)}}())}),[a]),e?Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)(kt,{}),Object(O.jsx)(H.a,{children:Object(O.jsx)(Ot,{})})]}):Object(O.jsx)(h,{})},Ct=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,260)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))},Nt=a(91),wt=a(136),St=Object(Nt.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.SET_USER_DATA:return Object(S.a)(Object(S.a)({},e),{},{user:t.payload,isLoggedIn:!0});case _.LOGOUT:return Object(S.a)(Object(S.a)({},e),{},{isLoggedIn:!1,user:null});case _.SET_EMAIL:return Object(S.a)(Object(S.a)({},e),{},{email:t.email});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-APP-STATUS":return Object(S.a)(Object(S.a)({},e),{},{status:t.payload.status});case"SET-APP-ERROR":return Object(S.a)(Object(S.a)({},e),{},{error:t.payload.error});case"SET-APP-IS-INITIALIZED":return Object(S.a)(Object(S.a)({},e),{},{isInitialized:t.payload.isInitialized});default:return e}},cardPacks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-CARD-PACKS":return Object(S.a)(Object(S.a)({},e),{},{currentCardPacks:Object(S.a)(Object(S.a)({},e.currentCardPacks),t.payload.cardPacks)});case"SET-MIN-MAX-CARDS-COUNT":return Object(S.a)(Object(S.a)({},e),{},{currentCardPacks:Object(S.a)(Object(S.a)({},e.currentCardPacks),{},{min:t.payload.range[0],max:t.payload.range[1]})});case"SET-PACKS-PAGE":return Object(S.a)(Object(S.a)({},e),{},{currentCardPacks:Object(S.a)(Object(S.a)({},e.currentCardPacks),{},{page:t.payload.page})});case"SET-PACKS-PAGE-COUNT":return Object(S.a)(Object(S.a)({},e),{},{currentCardPacks:Object(S.a)(Object(S.a)({},e.currentCardPacks),{},{pageCount:t.payload.pageCount})});case"SET-SEARCH-PACKS-NAME":return Object(S.a)(Object(S.a)({},e),{},{currentCardPacks:Object(S.a)(Object(S.a)({},e.currentCardPacks),{},{packName:t.payload.packName})});case"SET-SORT-PACKS":return Object(S.a)(Object(S.a)({},e),{},{currentCardPacks:Object(S.a)(Object(S.a)({},e.currentCardPacks),t.payload)});case"SET-CURRENT-PACK-NAME":return Object(S.a)(Object(S.a)({},e),{},{currentPackName:t.payload.currentPackName});case"SET-CARDS":return Object(S.a)(Object(S.a)({},e),{},{currentCards:Object(S.a)(Object(S.a)({},e.currentCards),t.payload.cards)});case"RESET-CARDS":return Object(S.a)(Object(S.a)({},e),{},{currentCards:Object(S.a)(Object(S.a)({},Ue.currentCards),{},{cards:[]})});case"SET-CARDS-PAGE":return Object(S.a)(Object(S.a)({},e),{},{currentCards:Object(S.a)(Object(S.a)({},e.currentCards),{},{page:t.payload.page})});case"SET-CARDS-PAGE-COUNT":return Object(S.a)(Object(S.a)({},e),{},{currentCards:Object(S.a)(Object(S.a)({},e.currentCards),{},{pageCount:t.payload.pageCount})});case"SET-CURRENT-CARDS-PACK-ID":return Object(S.a)(Object(S.a)({},e),{},{currentCardsPackId:t.payload.currentCardsPackId});case"SET-USER-ID":return Object(S.a)(Object(S.a)({},e),{},{user_id:t.payload.user_id});case"ADD-NEW-CARDS-PACK":return Object(S.a)(Object(S.a)({},e),{},{newCardsPack:Object(S.a)({},t.payload.cardsPack)});case"CHANGE-GRADE-CARD":return Object(S.a)(Object(S.a)({},e),{},{currentCards:Object(S.a)(Object(S.a)({},e.currentCards),{},{cards:e.currentCards.cards.map((function(e){return e._id===t.card_id?Object(S.a)(Object(S.a)({},e),{},{grade:t.grade}):e}))})});case"SET-FILTER-CARDS":return Object(S.a)(Object(S.a)({},e),{},{currentCards:Object(S.a)(Object(S.a)({},e.currentCards),t.payload)});default:return e}}}),yt=Object(Nt.c)(St,Object(Nt.a)(wt.a)),Et=yt;window.store=yt,s.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(u.a,{store:Et,children:Object(O.jsx)(Pt,{})})}),document.getElementById("root")),Ct()},24:function(e,t,a){e.exports={signUp:"SignUp_signUp__3r9dd",subtitle:"SignUp_subtitle__2yWk-",FormBox:"SignUp_FormBox__NLcRu",registrWrap:"SignUp_registrWrap__3kUIN",label:"SignUp_label__30AYO",field:"SignUp_field__36SaB",inputWrap:"SignUp_inputWrap__97QWp",btnWrap:"SignUp_btnWrap__-goAU",btnLeft:"SignUp_btnLeft__1hCsN",btnRight:"SignUp_btnRight__BqyTw"}},42:function(e,t,a){e.exports={forgotPassword:"ForgotPassword_forgotPassword__TwWaw",formBox:"ForgotPassword_formBox__1iaYd",subtitle:"ForgotPassword_subtitle__2Hxih",field:"ForgotPassword_field__238Ff",inputWrap:"ForgotPassword_inputWrap__1Zrxd",textLight:"ForgotPassword_textLight__1UNz_",btnBlue:"ForgotPassword_btnBlue__1LgRH",boxLink:"ForgotPassword_boxLink__1yscQ",linkLight:"ForgotPassword_linkLight__22yYD",linkBlue:"ForgotPassword_linkBlue__2YIh4"}},43:function(e,t,a){e.exports={login:"Login_login__e8ne4",subtitle:"Login_subtitle__1QHzt",formBox:"Login_formBox__2Z0y3",linkTransparent:"Login_linkTransparent__1e87P",btnBlue:"Login_btnBlue__2gApp",linkWrap:"Login_linkWrap__XgNzK",textLight:"Login_textLight__1CJPu",linkBlue:"Login_linkBlue__2zuUb"}},57:function(e,t,a){e.exports={newPassword:"NewPassword_newPassword__ja_z0",subtitle:"NewPassword_subtitle__3_FA7",formBox:"NewPassword_formBox__8KU5j",inputWrap:"NewPassword_inputWrap__1GNCi",field:"NewPassword_field__3iO08",textLight:"NewPassword_textLight__21JB-",btnBlue:"NewPassword_btnBlue__9WYCa"}},58:function(e,t,a){e.exports={inputWrap:"SuperInputText_inputWrap__3-vJ3",superInput:"SuperInputText_superInput__3bIrW",placeHolder:"SuperInputText_placeHolder__jNWZW",hidePlaceHolder:"SuperInputText_hidePlaceHolder__mg2sB",errorInput:"SuperInputText_errorInput__yMflc",error:"SuperInputText_error__3fTGJ"}},72:function(e,t,a){e.exports={wrap:"Error404_wrap__1IT3M",notfound:"Error404_notfound__1iP_a",notfound404:"Error404_notfound404__1xmNg",navLink:"Error404_navLink__3nnfZ"}},73:function(e,t,a){e.exports={checkEmail:"CheckEmail_checkEmail__GlaTj",letterImg:"CheckEmail_letterImg__2fLlW",subtitle:"CheckEmail_subtitle__316C0",textLight:"CheckEmail_textLight__inZ5u"}},74:function(e,t,a){e.exports={headerMain:"HeaderMain_headerMain__1JBPr",wrapper:"HeaderMain_wrapper__18nEh",title:"HeaderMain_title__1TRVL",btnWrap:"HeaderMain_btnWrap__2LyG1"}},90:function(e,t,a){e.exports={headerBtn:"HeaderBtn_headerBtn__hUmM-",active:"HeaderBtn_active__4zhsw"}}},[[188,1,2]]]);
//# sourceMappingURL=main.ca25e7c5.chunk.js.map