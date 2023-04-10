---
slug: web-font
title: Web Font in HTML
category: HTML
description: "WOFF, WOFF2 and TTF are supported by all modern browsers."
img: http://33degreesds.com/dragon33/wp-content/uploads/2016/01/web-fonts.jpg
date: 10 April 2023
---

![Meta-Charset](http://33degreesds.com/dragon33/wp-content/uploads/2016/01/web-fonts.jpg)

---

# Web Font in HTML
### Trong HTML, các định dạng webfont phổ biến nhất là WOFF (Web Open Font Format) và WOFF2 (Web Open Font Format 2.0). Định dạng này được sử dụng để nhúng các phông chữ không phải là phông chữ mặc định của trình duyệt vào trang web của bạn.

### Để tạo một định dạng webfont, bạn có thể sử dụng các công cụ trực tuyến hoặc phần mềm bên ngoài để chuyển đổi các tệp font truyền thống (như .ttf hoặc .otf) thành các định dạng webfont như WOFF và WOFF2. Các công cụ phổ biến bao gồm Font Squirrel, Google Fonts, hoặc Transfonter.

### Ngoài định dạng WOFF và WOFF2, các định dạng webfont khác cũng được hỗ trợ như EOT (Embedded OpenType), SVG (Scalable Vector Graphics), và TTF (TrueType Font). Tuy nhiên, vì WOFF và WOFF2 có kích thước tệp nhỏ hơn và hỗ trợ tốt hơn cho nhiều trình duyệt, nên chúng được ưu tiên sử dụng hơn.

### Để sử dụng các định dạng webfont này, bạn có thể sử dụng CSS và thêm các quy tắc font-face vào tệp CSS của mình. Ví dụ:
```
@font-face {
    font-family: 'MyCustomFont';
    src: url('mycustomfont.woff2') format('woff2'),
         url('mycustomfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
```
### Trong đó, mycustomfont.woff2 và mycustomfont.woff là các tệp font của bạn. Nếu trình duyệt của người dùng hỗ trợ định dạng WOFF2, nó sẽ sử dụng tệp WOFF2, nếu không, nó sẽ sử dụng tệp WOFF. Sau đó, bạn có thể sử dụng phông chữ này bằng cách đặt tên font-family của nó trên các phần tử HTML của mình:
```
body {
    font-family: 'MyCustomFont', sans-serif;
}
```
<br>

## Kết luận

### Khi sử dụng các định dạng webfont, bạn cần kiểm tra tính tương thích của chúng trên các trình duyệt khác nhau để đảm bảo rằng phông chữ của bạn sẽ hiển thị đúng trên tất cả các thiết bị và trình duyệt. Bạn cũng cần lưu ý rằng sử dụng nhiều phông chữ trên trang web của bạn có thể làm tăng thời gian tải trang, vì vậy hãy cân nhắc việc sử dụng các định dạng webfont chỉ khi thực sự cần thiết.