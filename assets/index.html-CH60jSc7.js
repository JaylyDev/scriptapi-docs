import{_ as s,c as a,a as t,o as p}from"./app-D6kwC9EA.js";const e={};function o(c,n){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="custom-typedoc-assets" tabindex="-1"><a class="header-anchor" href="#custom-typedoc-assets"><span>Custom TypeDoc Assets</span></a></h1><p>Custom HTML, CSS, and JavaScript files used to migrate our features with TypeDoc&#39;s default assets.</p><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><ul><li>Google supported ad sizes: https://support.google.com/admanager/answer/1100453</li><li>TypeDoc&#39;s listenForCodeCopies implementation: https://github.com/TypeStrong/typedoc/blob/v0.27.2/src/lib/output/themes/default/assets/typedoc/Application.ts#L213<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">listenForCodeCopies</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&quot;pre &gt; button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> timeout<span class="token operator">:</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> setTimeout<span class="token operator">&gt;</span><span class="token punctuation">;</span></span>
<span class="line">    button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>button<span class="token punctuation">.</span>previousElementSibling <span class="token keyword">instanceof</span> <span class="token class-name">HTMLElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span><span class="token function">writeText</span><span class="token punctuation">(</span></span>
<span class="line">          button<span class="token punctuation">.</span>previousElementSibling<span class="token punctuation">.</span>innerText<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      button<span class="token punctuation">.</span>textContent <span class="token operator">=</span> window<span class="token punctuation">.</span>translations<span class="token punctuation">.</span>copied<span class="token punctuation">;</span></span>
<span class="line">      button<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;visible&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        button<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;visible&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">          button<span class="token punctuation">.</span>textContent <span class="token operator">=</span> window<span class="token punctuation">.</span>translations<span class="token punctuation">.</span>copy<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,4)]))}const l=s(e,[["render",o],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/assets/typedoc/","title":"Custom TypeDoc Assets","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]}],"git":{"updatedTime":1733082538000,"contributors":[{"name":"Jayly","email":"65847850+JaylyDev@users.noreply.github.com","commits":1,"url":"https://github.com/Jayly"}]},"filePathRelative":"assets/typedoc/README.md"}');export{l as comp,u as data};
