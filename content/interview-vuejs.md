---
slug: interview-vuejs
title: Interview VueJS
category: VueJS
description: "Thiên Nguyễn"
img: https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/05/Vue.js%E2%80%A8-Interview-Questions-1128x635.jpg
date: 2 August 2022
---

![Variable JS](https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/05/Vue.js%E2%80%A8-Interview-Questions-1128x635.jpg)

---

# Top các câu hỏi phỏng vấn VueJS

## 1. So sánh methods và computed, watch ?
<details>
  <summary>Câu trả lời</summary>
  Watch sẽ chỉ tính toán lại mỗi khi các biến phụ thuộc trong nó thay đổi, Methods sẽ được tính toán bất kì khi nào nó được gọi, Computed sẽ lưu cache lại và so sánh (same like useMemo, tương đương sẽ được gọi lại mỗi lần biến phụ thuộc thay đổi)
  
| --- | Method | Computed | Watcher |
| ----------- | ----------- | ----------- | ----------- |
| Cho phép có tham số | Có | Không | Có |
| Khả năng cache | không | Có | N/A |
| Phạm vi thực hiện | Local cho tới component | Local cho tới component, nhưng có thể lấy hoặc thực hiện tính toán với các biến từ props, stores, v.v. | Có thể xem các biến local hoặc store variables và phản ứng với các thay đổi |
| Thực hiện khi | Bất kì thay đổi nào (re-render) | Thành phần phụ thuộc thay đổi | Thuộc tính, đối tượng được giám sát bị thay đổi |
| Nên sử dụng khi | Cần đến một hàm thuần túy hoặc cần truyền tham số vào | Khi muốn thao tác với dữ liệu trong instance hay tham chiếu giá trị từ template, hạn chế tính toán lại, lắng nghe thay đổi của nhiều thuộc tính dữ liệu | Xử lí khi muốn lắng nghe dữ liệu thay đổi nhiều, liên tục, hay lắng nghe một thuộc tính cụ thể của object, hoặc là bạn muốn xem một thuộc tính dữ liệu cho đến khi nó đạt đến một giá trị cụ thể nào đó rồi thao tác với nó |
</details>

## 2. So sánh giữa v-if và v-show ?
<details>
  <summary>Câu trả lời</summary>
  <ul>
    <li>v-if : Dùng để render phần tử hoặc nội dung theo các điều kiện.</li>
    <li>v-show: v-if không render ngay ra toàn bộ element mà tùy vào giá trị kiểm tra, còn v-show sẽ render ra ngay từ đầu và chỉ quyết định hiển thị hay không qua thuộc tính css display.</li>
    <li>Trong quá trình sử dụng mà user tác động nhiều đến block thì dùng v-show sẽ cho tốc độ tốt hơn. Còn nếu nội dung block ít thay đổi trong suốt vòng đời của component thì khi đó nên dùng v-if.</li>
  </ul>
</details>

## 3. Ref , Reactive ?
<details>
  <summary>Câu trả lời</summary>
  ref, reactive là các hook được sử dụng trong Composition API để định nghĩa các data, giống như việc chúng ta định nghĩa các data ở trong option data (Vue2)<br />
  
  Dưới đây là 2 cách viết: <br />
  
  <img src='https://images.viblo.asia/d2030718-c3c9-41e0-8271-f7cdb61e6988.png' alt='ref' /> <br />
  
  Khi cần sử dụng hoặc thay đổi giá trị biến này trong Composition API: <br />
  
  <code>import { ref } from "vue";</code><br/>
  <code>const hello = ref("Hello World");</code><br/>
  <code>console.log(hello.value); // kết quả sẽ là: Hello World</code><br />
  
  Đối với reactive <br />
  
  <code>import { reactive } from "vue";</code><br/>
  <code>const hello = reactive({
    name: "Nguyễn Văn A",
    age: 
});</code><br/>
  <code>console.log(hello); // kết quả sẽ là: Hello World</code><br />
  
  Đối với reactive, sẽ không cần .value
  
  Khi cần dùng biến đó trên template vue, ta chỉ cần câu lệnh return về một object có biến đó.
  
  <code>import { ref } from "vue";</code><br/>
  <code>const hello = ref("Hello World");</code><br/>
  <code>return { hello };</code><br/>
  
</details>

## 4. Filter dùng khi nào?
<details>
  <summary>Câu trả lời</summary>
  Filter là bộ lọc, dùng để định dạng (format) các văn bản thường gặp, các nội dung mà chúng ra cần phải xử lý trước khi render ra view.
</details>

## 5. nextTick () để làm gì?
<details>
  <summary>Câu trả lời</summary>
  Tưởng tượng component của bạn làm một việc cực kì quan trọng và thông minh kiểu this.potatoAmount = 3. Vue sẽ không render lại component (và cả DOM) tự động. Nó sẽ xếp các yêu cầu sửa đổi vào một hàng đợi.Sau đó, trong "tick" tiếp theo (như một tick tắc trong đồng hồ), hàng đợi được đẩy ra và cập nhật được áp dụng <br />
  
  Giờ thì chúng ta biết rằng chúng ta có thể sử dụng nextTick () để truyền một callback mà sẽ được thực thi ngay sau khi dữ liệu được set và DOM đã được cập nhật.
  
  <code>Use it immediately after you’ve changed some data to wait for the DOM update.</code> <br />
  <code>Thực hiện nó ngay lập tức sau khi bạn đã thay đổi một số dữ liệu để chờ DOM cập nhật.</code>
</details>

## 6. NuxtJS ?
<details>
  <summary>Câu trả lời</summary>
  NuxtJs đã bao gồm vue-router, vuex, vue-meta, có thể coi như là 1 framework, nếu sử dụng create-nuxt-app để generate starter template thì đã bao gồm nuxt.config, mở rộng từ webpack config luôn, rất tiện.<br />
  
  **Routing**
  <li><code>nuxt-link</code> thay thế cho <code>router-link</code></li>
  
  NuxtJS đã có sẵn VueRouter và router được sinh ra tự động với các file ở phía dưới folder pages.
  
  **Store** <br />
  NuxtJs tích hợp sẵn **vuex** để lưu trữ trạng thái data của ứng dụng và công việc của mình cũng chỉ là tạo file định nghĩa trong folder store.<br />
  Nuxt.js tự động tìm trong folder store và nếu có file định nghĩa store nào, nó sẽ thực hiện các bước sau tự động:<br />
  <li>Import Vuex</li>
  <li>Tự thêm option **store** vào Root Vue instance.</li><br />
  
  **Vue Meta** <br />
  NuxtJs có sẵn vue-meta để update headers và các thuộc tính html của ứng dụng, như để thay đổi các thuộc tính meta trong thẻ head của từng page mỗi khi chuyển trang để tối ưu SEO
  
  **Server Side Rendering** <br />
  Dĩ nhiên đây là tính năng quan trọng khi nhắc về NuxtJs.
</details>

## 7. Lifecycle của NuxtJS?
<details>
  <summary>Câu trả lời</summary>
  Sơ đồ về vòng đời của nuxtJs</br>
  <img src="https://images.viblo.asia/1586d1be-1ea0-4b58-9fed-43da881652b4.png" alt="lifecycle nuxtjs" />
  
  Đây là vòng đời được khởi chạy trước khi chạy chương trình vue nên bạn có thể hiểu nó chạy trước cả khi khai báo page component nên this sẽ không phải của vue instance. Bù lại các phương thức này đều nhận biến context là tham số đầu vào.

  **nuxtServerInit**<br />
  Phương thức này là 1 action của VueX, nếu nó được khai báo trong store thì NuxtJs sẽ gọi action này mỗi khi nuxt.js bắt đầu 1 lifecycle mới. Phương thức này hữu ích khi chúng ta muốn nhận và lưu trữ dữ liệu dùng chung cho tất cả page từ server vào store của client.
  
  ![image](https://user-images.githubusercontent.com/107902169/182310402-50292dff-1964-460c-9697-905a8d3587a1.png)

  Lưu ý là nuxtServerInit chỉ được gọi ở main store.
  
  **Middleware**<br />
  Cho phép bạn khai báo và thực thi các hàm trước khi khởi tạo page.
  
  Không giống như nuxtServerInit (chạy cho tất cả các page), bạn có thể sử dụng global middleware trong nuxt.config,js cho tất cả pages, hoặc sử dụng cho page cụ thể bằng phương thức middleware trong layout/page đó.
  
  ![image](https://user-images.githubusercontent.com/107902169/182310886-5d014f70-e84e-4f70-8a46-d24117fcba71.png)

  Vì có thể đặt middleware ở nhiều vị trí nên Nuxt.js quy ước thứ tự ưu tiên thực thi middleware như sau:
  <li>nuxt.config.js</li>
  <li>Layouts có middleware</li>
  <li>Pages có middleware</li><br />
  
  **Fetch()**<br />
  Phương thức fetch được sử dụng để lấy và lưu trữ dữ liệu vào store trước khi hiển thị page, nhưng khác với nuxtServerInit là thay vì áp dụng cho toàn bộ pages, phương thức này chỉ áp dụng cho 1 page cụ thể.
  
  Nếu fetch() trả về Promise thì nuxt.js sẽ đợi promise đó được giải quyết trước khi hiển thi page.
  
  ![image](https://user-images.githubusercontent.com/107902169/182312240-3db05a7a-04df-43b5-a5f0-84e57bc41918.png)

  **AsyncData()**<br />
  AsyncData thường được gọi nếu bạn muốn lấy dữ liệu từ server và hiển thị ra component luôn mà không lưu trữ trong store.
  
  ![image](https://user-images.githubusercontent.com/107902169/182312528-40cd85ea-e84e-4be2-9db0-90ee9527d00e.png)
</details>

## 8. Sự khác nhau giữa created và mounted, Tại sao nên call api ở created ?
<details>
  <summary>Câu trả lời</summary>
  
| Created | Mounted |
| ----------- | ----------- |
| Lúc này template và DOM ảo chưa được mount và render. Hàm created có thể được sử dụng để thao tác với dữ liệu (call api lấy data về ở đây) | Mounted là khi mà chúng ta đã nhìn thấy nội dung ở trên trình duyệt khi gọi api lấy dữ liệu ở đây sẽ trắng màn hình khi component của chúng ta to, cần nhiều thời gian để render khi dữ liệu được lấy về |
 </details>
 
 ## 9. Slot dùng để làm gì và sử dụng như thế nào ?
 <details>
  <summary>Câu trả lời</summary>
  Để chèn nội dung HTML vào bên trong component con Vue.js cung cấp **<slot></slot>** giúp dúng ta làm việc này.
  
  ![image](https://user-images.githubusercontent.com/107902169/182320197-5be54299-4796-4187-8e20-992dbdfc5b3e.png)

  
  **Căn bản**
  
  Chúng ta có component con sử dụng slot như sau
  
  ![image](https://user-images.githubusercontent.com/107902169/182320449-996c748e-8dce-40c9-a45a-20403dafafbc.png)

  Component cha chèn nội dung vào bên trong child
  
  ![image](https://user-images.githubusercontent.com/107902169/182320509-000097cd-6b17-4207-944e-3fb710ca87dd.png)

  Nội dung sau khi render ra như sau:
  
  ![image](https://user-images.githubusercontent.com/107902169/182320577-cc1d1ffd-dcec-4fa6-b41b-d03082e66fa9.png)

  **Đặt tên cho slot**
  
  Ta có một componet card gồm 3 phần header, content, footer Ta sẽ đặt vào 3 slot như sau:
  
  ![image](https://user-images.githubusercontent.com/107902169/182320894-8cdc0512-9130-4be7-a5a6-739b270a6094.png)

  Component cha sử dụng và truyền nội dung:
  
  ![image](https://user-images.githubusercontent.com/107902169/182320977-8f05641f-483f-4a1a-8042-312c02ed51dd.png)

  Kết quả sau khi render:
  
  ![image](https://user-images.githubusercontent.com/107902169/182321049-dc661b12-f2af-48b4-9d3f-0231607d1a9d.png)

  **Scoped slots**
  
  Scoped slots là một loại đặt biệt của slot giúp bạn có thể truyền dữ liệu từ component con lên component cha thông qua việc gán dữ liệu thông qua thuộc tính 
  
  Mình có một child như sau:
  
  ![image](https://user-images.githubusercontent.com/107902169/182321557-8eb2ef54-1b6e-40e2-9016-f355e8d196c7.png)

  Tiếp theo đến component cha. Chúng ta sẽ lấy nội dung từ text thông qua thuộc tính slot-scope.
  
  ![image](https://user-images.githubusercontent.com/107902169/182321604-c7142f45-27cc-47e4-a967-d910bd60874d.png)

 </details>


