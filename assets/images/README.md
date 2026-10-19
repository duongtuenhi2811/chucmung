# Hướng dẫn thêm ảnh

Bạn đặt ảnh JPG, JPEG, PNG hoặc WEBP của cô ấy/hai người vào thư mục này. Ví dụ:

- `ky-niem-1.jpg`
- `ky-niem-2.jpg`
- `ky-niem-3.jpg`
- `ky-niem-4.jpg`
- `ky-niem-5.jpg`
- `ky-niem-6.jpg`

Sau đó mở `../js/script.js`, tìm mảng `CONFIG.photos` và sửa `src` thành đường dẫn của từng ảnh, ví dụ:

```js
{
  src: "assets/images/ky-niem-1.jpg",
  alt: "Cô ấy cười thật tươi",
  title: "Nụ cười nhỏ xíu 💗",
  caption: "Mong cậu luôn có thật nhiều lý do để vui."
}
```

Cùng một danh sách ảnh sẽ được dùng trong album và xuất hiện lần lượt trên bó hoa khi mở quà. Bó hoa luôn có 6 khung ảnh; nếu bạn mới thêm ít hơn 6 ảnh, khung còn thiếu sẽ lặp lại các ảnh đầu tiên. Dùng tên tệp không dấu, chữ thường và không có dấu cách để tránh lỗi đường dẫn.
