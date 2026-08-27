/* ============================================================
   VENUS WORLD — SCRIPT CHUNG (dùng cho mọi trang)
   Cấu hình Discord / IP / ngày mở nằm ở assets/js/config.js
   ============================================================ */
(function(){
  'use strict';
  var $  = function(s,c){ return (c||document).querySelector(s); };
  var $$ = function(s,c){ return Array.prototype.slice.call((c||document).querySelectorAll(s)); };
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var touch  = window.matchMedia && window.matchMedia('(hover: none)').matches;

  window.VENUS = window.VENUS || {};

  /* ---------- CONFIG áp vào DOM ---------- */
  $$('[data-discord]').forEach(function(a){ a.href = CONFIG.discord; });
  $$('[data-ip]').forEach(function(el){ el.textContent = CONFIG.ip; });

  /* ---------- SPLASH (chỉ trang chủ, chỉ 1 lần mỗi phiên) ---------- */
  (function(){
    var splash = $('#splash');
    if (!splash) return;

    var seen = false;
    try { seen = sessionStorage.getItem('vw-splash') === '1'; } catch(e){}
    if (seen){
      splash.parentNode.removeChild(splash);
      return;
    }

    var fill = $('#spFill'), pct = $('#spPct');
    var imgs = $$('img').filter(function(i){ return (i.getAttribute('src')||'').indexOf('assets/') === 0 || (i.getAttribute('src')||'').indexOf('data:') === 0; });
    var total = Math.max(1, imgs.length), done = 0, val = 0, ended = false;
    function paint(v){
      val = Math.max(val, Math.min(100, Math.round(v)));
      fill.style.width = val + '%';
      pct.textContent = (val < 10 ? '0' : '') + val + '%';
    }
    function bump(){ done++; paint(done / total * 92); }
    imgs.forEach(function(i){
      if (i.complete) bump();
      else { i.addEventListener('load', bump); i.addEventListener('error', bump); }
    });
    function finish(){
      if (ended) return; ended = true;
      try { sessionStorage.setItem('vw-splash','1'); } catch(e){}
      paint(100);
      setTimeout(function(){
        splash.classList.add('gone');
        document.body.classList.remove('is-locked');
        setTimeout(function(){ if (splash.parentNode) splash.parentNode.removeChild(splash); }, 900);
      }, 620);
    }
    document.body.classList.add('is-locked');
    var ready = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
    ready.then(function(){
      if (document.readyState === 'complete') finish();
      else window.addEventListener('load', finish);
    });
    setTimeout(finish, 5200);
  })();

  /* ---------- SPRINKLES RƠI ---------- */
  (function(){
    if (reduce) return;
    var box = $('#fall'); if (!box) return;
    var COLORS = ['#FF8FD1','#FFC2E6','#B98BFF','#DCC7FF','#A9D9FF','#9BE9D6','#FFE39A','#FFC2AE'];
    var n = touch ? 12 : 24, frag = document.createDocumentFragment();
    for (var i = 0; i < n; i++){
      var p = document.createElement('span');
      p.className = 'sprk';
      var round = Math.random() < 0.4;
      var w = round ? (6 + Math.random() * 7) : (9 + Math.random() * 10);
      var hh = round ? w : (4 + Math.random() * 3);
      p.style.left = (Math.random() * 100) + '%';
      p.style.width = w.toFixed(1) + 'px';
      p.style.height = hh.toFixed(1) + 'px';
      p.style.background = COLORS[i % COLORS.length];
      p.style.opacity = (0.5 + Math.random() * 0.45).toFixed(2);
      p.style.boxShadow = '0 2px 0 rgba(255,255,255,.7) inset';
      p.style.setProperty('--dx', (Math.random() * 220 - 110).toFixed(0) + 'px');
      p.style.animationDuration = (11 + Math.random() * 14).toFixed(1) + 's';
      p.style.animationDelay = (-Math.random() * 24).toFixed(1) + 's';
      frag.appendChild(p);
    }
    box.appendChild(frag);
  })();

  /* ---------- HEADER + PROGRESS + NÚT NỔI ---------- */
  (function(){
    var hdr = $('#hdr'), bar = $('#bar'), fab = $('#fabMascot'), top = $('#toTop');
    if (!hdr) return;
    var lastY = 0, raf = 0;

    function frame(){
      raf = 0;
      var y = window.pageYOffset || document.documentElement.scrollTop || 0;
      var vh = window.innerHeight || 800;
      var max = Math.max(1, document.documentElement.scrollHeight - vh);
      var drawer = $('#drawer');

      if (bar) bar.style.width = (Math.min(1, y / max) * 100).toFixed(2) + '%';
      hdr.classList.toggle('solid', y > 30);
      hdr.classList.toggle('hide', y > lastY + 6 && y > 420 && !(drawer && drawer.classList.contains('open')));
      lastY = y;

      if (fab) fab.classList.toggle('show', y > vh * 0.65);
      if (top) top.classList.toggle('show', y > vh * 0.65);
    }
    function onScroll(){ if (!raf) raf = requestAnimationFrame(frame); }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();

    if (top) top.addEventListener('click', function(){ window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });
  })();

  /* ---------- DRAWER MOBILE ---------- */
  (function(){
    var b = $('#burger'), d = $('#drawer');
    if (!b || !d) return;
    function close(){ b.classList.remove('x'); d.classList.remove('open'); document.body.classList.remove('is-locked'); }
    b.addEventListener('click', function(){
      var open = !d.classList.contains('open');
      b.classList.toggle('x', open);
      d.classList.toggle('open', open);
      document.body.classList.toggle('is-locked', open);
    });
    $$('a', d).forEach(function(a){ a.addEventListener('click', close); });
    window.addEventListener('keydown', function(e){ if (e.key === 'Escape') close(); });
  })();

  /* ---------- REVEAL ---------- */
  (function(){
    var els = $$('.reveal');
    if (!window.IntersectionObserver){ els.forEach(function(e){ e.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function(list){
      list.forEach(function(e){
        if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(function(e, i){ e.style.transitionDelay = ((i % 4) * 0.07).toFixed(2) + 's'; io.observe(e); });
    VENUS.reveal = function(el){ if (el) io.observe(el); };
  })();

  /* ---------- TILT 3D ---------- */
  (function(){
    if (touch || reduce){ document.documentElement.classList.add('no-tilt'); return; }
    $$('[data-tilt]').forEach(function(el){
      var rot = parseFloat(el.getAttribute('data-rot') || '0') || 0;
      var rest = 'rotate(' + rot + 'deg)';
      var lift = el.hasAttribute('data-rot') ? ' translateY(-8px)' : '';
      el.style.transformStyle = 'preserve-3d';
      el.addEventListener('mousemove', function(e){
        var r = el.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = 'perspective(900px)' + lift +
          ' rotateX(' + (-py * 6).toFixed(2) + 'deg) rotateY(' + (px * 7).toFixed(2) + 'deg)';
      });
      el.addEventListener('mouseleave', function(){ el.style.transform = rest; });
    });
  })();

  /* ---------- TABS THÀNH PHỐ (chỉ chạy khi trang có #tabbar) ---------- */
  (function(){
    var bar = $('#tabbar');
    var DATA = window.VENUS_THANHPHO;
    if (!bar || !DATA) return;
    var t = $('#tabTitle'), b = $('#tabBody'), c = $('#tabChips'), s = $('#tabShot');
    function draw(i){
      var d = DATA[i] || DATA[0];
      t.textContent = d.title; b.textContent = d.body; s.textContent = d.shot;
      c.innerHTML = '';
      d.chips.forEach(function(x, k){
        var el = document.createElement('div');
        el.className = 'chip'; el.textContent = x;
        el.style.opacity = '0'; el.style.transform = 'translateY(10px)';
        el.style.transition = 'opacity .35s ease ' + (k * 0.045) + 's, transform .45s cubic-bezier(.34,1.56,.64,1) ' + (k * 0.045) + 's';
        c.appendChild(el);
        requestAnimationFrame(function(){ el.style.opacity = '1'; el.style.transform = 'none'; });
      });
      $$('.tab', bar).forEach(function(x){ x.classList.toggle('on', +x.getAttribute('data-tab') === i); });
    }
    bar.addEventListener('click', function(e){
      var btn = e.target.closest('.tab'); if (!btn) return;
      draw(+btn.getAttribute('data-tab'));
    });
    draw(0);
  })();

  /* ---------- ACCORDION dùng chung ----------
     rows: [ [tiêu đề, nội dung], ... ]  hoặc  [ {t:'', n:'' | ['đoạn 1','đoạn 2']}, ... ]
     opt : { numbered: true/false, openFirst: true/false, start: số bắt đầu đánh số }
  */
  function accordion(host, rows, opt){
    if (!host) return [];
    opt = opt || {};
    var made = [];
    rows.forEach(function(r, i){
      var title = Array.isArray(r) ? r[0] : r.t;
      var text  = Array.isArray(r) ? r[1] : r.n;
      var num   = (opt.start || 1) + i;
      var nhan  = (!Array.isArray(r) && r.so) ? r.so
                : (opt.numbered ? ((num < 10 ? '0' : '') + num) : '♡');

      var wrap = document.createElement('div'); wrap.className = 'rule';
      var head = document.createElement('button'); head.className = 'rule-h'; head.type = 'button';
      head.innerHTML = '<span class="rule-n"></span><span class="rule-t"></span><span class="rule-x"></span>';
      $('.rule-n', head).textContent = nhan;
      $('.rule-t', head).textContent = title;

      var body = document.createElement('div'); body.className = 'rule-b';
      var paras = (Array.isArray(text) ? text.slice() : [text])
        .filter(function(x){ return x && (typeof x !== 'string' || x.trim()); });

      // đoạn đầu trùng hệt tiêu đề thì không hiện lại, miễn là còn nội dung khác
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
      $$('.rule.open', host).forEach(function(o){ $('.rule-b', o).style.maxHeight = $('.rule-b', o).scrollHeight + 'px'; });
    });
    return made;
  }
  VENUS.accordion = accordion;

  /* ---------- HỎI ĐÁP ---------- */
  if (window.VENUS_FAQ) accordion($('#faq'), window.VENUS_FAQ, { openFirst: true });

  /* ---------- ĐẾM NGƯỢC ---------- */
  (function(){
    var d = $('#cdD'), h = $('#cdH'), m = $('#cdM'), s = $('#cdS');
    if (!d) return;
    var target = new Date(CONFIG.openDate).getTime();
    if (isNaN(target)) return;
    function pad(n){ return (n < 10 ? '0' : '') + n; }
    function tick(){
      var diff = Math.max(0, target - Date.now());
      var sec = Math.floor(diff / 1000);
      d.textContent = pad(Math.floor(sec / 86400));
      h.textContent = pad(Math.floor(sec / 3600) % 24);
      m.textContent = pad(Math.floor(sec / 60) % 60);
      s.textContent = pad(sec % 60);
    }
    tick(); setInterval(tick, 1000);
  })();

  /* ---------- TOAST + TIM BAY ---------- */
  var toastT;
  function toast(msg){
    var t = $('#toast'); if (!t) return;
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toastT);
    toastT = setTimeout(function(){ t.classList.remove('show'); }, 2000);
  }
  VENUS.toast = toast;

  function hearts(x, y){
    if (reduce) return;
    var ic = ['♡','✦','♥','✿','★'];
    for (var i = 0; i < 12; i++){
      (function(i){
        var el = document.createElement('span');
        el.className = 'heart';
        el.textContent = ic[i % ic.length];
        el.style.left = (x + (Math.random() * 90 - 45)) + 'px';
        el.style.top  = (y + (Math.random() * 20 - 10)) + 'px';
        el.style.color = ['#FF6FC0','#FF8FD1','#A574F5','#FFD46B','#5FAEEE','#4CC9AC'][i % 6];
        el.style.setProperty('--hx', (Math.random() * 140 - 70).toFixed(0) + 'px');
        el.style.setProperty('--hr', (Math.random() * 120 - 60).toFixed(0) + 'deg');
        el.style.animationDelay = (i * 0.035) + 's';
        document.body.appendChild(el);
        setTimeout(function(){ if (el.parentNode) el.parentNode.removeChild(el); }, 1700);
      })(i);
    }
  }

  /* ---------- COPY IP (mọi nút có data-copy-ip) ---------- */
  (function(){
    function fallback(txt){
      try{
        var ta = document.createElement('textarea');
        ta.value = txt; ta.setAttribute('readonly',''); ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
      }catch(err){}
    }
    function copy(e){
      var txt = CONFIG.ip;
      var btn = e.currentTarget;
      function done(){
        toast('Đã copy: ' + txt + ' ♡');
        var r = btn.getBoundingClientRect();
        hearts(r.left + r.width / 2, r.top + r.height / 2);
      }
      if (navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(txt).then(done, function(){ fallback(txt); done(); });
      } else { fallback(txt); done(); }
    }
    $$('[data-copy-ip]').forEach(function(b){ b.addEventListener('click', copy); });
  })();

  /* ---------- SPARKLE THEO CHUỘT ---------- */
  (function(){
    if (touch || reduce) return;
    var last = 0;
    window.addEventListener('mousemove', function(e){
      var now = Date.now();
      if (now - last < 60) return;
      last = now;
      var s = document.createElement('span');
      s.className = 'spark';
      s.style.setProperty('--sk', ['#FF8FD1','#B98BFF','#A9D9FF','#9BE9D6','#FFE39A'][(Math.random()*5)|0]);
      s.style.left = (e.clientX - 5 + (Math.random() * 14 - 7)) + 'px';
      s.style.top  = (e.clientY - 5 + (Math.random() * 14 - 7)) + 'px';
      var sc = (0.5 + Math.random() * 0.9).toFixed(2);
      s.style.transform = 'scale(' + sc + ')';
      document.body.appendChild(s);
      setTimeout(function(){ if (s.parentNode) s.parentNode.removeChild(s); }, 780);
    }, { passive: true });
  })();

  /* ---------- SMOOTH SCROLL cho link neo TRONG trang ---------- */
  (function(){
    document.addEventListener('click', function(e){
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute('href').slice(1);
      if (!id) return;
      var el = document.getElementById(id);
      if (!el) return;                       // neo không có trong trang → để trình duyệt tự xử lý
      e.preventDefault();
      var y = el.getBoundingClientRect().top + window.pageYOffset - 84;
      window.scrollTo({ top: Math.max(0, y), behavior: reduce ? 'auto' : 'smooth' });
      history.replaceState(null, '', '#' + id);
    });
  })();

})();
