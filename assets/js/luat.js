/* ============================================================
   VENUS WORLD — TRANG LUẬT
   Đọc nội dung từ assets/js/data-luat.js rồi dựng chương,
   mục lục, ô tìm kiếm. Không cần sửa file này khi thêm luật.
   ============================================================ */
(function(){
  'use strict';
  var $  = function(s,c){ return (c||document).querySelector(s); };
  var $$ = function(s,c){ return Array.prototype.slice.call((c||document).querySelectorAll(s)); };

  var host = $('#luatBody'), toc = $('#luatToc');
  if (!host || !window.VENUS_LUAT) return;

  var DATA = window.VENUS_LUAT;
  var chuong = (DATA.chuong || []).filter(function(c){
    return c && c.ten && (c.dieu || []).filter(function(d){ return d && d.t; }).length;
  });

  /* ---------- ngày cập nhật ---------- */
  var dateEl = $('#luatDate');
  if (dateEl && DATA.capNhat) dateEl.textContent = DATA.capNhat;

  /* ---------- dựng chương + mục lục ---------- */
  var tongDieu = 0;
  var khoi = [];

  chuong.forEach(function(c, ci){
    var dieu = (c.dieu || []).filter(function(d){ return d && d.t; });
    tongDieu += dieu.length;

    var sec = document.createElement('section');
    sec.className = 'chuong reveal';
    sec.id = c.id || ('chuong-' + (ci + 1));

    var head = document.createElement('div');
    head.className = 'chuong-h';
    head.innerHTML = '<span class="chuong-n"></span><div><h2 class="chuong-t"></h2><p class="chuong-m"></p></div>';
    $('.chuong-n', head).textContent = 'C' + (ci + 1);
    $('.chuong-t', head).textContent = c.ten;
    if (c.mo) $('.chuong-m', head).textContent = c.mo;
    else $('.chuong-m', head).remove();
    sec.appendChild(head);

    var box = document.createElement('div');
    box.className = 'rules';
    sec.appendChild(box);
    host.appendChild(sec);

    // chương được dựng bằng JS nên phải tự đăng ký hiệu ứng hiện dần,
    // nếu không sẽ đứng nguyên ở trạng thái mờ và không đọc được
    if (window.VENUS && window.VENUS.reveal) window.VENUS.reveal(sec);
    else sec.classList.add('in');

    window.VENUS.accordion(box, dieu, { numbered: true, multi: true, start: 1 });

    // để tìm kiếm bắt được cả tên chương, không chỉ nội dung điều
    var themKhoa = (' ' + c.ten + ' ' + (c.mo || '')).toLowerCase();
    $$('.rule', box).forEach(function(r, ri){
      r.dataset.find = (r.dataset.find || '') + themKhoa;
      // mỗi điều có neo riêng để gửi link thẳng tới điều đó
      r.id = 'dieu-' + (ci + 1) + '-' + (ri + 1);
      var nut = document.createElement('button');
      nut.type = 'button'; nut.className = 'rule-link';
      nut.setAttribute('aria-label', 'Copy link điều này');
      nut.title = 'Copy link điều này';
      nut.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg>';
      nut.addEventListener('click', function(){
        var url = location.href.split('#')[0].split('?')[0] + '#' + r.id;
        window.VENUS.copy(url, function(){ window.VENUS.toast('Đã copy link điều ' + ($('.rule-n', r).textContent)); });
      });
      r.appendChild(nut);
    });

    var a = document.createElement('a');
    a.className = 'toc-i';
    a.href = '#' + sec.id;
    a.innerHTML = '<span class="toc-bar"></span><span class="toc-t"></span><span class="toc-c"></span>';
    $('.toc-t', a).textContent = c.ten;
    $('.toc-c', a).textContent = dieu.length;
    toc.appendChild(a);

    khoi.push({ sec: sec, link: a });
  });

  var countEl = $('#luatCount');
  if (countEl) countEl.textContent = tongDieu + ' điều · ' + chuong.length + ' chương';

  /* Lưới an toàn: nếu vì lý do nào đó hiệu ứng hiện dần không chạy,
     bỏ luôn trạng thái mờ để nội dung không bao giờ bị vô hình. */
  setTimeout(function(){
    khoi.forEach(function(k){ k.sec.classList.add('in'); });
  }, 1200);

  /* ---------- mở / thu tất cả ---------- */
  var allBtn = $('#luatAll');
  if (allBtn){
    var opened = false;
    allBtn.addEventListener('click', function(){
      opened = !opened;
      $$('.rule', host).forEach(function(r){
        var b = $('.rule-b', r);
        r.classList.toggle('open', opened);
        b.style.maxHeight = opened ? (b.scrollHeight + 'px') : '0px';
      });
      allBtn.textContent = opened ? 'Thu gọn tất cả' : 'Mở tất cả';
    });
  }

  /* ---------- tìm kiếm ---------- */
  var search = $('#luatSearch'), empty = $('#luatEmpty'), sbox = $('#luatSearchBox');
  var boQuaDau = function(s){
    return s.normalize ? s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D') : s;
  };

  /* tô sáng từ khoá (bỏ dấu vẫn bắt được) — chỉ đụng vào chữ, không đụng HTML */
  var chuCanTo = $$('.rule-t, .rule-b p, .rule-ds li, .rule-phat span', host);
  chuCanTo.forEach(function(el){ el.dataset.goc = el.textContent; });
  function toSang(qk){
    chuCanTo.forEach(function(el){
      var goc = el.dataset.goc;
      if (!qk){ if (el.querySelector('mark')) el.textContent = goc; return; }
      // chuẩn hoá từng ký tự để giữ đúng vị trí trong chuỗi gốc
      var chuan = '';
      for (var i = 0; i < goc.length; i++) chuan += (boQuaDau(goc[i].toLowerCase())[0] || goc[i]);
      var idx = chuan.indexOf(qk);
      if (idx < 0){ if (el.querySelector('mark')) el.textContent = goc; return; }
      el.textContent = '';
      var from = 0;
      while (idx > -1){
        if (idx > from) el.appendChild(document.createTextNode(goc.slice(from, idx)));
        var mk = document.createElement('mark'); mk.textContent = goc.slice(idx, idx + qk.length);
        el.appendChild(mk);
        from = idx + qk.length;
        idx = chuan.indexOf(qk, from);
      }
      if (from < goc.length) el.appendChild(document.createTextNode(goc.slice(from)));
    });
  }

  var loc = function(){
    if (!search) return;
    var q = search.value.trim().toLowerCase();
    var qk = boQuaDau(q);
    var hien = 0;
    if (sbox) sbox.classList.toggle('has', !!q);

    khoi.forEach(function(k){
      var con = 0;
      $$('.rule', k.sec).forEach(function(r){
        var t = r.dataset.find || '';
        var ok = !q || t.indexOf(q) > -1 || boQuaDau(t).indexOf(qk) > -1;
        r.style.display = ok ? '' : 'none';
        if (ok) con++;
      });
      k.sec.style.display = con ? '' : 'none';
      k.link.style.display = con ? '' : 'none';
      $('.toc-c', k.link).textContent = con;
      hien += con;
    });

    toSang(qk.length > 1 ? qk : '');
    // ít kết quả thì tự mở luôn để thấy chỗ khớp; xoá tìm kiếm thì thu lại
    $$('.rule', host).forEach(function(r){
      var b = $('.rule-b', r);
      var mo = q && hien <= 10 && r.style.display !== 'none';
      if (mo && !r.classList.contains('open')){ r.classList.add('open', 'auto'); }
      else if (!mo && r.classList.contains('auto')){ r.classList.remove('open', 'auto'); b.style.maxHeight = '0px'; }
    });
    // chiều cao các điều đang mở thay đổi khi tô sáng
    $$('.rule.open .rule-b', host).forEach(function(b){ b.style.maxHeight = b.scrollHeight + 'px'; });

    if (empty) empty.style.display = hien ? 'none' : '';
    if (countEl) countEl.textContent = q
      ? ('Tìm thấy ' + hien + ' điều')
      : (tongDieu + ' điều · ' + chuong.length + ' chương');
    try{
      var u = new URL(location.href);
      if (q) u.searchParams.set('q', search.value.trim()); else u.searchParams.delete('q');
      history.replaceState(null, '', u.toString());
    }catch(e){}
  };

  if (search){
    var tT;
    search.addEventListener('input', function(){ clearTimeout(tT); tT = setTimeout(loc, 90); });
    var clear = $('#luatClear');
    if (clear) clear.addEventListener('click', function(){ search.value = ''; loc(); search.focus(); });

    // phím tắt: "/" để tìm, Esc để xoá
    document.addEventListener('keydown', function(e){
      var tag = (document.activeElement && document.activeElement.tagName) || '';
      if (e.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA'){ e.preventDefault(); search.focus(); search.select(); }
      else if (e.key === 'Escape' && document.activeElement === search && search.value){ search.value = ''; loc(); }
    });

    $$('[data-q]').forEach(function(c){
      c.addEventListener('click', function(){
        search.value = c.dataset.q; loc();
        var first = khoi.filter(function(k){ return k.sec.style.display !== 'none'; })[0];
        if (first) window.scrollTo({ top: first.sec.getBoundingClientRect().top + window.pageYOffset - 170, behavior: 'smooth' });
      });
    });

    // nhận từ khoá từ trang chủ: luat.html?q=...
    try{
      var q0 = new URL(location.href).searchParams.get('q');
      if (q0){ search.value = q0; loc(); }
    }catch(e){}
  }

  /* mở thẳng điều luật khi link có #dieu-x-y */
  (function(){
    var id = decodeURIComponent((location.hash || '').slice(1));
    if (!id || id.indexOf('dieu-') !== 0) return;
    var r = document.getElementById(id);
    if (!r) return;
    var b = $('.rule-b', r);
    r.classList.add('open');
    setTimeout(function(){
      b.style.maxHeight = b.scrollHeight + 'px';
      r.scrollIntoView({ block: 'center' });
      r.classList.add('flash');
    }, 250);
  })();

  /* thanh công cụ dính: đổ nền khi đã bám vào đầu trang */
  (function(){
    var tools = $('#luatTools');
    if (!tools) return;
    var raf = 0;
    function f(){ raf = 0; tools.classList.toggle('stuck', tools.getBoundingClientRect().top <= 80); }
    window.addEventListener('scroll', function(){ if (!raf) raf = requestAnimationFrame(f); }, { passive: true });
    f();
  })();

  /* ---------- mục lục bám theo vị trí cuộn ---------- */
  (function(){
    if (!khoi.length) return;
    var raf = 0;
    function frame(){
      raf = 0;
      var vh = window.innerHeight || 800;
      var cur = khoi[0];
      khoi.forEach(function(k){
        if (k.sec.style.display !== 'none' && k.sec.getBoundingClientRect().top <= vh * 0.32) cur = k;
      });
      khoi.forEach(function(k){ k.link.classList.toggle('on', k === cur); });
    }
    function onScroll(){ if (!raf) raf = requestAnimationFrame(frame); }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
  })();

})();
