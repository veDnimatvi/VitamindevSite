---
slug: code-thieu-nhi
title: Các bài code thiếu nhi trong javascript
description: "Thiên Nguyễn"
img: https://product.bachkhoa-aptech.edu.vn:33/Resources/Data/screenshot-2021-07-06-141837-optimized-768x429.png
date: 23 May 2022
---

![Code Kid](https://product.bachkhoa-aptech.edu.vn:33/Resources/Data/screenshot-2021-07-06-141837-optimized-768x429.png)

---

### 1. Kết quả là gì?

```
function a(x) {
  x++;
  return function () {
    console.log(++x);
  };
}

a(1)();
a(1)();
a(1)();

let x = a(1);
x();
x();
x();
```

- A: 1, 2, 3 and 1, 2, 3
- B: 3, 3, 3 and 3, 4, 5
- C: 3, 3, 3 and 1, 2, 3
- D: 1, 2, 3 and 3, 3, 3

<details>
  <summary>Câu trả lời</summary>
  <h4>Đáp án: B</h4>
  <h4>Lý giải</h4>
  Vế thứ 1: a(1)(); Sẽ hoạt động như sau:
  <div></div>
  <ul>
  	<li>Với câu lệnh thứ nhất x++ hiện tại ở câu lệnh này x = 1 vì x++: sẽ tăng thêm 1 sau khi câu lệnh này kết thúc</li>
  	<li>Hiện tại x = 2. Toán tử tăng sau ++x: tăng giá trị x trước khi thực hiện câu lệnh hiện tại nên với console.log(++x); trả về x = 3;</li>
  </ul>
  Vậy 3 lần gọi a(1)(); đều cho ra kết quả là 3,3,3

Vế thứ 2: x sẽ lưu kết quả của hàm a();

  <ul>
  	<li>Với x() sẽ trả về hàm function(){ console.log(++x); } => Vậy lần gọi đầu tiên sẽ như vế 1 trả về x = 3</li>
  	<li>Lần gọi thứ 2 thực hiện hàm function(){ console.log(++x); } ++x => x = 4</li>
  	<li>Tương tự với lần gọi thứ 3 => ++x => x = 4</li>
  </ul>
  Vậy với vế thứ 2 này kết quả là 3,4,5
</details>

### 2. Kết quả là gì?

```
function Name(a, b) {
  this.a = a;
  this.b = b;
}

const me = Name("Thien", "Nguyen");

console.log(!(a.length - window.a.length));
```

- A: undefined
- B: NaN
- C: true
- D: false

<details>
  <summary>Câu trả lời</summary>
  <h4>Đáp án: C</h5>
  <h4>Lý giải</h4>
  <ul>
  	<li>Khi ta khởi tạo 1 đối tượng nhưng không sử dụng từ khóa new (new Name("Thien", "Nguyen")) thì biến a sẽ trở thành biến global và có giá trị là "Thien". Và a cũng chính là thuộc tính của global object window(in the browser) or global in nodejs.</li>
  	<li>Vậy nên a.length = window.a.length = 5. Vậy nên a.length - window.a.length = 0</li>
  	<li>0 lại là giá trị falsy vậy  nên !0 sẽ là true</li>
  </ul>
</details>

### 3. Kết quả là gì?

```
const x = function (...x) {
  let k = (typeof x).length;
  let y = () => "freetut".length;
  let z = { y: y };

  return k - z.y();
};

console.log(Boolean(x()));
```

- A: true
- B: 1
- C: -1
- D: false

<details>
  <summary>Câu trả lời</summary>
  <h4>Đáp án: A</h5>
  <h4>Lý giải</h4>
  <ul>
  	<li>let k = (typeof x).length => k trả về 1 string với giá trị là "function". Vậy k = "function".length = 8</li>
  	<li>let z = { y: y }; khai báo 1 obj với {y: hàm y = () => "freetut".length;} Vậy z.y() = "freetut".length = 7</li>
  	<li>k - z.y() = 8 - 7 = 1. Vậy x() trả về giá trị là 1</li>
  	<li>Boolean(1) = true</li>
  </ul>
</details>

### 4. Kết quả là gì?

```
var tip = 100;

(function () {
  console.log("I have $" + husband());

  function wife() {
    return tip * 2;
  }

  function husband() {
    return wife() / 2;
  }

  var tip = 10;
})();
```

- A: "I have $10";
- B: "I have $100";
- C: "I have $50";
- D: "I have $NaN";

<details>
  <summary>Câu trả lời</summary>
  <h4>Đáp án: D</h5>
  <h4>Lý giải</h4>

  <ul>
  	<li>Chúng ta có thể sẽ nghĩ tới đáp án đúng là B vì biến tip global = 100. Nhưng không, hàm chạy sẽ đọc lệnh var tip = 10.</li>
  	<li>Với cơ chế hoisting trong các biến được khai báo với var thì biến tip trong hàm sẽ được đẩy lên khai báo ở đầu hàm và nhận giá trị mặc đinh là undefined</li>
  	<li>Vậy undefined * 2 = NaN</li>
  </ul>
</details>

### 5. Kết quả là gì?

```
const js = { language: "loosely type", label: "difficult" };

const edu = { ...js, level: "PhD" };

const newbie = edu;

delete edu.language;

console.log(Object.keys(newbie).length);
```

- A: 2;
- B: 3;
- C: 4;
- D: 5;

<details>
  <summary>Câu trả lời</summary>
  <h4>Đáp án: A</h5>
  <h4>Lý giải</h4>
  <ul>
  	<li>const edu = { ...js, level: "PhD" }; edu sẽ là {language: "loosely type", label: "difficult", level: "PhD"}</li>
  	<li>const newbie = edu; Khởi tạo biến newbie bằng với edu</li>
  	<li>delete edu.language; Xóa đi thuộc tính language. Vậy Object.keys(edu).length còn lại 2</li>
  	<li>Object.keys(newbie).length = Object.keys(edu).length = 2</li>
  	<li>Object.keys(newbie).length = Object.keys(edu).length Vì đã khai báo const newbie = edu; newbie luôn bằng edu vì đều tham chiếu đến cùng 1 bộ nhớ.</li>
  	<li>Nếu muốn đáp án vẫn là 3 thì ta sẽ phải thay đổi const newbie = edu; thành const newbie = {...edu}; (deep copy)</li>
  </ul>
</details>

### 6. Kết quả là gì?

```
let x = {};
let y = {};
let z = x;

console.log(x == y);
console.log(x === y);
console.log(x == z);
console.log(x === z);
```

- A: true true true true;
- B: false false false false;
- C: true true false false;
- D: false false true true;

<details>
  <summary>Câu trả lời</summary>
  <h4>Đáp án: D</h5>
  <h4>Lý giải</h4>
  <ul>
  	<li>Bởi vì x và y trỏ đến 2 vùng nhớ khác nhau dù cho chúng có cấu trúc tương đồng và giá trị đều là rỗng nên kết quả trả về là false. Phép so sánh tham chiếu thường dùng để so sánh 2 giá trị, trong trường hợp là 2 obj thì ta nên so sánh các thuộc tính và giá trị bên trong nó.</li>
  	<li>Vì đều tham chiếu đến cùng 1 bộ nhớ. Nên x == z và x === z đều trả về giá trị true</li>
  </ul>
</details>

### 7. Kết quả là gì?

```
const array = (a) => {
  let length = a.length;
  delete a[length - 1];
  return a.length;
};

console.log(array([1, 2, 3, 4]));

const object = (obj) => {
  let key = Object.keys(obj);
  let length = key.length;
  delete obj[key[length - 1]];

  return Object.keys(obj).length;
};

console.log(object({ 1: 2, 2: 3, 3: 4, 4: 5 }));

const setPropNull = (obj) => {
  let key = Object.keys(obj);
  let length = key.length;
  obj[key[length - 1]] = null;

  return Object.keys(obj).length;
};

console.log(setPropNull({ 1: 2, 2: 3, 3: 4, 4: 5 }));
```

- A: 333
- B: 444
- C: 434
- D: 343

<details>
  <summary>Câu trả lời</summary>
  <h4>Đáp án: C</h5>
  <h4>Lý giải</h4>
  <ul>
  	<li>delete sẽ chỉ sử dụng để xóa 1 thuộc tính trong obj. Còn trong arr không có tác dụng xóa phần tử. Vậy nên console.log() thứ 1 vẫn là 4 và console.log() thứ 2 là 3.</li>
  	<li>Với console.log() thứ 3 Obj chỉ là thay đổi giá trị của thuộc tính không làm mất đi thuộc tính. nên số key vẫn là 4</li>
  </ul>
</details>

### 8. Kết quả là gì?

```
var a = [1, 2, 3];
var b = [1, 2, 3];

var c = [1, 2, 3];
var d = c;

var e = [1, 2, 3];
var f = e.slice();

console.log(a === b);
console.log(c === d);
console.log(e === f);
```

- A: true true true
- B: false false true
- C: true true false
- D: false true false

<details>
  <summary>Câu trả lời</summary>
  <h4>Đáp án: D</h5>
  <h4>Lý giải</h4>
  <ul>
  	<li>Tương tự với Obj so sánh bằng tham chiếu sẽ không thật sự so sánh được các giá trị bên trong nó. Mẹo để so sánh 2 arr có bằng nhau không ta có thể dùng JSON.stringify()</li>
  	<li>Với a === b sẽ trả về false</li>
  	<li>Với c === d sẽ trả về true. Vì cả 2 đều trỏ đến cùng một vùng nhớ</li>
  	<li>f = e.slice() f vẫn nhận về giá trị là 1 mảng. e === f sẽ trả về false</li>
  </ul>
</details>

### 8. Kết quả là gì?

```
var languages = {
  name: ["elixir", "golang", "js", "php", { name: "feature" }],
  feature: "awesome",
};

let flag = languages.hasOwnProperty(Object.values(languages)[0][4].name);

(() => {
  if (flag !== false) {
    console.log(
      Object.getOwnPropertyNames(languages)[0].length <<
        Object.keys(languages)[0].length
    );
  } else {
    console.log(
      Object.getOwnPropertyNames(languages)[1].length <<
        Object.keys(languages)[1].length
    );
  }
})();
```

- A: 8
- B: NaN
- C: 64
- D: 12

<details>
  <summary>Câu trả lời</summary>
  <h4>Đáp án: C</h5>
  <h4>Lý giải</h4>
  <ul>
    <li>Object.values(languages) = [Array(5), 'awesome'] => Object.values(languages)[0][4].name = 'feature'. Vậy languages.hasOwnProperty(Object.values(languages)[0][4].name) = true</li>
    <li>Object.getOwnPropertyNames(languages)[0].length <<
        Object.keys(languages)[0].length sẽ là 4 << 4</li>
    <li>4 << 4 sẽ tương đương với 4*2^4 = 64</li>
    <li>Ví dụ ngoại lệ: (1 << 2 = 1*2^2 = 4)(3 << 3 = 3*2^3 = 24)</li>
  </ul>
</details>

### 9. Kết quả là gì?

```
var ronaldo = { age: 34 };

var messi = { age: 32 };

function score(year, tr, t) {
  if (typeof tr === "function" && typeof t === "function") {
    console.log(`You score ${tr(year, t(this.age))} times`);
  }
}

const transform = (x, y) => x - y;

const title = (x) => ++x + x++;

const helloRonaldo = score.bind(ronaldo, 2029, transform, title);

helloRonaldo();

const helloMessi = score.bind(messi, 2029, transform, title);

helloMessi();

```

- A: "You score 1989 times" and "You score 1963 times"
- B: "You score 1959 times" and "You score 1989 times"
- C: "You score 1989 times" and "You score 1953 times"
- D: "You score 1959 times" and "You score 1963 times"

<details>
  <summary>Câu trả lời</summary>
  <h4>Đáp án: D</h5>
  <h4>Lý giải</h4>
  <ul>
    <li>bind() cho phép liên kết một hàm được khai báo với bất kỳ đối tượng nào. Ở đây score() được liên kết với cả 2 obj ronaldo và messi</li>
    <li>t(this.age) t ở đây chính là hàm title. ++xx + x++ : tăng x lên 1 trước khi thực hiện toán tử. Với obj ronaldo thì title trả về 35 + 35 = 70. với messi obj title trả về 33 + 33 = 66</li>
    <li>Vậy nên kết quả sẽ là: "You score 1959 times" and "You score 1963 times"</li>
  </ul>
</details>

### 10. Kết quả là gì?

```
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();

```

- A: Lydia và undefined
- B: Lydia và ReferenceError
- C: ReferenceError và 21
- D: undefined và ReferenceError

<details>
  <summary>Câu trả lời</summary>
  <h4>Đáp án: D</h5>
  <h4>Lý giải</h4>
  <ul>
    <li>Khi khai báo biến với từ khóa var thì sẽ được xem như là 1 biến global. Và áp dụng cơ chế hoisting cho các biến khai báo với var thì việc khai báo biến sẽ được đẩy lên đầu là khởi tạo với giá trị mặc định là undefined</li>
    <li>Khi khai báo biến với let hoisting vẫn xảy ra nhưng không như var chúng không được khởi tảo. Khi truy cập đến 1 giá trị trước khi chúng được khai báo, Js sẽ throws 1 ReferenceError</li>
  </ul>
</details>

### 11. Kết quả là gì?

```
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

```

- A: 0 1 2 and 0 1 2
- B: 0 1 2 and 3 3 3
- C: 3 3 3 and 0 1 2

<details>
  <summary>Câu trả lời</summary>
  <h4>Đáp án: C</h5>
  <h4>Lý giải</h4>
  <ul>
    <li>Khi khai báo biến với từ khóa var thì sẽ được xem như là 1 biến global. với setTimeout mỗi lần được gọi nó sẽ được đẩy vào web API -> Queue -> Call Stack. và lúc này cứ mỗi lần i++ thì hiện tại i đã bằng 3.</li>
    <li>Khi khai báo biến với let. thì phạm vi của 1 biến là block. nên mỗi lần lặp sẽ là 1 biến i mới mang 1 giá trị mới</li>
  </ul>
</details>

### 12. Kết quả là gì?

```
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

shape.diameter();
shape.perimeter();

```

- A: 20 and 62.83185307179586
- B: 20 and NaN
- C: 20 and 63
- D: NaN and 63

<details>
  <summary>Câu trả lời</summary>
  <h4>Đáp án: B</h5>
  <h4>Lý giải</h4>
  <ul>
    <li>diameter là một hàm thông thường nên this.radius = 10.</li>
    <li>perimeter là một arrow function nên biến this sẽ lấy từ cha gần nhất của scope hiện tại. Trong trường hợp này this là đối tượng window => this.radius = undefined</li>
  </ul>
</details>

### 13. Kết quả là gì?

```
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" });
freddie.colorChange("orange");

```

- A: orange
- B: purple
- C: green
- D: TypeError

<details>
  <summary>Câu trả lời</summary>
  <h4>Đáp án: D</h5>
  <h4>Lý giải</h4>
  <ul>
    <li>Hàm colorChange là một hàm static (hàm tĩnh). Hàm static được thiết kế để chỉ để tồn tại ở mức class, và không thể truyền cho bất cứ instance con nào. Vì freddie là một instance con, hàm static này sẽ không được truyền xuống, và do đó không thể gọi được tại freddie instance: nó sẽ throw ra một TypeError.</li>
  </ul>
</details>

### 14. Kết quả là gì?

```
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";

```

- A: Hoàn toàn không có vấn đề gì!
- B: SyntaxError. Bạn không thể thêm thuộc tính theo cách này.
- C: undefined
- D: ReferenceError

<details>
  <summary>Câu trả lời</summary>
  <h4>Đáp án: A</h5>
  <h4>Lý giải</h4>
  <ul>
    <li>Điều này là có thể với Javascript, bởi vì function cũng chỉ là object mà thôi! (Mọi primitive types đều là object)

Function là một object đặc biệt. Phần code mà bạn viết không phải là function thực tế đâu. Function ở đây chính là một object với các thuộc tính. Và các thuộc tính này có thể gọi được..</li>
  </ul>
</details>

### 15. Kết quả là gì?

```
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia);
console.log(sarah);

```

- A: Person {firstName: "Lydia", lastName: "Hallie"} và undefined
- B: Person {firstName: "Lydia", lastName: "Hallie"} và Person {firstName: "Sarah", lastName: "Smith"}
- C: Person {firstName: "Lydia", lastName: "Hallie"} và {}
- D:Person {firstName: "Lydia", lastName: "Hallie"} và ReferenceError

<details>
  <summary>Câu trả lời</summary>
  <h4>Đáp án: A</h5>
  <h4>Lý giải</h4>
  <ul>
    <li>Với sarah, chúng ta khai báo mà không có từ khóa new. Khi sử dụng new, nó sẽ trỏ đến một object mới mà ta vừa tạo ra. Tuy nhiên nếu ta không dùng new thì nó sẽ trỏ tới global object!</li>
    <li>Chúng ta cho rằng this.firstName là "Sarah" và this.lastName là "Smith". Tuy nhiên sự thực là chúng ta đã định nghĩa global.firstName = 'Sarah' và global.lastName = 'Smith'. Bản thân biến sarah vẫn là undefined.</li>
  </ul>
</details>

**_To be continue_**
