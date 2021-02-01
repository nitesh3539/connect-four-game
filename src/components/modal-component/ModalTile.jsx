import React from "react";
import {
  ModalTileContainer,
  ModalTileInput,
  ModalTileValue,
} from "./modal.style";

const ModalTile = ({ value, id, name, selectedValue, onClick }) => {
  return (
    <ModalTileContainer onClick={() => onClick({ value, id, name })}>
      <ModalTileInput
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={selectedValue === value}
      />
      <ModalTileValue>{name}</ModalTileValue>
    </ModalTileContainer>
  );
};
export default ModalTile;
