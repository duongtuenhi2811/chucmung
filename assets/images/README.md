# Ảnh của website

Bỏ ảnh của bạn vào thư mục này (ví dụ: `ky-niem-1.jpg`, `ky-niem-2.png`, `meo-cua-em.webp`).

Sau đó mở `assets/js/script.js`, tìm `CONFIG.photos` và đổi đường dẫn `src` của từng ảnh, ví dụ:

```js
{
  src: "assets/images/ky-niem-1.jpg",
  alt: "Hai đứa mình đi chơi",
  title: "Một ngày thật vui 💗",
  caption: "Mong mình còn có thật nhiều kỷ niệm như thế này."
}
```

Đường dẫn phân biệt chữ hoa/chữ thường khi chạy trên GitHub Pages. Nên dùng tên file không dấu, viết thường và không có dấu cách. Ảnh JPG, PNG và WEBP đều dùng được.

Các file `flower.svg`, `rose.svg`, `cat.svg` là hình minh họa mặc định để web vẫn hiển thị khi chưa thêm ảnh riêng.
