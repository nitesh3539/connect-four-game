import React from "react";
import { useHistory } from "react-router-dom";

import {
  HeaderText,
  HeaderContainer,
  BackButton,
} from "../container/form/GameFormDetail.style";

import BackIcon from "./svg-icons/BackIcon";

const Header = () => {
  const history = useHistory();
  const onGoBack = () => {
    history.goBack();
  };
  return (
    <HeaderContainer>
      <BackButton onClick={onGoBack}>
        <BackIcon height={32} width={32} />
      </BackButton>
      <HeaderText>Two Players Game</HeaderText>
    </HeaderContainer>
  );
};
export default Header;
