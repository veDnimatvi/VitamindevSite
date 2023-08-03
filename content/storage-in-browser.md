---
slug: storage-in-browser
title: Storage trong Browser
category: Lập trình
description: So sánh Cookie, Local Storage và Session Storage
date: 3 Aug 2023
---
### So sánh Cookie, Local Storage và Session Storage

| ---- | ---- |
|:-------|:------|
| **Dạng lưu trữ** | Đều là string |
|  **Được gửi chung với browser**  |  - Cookie: Đối với mỗi một request được gửi đi từ client thì những dữ liệu được lưu trong cookie cũng được gửi kèm ở trong phần header của request đó <br /> - LocalStorage và SessionStorage thì không  |
|  **Kích thước dữ liệu có thể lưu trữ**  |  - Cookie: 4KB <br /> - LocalStorage: 5MB  <br /> - SessionStorage: 10MB  <br /> Và cũng có thể tùy theo từng trình duyệt lưu lượng của LocalStorage và SessionStorage sẽ khác nhau |
| **Khả năng hỗ trợ HTML** | - Cookie: HTML4/ HTML5, Trước khi chưa có HTML5 thì cách duy nhất để lưu trữ dữ liệu trên browser đó là lưu trên cookie<br /> - LocalStorage: HTML5 <br /> - SessionStorage: HTML5 |
| **Truy cập được dữ liệu từ đâu**  | - Cookie: Bất kỳ trên Tab trình duyệt nào cũng đều truy cập được dữ liệu được lưu trong cookie <br /> - LocalStorage: Bất kỳ trên Tab trình duyệt nào cũng đều truy cập được dữ liệu được lưu trong localStorage <br /> - SessionStorage: Những dữ liệu được lưu ở từng tab sẽ không thể truy cập được ở một tab khác. Cứ mỗi lần mở lên một tab mới thì một sessionStorage mới được tạo và chỉ có tab đó mới có thể truy cập được dữ liệu trong sessionStorage đó|
| **Thời gian hết hạn của từng dạng lưu trữ** | - Cookie: Set thời gian hết hạn một cách thủ công<br /> - LocalStorage: Không bao giờ bị hết hạn <br /> - SessionStorage: Mỗi lần tab bị đóng lại thì dữ liệu trong sessionStorage sẽ bị xóa đi |
