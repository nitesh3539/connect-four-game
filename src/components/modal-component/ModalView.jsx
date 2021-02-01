import React, { useState } from "react";
import {
  ModalContainer,
  ModalTitle,
  ModalBorder,
  ModalButton,
  ModalButtonText,
  ButtonContainer,
} from "./modal.style";
import Modal from "../modal/Modal";
import ModalTile from "./ModalTile";

const ModalView = ({
  modalTitle,
  radioButtons,
  onClick,
  show,
  onCancel,
  value,
  modalClassname,
}) => {
  const [selected, setSelected] = useState(value);

  const onSetSelected = (value) => {
    setSelected(value);
  };
  return (
    <Modal show={show} modalClassname={modalClassname}>
      <ModalContainer>
        <ModalTitle>{modalTitle}</ModalTitle>
        {radioButtons.map((item) => (
          <ModalTile
            {...item}
            onClick={onSetSelected}
            selectedValue={selected?.value}
          />
        ))}
        <ModalBorder />
        <ButtonContainer>
          <ModalButton color={"#FFFFFF"}>
            <ModalButtonText color={"#4B7BFF"} onClick={onCancel}>
              CANCEL
            </ModalButtonText>
          </ModalButton>
          <ModalButton color={"#4B7BFF"} onClick={() => onClick(selected)}>
            <ModalButtonText color={"#FFFFFF"}>OK</ModalButtonText>
          </ModalButton>
        </ButtonContainer>
      </ModalContainer>
    </Modal>
  );
};
export default ModalView;
