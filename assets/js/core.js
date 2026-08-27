/* ============================================================
   VENUS WORLD — script chung cho bản concept
   Giữ đúng API mà luat.js đang dùng: VENUS.accordion, VENUS.reveal
   ============================================================ */
(function(){
  'use strict';
  var $  = function(s,c){ return (c||document).querySelector(s); };
  var $$ = function(s,c){ return Array.prototype.slice.call((c||document).querySelectorAll(s)); };
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.VENUS = window.VENUS || {};

  /* ---------- cấu hình vào DOM ---------- */
  $$('[data-discord]').forEach(function(a){ a.href = CONFIG.discord; });
  $$('[data-ip]').forEach(function(el){ el.textContent = CONFIG.ip; });

  /* ---------- hiện dần khi cuộn ---------- */
  var io = null;
  if (window.IntersectionObserver){
    io = new IntersectionObserver(function(list){
      list.forEach(function(e){
        if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    $$('.reveal').forEach(function(e, i){
      e.style.transitionDelay = ((i % 4) * 0.06).toFixed(2) + 's';
      io.observe(e);
    });
  } else {
    $$('.reveal').forEach(function(e){ e.classList.add('in'); });
  }
  VENUS.reveal = function(el){ if (!el) return; if (io) io.observe(el); else el.classList.add('in'); };

  /* ---------- header ---------- */
  (function(){
    var hdr = $('#hdr'), top = $('#toTop');
    if (!hdr) return;
    var raf = 0;
    function frame(){
      raf = 0;
      var y = window.pageYOffset || document.documentElement.scrollTop || 0;
      hdr.classList.toggle('solid', y > 24);
      if (top) top.classList.toggle('show', y > (window.innerHeight || 800) * 0.6);
    }
    function onScroll(){ if (!raf) raf = requestAnimationFrame(frame); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    if (top) top.addEventListener('click', function(){
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    });
  })();

  /* ---------- menu mobile ---------- */
  (function(){
    var b = $('#burger'), d = $('#drawer');
    if (!b || !d) return;
    function close(){ b.classList.remove('x'); d.classList.remove('open'); document.body.classList.remove('lock'); }
    b.addEventListener('click', function(){
      var open = !d.classList.contains('open');
      b.classList.toggle('x', open);
      d.classList.toggle('open', open);
      document.body.classList.toggle('lock', open);
    });
    $$('a', d).forEach(function(a){ a.addEventListener('click', close); });
    window.addEventListener('keydown', function(e){ if (e.key === 'Escape') close(); });
  })();

  /* ---------- đếm ngược ---------- */
  (function(){
    var d = $('[data-cd="d"]'), h = $('[data-cd="h"]'), m = $('[data-cd="m"]'), s = $('[data-cd="s"]');
    if (!d) return;
    var target = new Date(CONFIG.openDate).getTime();
    if (isNaN(target)) return;
    function pad(n){ return (n < 10 ? '0' : '') + n; }
    function tick(){
      var sec = Math.floor(Math.max(0, target - Date.now()) / 1000);
      d.textContent = pad(Math.floor(sec / 86400));
      h.textContent = pad(Math.floor(sec / 3600) % 24);
      m.textContent = pad(Math.floor(sec / 60) % 60);
      s.textContent = pad(sec % 60);
    }
    tick(); setInterval(tick, 1000);
  })();

  /* ---------- thông báo ngắn ---------- */
  var tT;
  function toast(msg){
    var t = $('#toast'); if (!t) return;
    t.textContent = msg; t.classList.add('show');
    clearTimeout(tT); tT = setTimeout(function(){ t.classList.remove('show'); }, 2000);
  }
  VENUS.toast = toast;

  /* ---------- copy IP ---------- */
  $$('[data-copy-ip]').forEach(function(b){
    b.addEventListener('click', function(){
      var txt = CONFIG.ip;
      function xong(){ toast('Đã copy: ' + txt); }
      if (navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(txt).then(xong, xong);
      } else {
        try{
          var ta = document.createElement('textarea');
          ta.value = txt; ta.style.position = 'fixed'; ta.style.opacity = '0';
          document.body.appendChild(ta); ta.select(); document.execCommand('copy');
          document.body.removeChild(ta);
        }catch(e){}
        xong();
      }
    });
  });

  /* ---------- accordion (dùng cho trang luật) ---------- */
  function accordion(host, rows, opt){
    if (!host) return [];
    opt = opt || {};
    var made = [];
    rows.forEach(function(r, i){
      var title = Array.isArray(r) ? r[0] : r.t;
      var text  = Array.isArray(r) ? r[1] : r.n;
      var num   = (opt.start || 1) + i;
      var nhan  = (!Array.isArray(r) && r.so) ? r.so
                : (opt.numbered ? ((num < 10 ? '0' : '') + num) : '·');

      var wrap = document.createElement('div'); wrap.className = 'rule';
      var head = document.createElement('button'); head.className = 'rule-h'; head.type = 'button';
      head.innerHTML = '<span class="rule-n"></span><span class="rule-t"></span><span class="rule-x"></span>';
      $('.rule-n', head).textContent = nhan;
      $('.rule-t', head).textContent = title;

      var body = document.createElement('div'); body.className = 'rule-b';
      var paras = (Array.isArray(text) ? text.slice() : [text])
        .filter(function(x){ return x && (typeof x !== 'string' || x.trim()); });
      var gon = function(s){
        return typeof s === 'string' ? s.replace(/^[-–+•*\s]+/, '').replace(/\s+/g, ' ').trim() : '';
      };
      if (paras.length && gon(paras[0]) && gon(paras[0]) === gon(title) &&
          (paras.length > 1 || (!Array.isArray(r) && r.phat))){
        paras.shift();
      }
      paras.forEach(function(x){
        if (x && typeof x === 'object' && x.ds){
          var ul = document.createElement('ul'); ul.className = 'rule-ds';
          x.ds.forEach(function(li){ var l = document.createElement('li'); l.textContent = li; ul.appendChild(l); });
          body.appendChild(ul);
        } else {
          var p = document.createElement('p'); p.textContent = x; body.appendChild(p);
        }
      });
      if (!Array.isArray(r) && r.phat){
        var ph = document.createElement('div'); ph.className = 'rule-phat';
        ph.innerHTML = '<b>Mức xử lý</b><span></span>';
        $('span', ph).textContent = r.phat;
        body.appendChild(ph);
      }

      wrap.appendChild(head); wrap.appendChild(body); host.appendChild(wrap);
      wrap.dataset.find = ((title || '') + ' ' + JSON.stringify(paras)).toLowerCase();

      head.addEventListener('click', function(){
        var open = wrap.classList.toggle('open');
        body.style.maxHeight = open ? (body.scrollHeight + 'px') : '0px';
        if (!opt.multi){
          $$('.rule', host).forEach(function(o){
            if (o !== wrap && o.classList.contains('open')){
              o.classList.remove('open');
              $('.rule-b', o).style.maxHeight = '0px';
            }
          });
        }
      });
      if (opt.openFirst && i === 0){
        wrap.classList.add('open');
        requestAnimationFrame(function(){ body.style.maxHeight = body.scrollHeight + 'px'; });
      }
      made.push(wrap);
    });
    window.addEventListener('resize', function(){
      $$('.rule.open', host).forEach(function(o){
        $('.rule-b', o).style.maxHeight = $('.rule-b', o).scrollHeight + 'px';
      });
    });
    return made;
  }
  VENUS.accordion = accordion;

  if (window.VENUS_FAQ) accordion($('#faq'), window.VENUS_FAQ, { openFirst: true });

  /* ---------- cuộn mượt tới neo trong trang ---------- */
  document.addEventListener('click', function(e){
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href').slice(1);
    if (!id) return;
    var el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    var y = el.getBoundingClientRect().top + window.pageYOffset - 78;
    window.scrollTo({ top: Math.max(0, y), behavior: reduce ? 'auto' : 'smooth' });
    history.replaceState(null, '', '#' + id);
  });

})();
