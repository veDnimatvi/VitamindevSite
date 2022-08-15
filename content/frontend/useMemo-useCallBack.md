---
slug: useMemo-useCallBack
title: useMemo và useCallBack trong javascript
category: ReactJs
description: "Thiên Nguyễn"
img: https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2020/02/04105635/react-usememo-vs-react-usecallback.jpg
date: 15 May 2022
---

![Hook Reactjs](https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2020/02/04105635/react-usememo-vs-react-usecallback.jpg)

---

# Đặt vấn đề

Function trong 1 component sẽ được gọi mỗi khi component rerender. Nếu một function đóng vai trò là 1 component con thì khi component cha rerender các thành phần con sẽ rerender lại hoặc gọi lại các function không cần thiết.

Để giải quyết những sự cố về hiệu suất của app xảy ra. React cung cấp cho chúng ta 2 hook: **_useMemo_** và **_useCallback_**.

## useMemo

Ví dụ:

```
const numPlusFive = useMemo(() => plusFive(num), [num]);
```

useMemo nhận vào 2 tham số: 1 là function (plusFive), 2 là một mảng mà nó phụ thuộc. nếu phát hiện mảng đó có sự thay đổi hàm (plusFive) sẽ được gọi để tính toán lại.

useMemo sẽ trả về kết quả của việc thực hiện gọi hàm và lưu vào bộ nhớ.

## useCallback

Ví dụ:

```
const plusFive = useCallback(() => {
  console.log("I was called!");
  return num + 5;
}, [num]);
```

useCallback nhận vào 2 tham số: 1 là function (plusFive), 2 là một mảng mà nó phụ thuộc. nếu phát hiện mảng đó có sự thay đổi hàm (plusFive) sẽ được gọi lại.

## Kết luận

- useMemo giữ cho một hàm không được thực thi lại nếu state mà nó phụ thuộc không thay đổi. Nó sẽ trả về kết quả của một function. Sử dụng nó khi bạn muốn ngăn một số thao tác nặng hoặc tốn kém tài nguyên được gọi trên mỗi lần render.

- useCallback giữ cho một hàm không được tạo lại lần nữa, dựa trên các state mà nó phụ thuộc. Nó sẽ trả về chính function đó. Sử dụng nó khi mà bạn muốn truyền fuction vào component con và chặn không cho hàm đó tiêu thời gian, tài nguyên cho việc tạo lại.

### Thank for reading and Have nice day !
