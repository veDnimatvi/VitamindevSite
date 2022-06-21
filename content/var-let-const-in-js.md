---
slug: var-let-const-in-js
title: Var let const trong javascript
description: "Thiên Nguyễn"
img: https://thaunguyen.com/blog/wp-content/uploads/2018/02/let.jpeg
date: 11 May 2022
---

![Variable JS](https://thaunguyen.com/blog/wp-content/uploads/2018/02/let.jpeg)

---

# Javascript: Cách sử dụng var, let và const

Trong javascript chúng ta có một số cách để khai báo biến như sau: var, let, const.

Trước đây, chúng ta thường sử dụng var để khai báo biến. Sau khi ES6 ra đời, chúng ta có thể dùng let và const. Vậy tại sao phải có let và const ? Let và const ra đời nhằm khắc phục nhược điểm gì của var?

Cùng tìm hiểu nhé!

# Về scope

## Var

Một biến thì luôn có phạm vi truy cập của nó. Ở đây var có phạm vi ảnh hưởng trong một function, ra khỏi function thì var sẽ không tồn tại nữa.

```
function run() {
 var width = 200;
 console.log(width);// 200
}
run();
console.log(width) //width is not defined
```

### Hoisting với var

Trong JavaScript, tất cả các định nghĩa biến với keyword **_var_** có giá trị ban đầu là **_undefined_**. Đó là bởi vì hoisting đã đưa các khai báo biến vào bộ nhớ và khởi tạo chúng với giá trị **_undefined_**.

```
console.log(width);//not error, in ra undefined
var width = 200;
```

Sau khi hoisting đoạn code trên sẽ như sau:

```
var width;//khai báo được kéo lên trên cùng của scope này
console.log(width);//not error, in ra undefined
width = 200;
```

## Let

Phạm vi truy cập của let là block. Block là code trong dấu ngoặc nhọn {}. Do đó khi thoát khỏi block thì biến được khai báo bằng let sẽ không tồn tại nữa.

```
const i = 10;
if(i > 0) {
 let width = 200;
 console.log(width)// 200
}
console.log(width)// width is not defined

const i = 10;
if(i > 0) {
 var width = 200;
 console.log(width)// 200
}
console.log(width)// 200 do dùng var nên khi ra khỏi block,
//width vẫn truy cập được
```

### Let không bị hoisting

```
console.log(width);// error, width is not defined
let width = 200;
```

## Const

Với let và var, chúng ta có thể cập nhật giá trị của biến đó. Const là một biến hằng số, không thể thay đổi giá trị. Nhưng nó chỉ đúng cho những dạng dữ liệu đơn giản như string, số, boolean(primitive type). Còn với object thì không đúng nữa, ta có thể thay đổi thuộc tính của object.

```
const name = 'Thien';
name = 'Nguyen'//error
const obj = {
 name: 'Leo',
 city: 'Ha Noi'
}
obj = {};//error
obj.name = 'Nguyen';// not error
```

### Để tạo một hằng cho một object chúng ta cần sử dụng Object.freeze để ngăn chặn việc thay đổi các thuộc tính của object đó.

```
const obj = Object.freeze({
name: 'Thien',
city: 'Ha Noi'
});
obj = {};//error
obj.name = 'Nguyen';//not error, nhưng không làm thay đổi được obj
```

## Kết luận

- Sử dụng const như mặc định.
- Nếu biến cần phải cập nhật giá trị thì dùng let.
- Hạn chế dùng var, trừ khi bạn muốn chia sẻ biến đó thông qua nhiều scope khác nhau.

### Thank for reading and Have nice day !
