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
    $$('.rule', box).forEach(function(r){ r.dataset.find = (r.dataset.find || '') + themKhoa; });

    var a = document.createElement('a');
    a.className = 'toc-i';
    a.href = '#' + sec.id;
    a.innerHTML = '<span class="toc-t"></span><span class="toc-c"></span>';
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
  var search = $('#luatSearch'), empty = $('#luatEmpty');
  if (search){
    var boQuaDau = function(s){
      return s.normalize ? s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d') : s;
    };
    var loc = function(){
      var q = search.value.trim().toLowerCase();
      var qk = boQuaDau(q);
      var hien = 0;

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
        hien += con;
      });

      if (empty) empty.style.display = hien ? 'none' : '';
      if (countEl) countEl.textContent = q
        ? ('Tìm thấy ' + hien + ' điều')
        : (tongDieu + ' điều · ' + chuong.length + ' chương');
    };
    search.addEventListener('input', loc);
    var clear = $('#luatClear');
    if (clear) clear.addEventListener('click', function(){ search.value = ''; loc(); search.focus(); });
  }

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
