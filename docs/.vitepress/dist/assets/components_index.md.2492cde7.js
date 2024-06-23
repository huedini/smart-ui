import{_ as s,c as a,o as n,O as p}from"./chunks/framework.941dfd5f.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/index.md","filePath":"components/index.md","lastUpdated":1716519693000}'),e={name:"components/index.md"},l=p(`<h3 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">提示</p><p>smart-city-ui 基于 vue3 + ts + antd 再次封装的基础组件</p></div><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">smart-city-ui</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-S</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">smart-city-ui</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-S</span></span></code></pre></div><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// main.ts</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> SmartCityUi </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;smart-city-ui&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;smart-city-ui/lib/style.css&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(App)</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(SmartCityUi)</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// main.ts</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> SmartCityUi </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;smart-city-ui&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;smart-city-ui/lib/style.css&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(App)</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(SmartCityUi)</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="私有npm源配置" tabindex="-1">私有npm源配置 <a class="header-anchor" href="#私有npm源配置" aria-label="Permalink to &quot;私有npm源配置&quot;">​</a></h3><h4 id="项目里-npmrc配置" tabindex="-1">项目里.npmrc配置 <a class="header-anchor" href="#项目里-npmrc配置" aria-label="Permalink to &quot;项目里.npmrc配置&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">registry=http://nexus.fubao666.cn/repository/npm-all/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">registry=http://nexus.fubao666.cn/repository/npm-all/</span></span></code></pre></div><h4 id="pc切换npm源" tabindex="-1">pc切换npm源 <a class="header-anchor" href="#pc切换npm源" aria-label="Permalink to &quot;pc切换npm源&quot;">​</a></h4><h5 id="使用nrm-切换多个npm源" tabindex="-1">使用nrm 切换多个npm源 <a class="header-anchor" href="#使用nrm-切换多个npm源" aria-label="Permalink to &quot;使用nrm 切换多个npm源&quot;">​</a></h5><ul><li>安装nrm</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install -g nrm</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm install -g nrm</span></span></code></pre></div><ul><li>列出所有可用的 npm 源：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">nrm ls</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">nrm ls</span></span></code></pre></div><ul><li>使用某个 npm 源</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">nrm use &lt;registry&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">nrm use &lt;registry&gt;</span></span></code></pre></div><ul><li>添加自定义源：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">nrm add &lt;registry&gt; &lt;url&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">nrm add &lt;registry&gt; &lt;url&gt;</span></span></code></pre></div><ul><li>私有源对应添加示例</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">nrm add smartPrivate http://nexus.fubao666.cn/repository/npm-all/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">nrm add smartPrivate http://nexus.fubao666.cn/repository/npm-all/</span></span></code></pre></div><ul><li>切到私有npm源即可安装私域组件库包</li></ul><h3 id="smart-city-ui-组件-volar-类型提示" tabindex="-1">smart-city-ui 组件 Volar 类型提示 <a class="header-anchor" href="#smart-city-ui-组件-volar-类型提示" aria-label="Permalink to &quot;smart-city-ui 组件 Volar 类型提示&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 需要在使用的项目的tsconfig.json文件中添加以下</span></span>
<span class="line"><span style="color:#E1E4E8;">compilerOptions：{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;types&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;smart-city-ui/components.d.ts&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 需要在使用的项目的tsconfig.json文件中添加以下</span></span>
<span class="line"><span style="color:#24292E;">compilerOptions：{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;types&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;smart-city-ui/components.d.ts&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="docs-文档结构目录" tabindex="-1">docs 文档结构目录 <a class="header-anchor" href="#docs-文档结构目录" aria-label="Permalink to &quot;docs 文档结构目录&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">├─ examples               # VPDemo组件自动解析此文件夹下的所有.vue文件</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ components             # .md文件</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ public                 # 静态资源文件</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ .vitepress</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ config              # 插件配置</span></span>
<span class="line"><span style="color:#e1e4e8;">|  │  ├─ global.ts        # 全局变量定义</span></span>
<span class="line"><span style="color:#e1e4e8;">|  │  └─ plugins.ts       # 自定义.md文件渲染</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ theme               # 主题配置</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ utils               # 文档展开隐藏代码高亮</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ vitepress</span></span>
<span class="line"><span style="color:#e1e4e8;">|  │  ├─ vp-demo          # VPDemo组件源码</span></span>
<span class="line"><span style="color:#e1e4e8;">|  │  ├─ style            # VPDemo组件样式</span></span>
<span class="line"><span style="color:#e1e4e8;">|  │  └─ index.ts         # 暴露VPDemo组件</span></span>
<span class="line"><span style="color:#e1e4e8;">│  └─ config.ts           # vitepress配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ index.md               # 文档home页面</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ tsconfig.json          # typescript 全局配置</span></span>
<span class="line"><span style="color:#e1e4e8;">└─ vite.config.ts         # vite 全局配置文件（支持tsx）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">├─ examples               # VPDemo组件自动解析此文件夹下的所有.vue文件</span></span>
<span class="line"><span style="color:#24292e;">├─ components             # .md文件</span></span>
<span class="line"><span style="color:#24292e;">├─ public                 # 静态资源文件</span></span>
<span class="line"><span style="color:#24292e;">├─ .vitepress</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ config              # 插件配置</span></span>
<span class="line"><span style="color:#24292e;">|  │  ├─ global.ts        # 全局变量定义</span></span>
<span class="line"><span style="color:#24292e;">|  │  └─ plugins.ts       # 自定义.md文件渲染</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ theme               # 主题配置</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ utils               # 文档展开隐藏代码高亮</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ vitepress</span></span>
<span class="line"><span style="color:#24292e;">|  │  ├─ vp-demo          # VPDemo组件源码</span></span>
<span class="line"><span style="color:#24292e;">|  │  ├─ style            # VPDemo组件样式</span></span>
<span class="line"><span style="color:#24292e;">|  │  └─ index.ts         # 暴露VPDemo组件</span></span>
<span class="line"><span style="color:#24292e;">│  └─ config.ts           # vitepress配置文件</span></span>
<span class="line"><span style="color:#24292e;">├─ index.md               # 文档home页面</span></span>
<span class="line"><span style="color:#24292e;">├─ tsconfig.json          # typescript 全局配置</span></span>
<span class="line"><span style="color:#24292e;">└─ vite.config.ts         # vite 全局配置文件（支持tsx）</span></span></code></pre></div>`,26),o=[l];function t(c,i,r,d,y,u){return n(),a("div",null,o)}const g=s(e,[["render",t]]);export{h as __pageData,g as default};
