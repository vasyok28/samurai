"use strict";(self.webpackChunksamurai=self.webpackChunksamurai||[]).push([[376],{7376:function(r,a,e){e.r(a),e.d(a,{default:function(){return d}});var s=e(7581),o=e(6871),l=e(3178),n=e(5705),i=e(132),t={form:"Form_form__e1yzW",formTitle:"Form_formTitle__b3yEU",formDescription:"Form_formDescription__+hfat",formWrapper:"Form_formWrapper__IATQt",formLabelText:"Form_formLabelText__-26M+",input:"Form_input__FTtTw",formButton:"Form_formButton__7mGGM",formError:"Form_formError__LCMxE"},c=e(184),m=i.Ry({login:i.Z_().typeError("Invalid login").required("Required"),password:i.Z_().min(4,"Must be longer than 2 characters").max(20).required("Required"),remember:i.O7(),captcha:i.Z_()}),p={login:"",password:"",remember:!1,captcha:"",error:""},h=function(r){var a=r.onSubmit,e=r.captcha;return(0,c.jsx)(n.J9,{initialValues:p,validateOnBlur:!0,onSubmit:a,validationSchema:m,children:function(r){var a=r.values,s=r.errors,o=r.touched,l=r.handleChange,i=r.handleBlur,m=r.isValid,p=r.dirty,h=r.status;return(0,c.jsxs)(n.l0,{className:t.form,children:[(0,c.jsx)("h1",{className:t.formTitle,children:"Auth"}),(0,c.jsx)("p",{className:t.formDescription,children:"You are welcome!"}),(0,c.jsxs)("div",{className:t.formWrapper,children:[(0,c.jsx)("label",{htmlFor:"login",className:t.formLabel,children:(0,c.jsxs)("span",{className:t.formLabelText,children:["Login: ",o.login&&s.login&&(0,c.jsx)("span",{children:s.login})]})}),(0,c.jsx)(n.gN,{className:t.input,type:"text",name:"login",placeholder:"login",value:a.login,onBlur:i,onChange:l})]}),(0,c.jsxs)("div",{className:t.formWrapper,children:[(0,c.jsx)("label",{htmlFor:"password",className:t.formLabel,children:(0,c.jsxs)("span",{className:t.formLabelText,children:["Password: ",o.password&&s.password&&(0,c.jsx)("span",{children:s.password})]})}),(0,c.jsx)(n.gN,{className:t.input,type:"password",name:"password",placeholder:"password",value:a.password,onBlur:i,onChange:l})]}),e&&(0,c.jsxs)("div",{className:t.formWrapper,children:[(0,c.jsx)("label",{htmlFor:"password",className:t.formLabel,children:(0,c.jsxs)("span",{className:t.formLabelText,children:["Captcha: ",o.captcha&&s.captcha&&(0,c.jsx)("span",{children:s.captcha})]})}),(0,c.jsx)(n.gN,{className:t.input,type:"text",name:"captcha",value:a.captcha,onBlur:i,onChange:l}),(0,c.jsx)("img",{style:{marginTop:"10px"},src:e,alt:""})]}),(0,c.jsxs)("div",{className:t.formWrapper,children:[(0,c.jsx)(n.gN,{type:"checkbox",name:"remember",onBlur:i,onChange:l}),(0,c.jsx)("span",{style:{display:"inline-block"},className:t.formLabelText,children:"Remember me?"})]}),(null===h||void 0===h?void 0:h.error)&&(0,c.jsx)("div",{className:t.formError,children:h.error}),(0,c.jsx)("div",{className:t.formWrapper,children:(0,c.jsx)("button",{className:t.formButton,type:"submit",disabled:!m&&!p,children:"Login"})})]})}})},d=(0,s.$j)((function(r){return{isAuth:r.auth.isAuth,captcha:r.auth.captcha}}),(function(){return{login:l.x4}}))((function(r){return r.isAuth?(0,c.jsx)(o.Fg,{to:"/profile"}):(0,c.jsx)(h,{onSubmit:r.login,captcha:r.captcha})}))}}]);
//# sourceMappingURL=376.75f14369.chunk.js.map