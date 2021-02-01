import React from "react";

import "./modal.css";

const Modal = ({ show, children, modalClassname }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className={modalClassname}>{children}</section>
    </div>
  );
};

export default Modal;
