import{_ as n,o as s,c as a,e as t}from"./app-MVtsPdFQ.js";const e="/scriptapi-docs/assets/item-properties-RDJYsyfh.png",p={},o=t(`<h1 id="dynamic-properties" tabindex="-1"><a class="header-anchor" href="#dynamic-properties"><span>Dynamic Properties</span></a></h1><p>Dynamic properties allows developers can save and load their own custom properties within a Minecraft world.</p><p>This allows data to be saved directly into disk, specifically world&#39;s LevelDB, and these values can be retrived after the server stopped and started again next time.</p><p>Dynamic properties are tied to a behavior pack&#39;s header UUID. Since behavior packs cannot access other behavior packs&#39; dynamic properties, when behavior pack&#39;s header UUID gets changed, the pack can no longer retrieve previous data.</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2><p>Requires <code>@minecraft/server@1.7.0</code> or above.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;module_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@minecraft/server&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.7.0&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><h3 id="set-property-world" tabindex="-1"><a class="header-anchor" href="#set-property-world"><span>Set Property (World)</span></a></h3><p>Sets a specified property to a value targeted to world.</p><details class="custom-container details"><summary>Code:</summary><p>Save a string property value:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> world <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@minecraft/server&quot;</span><span class="token punctuation">;</span>
world<span class="token punctuation">.</span><span class="token function">setDynamicProperty</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Save a numeric property value:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> world <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@minecraft/server&quot;</span><span class="token punctuation">;</span>
world<span class="token punctuation">.</span><span class="token function">setDynamicProperty</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Save a boolean property value:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> world <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@minecraft/server&quot;</span><span class="token punctuation">;</span>
world<span class="token punctuation">.</span><span class="token function">setDynamicProperty</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Save a Vector3 property value:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> world <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@minecraft/server&quot;</span><span class="token punctuation">;</span>
world<span class="token punctuation">.</span><span class="token function">setDynamicProperty</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details><p>Preview (Structure):</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>DynamicProperties
└───&lt;behavior_pack_header_uuid&gt;
       key: value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Details (LevelDB Format):</p><table><tr><td><strong>Key</strong></td> <td><strong>Value (NBT)</strong></td></tr><tr><td>DynamicProperties</td><td><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  TAG_Compound(<span class="token string">&quot;&lt;behavior_pack_header_uuid&gt;&quot;</span>) <span class="token punctuation">{</span>
    TAG_String(<span class="token string">&quot;key&quot;</span>)<span class="token operator">:</span> value
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr></table><h3 id="set-property-entity" tabindex="-1"><a class="header-anchor" href="#set-property-entity"><span>Set Property (Entity)</span></a></h3><p>Sets a specified property to a value targeted to a specific entity.</p><details class="custom-container details"><summary>Code:</summary><p>Get Player instance first:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> world <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@minecraft/server&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> player <span class="token operator">=</span> world<span class="token punctuation">.</span><span class="token function">getPlayers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Save a string property value:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>player<span class="token punctuation">.</span><span class="token function">setDynamicProperty</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Save a numeric property value:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>player<span class="token punctuation">.</span><span class="token function">setDynamicProperty</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Save a boolean property value:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>player<span class="token punctuation">.</span><span class="token function">setDynamicProperty</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Save a Vector3 property value:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>player<span class="token punctuation">.</span><span class="token function">setDynamicProperty</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><p>Preview (Structure):</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Player
└───DynamicProperties
    └───&lt;behavior_pack_header_uuid&gt;
            key: value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Details (LevelDB Format):</p><table><tr><td><strong>Key</strong></td> <td><strong>Value (NBT)</strong></td></tr><tr><td>&lt;Entity&gt;</td><td><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  TAG_Compound(<span class="token string">&quot;DynamicProperties&quot;</span>) <span class="token punctuation">{</span>
    TAG_Compound(<span class="token string">&quot;&lt;behavior_pack_header_uuid&gt;&quot;</span>) <span class="token punctuation">{</span>
      TAG_String(<span class="token string">&quot;key&quot;</span>)<span class="token operator">:</span> <span class="token string">&quot;value&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></tr></table><h3 id="set-property-item" tabindex="-1"><a class="header-anchor" href="#set-property-item"><span>Set Property (Item)</span></a></h3><p>Sets a specified property to a value targeted to a specific item.</p><details class="custom-container details"><summary>Code:</summary><p>Get ItemStack instance first:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> world <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@minecraft/server&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> player <span class="token operator">=</span> world<span class="token punctuation">.</span><span class="token function">getPlayers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> inventory <span class="token operator">=</span> player<span class="token punctuation">.</span><span class="token function">getComponent</span><span class="token punctuation">(</span><span class="token string">&quot;inventory&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> item <span class="token operator">=</span> inventory<span class="token punctuation">.</span>container<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>player<span class="token punctuation">.</span>selectedSlotIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Save a string property value:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>item<span class="token punctuation">.</span><span class="token function">setDynamicProperty</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Save a numeric property value:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>item<span class="token punctuation">.</span><span class="token function">setDynamicProperty</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Save a boolean property value:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>item<span class="token punctuation">.</span><span class="token function">setDynamicProperty</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Save a Vector3 property value:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>item<span class="token punctuation">.</span><span class="token function">setDynamicProperty</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><div class="custom-container warning"><p class="custom-container-title">Important</p><p><code>Container::getItem()</code> return an <code>ItemStack</code> instance which is not a &quot;reference type&quot;. It&#39;s a full copy being copied so if you fetch and modify it, you need to &quot;re-apply&quot; it back to the game.</p></div><p>Another way to directly apply changes to the game is to make changes to <code>ContainerSlot</code> class, for example through methods like <code>Container::getSlot()</code> or <code>EntityEquippableComponent::getEquipmentSlot()</code>.</p><details class="custom-container details"><summary>Code:</summary><p>Get <code>ContainerSlot</code> through <code>Container</code> class:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> world <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@minecraft/server&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> player <span class="token operator">=</span> world<span class="token punctuation">.</span><span class="token function">getPlayers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> inventory <span class="token operator">=</span> player<span class="token punctuation">.</span><span class="token function">getComponent</span><span class="token punctuation">(</span><span class="token string">&quot;inventory&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> slot <span class="token operator">=</span> inventory<span class="token punctuation">.</span>container<span class="token punctuation">.</span><span class="token function">getSlot</span><span class="token punctuation">(</span>player<span class="token punctuation">.</span>selectedSlotIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Get ContainerSlot through <code>EntityEquippableComponent</code> class:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> world<span class="token punctuation">,</span> EquipmentSlot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@minecraft/server&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> player <span class="token operator">=</span> world<span class="token punctuation">.</span><span class="token function">getPlayers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> equippable <span class="token operator">=</span> player<span class="token punctuation">.</span><span class="token function">getComponent</span><span class="token punctuation">(</span><span class="token string">&quot;equippable&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> slot <span class="token operator">=</span> equippable<span class="token punctuation">.</span><span class="token function">getEquipmentSlot</span><span class="token punctuation">(</span>EquipmentSlot<span class="token punctuation">.</span>Mainhand<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>Preview:</p><p><img src="`+e+'" alt="item_has_properties"></p>',30),c=[o];function i(l,u){return s(),a("div",null,c)}const d=n(p,[["render",i],["__file","dynamic-properties.html.vue"]]);export{d as default};
