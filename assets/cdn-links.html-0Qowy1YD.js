import{_ as a,o as t,c as e,e as s}from"./app-TWVB8uj_.js";const i={},n=s(`<h1 id="cdn-links" tabindex="-1"><a class="header-anchor" href="#cdn-links"><span>CDN Links</span></a></h1><p>A list of links related to Minecraft Script API assets. I will do my best to keep this list up to date as I continue to find useful content.</p><h2 id="minecraft-math-library-mirror" tabindex="-1"><a class="header-anchor" href="#minecraft-math-library-mirror"><span>Minecraft Math Library Mirror</span></a></h2><p>Minified versions of <code>@minecraft/math</code> module are available at:</p><ul><li><p><code>dist/minecraft-math.js</code></p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>https://jaylydev.github.io/scriptapi-docs/assets/meta/math/latest/minecraft-math.js
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">IMPORTANT</p><p>The <code>@minecraft/math</code> library export variables through default export. To use the classes from this standalone file, import the class using the following method:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> minecraftmath <span class="token keyword">from</span> <span class="token string">&quot;minecraft-math.js&quot;</span><span class="token punctuation">;</span> <span class="token comment">// file is saved as scripts/minecraft-math.js</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Vector3Builder <span class="token punctuation">}</span> <span class="token operator">=</span> minecraftmath<span class="token punctuation">;</span> <span class="token comment">// retrieve Vector3Builder class</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></li><li><p><code>lib/types/math-public.d.ts</code></p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>https://jaylydev.github.io/scriptapi-docs/assets/meta/math/latest/minecraft-math.d.ts
</code></pre></div><p>Save this file in the same directory as <code>minecraft-math.js</code> to get type definition for VSCode.</p></li><li><p><code>dist/minecraft-math.js.map</code></p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>https://jaylydev.github.io/scriptapi-docs/assets/meta/math/latest/minecraft-math.js.map
</code></pre></div></li></ul><h2 id="minecraft-vanilla-data-mirror" tabindex="-1"><a class="header-anchor" href="#minecraft-vanilla-data-mirror"><span>Minecraft Vanilla Data Mirror</span></a></h2><p>Minified versions of <code>@minecraft/vanilla-data</code> module are available at:</p><ul><li><code>lib/index.js</code> (latest)<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>https://jaylydev.github.io/scriptapi-docs/assets/meta/vanilla-data/latest/index.js
</code></pre></div></li><li><code>lib/index.js</code> (preview)<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>https://jaylydev.github.io/scriptapi-docs/assets/meta/vanilla-data/preview/index.js
</code></pre></div></li></ul>`,8),c=[n];function l(d,o){return t(),e("div",null,c)}const p=a(i,[["render",l],["__file","cdn-links.html.vue"]]);export{p as default};