---
slug: ssr-vs-csr
title: sự khác biệt giữa SSR và CSR
category: Lập trình
description: "Thiên Nguyễn"
img: https://altamira.ai/wp-content/uploads/2022/05/CSR-vs-SSR.png
date: 29 July 2022
---

![SSR vs CSR](https://altamira.ai/wp-content/uploads/2022/05/CSR-vs-SSR.png)

---

## Đặt vấn đề

Lập trình web đang có xu hướng chuyển từ server-side rendering sang client-side rendering.

## Cơ chế server-side rendering

Phần lớn logic sẽ được xử lý ở server:

- Khi người dùng vào 1 trang web, trình duyệt sẽ gửi GET request tới web server.
- Web server sẽ nhận request, đọc dữ liệu từ database.
- Web server sẽ render HTML, trả về cho browser để hiển thị cho người dùng.

![SSR](https://toidicodedao.files.wordpress.com/2018/07/diagram-serversiderendered.png?w=346&h=248)

Một số tính chất của cơ chế server-side rendering:

- Logic từ đơn gian đến phức tạp đều nằm ở phía server.
- Logic routing (chuyển trang), Logic để render(hiển thị trang web) đều nằm ở phía server./

Ưu điểm:

- Ở lần đầu load trang nhanh, dễ optimize vì toàn bộ dữ liệu đã được xử lý ở seerver. Client chỉ việc hiển thị ra.
- Developer chỉ cần code 1 project web là được, không cần phải tách ra front-end và back-end
- SEO tốt vì khi bot của Google và Bing vào web sẽ thấy toàn bộ dữ liệu dưới dạng HTML.
- Chạy được trên phần lớn mọi trình duyệt, kể cả disable Js vẫn chạy tốt.

Nhược điểm:

- Mỗi lần người dùng chuyển trang là site phải load lại nhiều lần.
- Nặng server vì server phải xử lý nhiều logic và dữ liệu.
- Tốn băng thông vì server phải gửi nhiều dữ liệu thừa và trùng.
- Tương tác không tốt như Client side rendering vì trang phải refresh, load lại nhiều lần.

Một số trang web sử dụng cơ chế này: WordPress, Thegioididong, VNexpress, ZingNews.

### Cơ chế client-side rendering

Ở những năm 2010, sự phát triển của Js và ajax, cơ chế client-side rendering bắt đầu được sử dụng.
Developer bắt đầu build ứng dụng SPA(Signle Page App). Ứng dụng nằm trong 1 page duy nhất.

Client Side Rendering tức là việc render HTML, CSS sẽ được thực hiện ở client.
CSR có những đặc điểm sau:

- Những logic đơn giản(validate, đọc dữ liệu, filter, sorting) nằm ở client side.
- Logic để routing, render dữ liệu thì phần lớn là ở client side.
- Logic phức tạp như thanh toán, phân quyền hoặc cần xử lý nhiều vẫn nằm ở sererver.

![CSR](https://toidicodedao.files.wordpress.com/2018/07/sharepoint-2013-clientside-rendering-csr-jslink-templates-10-638.jpg?w=403&h=227)

Ưu điểm:

- Page chỉ cần load một lần duy nhất. Khi user chuyển sang hoặc thêm dữ liệu, JS sẽ lấy và gửi dữ liệu từ server qua ajax. User có thể lấy dữ liệu mới mà không cần chuyển trang.
- Chuyển logic sang client nên giảm tải được một phần cho server.
- Giảm băng thông do chỉ cần lấy JSON và dữ liệu cần thiết thay vì phải lấy toàn bộ trang.
- Với các ứng dụng cần tương tác nhiều , SPA hoạt động mượt mà hơn vì code chạy trên browser, không cần load đi load lại nhiều.

Nhược điểm:

- Lần load đầu tiên sẽ chậm hơn. Lý do là vì phải tải toàn bộ js về, parse và chạy js, gọi api để lấy dữ liệu từ server, sau đó render dữ liệu.
- Đòi hỏi Project phải chia làm 2 phần riêng là FE và BE.
- Không chạy được nếu js bị disable. hoặc ở các trình duyệt cũ không nhận JS ES6.
- SEO không tốt bằng SSR (Do bot crawl không đọc được dữ liệu).
- Nếu client sử dụng Mobile, device yếu thì khi load sẽ bị chậm.

Một số trang web sử dụng CSR: Facebook, Instagram, Netflix, ...

### Thank for reading and Have nice day !

### Tham khảo [https://toidicodedao.com/2018/09/11/su-khac-biet-giua-server-side-rendering-va-client-side-rendering/](https://toidicodedao.com/2018/09/11/su-khac-biet-giua-server-side-rendering-va-client-side-rendering/)
