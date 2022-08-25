---
slug: grid-in-css
title: CSS Grid Layout
category: Css
description: "Học cách sử dụng Grid trong CSS"
img: https://jacekjeznach.com/wp-content/uploads/2021/11/WgUgHhj8Tl64ZsgQfa4G_file-1.jpg
date: 11 July 2022
---

![Grid Css](https://jacekjeznach.com/wp-content/uploads/2021/11/WgUgHhj8Tl64ZsgQfa4G_file-1.jpg)

---

## Grid Layout

The CSS Grid Layout cung cấp một hệ thống bố cục dựa trên lưới, với các hàng và cột, giúp thiết kế các trang web dễ dàng hơn mà không phải sử dụng table, float và position.

## Grid container

HTML

```
<div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
    <div class="grid-item">7</div>
    <div class="grid-item">8</div>
    <div class="grid-item">9</div>
</div>
```

CSS

```
.grid-container{
    display: grid
}
```

<img src='https://images.viblo.asia/51a6b36b-ed40-4503-bc86-021af5471b7a.png' width="500px" height="500px" />

## Grid Line

Đường kẻ ngang hoặc dọc tạo nên cấu trúc và phân chia các grid-item được gọi là grid line. Đường kẻ màu xanh có các số bên dưới chính là là grid line.

<img src='https://images.viblo.asia/eadc1c69-a077-4837-bc7e-c227dfe2eba8.png' width="500px" height="500px" />

## Grid Cell

Grid cell là khoảng cách giữa hàng và cột của grid line.

<img src='https://images.viblo.asia/1457d077-f9a0-4b2b-ac97-777977ca958a.png' width="500px" height="500px" />

## Một số thuộc tính của grid

### grid-template-columns

Xác định các cột trong grid layout. Các giá trị là kích thước của cột được cách nhau bởi dấu cách.

```
.grid-container {
   // Container sẽ được chia đều ra làm 3 phần mỗi cột một phần
   grid-template-columns: 1fr 1fr 1fr;

   // Container sẽ có 3 cột với độ rộng tương ứng
   grid-template-columns: 20% 50% 30%;

   // Các cột có độ rộng lần lượt là 200px, 150px, 400px
   grid-template-columns: 200px 150px 400px;
}
```

### grid-template-rows

Xác định các hàng tring grid layout. Các giá trị là kích thước của hàng cách nhau bởi dấu cách

```
.grid-container {
   // Container sẽ được chia đều ra làm 3 phần (chiều dọc) mỗi hàng một phần
   grid-template-rows: 1fr 1fr 1fr;

   // Container sẽ có 3 hàng với độ cao tương ứng
   grid-template-rows: 20% 50% 30%;

   // Các hàng có độ cao lần lượt là 200px, 150px, 400px
   grid-template-rows: 200px 150px 400px;
}
```

### grid-template-areas

Xác định một template grid giúp căn chỉnh layout một cách trực quan hơn và thường đi kèm với thuộc tính grid-area ở grid-item.

```
grid-template-areas:
    "col1 col2 col3"
    "col4 col5 col6"
    ...
```

Giả sử ta muốn tạo một lay out có 2 hàng và 3 cột với ô đầu tiên có chiều rộng là 2 cell ta sẽ có template như sau:

```
grid-template-areas:
    "col1 col1 col2"
    "col3 col4 co
```

### grid-gap

grid-columns-gap là khoảng trống giữa các cột trong grid layout
grid-rows-gap là khoảng trống giữa các hàng trong grid layout

Ta có thể sử dụng gap để viết tắt cho 2 thuộc tính là grid-column-gap và grid-row-gap.

```
gap: <grid-row-gap> <grid-column-gap> / <value> (cho cả 2 row và column)

.grid-container {
   gap: 1rem;
}
```

<img src='https://images.viblo.asia/f6b6cafb-3acc-4b33-9805-3bdbad04c343.png' width="500px" height="500px" />

### grid-auto-columns và grid-auto-rows

Hai thuộc tính này dùng để chỉ định kích thước của cột hoặc hàng.
`grid-auto-columns/rows: min-content | max-content | auto | <value>`

### place-items

place-items là shorthand của align-items: start | end | center | stretch (căn theo chiều dọc(column)) và justify-items: start | end | center | stretch (căn theo chiều ngang (row)).

```
place-items: <align-items> / <justify-items>

.grid-container {
    place-items: center;
}
```

<img src='https://images.viblo.asia/8c9f2f77-63fb-4711-8b54-b926fb97b24b.png' width="500px" height="500px" />

### grid-columns

Ta sử dụng grid-column để xác định xem cell được CSS có độ dài như thế nào bằng grid-line(line theo chiều dọc).

```
grid-column: grid-line-start(số bắt đầu)/grid-line-end(số kết thúc)

.grid-item:first-child {
    grid-column: 1/3;
}

.grid-item:last-child {
    grid-column: 2/4;
}
```

Cell đầu tiên kéo dài từ line 1 -> 3 còn cell cuối cùng có độ rộng kéo dài từ line 2 đến line 4
<img src='https://images.viblo.asia/e2711236-5210-4cc9-bb6f-c2307ce2b721.png' width="500px" height="500px" />

### grid-row

Ta sử dụng grid-row để xác định xem cell được CSS có độ cao như thế nào bằng grid-line(line theo chiều dọc).

```
grid-row: grid-line-start(số bắt đầu)/grid-line-end(số kết thúc)

.grid-item:first-child {
    grid-column: 1/3;
    grid-row: 1/4;
}
```

Cell đầu tiên có độ dài từ line 1 đến line 3 và chiều cao từ line 1 đến line 4.
<img src='https://images.viblo.asia/710b1051-f2d8-4ff7-ac3e-5e6106bb63ba.png' width="500px" height="500px" />

### grid-area

Đưa ra tên được định nghĩa trong template grid-template-areas, grid-item đó sẽ có bố cục giống như trong template.

```
.grid-container {
    width: 500px;
    height: 500px;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 2fr 1fr 2fr;
    grid-template-areas:
        "img1 img2 img3"
        "img1 img5 img5"
        "img4 img5 img5"
    ;
}

.grid-item:first-child {
    grid-area: img1;
}

.grid-item:nth-child(2) {
    grid-area: img2;
}

.grid-item:nth-child(3) {
    grid-area: img3;
}

.grid-item:nth-child(4) {
    grid-area: img4;
}

.grid-item:last-child {
    grid-area: img5;
}
```

<img src='https://images.viblo.asia/fefbb47a-8a8b-4360-841f-f6358fe15f19.png' width="500px" height="500px" />

## Responsive với grid template

HTML

```
<div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
    <div class="grid-item">7</div>
    <div class="grid-item">8</div>
    <div class="grid-item">9</div>
    <div class="grid-item">10</div>
    <div class="grid-item">11</div>
    <div class="grid-item">12</div>
    <div class="grid-item">13</div>
    <div class="grid-item">14</div>
    <div class="grid-item">15</div>
    <div class="grid-item">16</div>
    <div class="grid-item">17</div>
</div>
```

CSS

```
.grid-container {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 150px;
}

.grid-item {
    width: 100%;
    height: 100%;
    background-color: #FFAA4C;
    border: 1px solid #5089C6;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

Try to see it work very well!

### Thank for reading and Have nice day !
