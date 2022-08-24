import Image from "next/image";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import sendMessageImg from "../public/img/contact-me.svg";
import axios from "axios";

const CustomizeAlert = ({ messge }) => {
  return <div className="p-2 mb-4 bg-green-300 rounded">{messge}</div>;
};

const Contact = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const sendEmail = () => {
    if (!isValidEmail(email) || message === "") {
      setError(true);
    } else {
      setError(false);
      setLoading(true);
      axios
        .post("https://send-email-contact-me.herokuapp.com/send", {
          yourEmail: email,
          subject: "My email is " + email,
          message,
        })
        .then((res) => {
          setMessageAlert(res?.data);
          setEmail("");
          setMessage("");
          setSuccess(true);
          setLoading(false);
          setTimeout(() => setSuccess(false), 3000);
        })
        .catch((err) => console.log("err", err));
    }
  };
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header />
      <div className="container mx-auto section">
        <div className="send-me">
          <div className="mb-20">
            <div className="text-4xl font-bold">Contact me</div>
            <div className="w-40 h-1 bg-orange-300 rounded"></div>
          </div>
          <div className="flex justify-center send-me__img">
            <Image src={sendMessageImg} alt="send message img" />
          </div>
          <div className="flex justify-center">
            <div className="send-me__form">
              <div className="send-me__form__input">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email ..."
                />
              </div>
              <div className="send-me__form__input">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message ..."
                />
              </div>

              {error && (
                <h2 className="mb-4 text-red-500">
                  Email phải hợp lệ và message không được để trống !
                </h2>
              )}

              {success && <CustomizeAlert messge={messageAlert} />}

              <button
                onClick={sendEmail}
                className="flex items-center p-2 text-white bg-orange-400 rounded"
              >
                {loading && (
                  <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                )}
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
