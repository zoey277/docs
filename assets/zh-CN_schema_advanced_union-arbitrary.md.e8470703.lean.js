import{_ as s,s as n,q as t,S as a}from"./chunks/framework.26d7e063.js";const x=JSON.parse(`{"title":"Union：联合类型","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\n  value: Schema.union([\\n    Schema.const().description('unset'),\\n    Schema.number().description('number'),\\n    Schema.string().description('string'),\\n    Schema.const(true).description('true'),\\n    Schema.const(false).description('false'),\\n    Schema.object({\\n      foo: Schema.string().description('对象的一个属性。'),\\n      bar: Schema.number().description('对象的另一个属性。'),\\n    }).description('object'),\\n  ]).description('从六种可能情况中选择一个。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"zh-CN/schema/advanced/union-arbitrary.md","filePath":"zh-CN/schema/advanced/union-arbitrary.md"}`),o={name:"zh-CN/schema/advanced/union-arbitrary.md"},e=a("",3),i=[e];function r(p,l,c,k,h,v){return t(),n("div",null,i)}const u=s(o,[["render",r]]);export{x as __pageData,u as default};
