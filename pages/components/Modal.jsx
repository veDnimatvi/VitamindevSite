import Image from "next/image";
import React from "react";
import bank from "../../public/img/bank.jpg";
import coffee from "../../public/img/icons-coffeeshop.png";

const Modal = ({ show, setShowModal }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-title">
          <div className="mr-1">Buy me a coffee</div>
          <Image src={coffee} alt="coffee" />
        </div>
        <div className="text-center text-lg font-semibold">
          Nguyen Thanh Thien
        </div>
        <div className="text-center text-lg font-semibold">0404 7563 801</div>
        <Image className="modal-bank" src={bank} alt="bank" />

        <div className="flex justify-center">
          <button
            className="bg-red-400 text-white px-6 py-2 rounded my-4"
            onClick={() => setShowModal(!show)}
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
