import{_ as s,s as t,q as n,S as a}from"./chunks/framework.26d7e063.js";const x=JSON.parse(`{"title":"字符串 (String)","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\ntext: Schema.string().pattern(/^fff$/i).description('一段普通的文本。'),\\nsecret: Schema.string().role('secret').default('password').description('请输入密码。'),\\nlink: Schema.string().role('link').default('https://github.com').description('点击访问链接。'),\\narea: Schema.string().role('textarea', { rows: [2, 4] }).description('在下方输入多行文本。'),\\ncolor: Schema.string().role('color').description('选择一个颜色。'),\\ncustom: Schema.string().pattern(/^custom$/i).description('这里只能输入 \`custom\`。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"ru-RU/schema/basic/string.md","filePath":"ru-RU/schema/basic/string.md"}`),e={name:"ru-RU/schema/basic/string.md"},o=a("",5),r=[o];function i(l,p,c,k,h,y){return n(),t("div",null,r)}const m=s(e,[["render",i]]);export{x as __pageData,m as default};
