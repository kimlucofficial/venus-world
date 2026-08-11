# Venus World — Website v3 (Candy Pastel)

Website tĩnh, **1 file HTML + 1 thư mục assets**. Không cần build, không cần Node, không framework.

```
venus-world-web/
├─ index.html          ← toàn bộ HTML + CSS + JS
├─ README.md
└─ assets/
   ├─ hero.webp        ← keyart Open Server
   ├─ logo.webp        ← logo VW
   └─ mascot.png       ← Kuromi (nền trong suốt)
```

## 1. Chạy thử

Mở thẳng `index.html` bằng trình duyệt là xong. (Nếu muốn giống môi trường thật: `python3 -m http.server` rồi vào `localhost:8000`.)

## 2. Sửa nội dung nhanh

Mở `index.html`, tìm khối `CONFIG` ở đầu thẻ `<script>` (gần cuối file):

```js
var CONFIG = {
  discord : 'https://discord.gg/venusworld',   // link Discord thật
  ip      : 'connect venusworld.vn',           // lệnh kết nối FiveM
  openDate: '2026-09-16T19:00:00+07:00'        // mốc đếm ngược
};
```

Sửa 3 dòng này là toàn bộ nút Discord, nút Copy IP và đồng hồ đếm ngược tự cập nhật theo.

- **Tabs Thành phố**: mảng `DATA` trong khối `TABS THÀNH PHỐ`.
- **Luật lệ**: mảng `RULES`.
- **Hỏi đáp**: mảng `FAQ`.
- **Màu sắc**: biến CSS trong `:root` ở đầu file. Nhóm nền (`--milk`, `--cream`), nhóm kẹo (`--gum`, `--grape`, `--mint`, `--butter`, `--peach`), nhóm chữ (`--ink`, `--ink-2`, `--ink-3`).
- **Màu từng thẻ**: mỗi `.card` / `.tile` / `.stat` / `.cd .u` mang bộ biến riêng ngay trong `style=""` (ví dụ `--cc` viền, `--cs` bóng cứng, `--cb1/2/3` quả cầu số). Đổi ở đó là đổi được màu riêng từng thẻ mà không ảnh hưởng thẻ khác.

## 3. Thay ảnh in-game

Khu vực "Một đêm ở Venus" và ảnh polaroid đang là **placeholder có chủ ý** (vân sọc tím + glow), chưa phải ảnh giả.
Khi có screenshot thật:

- Polaroid: thay `<div class="shot">...</div>` bằng `<div class="shot"><img src="assets/shot-1.webp" alt=""></div>`
- Mosaic: thêm `<img src="assets/gallery-1.webp" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">` vào trong `.tile`, đặt trước thẻ `<b>`.

Nên xuất ảnh dạng `.webp`, bề ngang ~1600px, dung lượng dưới 300KB.

## 4. Deploy

Kéo thả cả thư mục lên **Netlify Drop / Cloudflare Pages / Vercel**, hoặc upload qua FTP lên hosting bất kỳ. Không cần cấu hình gì thêm.

## 5. Ghi chú kỹ thuật

- Font: `Baloo 2` (tiêu đề bo tròn, có bộ dấu tiếng Việt) + `Be Vietnam Pro` (nội dung) + `Chakra Petch` (số/nhãn kỹ thuật). Cả 3 đều có subset `vietnamese` trên Google Fonts.
- Có xử lý `prefers-reduced-motion`: tắt hiệu ứng cho người dùng nhạy cảm với chuyển động.
- Hiệu ứng nặng (cánh hoa, sparkle chuột, tilt 3D) tự tắt trên thiết bị cảm ứng.
- Không dùng thư viện ngoài, chỉ tải font từ Google Fonts. Muốn hoạt động offline hoàn toàn thì tải font về `assets/fonts/` và thay thẻ `<link>` bằng `@font-face`.
