import{_ as s,s as n,q as a,S as e}from"./chunks/framework.26d7e063.js";const d=JSON.parse(`{"title":"Union：配置聯動 1","description":"","frontmatter":{"layout":"schema","code":"Schema.intersect([\\nSchema.object({\\nenabled: Schema.boolean().default(false).description('是否开启功能'),\\n}).description('基础配置'),\\nSchema.union([\\nSchema.object({\\nenabled: Schema.const(true).required(),\\nfoo: Schema.number().description('请输入一个数值。'),\\nbar: Schema.string().description('请输入一个字符串。'),\\n}),\\nSchema.object({}),\\n]),\\n])\\n"},"headers":[],"relativePath":"zh-TW/schema/advanced/union-tagged-1.md","filePath":"zh-TW/schema/advanced/union-tagged-1.md"}`),t={name:"zh-TW/schema/advanced/union-tagged-1.md"},o=e("",4),i=[o];function r(l,p,c,k,h,v){return a(),n("div",null,i)}const x=s(t,[["render",r]]);export{d as __pageData,x as default};
