"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[4009],{64009:function(e,s,a){a.r(s);var i=a(29439),l=a(72791),t=a(78983),n=a(24846),c=a(99161),r=a(93647),o=a(31243),d=a(11087),u=a(57689),m=a(80184);s.default=function(){var e=(0,u.s0)(),s=(0,l.useState)(!1),a=(0,i.Z)(s,2),h=a[0],x=a[1],j=(0,l.useState)(!1),p=(0,i.Z)(j,2),g=p[0],N=p[1],v=(0,l.useState)(!1),f=(0,i.Z)(v,2),b=f[0],w=f[1],Z=(0,l.useState)(""),C=(0,i.Z)(Z,2),S=C[0],_=C[1],R=(0,l.useState)(""),y=(0,i.Z)(R,2),O=y[0],E=y[1],k=(0,l.useState)(""),F=(0,i.Z)(k,2),U=F[0],V=F[1],Y=(0,l.useState)(""),B=(0,i.Z)(Y,2),G=B[0],I=B[1],L=(0,l.useState)(""),P=(0,i.Z)(L,2),A=P[0],D=P[1];return(0,m.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:(0,m.jsx)(t.KB,{children:(0,m.jsx)(t.rb,{className:"justify-content-center",children:(0,m.jsx)(t.b7,{md:9,lg:7,xl:6,children:(0,m.jsx)(t.xH,{className:"mx-4",children:(0,m.jsxs)(t.sl,{className:"p-4",children:[(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsx)(t.Gc,{dismissible:!1,color:"danger",visible:b,children:"None of the Fields Below Can Be Empty!"})}),(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsx)(t.Gc,{dismissible:!1,color:"success",visible:h,children:"User Registered Sucessfully!"})}),(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsx)(t.Gc,{dismissible:!1,color:"danger",visible:g,children:"User Registration Failed!"})}),(0,m.jsxs)(t.lx,{onSubmit:function(s){if(""===S||""===O||""===U||""===G||""===A)return w(!0),N(!1),void x(!1);var a=new FormData;a.append("userName",S),a.append("userFirstName",O),a.append("userLastName",U),a.append("userPassword",G),a.append("mailID",A),(0,o.Z)({url:"http://springboot.com/api/registerNewUser",method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},data:a}).then((function(s){console.log(s),"200"==s.status?(localStorage.setItem("register",JSON.stringify({username:S,email:A})),x(!0),w(!1),N(!1),e("/otp")):(N(!0),x(!1),w(!1))})).catch((function(e){N(!0),x(!1),w(!1)})),_(""),E(""),V(""),I(""),D("")},children:[(0,m.jsx)("h1",{children:"Register"}),(0,m.jsx)("p",{className:"text-medium-emphasis",children:"Create your account"}),(0,m.jsxs)(t.YR,{className:"mb-3",children:[(0,m.jsx)(t.wV,{children:(0,m.jsx)(n.Z,{icon:c.E})}),(0,m.jsx)(t.jO,{placeholder:"Roll Number",autoComplete:"username",value:S,onChange:function(e){_(e.target.value)}})]}),(0,m.jsxs)(t.YR,{className:"mb-3",children:[(0,m.jsx)(t.wV,{children:(0,m.jsx)(n.Z,{icon:c.E})}),(0,m.jsx)(t.jO,{placeholder:"First Name",value:O,onChange:function(e){E(e.target.value)}})]}),(0,m.jsxs)(t.YR,{className:"mb-3",children:[(0,m.jsx)(t.wV,{children:(0,m.jsx)(n.Z,{icon:c.E})}),(0,m.jsx)(t.jO,{placeholder:"Last Name",value:U,onChange:function(e){V(e.target.value)}})]}),(0,m.jsxs)(t.YR,{className:"mb-3",children:[(0,m.jsx)(t.wV,{children:(0,m.jsx)(n.Z,{icon:c.E})}),(0,m.jsx)(t.jO,{placeholder:"Email",value:A,onChange:function(e){D(e.target.value)}})]}),(0,m.jsxs)(t.YR,{className:"mb-3",children:[(0,m.jsx)(t.wV,{children:(0,m.jsx)(n.Z,{icon:r.U})}),(0,m.jsx)(t.jO,{type:"password",placeholder:"Password",autoComplete:"new-password",value:G,onChange:function(e){I(e.target.value)}})]}),(0,m.jsx)("div",{className:"d-grid",children:(0,m.jsx)(t.u5,{type:"submit",color:"success",children:"Create Account"})}),(0,m.jsx)("div",{className:"right-button",children:(0,m.jsx)(d.rU,{to:"/login",children:(0,m.jsx)(t.u5,{color:"link",className:"text-right px-0 ",children:"Login Instead?"})})})]})]})})})})})})}}}]);
//# sourceMappingURL=4009.f1e1472f.chunk.js.map