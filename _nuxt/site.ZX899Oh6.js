import{_ as g}from"./nuxt-link.vUZqbFiw.js";import{I as p,l as f,t as o,M as k}from"./helpers.WzrKS_5u.js";import{u as _}from"./vue.f36acd1f.SwWG5F32.js";import{_ as h,o as u,c as b,b as r,w as v,a as t,t as l,u as n,z as w,C as N}from"./entry.lxlV-tjW.js";const C={data(){return{dark:p.dark,nav:"",lang:p.lang}},watch:{lang(s){f.setLanguage(s)}},mounted(){this.nav=this.$refs.nav;const s=()=>{document.body.scrollTop>10||document.documentElement.scrollTop>10||window.innerWidth<767?(this.scrolledDown=!0,this.nav.classList.add(this.dark?"nav-bg-dark":"nav-bg-light"),this.nav.classList.remove(this.dark?"nav-bg-light":"nav-bg-dark")):(this.scrolledDown=!1,this.nav.classList.remove("nav-bg-dark"),this.nav.classList.remove("nav-bg-light"))};window.onscroll=()=>{s()}},methods:{collapseNav(){this.$refs.collapsibleNav.classList.contains("show")&&this.$nuxt.$bootstrap.toogleCollapse(this.$refs.collapsibleNav)},toggleTheme(){this.dark=!this.dark,this.textColor="#12151c",this.nav.classList.add(this.dark&&this.scrolledDown?"nav-bg-dark":"nav-bg-light"),this.nav.classList.remove(!this.dark&&this.scrolledDown?"nav-bg-dark":"nav-bg-light"),_({bodyAttrs:{"data-bs-theme":this.dark?"dark":"light"}})}}},$={id:"navbar",ref:"nav",class:"navbar navbar-expand-lg px-4 py-2 fixed-top smart-scroll fw-bold"},y=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapsibleNavbar"},[t("span",{class:"navbar-toggler-icon"})],-1),L={id:"collapsibleNavbar",ref:"collapsibleNav",class:"collapse navbar-collapse"},S={class:"navbar-nav ms-auto align-items-center"},F={class:"nav-item mx-3"},I={class:"nav-item mx-3"},D={class:"nav-item mx-3"},O={class:"nav-item mx-3"},E=["href"],M={class:"nav-item dropdown ms-2 me-1 text-center"},T={id:"navbardrop",class:"nav-link dropdown-toggle","data-bs-toggle":"dropdown"},x={class:"dropdown-menu",role:"button"},B={class:"nav-item align-self-center mx-2"},j={class:"form-check form-switch p-0 m-0"},z=t("span",{class:"slider"},null,-1),V=t("label",{class:"form-check-label",for:"flexSwitchCheckChecked"},null,-1);function A(s,e,m,G,d,i){const c=g;return u(),b("nav",$,[r(c,{class:"navbar-brand py-0",to:"/"},{default:v(()=>[t("span",null,l(("t"in s?s.t:n(o))("name_abreviated")),1)]),_:1}),y,t("div",L,[t("ul",S,[t("li",F,[r(c,{to:"/#about",onClick:e[0]||(e[0]=a=>i.collapseNav())},{default:v(()=>[t("span",null,l(("t"in s?s.t:n(o))("about")),1)]),_:1})]),t("li",I,[r(c,{to:"/#skills",onClick:e[1]||(e[1]=a=>i.collapseNav())},{default:v(()=>[t("span",null,l(("t"in s?s.t:n(o))("skills")),1)]),_:1})]),t("li",D,[r(c,{to:"/#projects",onClick:e[2]||(e[2]=a=>i.collapseNav())},{default:v(()=>[t("span",null,l(("t"in s?s.t:n(o))("projects")),1)]),_:1})]),t("li",O,[t("a",{href:d.lang==="es"?("INFO"in s?s.INFO:n(p)).resume.es:("INFO"in s?s.INFO:n(p)).resume.en,target:"_blank",onClick:e[3]||(e[3]=a=>i.collapseNav())},[t("span",null,l(("t"in s?s.t:n(o))("download_resume")),1)],8,E)]),t("li",M,[t("span",T,l(("t"in s?s.t:n(o))("lang").toUpperCase()),1),t("div",x,[t("span",{class:"dropdown-item",onClick:e[4]||(e[4]=a=>d.lang="es")},"ES"),t("span",{class:"dropdown-item",onClick:e[5]||(e[5]=a=>d.lang="en")},"EN")])]),t("li",B,[t("div",j,[t("input",{id:"flexSwitchCheckChecked",class:"form-check-input p-0 m-0",type:"checkbox",role:"button",style:w(`--bs-form-switch-bg: url(${("MoonSun"in s?s.MoonSun:n(k))(d.dark)})`),checked:"",onClick:e[6]||(e[6]=a=>i.toggleTheme())},null,4),z,V])])])],512)],512)}const H=h(C,[["render",A]]),U={},W={class:"overflow-hidden"};function q(s,e){const m=H;return u(),b("div",W,[r(m),N(s.$slots,"default")])}const R=h(U,[["render",q]]);export{R as default};
