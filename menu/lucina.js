/* LUCINA B안 · b.js — 메뉴 토글, 후기 탭, 문의·알림 폼
   [문의 채널] TALK_URL 에 네이버 톡톡 링크 입력 (카카오톡 채널로 바꿀 때 이 값만 교체) */
(function (d) {
  var TALK_URL = '';
  var MAIL = 'lucinataro@gmail.com';
  /* [페이지 주소] 아임웹 메뉴 주소를 받으면 여기만 교체 */
  var LINKS = window.LUCINA_LINKS || { home: '/', about: '/', tarot: '/tarot', academy: '/academy', hobby: '/academy-hobby', expert: '/academy-expert', reading: '/academy-reading', teacher: '/academy-teacher', oneday: '/academy-oneday', online: '/online', faq: '/faq', visit: '/visit', kakao: 'https://pf.kakao.com/_BCAxaX/chat' };
  function init() {
    d.querySelectorAll('[data-lb-link]').forEach(function (a) { var v = a.getAttribute('data-lb-link').split('#'); if (LINKS[v[0]] != null) a.href = LINKS[v[0]] + (v[1] ? '#' + v[1] : ''); });
    d.querySelectorAll('[data-lb-ext]').forEach(function (a) { var u = LINKS[a.getAttribute('data-lb-ext')]; if (u) a.href = u; });
    d.querySelectorAll('[data-lb-talk]').forEach(function (a) { if (TALK_URL) a.href = TALK_URL; else { a.href = '#lb-cta'; a.removeAttribute('target'); } });
    d.querySelectorAll('[data-lb-tabs]').forEach(function (box) {
      if (box.__lb) return; box.__lb = 1;
      var btns = box.querySelectorAll('[data-lb-tab]'), panels = box.querySelectorAll('[data-lb-panel]');
      btns.forEach(function (b) { b.addEventListener('click', function () {
        btns.forEach(function (x) { x.setAttribute('aria-selected', x === b ? 'true' : 'false'); });
        panels.forEach(function (p) { p.hidden = p.getAttribute('data-lb-panel') !== b.getAttribute('data-lb-tab'); });
      }); });
    });
  }
  if (!window.__lbBound) {
    window.__lbBound = 1;
    d.addEventListener('click', function (e) {
      var t = e.target.closest && e.target.closest('[data-lb-toggle]');
      if (t) { var nav = t.closest('.lb-nav'); var o = nav.classList.toggle('is-open'); t.setAttribute('aria-expanded', o ? 'true' : 'false'); return; }
      var a = e.target.closest && e.target.closest('.lb-nav__menu a'); if (a) a.closest('.lb-nav').classList.remove('is-open');
    });
    d.addEventListener('click', function (e) {
      var im = e.target.closest && e.target.closest('.lb-intro__ph img'); if (!im) return;
      var o = d.createElement('div'); o.className = 'lb-zoom'; o.setAttribute('role', 'dialog'); o.setAttribute('aria-label', '사진 크게 보기');
      o.innerHTML = '<img src="' + im.src + '" alt="' + (im.alt || '') + '"><button type="button" aria-label="닫기">×</button>';
      function close() { o.classList.remove('is-on'); d.removeEventListener('keydown', esc); setTimeout(function () { o.remove(); }, 300); }
      function esc(ev) { if (ev.key === 'Escape') close(); }
      o.addEventListener('click', close); d.addEventListener('keydown', esc);
      d.body.appendChild(o); requestAnimationFrame(function () { o.classList.add('is-on'); }); o.querySelector('button').focus();
    });
    d.addEventListener('click', function (e) {
      var card = e.target.closest && e.target.closest('.lb-mq .lb-rv2'); if (!card) return;
      var o = d.createElement('div'); o.className = 'lb-root lb-rvz'; o.setAttribute('role', 'dialog'); o.setAttribute('aria-label', '후기 크게 보기');
      o.innerHTML = '<div class="lb-rvz__card">' + card.innerHTML + '<button type="button" class="lb-rvz__x" aria-label="닫기">×</button></div>';
      function close() { o.classList.remove('is-on'); d.removeEventListener('keydown', esc); setTimeout(function () { o.remove(); }, 300); }
      function esc(ev) { if (ev.key === 'Escape') close(); }
      o.addEventListener('click', function (ev) { if (ev.target === o || ev.target.closest('.lb-rvz__x')) close(); }); d.addEventListener('keydown', esc);
      d.body.appendChild(o); requestAnimationFrame(function () { o.classList.add('is-on'); }); o.querySelector('button').focus();
    });
    d.addEventListener('click', function (e) {
      var box = e.target.closest && e.target.closest('.lb-vid'); if (!box) return;
      var v = box.querySelector('video'), btn = box.querySelector('.lb-vid__snd'), on = v.muted;
      d.querySelectorAll('.lb-vid').forEach(function (b) { var x = b.querySelector('video'); x.muted = true; b.classList.remove('is-sound'); var s = b.querySelector('.lb-vid__snd span'); if (s) s.textContent = '소리 켜기'; });
      if (on) { v.muted = false; v.currentTime = 0; v.play(); box.classList.add('is-sound'); if (btn) btn.querySelector('span').textContent = '소리 끄기'; }
    });
    d.addEventListener('submit', function (e) {
      var f = e.target; if (!f.matches || !f.matches('[data-lb-form]')) return;
      var msg = f.querySelector('[data-lb-msg]');
      if (!f.elements['이름'].value.trim() || !f.elements['연락처'].value.trim()) { e.preventDefault(); msg.textContent = '이름과 연락처를 입력해 주세요.'; return; }
      if (!f.elements.privacy.checked) { e.preventDefault(); msg.textContent = '개인정보 수집·이용에 동의해 주세요.'; return; }
      if (f.getAttribute('action')) return;
      e.preventDefault();
      var lines = []; new FormData(f).forEach(function (v, k) { if (k !== 'privacy') lines.push(k + ': ' + (v === 'on' ? '동의' : v)); });
      var subj = f.getAttribute('data-lb-subject') || '수강 상담 신청';
      location.href = 'mailto:' + MAIL + '?subject=' + encodeURIComponent('[' + subj + '] ' + f.elements['이름'].value) + '&body=' + encodeURIComponent(lines.join('\n'));
      msg.textContent = '이메일 작성 창이 열립니다. 전송하시면 신청이 완료됩니다.';
    });
  }
  function carousel() {
    d.querySelectorAll('[data-lb-carousel]').forEach(function (el) {
      if (el.__lbc) return; el.__lbc = 1;
      var paused = false, t;
      ['touchstart','pointerdown','mouseenter'].forEach(function (ev) { el.addEventListener(ev, function () { paused = true; clearTimeout(t); t = setTimeout(function () { paused = false; }, 6000); }, { passive: true }); });
      setInterval(function () {
        if (paused || el.scrollWidth <= el.clientWidth + 4 || !el.offsetParent) return;
        var item = el.children[0]; if (!item) return;
        var step = item.getBoundingClientRect().width + 12;
        var atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
        el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + step, behavior: 'smooth' });
      }, 3500);
    });
  }
  var _init = init; init = function () { _init(); carousel(); };
  window.LucinaB = { refresh: init };
  if (d.readyState !== 'loading') init(); else d.addEventListener('DOMContentLoaded', init);
})(document);
