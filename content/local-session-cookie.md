---
slug: local-session-cookie
title: localStorage, sessionStorage vs Cookie
description: "Thiên Nguyễn"
img: https://www.loginradius.com/blog/static/05c0a6d7a4539d8f04241b6ddf720a52/03979/blog-banner.png
date: 13 May 2022
---

![Storege](https://www.loginradius.com/blog/static/05c0a6d7a4539d8f04241b6ddf720a52/03979/blog-banner.png)

---

# So sánh Local Storage Session Storage và Cookie

Local Storage, Session Storage hay Cookie đều dùng để lưu trữ thông tin trên trình duyệt. Nhưng chúng có gì khác nhau.
Cùng tìm hiểu nhé !

## Local Storage

Tất cả các trình duyệt hiện đại đều hỗ trợ chức năng này. LocalStorage giúp website lưu trữ dữ liệu vĩnh viễn trên trình duyệt. Trừ khi người dùng xóa cache hoặc làm các hành động như cài lại trình duyệt.

Về cơ bản, nó như một table trong Excel, nhưng chỉ có hai trường là: key và value.

Để có thể tạo ra 1 localStorge ở trên trình duyệt thì ta thực hiện như sau:
```
window.LocalStorage.setItem('name', 'value');
```

Để đọc lại giá trị, bạn gọi hàm:
```
window.LocalStorage.getItem('name');
```

Và để xóa chúng đi:
```
window.LocalStorage.clear(); //xóa tất cả
window.LocalStorage.removeItem('name'); //chỉ xóa phần tử có tên là name
```

Có rất nhiều giá trị trong một ứng dụng website nên lưu trong LocalStorage thay vì SessionStorage.

Tuy nhiên, bạn nên lưu ý là LocalStorage không bảo mật. Bạn có thể dễ dàng lưu dữ liệu, lấy dữ liệu và chỉnh sửa dữ liệu từ LocalStorage.

Ngoài ra, điểm yếu của LocalStorage là nó chỉ lưu đơn thuần một String. Các kiểu dữ liệu phức tạp đều không phù hợp để lưu trong LocalStorage.

## Session Storage

Session Storage khá giống với Local Storage. Vì chúng đều thuộc về web storage API.

- Lưu data theo cặp key/value ở local browser và phía server không access được các data này.
- Có cùng APIs: setItem, getItem, removeItem, clear.
- Cho phép lưu trữ nhiều data(khoảng 10MB).

Một khuyết điểm của cả localStorage và sessionStorage là có thể bị đọc bởi Javascript. Do đó dễ bị đánh cắp thông tin thông qua một cross-site scriting. Vì vậy, chúng ta không nên lưu trữ những thông tin nhạy cảm như token ID, password, username, email của người dùng vào localStorage hay sessionStorage.

Ví dụ về các hàm:
```
// Save data to sessionStorage
sessionStorage.setItem('key', 'value');

// Get saved data from sessionStorage
var data = sessionStorage.getItem('key');

// Remove saved data from sessionStorage
sessionStorage.removeItem('key');

// Remove all saved data from sessionStorage
sessionStorage.clear();
```

Khi close tab hay close browser thì data ở localStorage vẫn tồn tại, và chỉ bị mất khi user xoá cache hoặc clear web data. Còn đối với sessionStorage thì data sẽ bị mất ngay khi close tab hoặc close browser.

## Cookie

Bản chất lưu trữ Cookie cũng là một bản ghi đơn giản gồm key, value.

Một số điểm nổi bật của Cookie so với localStorage và sessionStorage là:

- localStorage chỉ access được trên browser client; còn cookies thì có thể access được ở browser client và cả phía server (khi tạo một http request thì cookies của browser sẽ được attach vào header Cookie, từ đó phía server có thể parse header này và get được data cookie).
- Cookie sẽ tự động được include vào XHR khi chúng ta gửi request REST lên API. Điều này cho phép chúng ta không cần phải tự chèn authentication info(kỹ thuật này gọi là interceptor) vào header của mỗi request. Và dựa vào cookie, server có thể nhận biết được client này đã được authenticate thành công hay chưa. Đây là lí do chính cookie khó bị thay thế bởi storage thông thường.
- cookies có thời gian hết hạn expires, sau thời gian này thì cookies sẽ biến mất khỏi browser.
- cookies chỉ cho phép lưu tối đa khoảng 4 KB, vì vậy ta nên sử dụng cookies với mục đích save những loại data simple ví dụ như token cho authentication,...
- Khi đóng một tab, Cookie vẫn còn được lưu trên trình duyệt.
- Cookie có thể mất đi sau khi đóng trình duyệt nếu nó được set expires là N/A
- Cookie có option để chúng ta set ngày quá hạn cho nó. Nghĩa là có thể định nghĩa khi nào nó tự động xoá được.

Ví dụ hàm set-cookie trong Javascript:
```
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
```

Một số lưu ý khi dùng cookie:

- Bị giới hạn về dung lượng lưu trữ khoảng 4KB
- Nên xác định thời gian expire/max-age. Thông thường chỉ nên cho phép một cookie chứa thông tin để authenticate trong khoảng 3-4 tháng. Để tránh người dùng phải đăng nhập nhiều lần, chúng ta cung cấp một option lưu trữ thông tin để lần sau user không cần đăng nhập nữa.
- Nếu cookie dùng để authenticate nên set httpOnly bằng true. Để không cho phép đọc được cookie từ Javascript. Tránh được sự tấn công từ bên ngoài bằng thủ thuật scripting.
- Dễ bị đánh cắp thông tin người dùng. Cho nên đừng bao giờ lưu password nguyên gốc của user mà hãy mã hoá nó, hay dùng token-based authentication.

## Kết luận
- Vì localStorage và sessionStorage được lưu trữ trên trình duyệt của người dùng, nên các bạn cần phải xem xét nội dung lưu trữ có liên quan đến vấn đề bảo mật hay không.
- Về phạm vi: sessionStorage: giới hạn trong một cửa sổ hoăc thẻ của trình duyệt. Một trang web được mở trong hai thẻ của cùng một trình duyệt cũng không thể truy xuất dữ liệu lẫn nhau. Như vậy, khi bạn đóng trang web thì dữ liệu lưu trong sessionStorage hiện tại cũng bị xóa. Còn localStorage: có thể truy xuất lẫn nhau giữa các cửa sổ trình duyệt. Dữ liệu sẽ được lưu trữ không giới hạn thời gian.

### Thank for reading and Have nice day !
