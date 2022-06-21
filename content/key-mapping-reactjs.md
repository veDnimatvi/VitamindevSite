---
slug: key-mapping-reactjs
title: List and Keys React
description: "Thiên Nguyễn"
img: https://i.morioh.com/200626/ec9a9e94.jpg
date: 10 May 2022
---

![Key Mapping](https://i.morioh.com/200626/ec9a9e94.jpg)

---

### Đặt vấn đề

Đã bao giờ bạn đặt câu hỏi rằng tại sao lại cần key khi map 1 mảng? Tôi chắc chắn bạn đã gặp cảnh báo này =))

![](https://images.viblo.asia/73931b59-e18d-4168-9a7a-834f032213a1.PNG)

Chỉ cần thêm thuộc tính key cho item là xong. Nhưng bạn có biết tại sao React bắt bạn phải làm như vậy không?

Cùng tìm hiểu nhé!

# Lý do ReactJs cần Key Props

Khi một state trong component thay đổi, ReacJs sẽ tìm ra nhưng điểm khác biệt. Nếu có component đó sẽ thay đổi.

Lấy ví dụ ta liệt kê 1 mảng gồm 2 phần tử mà không có key props:

```
<li>1</li>
<li>2</li>
```

Sau đó phần tử thứ 3 được thêm vào.

```
<li>1</li>
<li>2</li>
<li>3</li>
```

Reactjs sẽ kiểm tra qua tất cả các phần tử của 2 mảng so sánh chúng với nhau. 2 phần tử đầu giống nhau, phần tử thứ 3 là chỗ có thay đổi. Component tiến hành render lại.

Tiếp tục thêm phần tử 0 vào đầu mảng thì sao ?

```
<li>0</li>
<li>1</li>
<li>2</li>
<li>3</li>
```

ReactJs lại so sánh:

1. thẻ li value = 0 mảng mới khác thẻ li value = 1 mảng cũ => rerender
2. thẻ li value = 1 mảng mới khác thẻ li value = 2 mảng cũ => rerender

...

Vậy là gặp lặp qua thấy ông nào cũng khác thế là 4 lần rerender. Performance not good, right :))

Đó là lý do Key Props trong ReactJs ra đời. Vậy khi có key thì sẽ hoạt động như thế nào?

```
<li key={0}>0</li>
<li key={1}>1</li>
<li key={2}>2</li>
<li key={3}>3</li>
```

Vậy khi so sánh sự thay đổi ReactJs sẽ so sánh thông qua key của từng phần tử, và kết quả ReactJs nhân được là có 1 phần tử mới là `<li key={0}>0</li>` được thêm vào phía đầu của mảng. Các phần tử còn lại chỉ là dịch xuống vị trí kế tiếp mà thôi

### Thank for reading and Have nice day !
