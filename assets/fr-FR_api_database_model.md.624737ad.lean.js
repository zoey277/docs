import{_ as o,p as r,s as d,v as t,L as e,D as l,I as s,S as n,q as i}from"./chunks/framework.26d7e063.js";const N=JSON.parse('{"title":"数据模型 (Model)","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/api/database/model.md","filePath":"fr-FR/api/database/model.md"}'),c={name:"fr-FR/api/database/model.md"},h=n("",16),g=t("li",null,[t("strong",null,"name:"),e(),t("code",null,"string"),e(" 数据表名")],-1),p=t("li",null,[t("strong",null,"fields:"),e(),t("code",null,"Field.Config"),e(" 字段信息")],-1),y=t("strong",null,"config:",-1),x=t("code",null,"Table.Meta",-1),k=t("li",null,[t("strong",null,"config.primary:"),e(),t("code",null,"string | string[]"),e(" 主键名，默认为 "),t("code",null,"'id'")],-1),_=t("li",null,[t("strong",null,"config.unique:"),e(),t("code",null,"(string | string[])[]"),e(" 值唯一的键名列表")],-1),m=t("strong",null,"config.foreign:",-1),u=t("code",null,"Dict<[string, string]>",-1),b=t("li",null,[t("strong",null,"config.autoInc:"),e(),t("code",null,"boolean"),e(" 是否使用自增主键")],-1),v=n("",4),f={id:"ctx-model-migrate-实验性",tabindex:"-1"},T=t("a",{class:"header-anchor",href:"#ctx-model-migrate-实验性","aria-label":'Permalink to "ctx.model.migrate(name, fields, callback) <badge type="warning">实验性</badge>"'},"​",-1),q=n("",2);function P(S,C,w,D,V,A){const a=r("badge");return i(),d("div",null,[h,t("ul",null,[g,p,t("li",null,[y,e(),x,e(" 表的基本配置 "),t("ul",null,[k,_,t("li",null,[m,e(),u,e(" 外键列表 "),l(a,{type:"warning"},{default:s(()=>[e("实验性")]),_:1})]),b])])]),v,t("h3",f,[e("ctx.model.migrate(name, fields, callback) "),l(a,{type:"warning"},{default:s(()=>[e("实验性")]),_:1}),e(),T]),q])}const F=o(c,[["render",P]]);export{N as __pageData,F as default};
