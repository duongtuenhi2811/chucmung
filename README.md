# 🎀 Món quà nhỏ dành cho nàng — Website 20/10

Một website thiệp 20/10 phong cách pastel dễ thương, viết bằng **HTML, CSS và JavaScript thuần**. Không cần cài Node.js, không cần build và có thể triển khai miễn phí bằng GitHub Pages.

## Chạy thử trên máy

1. Giải nén file ZIP.
2. Mở thư mục `qua-tang-20-10-github`.
3. Nhấp đúp `index.html` để mở bằng Chrome, Edge hoặc Firefox.

## Thêm ảnh của hai người vào website

1. Sao chép ảnh JPG, PNG hoặc WEBP vào thư mục `assets/images/`.
2. Mở `assets/js/script.js` bằng VS Code hoặc Notepad.
3. Tìm `CONFIG.photos`. Đổi `src` thành đường dẫn ảnh của bạn, ví dụ:

   ```js
   {
     src: "assets/images/ky-niem-1.jpg",
     alt: "Hai đứa mình đi chơi",
     title: "Một ngày thật vui 💗",
     caption: "Mong mình còn có thật nhiều kỷ niệm như thế này."
   }
   ```

4. Lưu file rồi tải lại `index.html` trên trình duyệt.

Bạn có thể thêm bao nhiêu tấm ảnh tùy thích bằng cách thêm các mục mới vào mảng `CONFIG.photos`. **Chính những ảnh này sẽ xuất hiện ở cả album và trên bó hoa khi mở quà.** Khi bấm nút mở quà, bó hoa sẽ trồi lên trước, sau đó sáu tấm ảnh lần lượt bung ra thành hình quạt, rồi lời chúc cuối mới xuất hiện. Nếu danh sách có dưới sáu ảnh, các ảnh đầu sẽ lặp lại để giữ bố cục cân đối.

Nếu chưa có ảnh riêng, dự án dùng ba hình minh họa `flower.svg`, `rose.svg` và `cat.svg` làm mặc định. Bó hoa được vẽ bằng SVG nhiều lớp cánh, có giấy gói và nơ có độ chuyển sáng; khi mở quà, bó hoa trồi lên, đung đưa nhẹ, ánh sáng lướt trên giấy gói và các cánh hoa nhỏ bay quanh. Bạn nên thay ảnh mặc định bằng ảnh thật trước khi gửi thiệp.

**Lưu ý đường dẫn:** tên file phải khớp chính xác, kể cả chữ hoa/chữ thường. Nên dùng tên file không dấu, chữ thường và không có dấu cách, ví dụ `ky-niem-1.jpg`. Ảnh đã commit lên GitHub có thể được người khác xem hoặc tải xuống nếu repository/website công khai.

## Cá nhân hóa tên và lời nhắn

Mở `assets/js/script.js`, sửa các dòng đầu trong `CONFIG`:

```js
const CONFIG = {
  herName: "Bé Thỏ",
  yourName: "Anh chàng hay chọc em",
  pageTitle: "Một món quà nhỏ dành cho Bé Thỏ ♡",
  photos: [ /* các ảnh của bạn */ ]
};
```

Để sửa nội dung lá thư, mở `index.html` và tìm phần `id="letterBody"`. Bạn có thể thay các đoạn văn trong phần đó bằng lời nhắn của riêng mình.

## Đưa website lên GitHub Pages

### Bước 1 — Tạo repository

1. Đăng nhập [GitHub](https://github.com/).
2. Tạo repository mới, ví dụ `qua-tang-20-10`.
3. Nếu dùng GitHub Free, chọn repository **Public** để sử dụng GitHub Pages.
4. Giải nén dự án và mở Terminal/PowerShell tại thư mục `qua-tang-20-10-github`.

### Bước 2 — Đẩy mã nguồn lên GitHub

Thay `TEN-GITHUB` bằng tên tài khoản của bạn. Nếu repository đặt tên khác, thay `qua-tang-20-10` bằng tên thật của repository.

```bash
git init
git add .
git commit -m "Create cute 20-10 gift website"
git branch -M main
git remote add origin https://github.com/TEN-GITHUB/qua-tang-20-10.git
git push -u origin main
```

Nếu máy báo chưa cài Git, bạn có thể cài [Git for Windows](https://git-scm.com/download/win) hoặc dùng [GitHub Desktop](https://desktop.github.com/).

### Bước 3 — Bật GitHub Pages

1. Mở repository trên GitHub.
2. Vào **Settings → Pages**.
3. Ở mục **Build and deployment → Source**, chọn **GitHub Actions**.
4. Mở tab **Actions** để xem workflow `Deploy to GitHub Pages`. Workflow trong `.github/workflows/deploy.yml` sẽ tự chạy khi bạn đẩy mã mới lên nhánh `main`.
5. Khi deploy thành công, mở đường dẫn có dạng:

   `https://TEN-GITHUB.github.io/qua-tang-20-10/`

Có thể mất vài phút để website xuất hiện lần đầu. Những lần sửa code hoặc thêm ảnh sau đó chỉ cần `git add`, `git commit` và `git push`; GitHub Actions sẽ tự cập nhật website.

Tài liệu chính thức: [GitHub Pages Quickstart](https://docs.github.com/en/pages/quickstart) · [Deploying your website automatically](https://docs.github.com/en/get-started/start-your-journey/deploying-your-website-automatically).

## Cấu trúc dự án

```text
qua-tang-20-10-github/
├── index.html                 # Nội dung website
├── assets/
│   ├── css/style.css          # Giao diện và hiệu ứng responsive
│   ├── js/script.js           # Tương tác, cấu hình tên và danh sách ảnh
│   └── images/
│       ├── bouquet-wrap.svg   # Minh họa bó hoa giấy hồng và nơ
│       ├── flower.svg         # Hình mặc định
│       ├── rose.svg           # Hình mặc định
│       ├── cat.svg            # Hình mặc định
│       └── ky-niem-*.jpg      # Ảnh riêng bạn thêm vào
├── .github/workflows/
│   └── deploy.yml             # Tự động triển khai GitHub Pages
├── .nojekyll
└── README.md
```

## Quyền riêng tư

GitHub Pages là website công khai trên Internet. Bất kỳ ai có đường dẫn đều có thể mở và có thể chia sẻ tiếp; các ảnh được commit vào repository cũng có thể được tải xuống. Đừng đưa thông tin cá nhân nhạy cảm hoặc ảnh mà bạn không muốn công khai lên repository. Website này không có hệ thống đăng nhập hay giới hạn người xem.
