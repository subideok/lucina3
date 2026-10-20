/* LUCINA B안 · lucina-visit.js — 이 스크립트가 놓인 자리에 섹션을 그립니다 (lucina-core.js 다음에 로드) */
(function () {
  var me = document.currentScript;
  var base = window.LUCINA_BASE || "https://cdn.jsdelivr.net/gh/subideok/lucina3@main/";
  var html = "<!-- LUCINA B · 12 오시는 길 -->\n<section class=\"lb-root lb-sec lb-sec--white\" id=\"lb-visit\" aria-labelledby=\"lb-visit-title\">\n  <div class=\"lb-wrap lb-visit\">\n    <div>\n      <p class=\"lb-label\">오시는 길</p>\n      <h2 class=\"lb-h2\" id=\"lb-visit-title\">대연동 푸르지오써밋 상가<br>2층 212호</h2>\n      <dl class=\"lb-table lb-table--sm\"><div><dt>주소</dt><dd>부산 남구 대연동 푸르지오써밋 상가 2층 212호<br>(황령대로 504)</dd></div><div><dt>주차</dt><dd><span class=\"lb-todo\">[주차 안내 입력]</span></dd></div><div><dt>출입</dt><dd><span class=\"lb-todo\">[엘리베이터·출입 안내 입력]</span></dd></div><div><dt>응대 시간</dt><dd>평일 09:00~20:00 · 토 11:00~18:00 · 일요일 휴무</dd></div></dl>\n      <a class=\"lb-link\" href=\"https://naver.me/5o0tePjF\" target=\"_blank\" rel=\"noopener\">네이버 지도에서 보기 <span class=\"lb-arrow\" aria-hidden=\"true\">→</span></a>\n    </div>\n    <div class=\"lb-ph\" style=\"aspect-ratio:4/3\"><b>사진 필요</b><strong>지도</strong><span>네이버 지도 캡처 또는 지도 위젯 자리 · 가로 4:3</span></div>\n  </div>\n</section>\n".split('src="assets/images/').join('src="' + base + 'assets/images/');
  var box = document.createElement('div'); box.className = 'lucina-b-visit'; box.innerHTML = html;
  var root = document.getElementById('lucina-b-root');
  if (root) root.appendChild(box);
  else if (me && me.parentNode && me.parentNode !== document.head) me.parentNode.insertBefore(box, me);
  else document.body.appendChild(box);
  if (window.LucinaB) window.LucinaB.refresh();
})();
