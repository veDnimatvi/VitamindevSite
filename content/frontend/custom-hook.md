---
slug: custom-hook
title: Customs Hook trong javascript
category: ReactJS
description: "Thiên Nguyễn"
img: https://user-images.githubusercontent.com/107902169/181732855-d4f9f6f1-664f-4cf3-95fd-3995cf45d1da.png
date: 18 May 2022
---

![custom-hooks](https://user-images.githubusercontent.com/107902169/181732855-d4f9f6f1-664f-4cf3-95fd-3995cf45d1da.png)

---

# Custom Hooks là gì?

Ngoài những hooks có sẵn trong React Hooks như useState, useEffect, useCallback, ... Thì React cho phép chúng ta tự định nghĩa ra những hooks khác tùy theo mỗi nghiệp vụ.

Những đặc điểm của 1 Custom Hooks:

- Là một function, nhận input và trả output.
- Tên của nó bắt đầu bởi **_use_** như useColor, useQuery,...
- Khác với function component , Custom Hooks trả về dữ liệu bình thường , không phải là jsx.
- Khác với function bình thường, custom hooks có thể sử dụng các hooks khác như useState, useRef,... và cả các custom hooks khác nữa.

Các thư viện cho ReactJS cũng cung cấp các hooks cho chúng ta dùng như useForm(React Hook Form), useMediaQuery(MUI),...

# Tại sao lại sử dụng Custom Hooks

Một số lợi ích của custom hooks:

- Tách biệt hoàn toàn logic với giao diện
- Tái sử dụng ở nhiều component khác nhau có cùng logic xử lý. Từ đó nếu logic thay đổi thì chỉ cần sửa tại 1 nơi duy nhất.
- Chia sẻ dữ liệu, logic giữa các component.
- Ẩn các đoạn code phức tạp của component, giúp component dễ đọc hơn.

# Khi nào nên dùng custom hooks

- Khi một đoạn code được tái sử dụng nhiều nơi ( dễ thấy khi bạn copy cả 1 đoạn code mà không cần sửa gì, trừ tham số truyền vào. Tách như cách mà bạn tách một function).
- Khi logic quá dài và phức tạp. Bạn muốn viết nó ở 1 file khác , để component của bạn ngắn hơn và dễ đọc hơn vì không cần quan tâm đến logic của hooks đó nữa.

# Ví dụ cho custom hooks

Có 2 bài toán:

- Hiển thị một user lấy từ API với api là /user dựa vào id.
- Hiển thị một product lấy từ API với api là /product dựa vào id.

Ta sẽ có custom hooks như sau:

```
function useItemById(endpoint, id){
    const [item, setItem] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        fetch(`/api/${endpoint}/${id}`).then(response => {
            response.json().then(item => setUser(item));
        })
        .catch(error => setError(error);
    },[]);

    return [item, error];
}
```

Cách sử dụng:

```
function User({ id }){
    const [user, error] = useItemById('user', id);

    return return (<>{ /* Bind users here */ }</>);
};
```

Với Product cũng sẽ tương tự.

### Thank for reading and Have nice day !
