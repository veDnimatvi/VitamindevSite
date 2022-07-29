---
slug: regular-expression
title: Một số regex thông dùng trong javascript
description: "Thiên Nguyễn"
img: https://user-images.githubusercontent.com/107902169/181733139-4dae525c-1187-4f75-92fd-767a34f5a0c4.png
date: 17 May 2022
---

![regex](https://user-images.githubusercontent.com/107902169/181733139-4dae525c-1187-4f75-92fd-767a34f5a0c4.png)

---

# Vaidate Tên Tiếng Việt

```
export const fullnameRegex =
  /^[A-Za-zÀÁ ÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s ]*$/;
```

# Validate Email

```
export const emailRegex =
  /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+$/;

```

# Validate Chỉ cho phép nhập chữ số
```
export const onlyNumberRegex = /^(?:\d{0,})?$/;
```

# Validate Số điện thoại có 9 đến 10 số
```
export const PhoneRegex = /^(?:\d{9,10})?$/
```

# Validate Tài khoản chứa số và ít nhất 1 chữ cái Latin
```
const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
```

# Validate Mật khẩu phải có ít nhất 8 kí tự trong đó chứa ít nhất 1 chữ hoa, 1 chữ thường và 1 số
```
const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
```

# Validate Chỉ cho phép nhập số chữ dấu chấm dấu gạch dưới 
```
const regex = /^[a-zA-Z0-9._]+$/
```

# Input type = text nhưng không nhập strng only number.
```
<input onKeyPress={
  if(!/[0-9]/.test(event.key)){
    event.prevenFefault()
  }
}} />
```



***To be continue***
### Thank for reading and Have nice day !
