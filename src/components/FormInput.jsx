import React from "react";

import {
  GameFormContainer,
  RadioValueText,
  GameFormRingContainer,
  GameInputContainer,
  CustomInput,
  BottomLine,
  TileLabel,
  GameFormTileContainer,
} from "../container/form/GameFormDetail.style";

const FormInput = ({
  ringColor,
  image,
  labelText,
  color,
  onChange,
  isModal,
  value,
}) => {
  const checkForModal = () => {
    if (!isModal) {
      return;
    }
    onChange(isModal);
  };
  return (
    <GameFormTileContainer color={color} onClick={checkForModal}>
      <GameFormRingContainer color={ringColor}>
        <img src={image} />
      </GameFormRingContainer>
      <BottomLine />
      <TileLabel>{labelText}</TileLabel>
      <GameInputContainer>
        {!isModal ? (
          <CustomInput
            type="text"
            value={value}
            color={color}
            onChange={onChange}
          />
        ) : (
          <RadioValueText>{value}</RadioValueText>
        )}
      </GameInputContainer>
    </GameFormTileContainer>
  );
};

export default FormInput;
