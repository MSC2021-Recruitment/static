"use strict";(self["webpackChunkmsc_recruitment"]=self["webpackChunkmsc_recruitment"]||[]).push([[53],{8053:(e,t,l)=>{l.r(t),l.d(t,{default:()=>$});var s=l(3673);const o={class:"col",style:{"max-width":"400px",width:"100%"}},a={class:"q-pa-md",style:{width:"100%"}},n={class:"row flex flex-center"},r=(0,s._)("div",{class:"text-h4 text-center q-mt-lg"},"西电微软学生俱乐部",-1),c=(0,s._)("div",{class:"text-h6 text-grey text-center"}," Microsoft Student Club in XDU ",-1),i=(0,s._)("br",null,null,-1),u=(0,s._)("br",null,null,-1),d=(0,s._)("br",null,null,-1),p=(0,s._)("div",{style:{color:"#404040"}},[(0,s.Uk)(" This site is protected by reCAPTCHA and the Google "),(0,s._)("a",{style:{color:"#404040"},href:"https://policies.google.com/privacy"},"Privacy Policy"),(0,s.Uk)(" and "),(0,s._)("a",{style:{color:"#404040"},href:"https://policies.google.com/terms"},"Terms of Service"),(0,s.Uk)(" apply. ")],-1),m=(0,s._)("br",null,null,-1),h={class:"row flex flex-center"};function g(e,t,l,g,f,_){const w=(0,s.up)("q-img"),v=(0,s.up)("q-input"),y=(0,s.up)("q-btn"),b=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(b,{class:"column items-center"},{default:(0,s.w5)((()=>[(0,s._)("div",o,[(0,s._)("div",a,[(0,s._)("div",n,[(0,s.Wm)(w,{src:"icons/icon.svg",style:{width:"100px",height:"100px"}}),r,c]),i,u,d,(0,s.Wm)(v,{ref:"account_ref",square:"",outlined:"",modelValue:e.account,"onUpdate:modelValue":t[0]||(t[0]=t=>e.account=t),label:"注册邮箱或手机号",rules:[e=>!!e||"请填写邮箱地址或手机号"]},null,8,["modelValue","rules"]),(0,s.Wm)(v,{ref:"password_ref",square:"",outlined:"",type:"password",modelValue:e.password,"onUpdate:modelValue":t[1]||(t[1]=t=>e.password=t),label:"请输入密码",rules:[e=>!!e||"请填写密码"]},null,8,["modelValue","rules"]),p,m,(0,s._)("div",h,[(0,s.Wm)(y,{unelevated:"",class:"q-ma-md",color:"primary",onClick:e.login,label:"登录"},null,8,["onClick"]),(0,s.Wm)(y,{unelevated:"",class:"q-ma-md",color:"green",onClick:t[2]||(t[2]=e=>{this.$router.push({path:"/register"})}),label:"报名注册"})])])])])),_:1})}var f=l(1959),_=l(8825);const w=(0,s.aZ)({name:"Login",components:{},methods:{login(){this.$q.notify({spinner:!0,message:"登录中，请稍候...",timeout:1e4}),this.$recaptchaLoaded().then((()=>{this.$recaptcha("login").then((e=>{this.$api.post("/api/account/login",{token:e,account:this.account,password:this.password}).then((e=>{0!=e.data.code?(this.$q.notify({color:"negative",message:"登录失败: "+e.data.msg}),this.account="",this.password=""):(this.$q.notify({color:"positive",message:"登录成功"}),location.reload())}))}))}))}},setup(){const e=(0,_.Z)(),t=(0,f.iH)(""),l=(0,f.iH)(""),s=(0,f.iH)(!1);return{$q:e,account_ref:(0,f.iH)(),password_ref:(0,f.iH)(),account:t,password:l,robot:s}},mounted(){"true"===localStorage.getItem("login")&&this.$router.push({path:"/index"})}});var v=l(4379),y=l(4027),b=l(4664),q=l(2165),x=l(7518),k=l.n(x);w.render=g;const $=w;k()(w,"components",{QPage:v.Z,QImg:y.Z,QInput:b.Z,QBtn:q.Z})}}]);