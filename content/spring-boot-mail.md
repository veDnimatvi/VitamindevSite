---
slug: spring-boot-mail
title: Spring Email
category: Java Spring Boot
description: "Thiên Nguyễn"
img: https://i.ytimg.com/vi/b3blqONWlYI/maxresdefault.jpg
date: 08 July 2022
---

![Spring email](https://i.ytimg.com/vi/b3blqONWlYI/maxresdefault.jpg)

---

## Đặt vấn đề

Bài viết giúp bạn tạo ra ứng dụng gửi tin nhắn email với spring email

## Tìm nhiên liệu cho phần application.properties

Vào phần google accout của bạn và làm theo các bước sau:
![chrome_3ZeCIMtCZA](https://user-images.githubusercontent.com/107902169/177942966-14bbdd2a-2a61-4477-9af8-ab3c7ed517a4.png)

- Login

![image](https://user-images.githubusercontent.com/107902169/177944259-3429cc7e-f76c-4db5-98f9-43793ddc248a.png)

- Select OtherName

![image](https://user-images.githubusercontent.com/107902169/177944471-4cca8f09-6485-491f-9f38-0a4dd3199521.png)

- Type any name you want then click generator

![image](https://user-images.githubusercontent.com/107902169/177944590-1587f398-8a8f-49a5-a8f3-66da8cd986eb.png)

![image](https://user-images.githubusercontent.com/107902169/177945008-19bd57f1-a4ab-4c5c-80c3-ea97a0cbcf16.png)

- In application.properties

```
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=<youremail>
spring.mail.password=<The password was created in the yellow line above>
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
```

## Bắt đầu code nào

- Create model pakage then create Mail.java file

Mail.java

```
public class Mail {
    private String yourEmail;
    private String subject;
    private String message;

    public String getYourEmail() {
        return yourEmail;
    }

    public void setYourEmail(String yourEmail) {
        this.yourEmail = yourEmail;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
```

- Create service pakage then create MailService Interface file

MailService Interface file

```
public interface MailService {
    String sendEmail(Mail mail);
}
```

- Create pakage Impl then create MailServiceImpl.java file in service pakage

MailServiceImpl.java

```
@Service
@RequiredArgsConstructor
public class MailServiceImpl implements MailService {
    private final JavaMailSender javaMailSender;

    @Override
    public String sendEmail(Mail mail) {
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setFrom(mail.getYourEmail());
        msg.setTo("codertom100@gmail.com");
        msg.setSubject(mail.getSubject());
        msg.setText(mail.getMessage());
        javaMailSender.send(msg);
        return "Send Successful!";
    }
}
```

- Create controller pakage then create MailController.java file

MailController.java

```
@RestController
@RequiredArgsConstructor
public class MailController {
    private final MailService mailService;

    @PostMapping("/send")
    public String sendMail(@RequestBody Mail mail){
        return mailService.sendEmail(mail);
    }
}
```

## Test với postman

![image](https://user-images.githubusercontent.com/107902169/177947002-e3b5f088-5d1a-4c6c-8b31-c116c09a1e42.png)

## Kết quả

![image](https://user-images.githubusercontent.com/107902169/177947139-75780ae0-e9de-49fa-9109-a891e815966a.png)

### Thank for reading and Have nice day !
