# Venus World — Website v4 (nhiều trang)

Website tĩnh. Không cần build, không cần Node, không framework. Mỗi mục trên menu giờ là **một trang HTML riêng**.

```
venus-world-web/
├─ index.html          ← Trang chủ
├─ gioi-thieu.html     ← Giới thiệu
├─ thanh-pho.html      ← Thành phố
├─ vao-server.html     ← Hướng dẫn vào server
├─ luat.html           ← Luật lệ (trang riêng, tự dựng từ dữ liệu)
├─ hoi-dap.html        ← Hỏi đáp
├─ README.md
└─ assets/
   ├─ hero.webp        ← keyart Open Server
   ├─ logo.webp        ← logo VW
   ├─ mascot.png       ← Kuromi (nền trong suốt)
   ├─ css/
   │  └─ venus.css     ← toàn bộ giao diện, dùng chung cho mọi trang
   └─ js/
      ├─ config.js        ← Discord / IP / ngày mở  ★ sửa 1 lần, cả site đổi theo
      ├─ venus.js         ← script chung
      ├─ luat.js          ← script riêng trang luật
      ├─ data-luat.js     ← ★ NỘI DUNG LUẬT
      ├─ data-faq.js      ← nội dung Hỏi đáp
      └─ data-thanhpho.js ← nội dung 4 tab Thành phố
```

## 1. Chạy thử

Mở thẳng `index.html` bằng trình duyệt. Nếu muốn giống môi trường thật:

```
cd venus-world-web
python3 -m http.server
```

rồi vào `localhost:8000`.

## 2. Đổi Discord / IP / ngày mở

Mở `assets/js/config.js`:

```js
var CONFIG = {
  discord : 'https://discord.gg/venusworld',   // link Discord thật
  ip      : 'connect venusworld.vn',           // lệnh kết nối FiveM
  openDate: '2026-09-16T19:00:00+07:00'        // mốc đếm ngược
};
```

Sửa 3 dòng này là **toàn bộ các trang** tự cập nhật: nút Discord, nút copy IP, đồng hồ đếm ngược.

## 3. Đăng luật lên trang luật

Chỉ sửa **một file duy nhất**: `assets/js/data-luat.js`. Trang `luat.html` tự dựng mục lục, số thứ tự điều, ô tìm kiếm và nút mở/thu.

```js
var VENUS_LUAT = {
  capNhat: '27.08.2026',        // ngày cập nhật hiện ở đầu trang
  chuong: [
    {
      id  : 'c3-quy-dinh-ve-nguoi-dan',   // không dấu — dùng làm neo #c3-...
      ten : 'QUY ĐỊNH VỀ NGƯỜI DÂN',
      mo  : 'Mô tả ngắn của chương',      // bỏ được
      dieu: [
        { so:'3.1',                       // số hiện trong vòng tròn
          t :'Tiêu đề ngắn hiện khi chưa mở',
          n :['Nội dung đoạn 1.', 'Đoạn 2.'],
          phat:'+ Phạt: 500$' },          // bỏ được, xuống dòng bằng \n

        { so:'3.2',
          t :'Điều có gạch đầu dòng',
          n :[ 'Mở đầu.',
               { ds:['Gạch đầu dòng 1','Gạch đầu dòng 2'] } ] }
      ]
    }
  ]
};
```

Đoạn đầu của `n` mà trùng hệt `t` thì trang tự bỏ, không hiện lặp hai lần.

Thêm chương mới thì copy nguyên khối `{ ... }`, dán vào mảng `chuong` và đổi `id`. Huy hiệu chương (C1, C2…) đánh theo thứ tự trong mảng nên không cần ghi số vào `ten`. Mục lục bên trái, số đếm và ô tìm kiếm tự cập nhật, không phải sửa HTML.

Ô tìm kiếm bỏ dấu được: gõ `bang dang` vẫn ra chương “Băng đảng”. Tìm theo cả tên chương lẫn nội dung điều.

## 4. Sửa nội dung các trang khác

- **Hỏi đáp**: mảng trong `assets/js/data-faq.js`, mỗi dòng `['Câu hỏi','Câu trả lời']`.
- **Thành phố**: mảng trong `assets/js/data-thanhpho.js`. Thêm tab thì nhớ thêm nút `<button class="tab" data-tab="4">` tương ứng trong `thanh-pho.html`.
- **Chữ tĩnh** (hero, 4 thẻ giới thiệu, 3 bước vào server): sửa thẳng trong file HTML của trang đó.
- **Menu**: sửa ở cả 6 file HTML (khối `<nav class="pills">` và `<div class="drawer">`). Trang đang xem có `class="on"`.
- **Màu sắc**: biến CSS trong `:root` ở đầu `assets/css/venus.css`.
- **Màu từng thẻ**: mỗi `.card` / `.tile` / `.stat` mang bộ biến riêng ngay trong `style=""` (`--cc` viền, `--cs` bóng cứng, `--cb1/2/3` quả cầu số).

## 5. Thay ảnh in-game

Khu vực “Một đêm ở Venus” và ảnh polaroid vẫn là **placeholder có chủ ý** (vân sọc tím + glow), chưa phải ảnh giả. Khi có screenshot thật:

- Polaroid (`thanh-pho.html`): thay `<div class="shot">...</div>` bằng `<div class="shot"><img src="assets/shot-1.webp" alt=""></div>`
- Mosaic: thêm `<img src="assets/gallery-1.webp" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">` vào trong `.tile`, đặt trước thẻ `<b>`.

Nên xuất `.webp`, bề ngang ~1600px, dung lượng dưới 300KB.

## 6. Deploy

Kéo thả cả thư mục lên **Netlify Drop / Cloudflare Pages / Vercel**, hoặc upload qua FTP. Không cần cấu hình gì thêm — link giữa các trang là đường dẫn tương đối nên chạy được ở cả thư mục con.

## 7. Ghi chú kỹ thuật

- Font: `Baloo 2` (tiêu đề) + `Be Vietnam Pro` (nội dung) + `Chakra Petch` (số/nhãn). Cả 3 đều có subset `vietnamese` trên Google Fonts.
- Màn splash chỉ chạy **lần đầu mỗi phiên trình duyệt** (lưu bằng `sessionStorage`), chuyển trang không phải xem lại.
- Có xử lý `prefers-reduced-motion`. Hiệu ứng nặng (cánh hoa, sparkle chuột, tilt 3D) tự tắt trên thiết bị cảm ứng.
- Không dùng thư viện ngoài, chỉ tải font từ Google Fonts. Muốn chạy offline hoàn toàn thì tải font về `assets/fonts/` và thay thẻ `<link>` bằng `@font-face`.
- File `support.js` trong bản v3 cũ là runtime của trình soạn thảo, không trang nào gọi tới — bản này đã bỏ.
