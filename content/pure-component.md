---
slug: pure-component
title: Pure Component trong ReactJs
description: "Thiên Nguyễn"
img: https://ireadyoulearn.info/static/d02ee87ed68b95e583603ef5f1d7ba87/5a92f/feature.jpg
date: 19 May 2022
---

![Pure Component](https://ireadyoulearn.info/static/d02ee87ed68b95e583603ef5f1d7ba87/5a92f/feature.jpg)

---

# Pure Component là gì?

Một React Component đơn giản có shouldComponentUpdate luôn luôn true. Điều này có nghĩa là React sẽ luôn cập nhật component trong trường hợp có bất kỳ dữ liệu mới nào để hiển thị. Tuy nhiên nó dẫn đến một số trường hợp render không cần thiết. Vậy React đã sinh ra Pure Component để ngăn chặn việc render không cần thiết.

Example:

```
import React from 'react';
export default class TestPureComponent extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			name: 'Thiên Nguyễn'
		}
	}

	render(){
		return <>
			<User name={this.state.name} />
			<UserPure name={this.state.name} />
			<button onClick={() => this.setState({name: 'Thiên Nguyễn'})}>Change name</button>
		</>
	}
}

class User extends React.Component {
	render(){
		console.log("Render Component");

		return <>
		<p>{this.props.name}<p/>
		</>
	}
}

class UserPure extends React.PureComponent {
	render(){
		console.log("Render PureComponent");

		return <>
		<p>{this.props.name}<p/>
		</>
	}
}
```

Ở ví dụ trên ta có 1 component và 1 pure component. Đều nhận name từ component cha. 1 button Change name giá trị trong setState đúng bằng giá trị hiện tại của state.

**_Kết quả khi bấn button Change name:_**

- Chỉ có console.log("Render Component") được hiển thị. Bởi vì User Component nhận thấy State có thay đổi nên đã rerender.
- Nhưng với Pure Component thì console.log("Render PureComponent") không đcược hiển thị vì nó nhận thấy state có thay đổi nhưng giá trị của state không thay đổi, nên không cần thiết phải rerender.

**_Để bắt buộc pure Component phải rerender với forceUpdate()_**

```
class UserPure extends React.PureComponent {
	render(){
		console.log("Render PureComponent");

		return <>
		<p>{this.props.name}<p/>
		<button onClick={() => this.forceUpdate())}>Force Update</button>
		</>
	}
}
```

## Kết luận

PureComponent rất mạnh ở chỗ nó có thể giúp bạn hạn chế số lần render không cần thiết xảy ra. Nhưng PureComponent chỉ kiểm tra shallow equality về props và state trước khi đưa ra quyết định có render lại hay không. Dẫn đến các con của chúng có render lại hay không. Vì vậy bạn hãy sử dụng Pure Component khi có thể, nó sẽ giúp bạn tăng hiệu suất, Và thay thế thành component khi cần thiết.

### Thank for reading and Have nice day !
