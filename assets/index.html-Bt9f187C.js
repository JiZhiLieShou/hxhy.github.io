import{_ as a,c as n,b as t,o as p}from"./app-Dk-TxpwB.js";const l="/assets/format_png-jg4ujJNt.png",m={};function i(e,s){return p(),n("div",null,s[0]||(s[0]=[t('<h2 id="正规化" tabindex="-1"><a class="header-anchor" href="#正规化"><span>正规化</span></a></h2><p><code>数据处理</code></p><blockquote><p>消除数据差异</p></blockquote><ul><li>数据归一化缩放到0-1范围</li><li>数据标准化转换为均值为0标准差为1的分布</li></ul><h2 id="归一化" tabindex="-1"><a class="header-anchor" href="#归一化"><span>归一化</span></a></h2><ul><li>数据转换到0-1之间</li></ul><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mfrac><mrow><msub><mi>X</mi><mi>i</mi></msub><mo>−</mo><msub><mi>X</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi></mrow></msub></mrow><mrow><msub><mi>X</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi></mrow></msub><mo>−</mo><msub><mi>X</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi></mrow></msub></mrow></mfrac></mrow><annotation encoding="application/x-tex"> \\frac{X_i-X_{min}}{X_{max}-X_{min}} </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.1963em;vertical-align:-0.836em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0785em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">ma</span><span class="mord mathnormal mtight">x</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0785em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">min</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0785em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0785em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">min</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.836em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p><h2 id="中心化-零均值化" tabindex="-1"><a class="header-anchor" href="#中心化-零均值化"><span>中心化/零均值化</span></a></h2><blockquote><p>将每个原始数据减去这些数据的均值</p></blockquote><ul><li>中心化后的数据均值为0</li></ul><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msub><mi>X</mi><mi>i</mi></msub><mo>−</mo><mi>μ</mi></mrow><annotation encoding="application/x-tex"> X_i-\\mu </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0785em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">μ</span></span></span></span></span></p><h2 id="标准化" tabindex="-1"><a class="header-anchor" href="#标准化"><span>标准化</span></a></h2><blockquote><p>减均值之后，再除以标准差。</p></blockquote><ul><li>将数据变换为均值为0，标准差为1的分布</li></ul><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mfrac><mrow><msub><mi>X</mi><mi>i</mi></msub><mo>−</mo><mi>μ</mi></mrow><mi>σ</mi></mfrac></mrow><annotation encoding="application/x-tex"> \\frac{X_i-\\mu}\\sigma </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.0463em;vertical-align:-0.686em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">σ</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0785em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">μ</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p><p><img src="'+l+'" alt="img" loading="lazy"></p><h2 id="正则化" tabindex="-1"><a class="header-anchor" href="#正则化"><span>正则化</span></a></h2><p><code>模型训练</code></p><blockquote><p>向模型的损失函数添加一个惩罚项来防止过拟合</p></blockquote><ul><li>L1正则化（Lasso正则化）</li><li>L2正则化（Ridge正则化）</li></ul>',20)]))}const r=a(m,[["render",i],["__file","index.html.vue"]]),o=JSON.parse('{"path":"/article/f54ke780/","title":"归正一则规化","lang":"zh-CN","frontmatter":{"title":"归正一则规化","createTime":"2024/10/09 08:35:26","tags":["Deeping Learning"],"permalink":"/article/f54ke780/"},"headers":[],"readingTime":{"minutes":0.73,"words":220},"git":{"updatedTime":1731246859000,"contributors":[{"name":"旭阳","email":"1912452912@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/旭阳?v=4","url":"https://github.com/旭阳"}]},"filePathRelative":"blog/归正一则规化.md","categoryList":[{"id":"126ac9","sort":10007,"name":"blog"}],"bulletin":false}');export{r as comp,o as data};