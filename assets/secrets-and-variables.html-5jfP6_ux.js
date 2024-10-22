import{_ as e,r as t,o,c as p,b as n,d as s,e as i,a as c}from"./app-rEJue9fk.js";const l={},r=n("h1",{id:"secrets-and-variables",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#secrets-and-variables"},[n("span",null,"Secrets and Variables")])],-1),u=n("p",null,[s("Guides related to configuration of variables and secrets in JSON files in the Bedrock Dedicated Server folder via the "),n("code",null,"@minecraft/server-admin"),s(" module.")],-1),d={class:"custom-container warning"},v=n("p",{class:"custom-container-title"},"WARNING",-1),k={href:"https://www.minecraft.net/en-us/download/server/bedrock",target:"_blank",rel:"noopener noreferrer"},m=c(`<h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables"><span>Variables</span></a></h2><p>Variables are properties that has been configured in a dedicated server configuration JSON file.</p><h3 id="storing-variables" tabindex="-1"><a class="header-anchor" href="#storing-variables"><span>Storing Variables</span></a></h3><p>JSON format for <code>variables.json</code> is <code>Record&lt;string, any&gt;</code>. The file is located in <code>config/&lt;pack_id&gt;/variables.json</code>.</p><div class="language-jsonc line-numbers-mode" data-ext="jsonc" data-title="jsonc"><pre class="language-jsonc"><code>{
  &quot;myVariable&quot;: &quot;Foo bar&quot;, // string to any
  &quot;myVariable2&quot;: {
    &quot;bar&quot;: &quot;baz&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="loading-variables" tabindex="-1"><a class="header-anchor" href="#loading-variables"><span>Loading Variables</span></a></h3><p>To load the variables in Minecraft, first add <code>@minecraft/server-admin</code> module to <code>manifest.json</code> dependency:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;module_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@minecraft/server-admin&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0-beta&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then get the value of variables from the API module through <code>varaibles.get()</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> variables <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@minecraft/server-admin&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// A list of available, configured server variables.</span>
console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>variables<span class="token punctuation">.</span>names<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Returns the value of variable that has been configured in a dedicated server configuration JSON file.</span>
console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>variables<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;myVariables&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Foo bar</span>
console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>variables<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;myVariable2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { &quot;bar&quot;: &quot;baz&quot; }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="secrets" tabindex="-1"><a class="header-anchor" href="#secrets"><span>Secrets</span></a></h2><p>Secrets defined in dedicated server configuration, it&#39;s value is not available to view in script environment.</p><h3 id="storing-secrets" tabindex="-1"><a class="header-anchor" href="#storing-secrets"><span>Storing Secrets</span></a></h3><p>JSON format for <code>secrets.json</code> is <code>Record&lt;string, string&gt;</code>:</p><div class="language-jsonc line-numbers-mode" data-ext="jsonc" data-title="jsonc"><pre class="language-jsonc"><code>{
  &quot;secretToken&quot;: &quot;jayly123&quot; // string to string only
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The file is located in <code>config/&lt;pack_id&gt;/secrets.json</code>.</p><h3 id="loading-secrets" tabindex="-1"><a class="header-anchor" href="#loading-secrets"><span>Loading Secrets</span></a></h3><p>Secrets are used in HTTP requests via <code>@minecraft/server-net</code>.</p><p>To load the secrets in Minecraft, first add <code>@minecraft/server-admin</code> and <code>@minecraft/server-net</code> module to <code>manifest.json</code> dependency:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;module_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@minecraft/server-admin&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0-beta&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    <span class="token property">&quot;module_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@minecraft/server-net&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0-beta&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then get the value of variables from the API module through <code>secrets.get()</code>:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> variables<span class="token punctuation">,</span> secrets <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@minecraft/server-admin&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  http<span class="token punctuation">,</span>
  HttpRequest<span class="token punctuation">,</span>
  HttpRequestMethod<span class="token punctuation">,</span>
  HttpHeader<span class="token punctuation">,</span>
  HttpResponse<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@minecraft/server-net&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> serverUrl <span class="token operator">=</span> variables<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;serverEndpoint&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getPlayerProfile</span><span class="token punctuation">(</span>playerId<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>HttpResponse<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> req <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HttpRequest</span><span class="token punctuation">(</span>serverUrl <span class="token operator">+</span> <span class="token string">&quot;getPlayerProfile&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  req<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    playerId<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> authTokenSec <span class="token operator">=</span> secrets<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;authtoken&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>authTokenSec<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;authtoken secret not defined.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  req<span class="token punctuation">.</span>method <span class="token operator">=</span> HttpRequestMethod<span class="token punctuation">.</span>Post<span class="token punctuation">;</span>
  req<span class="token punctuation">.</span>headers <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HttpHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">HttpHeader</span><span class="token punctuation">(</span><span class="token string">&quot;auth&quot;</span><span class="token punctuation">,</span> authTokenSec<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">getPlayerProfile</span><span class="token punctuation">(</span><span class="token string">&quot;dark navi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function b(g,h){const a=t("ExternalLinkIcon");return o(),p("div",null,[r,u,n("div",d,[v,n("p",null,[s("This feature is only available to "),n("a",k,[s("Bedrock Dedicated Servers"),i(a)]),s(", and it cannot be used on Minecraft clients.")])]),m])}const q=e(l,[["render",b],["__file","secrets-and-variables.html.vue"]]);export{q as default};
