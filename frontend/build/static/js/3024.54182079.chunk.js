"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[3024],{23024:function(e,s,r){r.r(s);var a=r(29439),t=r(72791),n=r(11087),l=r(78983),i=r(24846),o=r(99161),c=r(93647),d=r(31243),u=r(57689),h=r(80184);s.default=function(){var e=(0,u.s0)(),s=(0,t.useState)(""),r=(0,a.Z)(s,2),m=r[0],x=r[1],p=(0,t.useState)(""),j=(0,a.Z)(p,2),g=j[0],f=j[1],b=(0,t.useState)(""),v=(0,a.Z)(b,2),w=v[0],N=v[1];return(0,h.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:(0,h.jsx)(l.KB,{children:(0,h.jsx)(l.rb,{className:"justify-content-center",children:(0,h.jsx)(l.b7,{md:8,lg:7,xl:6,children:(0,h.jsx)(l.dL,{children:(0,h.jsx)(l.xH,{className:"p-4",children:(0,h.jsx)(l.sl,{children:(0,h.jsxs)(l.lx,{onSubmit:function(){var s=new FormData;s.append("userName",m),s.append("userPassword",w),(0,d.Z)({url:"http://springboot.com/api/authenticate",method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},data:s}).then((function(s){localStorage.setItem("details",JSON.stringify({username:m,token:s.data.jwtToken,role:s.data.user.role[0].roleName}));var r=JSON.parse(localStorage.getItem("details"));console.log(r.role),"Admin"===r.role?e("/dashboardAdmin"):e("/dashboard")})).catch((function(e){f("Some Thing Went Wrong"),"401"==e.response.status&&f("Error "+e.response.status+": Incorrect Credentials")}))},children:[(0,h.jsx)("div",{className:"mt-2",children:(0,h.jsx)(l.Gc,{dismissible:!0,color:"danger",visible:""!==g,children:g})}),(0,h.jsx)("h1",{children:"Login"}),(0,h.jsx)("p",{className:"text-medium-emphasis",children:"Sign In to your account"}),(0,h.jsxs)(l.YR,{className:"mb-3",children:[(0,h.jsx)(l.wV,{children:(0,h.jsx)(i.Z,{icon:o.E})}),(0,h.jsx)(l.jO,{placeholder:"Username",autoComplete:"username",value:m,onChange:function(e){x(e.target.value)}})]}),(0,h.jsxs)(l.YR,{className:"mb-4",children:[(0,h.jsx)(l.wV,{children:(0,h.jsx)(i.Z,{icon:c.U})}),(0,h.jsx)(l.jO,{type:"password",placeholder:"Password",autoComplete:"current-password",value:w,onChange:function(e){N(e.target.value)}})]}),(0,h.jsx)(l.b7,{xs:6,children:(0,h.jsx)(l.u5,{type:"submit",color:"primary",className:"px-4 mb-3",children:"Login"})}),(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,h.jsx)(n.rU,{to:"/forgotpass",children:(0,h.jsx)(l.u5,{color:"link",children:"Forgot Password?"})}),(0,h.jsx)("div",{style:{flex:"1 1 auto"}}),(0,h.jsx)(n.rU,{to:"/register",children:(0,h.jsx)(l.u5,{color:"link",children:"New Registration?"})})]})]})})})})})})})})}}}]);
//# sourceMappingURL=3024.54182079.chunk.js.map