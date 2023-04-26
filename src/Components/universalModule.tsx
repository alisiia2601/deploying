import React, { useState } from "react";
import "./Modal.css";


  
  const Modal = ({ children, title }: { children: React.ReactNode, title: string }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button onClick={toggleModal}>{title}</button>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close" onClick={toggleModal}>
              &times;
            </button>
            <h2>{title}</h2>
            <div className="content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
