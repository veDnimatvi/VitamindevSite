---
slug: git-cherry-pick
title: Git nâng cao - Git Cherry Pick
category: Git
description: "Thiên Nguyễn"
img: https://rubicotech.com/wp-content/uploads/2018/09/Advanced-Git-features-1.jpg
date: 30 June 2022
---

![Git Advanced](https://rubicotech.com/wp-content/uploads/2018/09/Advanced-Git-features-1.jpg)

---

## Đặt vấn đề

Nếu bạn đang muốn merge 1 commit bất kì của branch nọ vào branch kia, thì đây sẽ là bài viết dành cho bạn. Let get it!

## Git cherry pick

### Cú pháp

Ví dụ bạn đang đứng ở branch feature-A. ví dụ đang có 10 file change. commit nó lên hoặc đẩy lên luôn cũng được. Sau đây là các bước để đẩy commit đó merge vào master branch.

```
git checkout master // checkout sang nhánh master cái đã

git cherry-pick commit_id

// sau đó push lên như bình thường

git add .
git commit -m"get file change from commit_id"
git push origin master
```

### Lấy n commits từ 1 branch bỏ vào master

```
# Nếu muốn thêm 1 vài commit, không liên tục
git cherry-pick commit_id1 commit_id3

# Nếu muốn thêm 1 loạt commit lần lượt cạnh nhau
git cherry-pick commit_id1...commit_id5 // Với code này, thì commit_id1 sẽ ko được thêm vào

# Để đưa commit được tính vào trong branch muốn thêm
git cherry-pick commit_id1^..commit_id5
```

## Tham khỏa: [https://git-scm.com/docs/git-cherry-pick](https://git-scm.com/docs/git-cherry-pick)

### Thank for reading and Have nice day !
