import{_ as l,a as r}from"./chunks/home-light.974017f7.js";import{_ as i,p as c,s as p,D as n,I as t,S as o,v as s,L as a,q as h}from"./chunks/framework.3f494197.js";const D=JSON.parse('{"title":"テンプレートプロジェクトの作成","description":"","frontmatter":{"prev":{"text":"インストール方法","link":"/ja-JP/manual/starter/"},"next":{"text":"安装和配置插件","link":"/zh-CN/manual/usage/market.html"}},"headers":[],"relativePath":"ja-JP/manual/starter/boilerplate.md","filePath":"ja-JP/manual/starter/boilerplate.md"}'),k={name:"ja-JP/manual/starter/boilerplate.md"},d=o('<h1 id="テンプレートプロジェクトの作成" tabindex="-1">テンプレートプロジェクトの作成 <a class="header-anchor" href="#テンプレートプロジェクトの作成" aria-label="Permalink to &quot;テンプレートプロジェクトの作成&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>その他のインストール方法を知りたい場合、<a href="./">インストール方法</a> に進んでください。</p></div><p>このセクションでは、最もおすすめの Koishi 開発方法であるテンプレートプロジェクトの作成について紹介します。ゼロから構築すると比べて、テンプレートプロジェクトの利点は以下のとおりです：</p><ul><li>完全なコンソール機能を付いたプロジェクトであり、各種テンプレートプラグインが簡易に作成できます</li><li>TypeScript を直接にロードできるため、コード補完や型チェックの利便性を存分に享受できます</li><li>プラグインのホットリロードに対応しており、プラグインのコードを変更後、アプリケーションを再起動せずにリアルタイムで反映することが可能です</li><li>二次開発が可能であり、自分のボットと他の開発者のプラグインとの結合テストができます</li></ul><p>もちろん、テンプレートプロジェクトはそのまま本番環境で使用することもできます。操作性がランチャーほど便利ではないかもしれませんが、より自由度が高く、ランチャーではカバーできないシナリオでもスムーズに実行できます。</p><h2 id="node-js-のインストール" tabindex="-1">Node.js のインストール <a class="header-anchor" href="#node-js-のインストール" aria-label="Permalink to &quot;Node.js のインストール&quot;">​</a></h2><p>Koishi 需要 <a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> (最低 v16，推荐使用 LTS) 运行环境，你需要自己安装它。</p><h3 id="インストーラーのダウンロード" tabindex="-1">インストーラーのダウンロード <a class="header-anchor" href="#インストーラーのダウンロード" aria-label="Permalink to &quot;インストーラーのダウンロード&quot;">​</a></h3><p>まず、 <a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> の公式サイトにアクセスしましょう：</p><p class="dark-only"><img src="'+l+'" alt="home"></p><p class="light-only"><img src="'+r+`" alt="home"></p><p>ここには２つの大きなボタンがありますが，それぞれ <strong>LTS(長期サポート版)</strong> と <strong>Current(最新版)</strong> を意味します。より安定したLTSバージョンをおすすめします。ボタンをクリックしてインストーラーをダウンロードしてください。</p><p>次に、ダウンロードしたインストーラーを実行し、その指示に従ってインストールを完了させてください。</p><h3 id="パッケージマネージャーのインストール" tabindex="-1">パッケージマネージャーのインストール <a class="header-anchor" href="#パッケージマネージャーのインストール" aria-label="Permalink to &quot;パッケージマネージャーのインストール&quot;">​</a></h3><p>Node.js には <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">npm</a> というパッケージマネージャーが付属しており、直接使用することができます。また、 <a href="https://classic.yarnpkg.com/" target="_blank" rel="noreferrer">yarn</a> という機能が充実したパッケージマネージャーもおすすめします。インストール方法は非常に簡単で、コマンドラインに次のコマンドを入力するだけです：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;"># yarn のインストール</span></span>
<span class="line"><span style="color:var(--shiki-token-function);">npm</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">i</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">-g</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">yarn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># バージョンの確認</span></span>
<span class="line"><span style="color:var(--shiki-token-function);">yarn</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-number);">-v</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>部分 Windows 用户可能会发现以下错误 (<a href="https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_execution_policies" target="_blank" rel="noreferrer">参考链接</a>)：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:var(--shiki-token-text);">yarn：无法加载文件 yarn.ps1，因为在此系统上禁止运行脚本。</span></span></code></pre></div><p>此时请以管理员身份重新运行终端，并输入下面的命令：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:var(--shiki-token-function);">Set-ExecutionPolicy</span><span style="color:var(--shiki-token-text);"> </span><span style="color:var(--shiki-token-string);">RemoteSigned</span></span></code></pre></div><p>之后就可以正常使用 yarn 了。</p></div><h3 id="ミラーサイトの設定" tabindex="-1">ミラーサイトの設定 <a class="header-anchor" href="#ミラーサイトの設定" aria-label="Permalink to &quot;ミラーサイトの設定&quot;">​</a></h3><p>中国のユーザーの場合、npm や yarn からパッケージのダウンロードが遅い可能性があります。そのため、インストール速度を向上するようにミラーサイトを設定することをおすすめします。</p>`,19),y=s("div",{class:"language-npm"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"config"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"set"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"registry"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"https://registry.npmmirror.com")])])])],-1),u=s("div",{class:"language-yarn"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"config"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"set"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"registry"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"https://registry.npmmirror.com")])])])],-1),v=o('<h2 id="プロジェクトの作成" tabindex="-1">プロジェクトの作成 <a class="header-anchor" href="#プロジェクトの作成" aria-label="Permalink to &quot;プロジェクトの作成&quot;">​</a></h2><p>コマンドラインを開いて Koishi プロジェクトを作成したいディレクトリに移動します。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>このディレクトリは長くない方が良く、パスには日本語やスペースを避けてください。おすすめのディレクトリは以下のとおりです：</p><ul><li>Windows：<code>C:\\dev</code> 或者 <code>D:\\dev</code> (也不要直接在盘根创建项目，最好是建一层目录)</li><li>その他のオペレーティングシステム：<code>~/dev</code></li></ul></div><p>以下のコマンドを入力して Koishi プロジェクトを作成します：</p>',4),_=s("div",{class:"language-npm"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"i"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-number)"}},"-g"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"create-koishi@latest")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"init"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"koishi")])])])],-1),m=s("div",{class:"language-yarn"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"create"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"koishi")])])])],-1),g=s("p",null,"指示に従って初期化プロセスを完了してください。",-1),b=s("h2",{id:"アプリケーションの起動",tabindex:"-1"},[a("アプリケーションの起動 "),s("a",{class:"header-anchor",href:"#アプリケーションの起動","aria-label":'Permalink to "アプリケーションの起動"'},"​")],-1),f=s("p",null,[a("上記の操作が正常に完了した場合、アプリケーションはすでに起動状態になり、コンソール画面が表示されています。アプリケーションを停止したい場合、コマンドラインで "),s("code",null,"Ctrl+C"),a(" を押します。アプリケーションが停止している場合、以下のコマンドを実行して再度起動できます。")],-1),x=s("div",{class:"language-npm"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"npm"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"start")])])])],-1),C=s("div",{class:"language-yarn"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-function)"}},"yarn"),s("span",{style:{color:"var(--shiki-token-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string)"}},"start")])])])],-1),P=s("h2",{id:"次のステップ",tabindex:"-1"},[a("次のステップ…… "),s("a",{class:"header-anchor",href:"#次のステップ","aria-label":'Permalink to "次のステップ……"'},"​")],-1),T=s("p",null,"おめでとうございます！Koishi の基本的な使い方をマスターしましたね。次のステップ：",-1),S=s("ul",null,[s("li",null,[a("如果你希望了解 Koishi 的更多功能，请前往 "),s("a",{href:"./../usage/market.html"},"安装和配置插件")]),s("li",null,[a("プラグイン開発をすぐに始めたい場合は、"),s("a",{href:"./../../guide/"},"開発ガイド"),a(" に進んでください")])],-1);function j(q,N,w,I,V,A){const e=c("tab-select");return h(),p("div",null,[d,n(e,{class:"code"},{"tab-npm":t(()=>[y]),"tab-yarn":t(()=>[u]),_:1}),v,n(e,{class:"code"},{"tab-npm":t(()=>[_]),"tab-yarn":t(()=>[m]),_:1}),g,b,f,n(e,{class:"code"},{"tab-npm":t(()=>[x]),"tab-yarn":t(()=>[C]),_:1}),P,T,S])}const J=i(k,[["render",j]]);export{D as __pageData,J as default};
