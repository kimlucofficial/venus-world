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
    var hdr = $('#hdr'), top = $('#toTop'), bar = $('#progress');
    if (!hdr) return;
    if (hdr.classList.contains('solid')) hdr.dataset.solid = '1';
    var raf = 0;
    function frame(){
      raf = 0;
      var y = window.pageYOffset || document.documentElement.scrollTop || 0;
      hdr.classList.toggle('solid', y > 24 || hdr.dataset.solid === '1');
      if (bar){
        var max = (document.documentElement.scrollHeight - (window.innerHeight || 800)) || 1;
        bar.style.transform = 'scaleX(' + Math.min(1, Math.max(0, y / max)).toFixed(4) + ')';
      }
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
    function close(){ b.setAttribute('aria-expanded','false'); b.classList.remove('x'); d.classList.remove('open'); document.body.classList.remove('lock'); }
    b.addEventListener('click', function(){
      var open = !d.classList.contains('open');
      b.classList.toggle('x', open);
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
      d.classList.toggle('open', open);
      document.body.classList.toggle('lock', open);
    });
    $$('a', d).forEach(function(a){ a.addEventListener('click', close); });
    window.addEventListener('keydown', function(e){ if (e.key === 'Escape') close(); });
  })();

  /* ---------- đếm ngược / trạng thái mở cửa ---------- */
  (function(){
    var d = $('[data-cd="d"]'), h = $('[data-cd="h"]'), m = $('[data-cd="m"]'), s = $('[data-cd="s"]');
    if (!d) return;
    var target = new Date(CONFIG.openDate).getTime();
    if (isNaN(target)) return;
    var st = $('#status'), stTx = $('#statusTx'), cap = $('#ledCap');
    var last = {};
    function pad(n){ return (n < 10 ? '0' : '') + n; }
    function set(el, v){
      if (last[el.dataset.cd] === v) return;
      last[el.dataset.cd] = v; el.textContent = v;
      if (!reduce){ el.classList.remove('tick'); void el.offsetWidth; el.classList.add('tick'); }
    }
    function tick(){
      var diff = target - Date.now();
      var open = diff <= 0;
      // trước ngày mở: đếm ngược · sau ngày mở: đếm số ngày thành phố đã hoạt động
      var sec = Math.floor(Math.abs(diff) / 1000);
      set(d, pad(Math.floor(sec / 86400)));
      set(h, pad(Math.floor(sec / 3600) % 24));
      set(m, pad(Math.floor(sec / 60) % 60));
      set(s, pad(sec % 60));
      if (st){ st.hidden = false; st.classList.toggle('soon', !open); }
      if (stTx) stTx.textContent = open ? 'ĐANG HOẠT ĐỘNG' : 'SẮP MỞ CỬA';
      if (cap) cap.textContent = open ? 'VENUS ĐÃ MỞ CỬA ĐƯỢC' : 'ĐẾM NGƯỢC KHAI TRƯƠNG';
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
  function copyText(txt, cb){
    function xong(){ cb && cb(); }
    if (navigator.clipboard && navigator.clipboard.writeText && window.isSecureContext){
      navigator.clipboard.writeText(txt).then(xong, fallback);
    } else fallback();
    function fallback(){
      try{
        var ta = document.createElement('textarea');
        ta.value = txt; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select(); document.execCommand('copy');
        document.body.removeChild(ta);
      }catch(e){}
      xong();
    }
  }
  VENUS.copy = copyText;
  $$('[data-copy-ip]').forEach(function(b){
    var goc = b.innerHTML, tB;
    b.addEventListener('click', function(){
      copyText(CONFIG.ip, function(){
        toast('Đã copy: ' + CONFIG.ip);
        b.classList.add('done'); b.textContent = 'Đã copy ✓';
        clearTimeout(tB); tB = setTimeout(function(){ b.classList.remove('done'); b.innerHTML = goc; }, 1800);
      });
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
    try{ history.replaceState(null, '', '#' + id); }catch(err){}
  });

  /* ============================================================
     v5 · HIỆU ỨNG NHẤN NHÁ
     ============================================================ */
  var fine = window.matchMedia && window.matchMedia('(hover:hover) and (pointer:fine)').matches;

  /* đếm số chạy lên khi xuất hiện */
  (function(){
    var els = $$('[data-count]');
    if (!els.length) return;
    function run(el){
      var to = parseInt(el.dataset.count, 10) || 0;
      if (reduce){ el.textContent = to; return; }
      var t0 = null, dur = 1200 + Math.min(to, 100) * 6;
      function step(t){
        if (!t0) t0 = t;
        var k = Math.min(1, (t - t0) / dur);
        el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if (!window.IntersectionObserver){ return; }
    var ob = new IntersectionObserver(function(list){
      list.forEach(function(e){ if (e.isIntersecting){ ob.unobserve(e.target); run(e.target); } });
    }, { threshold: 0.4 });
    els.forEach(function(el){ el.textContent = '0'; ob.observe(el); });
  })();

  /* ánh sáng theo chuột trên thẻ */
  if (fine && !reduce){
    $$('.sign').forEach(function(c){
      c.addEventListener('pointermove', function(e){
        var r = c.getBoundingClientRect();
        c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        c.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  }

  /* parallax nhẹ ở hero */
  (function(){
    var bg = $('[data-parallax]'), mas = $('[data-parallax-mas]'), hero = $('.hero');
    if (!hero || reduce) return;
    var raf = 0, px = 0, py = 0;
    function draw(){
      raf = 0;
      var y = Math.min(window.pageYOffset || 0, window.innerHeight || 900);
      if (bg) bg.parentNode.style.transform = 'translate3d(' + (px * -14) + 'px,' + (y * 0.25 + py * -10) + 'px,0)';
      if (mas) mas.style.translate = (px * 18) + 'px ' + (py * 12) + 'px';
    }
    function req(){ if (!raf) raf = requestAnimationFrame(draw); }
    window.addEventListener('scroll', req, { passive: true });
    if (fine) hero.addEventListener('pointermove', function(e){
      px = e.clientX / window.innerWidth - 0.5; py = e.clientY / window.innerHeight - 0.5; req();
    });
  })();

  /* hạt sáng bay lên: rải ngẫu nhiên, chỉ trên máy tính */
  $$('.sparks b').forEach(function(b){
    b.style.left = (Math.random() * 100).toFixed(1) + '%';
    b.style.animationDuration = (9 + Math.random() * 10).toFixed(1) + 's';
    b.style.animationDelay = (-Math.random() * 18).toFixed(1) + 's';
  });

  /* menu sáng theo mục đang xem */
  (function(){
    var links = $$('nav.pills a[href^="#"]').map(function(a){
      return { a: a, el: document.getElementById(a.getAttribute('href').slice(1)) };
    }).filter(function(x){ return x.el; });
    if (!links.length || !window.IntersectionObserver) return;
    var ob = new IntersectionObserver(function(list){
      list.forEach(function(e){
        links.forEach(function(x){ if (x.el === e.target) x.a.classList.toggle('spy', e.isIntersecting); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(function(x){ ob.observe(x.el); });
  })();

  /* lưới an toàn: nội dung không bao giờ bị kẹt ở trạng thái mờ */
  setTimeout(function(){
    $$('.reveal').forEach(function(e){
      if (e.getBoundingClientRect().top < (window.innerHeight || 800)) e.classList.add('in');
    });
  }, 1500);

})();
