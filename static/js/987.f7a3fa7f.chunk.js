"use strict";(self.webpackChunksamurai=self.webpackChunksamurai||[]).push([[987],{987:function(e,s,n){n.r(s),n.d(s,{DialogsContainer:function(){return C}});var a=n(7581),i=n(7781),r=n(8683),t=(n(2791),n(6871)),l=n(184),o=function(e){return{isAuth:e.auth.isAuth}},u=n(970),d="Dialogs_dialogs__oe96H",c="Dialogs_dialogItems__VFpmc",g="Dialogs_dialog__htSTl",m="Dialogs_messages__Cg2l+",h="Dialogs_message__ZEWo0",x=n(3504),j=function(e){var s=e.name,n=e.id,a="/dialogs/".concat(n);return(0,l.jsx)("div",{className:g,children:(0,l.jsx)(x.OL,{to:a,children:s})})},f=function(e){return(0,l.jsx)("div",{className:h,children:e.message})},v=n(5705),_=n(132),p=_.Ry({message:_.Z_().typeError("Invalid login").required("Required")}),N=function(e){return(0,l.jsx)(v.J9,{initialValues:{message:""},onSubmit:function(s,n){var a=n.resetForm;e.onSubmit(s.message),a({})},validationSchema:p,validateOnBlur:!0,children:function(e){var s=e.errors,n=e.touched,a=e.handleChange,i=e.handleBlur,r=e.isValid,t=e.dirty;return(0,l.jsxs)(v.l0,{children:[(0,l.jsx)("div",{children:n.message&&s.message&&(0,l.jsx)("span",{children:s.message})}),(0,l.jsxs)("div",{className:"textarea",children:[(0,l.jsx)(v.gN,{className:"textarea",component:"textarea",name:"message",onBlur:i,onChange:a}),(0,l.jsx)("button",{disabled:!r&&!t,type:"submit",children:"Send message"})]})]})}})},b=function(e){var s=e.sendMessage,n=e.dialogsPage,a=n.dialogs.map((function(e,s){return(0,l.jsx)(j,{name:e.name,id:e.id},s)})),i=n.messages.map((function(e,s){return(0,l.jsx)(f,{message:e.message},s)}));return(0,l.jsx)("div",{className:"content",children:(0,l.jsxs)("div",{className:d,children:[(0,l.jsx)("div",{className:c,children:a}),(0,l.jsxs)("div",{className:m,children:[(0,l.jsx)("div",{children:i}),(0,l.jsx)(N,{onSubmit:s})]})]})})},C=(0,i.qC)((0,a.$j)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e((0,u.X)(s))}}})),(function(e){return(0,a.$j)(o)((function(s){return s.isAuth?(0,l.jsx)(e,(0,r.Z)({},s)):(0,l.jsx)(t.Fg,{to:"/login"})}))}))(b)}}]);
//# sourceMappingURL=987.f7a3fa7f.chunk.js.map