/* LUCINA B안 · lucina-nav.js — 이 스크립트가 놓인 자리에 섹션을 그립니다 (lucina-core.js 다음에 로드) */
(function () {
  var me = document.currentScript;
  var base = window.LUCINA_BASE || "https://cdn.jsdelivr.net/gh/subideok/lucina@main/";
  var html = "<!-- LUCINA B · 00 내비게이션 -->\n<header class=\"lb-root lb-nav\" data-lb-nav>\n  <div class=\"lb-wrap lb-nav__bar\">\n    <a class=\"lb-nav__logo\" href=\"#lb-hero\">LUCINA<small>루시나타로 · 루시나아카데미</small></a>\n    <nav class=\"lb-nav__menu\" id=\"lb-menu\" aria-label=\"주요 메뉴\">\n      <a href=\"#lb-intro\">루시나 소개</a>\n      <a href=\"#lb-reviews\">후기</a>\n      <a href=\"#lb-about\">원장 소개</a>\n      <a href=\"#lb-courses\">아카데미 과정</a>\n      <a href=\"#lb-faq\">FAQ</a>\n      <a href=\"#lb-visit\">오시는 길</a>\n      <a class=\"lb-nav__cta\" href=\"#lb-cta\">수강 상담</a>\n    </nav>\n    <button type=\"button\" class=\"lb-nav__toggle\" data-lb-toggle aria-controls=\"lb-menu\" aria-expanded=\"false\" aria-label=\"메뉴 열기\"><i></i><i></i></button>\n  </div>\n</header>\n".split('src="assets/images/').join('src="' + base + 'assets/images/');
  var box = document.createElement('div'); box.className = 'lucina-b-nav'; box.innerHTML = html;
  if (me && me.parentNode) me.parentNode.insertBefore(box, me); else document.body.appendChild(box);
  if (window.LucinaB) window.LucinaB.refresh();
})();
