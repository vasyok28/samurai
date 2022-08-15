"use strict";(self.webpackChunksamurai=self.webpackChunksamurai||[]).push([[868],{8868:function(e,o,t){t.r(o),t.d(o,{default:function(){return k}});var a=t(5671),l=t(3144),r=t(136),i=t(3668),s=t(2791),n=t(6871),c=t(5705),u=t(132),b={form:"Settings_form__LBZRN",itemCheckbox:"Settings_itemCheckbox__N1ATF",item:"Settings_item__tNqqN"},m=t(184),p=u.Ry({fullName:u.Z_().required("Required"),aboutMe:u.Z_().required("Required"),lookingForAJobDescription:u.Z_().required("Required"),facebook:u.Z_(),twitter:u.Z_(),github:u.Z_(),youtube:u.Z_(),lookingForAJob:u.O7()}),f=function(e){var o=(0,n.s0)();(0,s.useEffect)((function(){e.userId||o("/login")}),[o,e.userId]);return(0,m.jsx)(c.J9,{initialValues:{fullName:e.profile.fullName,aboutMe:e.profile.aboutMe,lookingForAJobDescription:e.profile.lookingForAJobDescription,facebook:e.profile.contacts.facebook,twitter:e.profile.contacts.twitter,github:e.profile.contacts.github,youtube:e.profile.contacts.youtube,lookingForAJob:e.profile.lookingForAJob},validateOnBlur:!0,onSubmit:function(o){var t={fullName:o.fullName,aboutMe:o.aboutMe,lookingForAJob:o.lookingForAJob,lookingForAJobDescription:o.lookingForAJobDescription,contacts:{facebook:o.facebook,twitter:o.twitter,github:o.github,youtube:o.youtube}};e.updateHandler(t)},validationSchema:p,children:function(e){var o=e.values,t=e.errors,a=e.touched,l=e.handleChange,r=e.handleBlur,i=e.isValid,s=e.dirty,n=e.status;return(0,m.jsxs)(c.l0,{className:b.form,children:[(0,m.jsxs)("div",{className:b.item,children:[(0,m.jsx)("label",{htmlFor:"fullName",className:b.formLabel,children:(0,m.jsxs)("span",{className:b.formLabelText,children:["Full Name: ",a.fullName&&t.fullName&&(0,m.jsx)("span",{children:t.fullName})]})}),(0,m.jsx)(c.gN,{className:b.input,type:"text",name:"fullName",value:o.fullName,onBlur:r,onChange:l})]}),(0,m.jsxs)("div",{className:b.item,children:[(0,m.jsx)("label",{htmlFor:"aboutMe",className:b.formLabel,children:(0,m.jsxs)("span",{className:b.formLabelText,children:["About Me: ",a.aboutMe&&t.aboutMe&&(0,m.jsx)("span",{children:t.aboutMe})]})}),(0,m.jsx)(c.gN,{className:b.input,type:"text",name:"aboutMe",value:o.aboutMe,onBlur:r,onChange:l})]}),(0,m.jsxs)("div",{className:b.item,children:[(0,m.jsx)("label",{htmlFor:"lookingForAJobDescription",className:b.formLabel,children:(0,m.jsxs)("span",{className:b.formLabelText,children:["Description: ",a.lookingForAJobDescription&&t.lookingForAJobDescription&&(0,m.jsx)("span",{children:t.lookingForAJobDescription})]})}),(0,m.jsx)(c.gN,{className:b.input,type:"text",name:"lookingForAJobDescription",value:o.lookingForAJobDescription,onBlur:r,onChange:l})]}),(0,m.jsxs)("div",{className:b.item,children:[(0,m.jsx)("label",{htmlFor:"facebook",className:b.formLabel,children:(0,m.jsxs)("span",{className:b.formLabelText,children:["Facebook: ",a.facebook&&t.facebook&&(0,m.jsx)("span",{children:t.facebook})]})}),(0,m.jsx)(c.gN,{className:b.input,type:"text",name:"contacts.facebook",value:o.facebook,onBlur:r,onChange:l})]}),(0,m.jsxs)("div",{className:b.item,children:[(0,m.jsx)("label",{htmlFor:"twitter",className:b.formLabel,children:(0,m.jsxs)("span",{className:b.formLabelText,children:["Twitter: ",a.twitter&&t.twitter&&(0,m.jsx)("span",{children:t.twitter})]})}),(0,m.jsx)(c.gN,{className:b.input,type:"text",name:"contacts.twitter",value:o.twitter,onBlur:r,onChange:l})]}),(0,m.jsxs)("div",{className:b.item,children:[(0,m.jsx)("label",{htmlFor:"github",className:b.formLabel,children:(0,m.jsxs)("span",{className:b.formLabelText,children:["Github: ",a.github&&t.github&&(0,m.jsx)("span",{children:t.github})]})}),(0,m.jsx)(c.gN,{className:b.input,type:"text",name:"github",value:o.github,onBlur:r,onChange:l})]}),(0,m.jsxs)("div",{className:b.item,children:[(0,m.jsx)("label",{htmlFor:"contacts.youtube",className:b.formLabel,children:(0,m.jsxs)("span",{className:b.formLabelText,children:["Youtube: ",a.youtube&&t.youtube&&(0,m.jsx)("span",{children:t.youtube})]})}),(0,m.jsx)(c.gN,{className:b.input,type:"text",name:"youtube",value:o.youtube,onBlur:r,onChange:l})]}),(0,m.jsxs)("div",{className:b.itemCheckbox,children:[(0,m.jsx)("span",{style:{display:"inline-block"},className:b.formLabelText,children:"Looking for a job"}),(0,m.jsx)(c.gN,{type:"checkbox",name:"lookingForAJob",onBlur:r,onChange:l})]}),(null===n||void 0===n?void 0:n.error)&&(0,m.jsx)("div",{className:b.formError,children:n.error}),(0,m.jsx)("div",{className:b.item,children:(0,m.jsx)("button",{className:b.formButton,type:"submit",disabled:!i&&!s,children:"Save settings"})})]})}})},h=t(7781),d=t(7581),x=t(749),g=function(e){(0,r.Z)(t,e);var o=(0,i.Z)(t);function t(){var e;(0,a.Z)(this,t);for(var l=arguments.length,r=new Array(l),i=0;i<l;i++)r[i]=arguments[i];return(e=o.call.apply(o,[this].concat(r))).profile={fullName:e.props.profile.fullName,aboutMe:e.props.profile.aboutMe,lookingForAJob:e.props.profile.lookingForAJob,lookingForAJobDescription:e.props.profile.lookingForAJobDescription,contacts:{facebook:e.props.profile.contacts.facebook,twitter:e.props.profile.contacts.twitter,github:e.props.profile.contacts.github,youtube:e.props.profile.contacts.youtube}},e}return(0,l.Z)(t,[{key:"componentDidMount",value:function(){this.props.getProfile(this.props.userId)}},{key:"render",value:function(){return(0,m.jsx)(f,{userId:this.props.userId,updateHandler:this.props.updateProfile,profile:this.profile})}}]),t}(s.Component),N={getProfile:x.Ai,updateProfile:x.ck},k=(0,h.qC)((0,d.$j)((function(e){return{profile:e.profilePage.profile,userId:e.auth.userId}}),N))(g)}}]);
//# sourceMappingURL=868.ff09a8a7.chunk.js.map