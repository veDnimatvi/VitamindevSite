---
slug: bat-dong-bo-trong-js
title: Đồng bộ và bất đồng bộ trong JS
category: Javascript
description: "Thiên Nguyễn"
img: https://co-well.vn/wp-content/uploads/2021/09/dong-bo-va-bat-dong-bo-javascript-7.jpg
date: 12 May 2022
---

![Async JS](https://co-well.vn/wp-content/uploads/2021/09/dong-bo-va-bat-dong-bo-javascript-7.jpg)

---

# Đồng bộ và bất đồng bộ trong Javascript là gì ?

## Đồng bộ là gì?

Đây là quá trình gồm các câu lệnh được thực hiện theo thứ tự lần lượt, theo thứ tự từ trên xuống dưới.

Ưu điểm : Dễ kiểm soát, nếu có bất kì lỗi gì chương trình sẽ ngừng chạy.

Nhược điểm : Trong trường hợp cần lấy dữ liệu từ bên ngoài (api), thì sẽ tốn thời gian chạy dẫn đến hiệu năng của chương trình.

![Đồng bộ](https://codelearn.io/Media/Default/Users/D_2EA_2EN_5F3002/Async-Function/2A3Xj4V.png)

## Bất đồng bộ là gì?

Đây là quá các câu lệnh có thể chạy cùng 1 lúc, không cần chờ câu lệnh trước đó chạy xong.

Ưu điểm: Giúp tối ưu thời gian chạy của các câu lệnh. Giúp thực hiện nhiều tác vụ cùng một lúc.

Nhược điểm : Kết quả trả về không theo thứ tự nên khó kiểm soát.

![Đồng bộ](https://codelearn.io/Media/Default/Users/D_2EA_2EN_5F3002/Async-Function/Mo7eBlr.png)

## Các hàm xử lý

### Callback: Hiểu đơn giản là truyền một hàm làm tham số của một hàm khác.Thường được sử dụng để bắt sự kiện onlick.

```
function asyncFunction(callback){
	console.log('start');
	setTimeOut(() => {
		callback();
	}, 1000);
	console.log('Waitting');
}

let printEnd = function() {
	console.log("end");
}

asyncFunction(printEnd)
```

Nhược điểm : Khi có quá nhiều CallBack. Code nhìn sẽ dễ bị rối mắt. Hiện tượng này gọi là CallBack Hell.

### Promise

Để giải quyết cho vấn đề callback hell ở trên, Phiên bản ES6 đã sinh ra promise. Dịch nôm na nghĩa là một lời hứa đại diện cho giá trị chưa tồn tại và giá trị đó sẽ được trả về vào một thời gian trong tương lai.

Cách tạo ra 1 promise:

```
let promise = new Promise((resolve, reject) => {
	// some code
});
```

Promise sẽ nhận vào một hàm callback gồm 2 tham số:

- Resolve: một function sẽ được gọi nếu đoạn code bất đồng bộ trong Promise chạy thành công.
- Reject: một function sẽ được gọi nếu đoạn code bất đồng bộ trong Promise có lỗi xảy ra.

Promise cung cấp cho chúng ta các phương thức để xử lý sau khi được thự hiện:

- then(): dùng để xử lý sau khi Promise được thự hiện thành công (khi resolve được gọi)
- catch(): dùng để xử lý sau khi Promise có bất kỳ lỗi nào (khi reject được gọi)
- finally() : dùng để xử lý sau khi 1 trong 2 hàm resolve hoặc reject được thực hiện xong.

```
promise.then((res) => {
	console.log('this is then'+ res);
	}).catch((err) => {
		console.log('This is catch' + err);
		}).finally(() => {
			console.log('Done');
			})
```

### Promise All

Sử dụng để thực hiện song song các promise Promise.all() nhận vào tham số là một mảng các promise và khi then() trả về 1 mảng các kết quả của các promise.
Làm code gọn gàng hơn.

```
Promise.all([
	callApi(url),
	callApi(url),
	callApi(url)
	]).then(res => {
		console.log(res)
		}).catch(err => {
			console.log(err)
			})
```

### Async / Await

Trước đây , để làm việc với code bất đồng bộ , ta sử dụng callback và promise.

Ở phiên bản ES7 JS giới thiệu Async/Await.

Async khai báo 1 hàm bất đồng bộ.

Await được sử dụng để chờ đợi 1 Promise đến khi promise trả về kết quả. Nó chỉ đc sử dụng trong hàm đc khai báo bởi Async.

Async / Await được thực hiện tuần tự , không phải song song.

```
let myPromise = new Promise((resolve, reject) => {
	myResolve("I'm not a king, I'm not a god, I'm .....");
});

async function myDisplay(){
	document.getElementById("demo").innerHTML = await myPromise();
}
```

### Xử lí lỗi với Async/Await

Kết quả bình thường khi bạn sử dụng async/await là một kết quả đã được resolve. Nhưng khi promise bị reject và exception xảy ra thì phải làm gì? Chúng ta có thể dùng try…catch để giải quyết các lỗi này như các hàm bình thường khác.

```
async function f() {

  try {
    let response = await fetch('http://no-such-url');
  } catch(err) {
    alert(err); // TypeError: failed to fetch
  }
}

f();
```

### Thank for reading and Have nice day !
