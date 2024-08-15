import{_ as t,r as o,o as l,c,a as e,b as n,d as s,e as i}from"./app-cfiD8PBZ.js";const r={},p=i(`<h1 id="script-eval" tabindex="-1"><a class="header-anchor" href="#script-eval"><span>Script Eval</span></a></h1><p>A capability registry to enable the use of eval() and Function() from string in Minecraft scripting.</p><p>Enable it in <code>manifest.json</code> if neccessary.</p><p>manifest.json</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;capabilities&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;script_eval&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><p>You can execute JavaScript code through the <code>Function</code> object or <code>eval</code> function.</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token string">&#39;console.log(&quot;Hello World&quot;)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;console.log(&quot;Hello World&quot;)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Check out the following links for more infomation:</p>`,10),d={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"Function",-1),v={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"eval",-1),_=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors"},[e("span",null,"Errors")])],-1),f=e("p",null,"Following errors are thrown if script_eval is not enabled:",-1),g=e("ul",null,[e("li",null,"'eval is not supported' or ''eval' is not defined'"),e("li",null,"Function from string is not supported")],-1);function m(b,k){const a=o("ExternalLinkIcon");return l(),c("div",null,[p,e("ul",null,[e("li",null,[e("a",d,[n("Detailed usage of "),u,n(" object"),s(a)])]),e("li",null,[e("a",v,[n("Detailed usage of "),h,n(" function"),s(a)])])]),_,f,g])}const x=t(r,[["render",m],["__file","script-eval.html.vue"]]);export{x as default};
