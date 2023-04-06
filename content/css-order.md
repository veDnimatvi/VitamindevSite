---
slug: css-order
title: What is CSS Order in HTML
category: CSS
description: "All CSS files are loaded before any JavaScript files in the HEAD"
img: https://www.freecodecamp.org/news/content/images/2021/08/Css-border--1-.png
date: 6 April 2023
---

![Meta-Charset](https://www.freecodecamp.org/news/content/images/2021/08/Css-border--1-.png)

---

# CSS order in HTML
### CSS order là thứ tự các quy tắc CSS được áp dụng cho các phần tử HTML trên trang web. Thứ tự này có ý nghĩa quan trọng trong việc xác định các quy tắc CSS nào sẽ được ưu tiên và áp dụng cho một phần tử HTML cụ thể.

### Thứ tự áp dụng các quy tắc CSS được xác định theo ba nguồn chính:
1. Default browser styles: Đây là các quy tắc CSS mặc định được trình duyệt áp dụng cho các phần tử HTML. Ví dụ, các phần tử như `<p>, <h1>, <ul>, <li>,... `sẽ có một số quy tắc CSS mặc định được áp dụng cho chúng.
2. External stylesheets: Đây là các tệp CSS bên ngoài được liên kết với trang web bằng thẻ `<link>` trong phần head của trang web. Các quy tắc CSS trong tệp này sẽ được áp dụng sau các quy tắc CSS mặc định.
3. Embedded styles: Đây là các quy tắc CSS được nhúng trực tiếp vào trang HTML bằng thẻ `<style>`. Các quy tắc này sẽ được áp dụng sau cả các quy tắc CSS mặc định và các tệp CSS bên ngoài.
<br>

### Để hiểu rõ hơn về thứ tự ưu tiên của các quy tắc CSS, hãy xem xét một ví dụ đơn giản:
```
<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      color: red;
    }
    .text {
      color: blue;
    }
  </style>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1 class="text">Hello world!</h1>
</body>
</html>
```

### Trong ví dụ này, chúng ta có một tệp CSS bên ngoài được liên kết với trang web thông qua thẻ `<link>`, và một quy tắc CSS được nhúng trong thẻ `<style>` trong phần head của trang web. Để áp dụng quy tắc này cho phần tử cụ thể, chúng ta sử dụng lớp (class) trong phần tử HTML.
### Các quy tắc CSS trong tệp styles.css có độ ưu tiên thấp hơn so với quy tắc CSS được nhúng trong thẻ `<style>`, do vậy quy tắc CSS trong tệp styles.css sẽ được áp dụng trước. Tuy nhiên, quy tắc CSS cho lớp .text có độ cụ thể cao hơn so với quy tắc CSS cho phần tử h1, do đó quy tắc CSS cho lớp .text sẽ được áp dụng cuối cùng.
### Vì vậy, trong ví dụ này, màu sắc của phần tử h1 sẽ là màu xanh dương (do quy tắc CSS cho lớp .text được áp dụng cuối cùng), chứ không phải màu đỏ (do quy tắc CSS cho phần tử h1 được áp dụng trước).
<br>

### Vì vậy, khi viết CSS cho trang web, bạn nên đặt các quy tắc CSS trong các tệp CSS bên ngoài và nhúng chúng vào trang web bằng thẻ `<link>` để tăng tính tái sử dụng và dễ bảo trì. Nếu cần chỉnh sửa CSS cho một phần tử cụ thể, bạn có thể sử dụng các quy tắc CSS nhúng (embedded) để ghi đè lên các quy tắc đã tồn tại.