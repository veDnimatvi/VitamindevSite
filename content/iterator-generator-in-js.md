---
slug: iterator-generator-in-js
title: Iterator and Generator in JS
category: Javascript
description: "Nguyên tắc hoạt động của Iterator and Generator trong javascript"
img: https://www.qed42.com/sites/default/files/2021-02/Iterators%20and%20Generators%20in%20JavaScript.png
date: 12 May 2022
---

![Iterator and Generator](https://www.qed42.com/sites/default/files/2021-02/Iterators%20and%20Generators%20in%20JavaScript.png)

---

## Iterables và iterators trong ES6

Từ trước đến nay để lặp qua các phần tử của một mảng thì chúng ta sử dụng vòng lặp. Ví dụ bạn muốn lặp qua từng phần tử và có thể dừng ở một phần tử bất kì, điều này hoàn toàn làm được bằng vòng lặp nhưng không được hay và tốn chi phí tính toán. Vì vậy trong ES6 cung cấp cho chúng ta iterators.

Cùng tìm hiểu nó hoạt động như thế nào nhé !

### Iterators là gì?

Iterators là một bộ duyệt dùng để duyệt qua một mảng hoặc một collection mà qua mỗi lần duyệt sẽ ghi lại vị trí đã duyệt để từ đó có thể biết và lấy vị trí tiếp theo.

Trong Javascript thì iterators có chung cấp phương thức next() và phương thức này sẽ return về phần tử kết tiếp, đồng thời ghi nhận luôn phần tử đã lặp là phần tử next(). Phương thức next() sẽ return về một Object gồm hai thuộc tính là value và done.

```
let arr = ['a', 'b', 'c'];

var iterator = arr[Symbol.iterator]();

console.log(iterator.next());   // Object {value: 'a', done: false}
console.log(iterator.next());   // Object {value: 'b', done: false}
console.log(iterator.next());   // Object {value: 'c', done: false}
console.log(iterator.next());   // Object {value: 'undefined', done: true}
```

Giá trị lần next() cuối cùng là một giá trị undefined và key done của nó sẽ là true.

Đoạn code trên tại sao lại có Symbol.iterator? Symbol.iterator là gì? Tìm hiểu qua một chút về Iterator Protocol và Iterable nhé !

### Iterable

Iterable là khả năng cho phép các đối tượng trong Javascript sử dụng các kỹ thuật xử lý dữ liệu như for of loop, toán tử ba chấm ....

Với ES6 thì các đối tượng như Array, Object, Map, WeakMap, Set, WeakSet đều là đối tượng Iterable.

### Iterator protocol

Iterator Protocol chẳng qua chỉ là các giao thức (method) xử lý một đối tượng **có đánh dấu vị trí đã duyệt**, vì vậy với các đối tượng thông thường sẽ không sử dụng được nên ta phải sử dụng Symbol.iterator để chuyển đôi.

```
let arr = ['a', 'b', 'c'];

var iterator = arr[Symbol.iterator]();

console.log(iterator.next());   // Object {value: 'a', done: false}
console.log(iterator.next());   // Object {value: 'b', done: false}
console.log(iterator.next());   // Object {value: 'c', done: false}
console.log(iterator.next());   // Object {value: 'undefined', done: true}
```

![Iterable](https://exploringjs.com/es6/images/iteration----consumers_sources.jpg)

- Data consumers: Các phương thức - hành động của Iterator, đây cũng chính là Iterator Protocol.
- Interface: Interface là một lớp trung gian kế thừa tất cả các Data consummers, đây chính là Iterable. Và vì trong Javascript không tồn tại Interface nên ta sử dụng Symbol.iterator để chuyển đổi.
- Data Resources: Các đối tượng dữ liệu trong Javascript muốn chuyển sang Iterable.

**Túm lại:**

- Như vậy Iterator là những toán tử có khả năng liệt kê các phần tử trong các đối tượng tập hợp như Array, Object, Map, Set, WeakMap, WeakSet.
- Các đối tượng muốn sử dụng được Iterator Protocol thì phải thông qua Interface. Thông thường thì các đối tượng như array, collection đề đã có sẵn iterable.
- Với phương thức next() thì bạn phải thực hiện thao tác chuyển đổi thông qua Symbol.iterator.

## Genarator trong ES6

### Generator là gì?

- Generator là object được trả về từ generator function.
- Generator không thể được tạo ra trực tiếp. Bạn phải tạo ra 1 generator function sau đó gọi hàm này thì generator mới được tạo ra.

**Cú pháp**

```
function* generateId() {
	yield 1;
	console.log('Continue to run');
	yield 2;
	console.log('Resume');
	return 3;
}
const newId = generateId();
newId.next(); // { value: 1, done: false }
newId.next(); // { value: 2, done: false }
newId.next(); // { value: 3, done: true }
```

Đặc điểm của 1 Generator Function

- Hàm có thể dừng giữa chừng và tiếp tục sau.
- Mỗi lần gọi, hàm sẽ được thực thi cho đến khi gặp lệnh yield hoặc return.

Generator có 3 hàm:

- next() : Tiếp tục thực thi hàm cho đến khi gặp yield / return // { value: 2, done: true/false }
- return() : Dừng Generator function và return kết quả // { value: 3, done: true }
- throw() : Dừng generator function và trả về lỗi // { value: undefined, done: true }

### Ví dụ Fibonanci với generator

```
function* generateFibonaci() {
	let prev = 0;
	let curr = 1;
	while (true) {
		yield curr;
		// Calculate the next number
		const next = prev + curr;
		prev = curr;
		curr = next;
	}
}
const fibo = generateFibonaci();
console.log(fibo.next()); // { value: 1, done: false }
console.log(fibo.next()); // { value: 1, done: false }
console.log(fibo.next()); // { value: 2, done: false }
console.log(fibo.next()); // { value: 3, done: false }
console.log(fibo.next()); // { value: 5, done: false }
```

### Thank for reading and Have nice day !
