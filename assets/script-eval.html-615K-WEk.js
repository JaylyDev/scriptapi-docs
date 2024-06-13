import{_ as s,o as a,c as n,e}from"./app-mJ-RUf6k.js";const t={},i=e(`<h1 id="script-eval" tabindex="-1"><a class="header-anchor" href="#script-eval"><span>Script Eval</span></a></h1><p>A capability registry to enable the use of eval() and Function() from string in Minecraft scripting.</p><p>Enable it in <code>manifest.json</code> if neccessary.</p><p>manifest.json</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;capabilities&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;script_eval&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors"><span>Errors</span></a></h2><p>Following errors are thrown if script_eval is not enabled:</p><ul><li>Function from string is not supported</li></ul><p>Example:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token string">&#39;console.log(&quot;Hello World&quot;)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>&#39;eval is not supported&#39; or &#39;&#39;eval&#39; is not defined&#39;</li></ul><p>Example:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;console.log(&quot;Hello World&quot;)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),o=[i];function l(c,p){return a(),n("div",null,o)}const d=s(t,[["render",l],["__file","script-eval.html.vue"]]);export{d as default};
