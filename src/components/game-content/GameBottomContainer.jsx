import React from "react";

import {
  ButtonText,
  ButtonContainer,
} from "../../container/connect-four-game/ConnectFourGame.style";

const GameBottomContainer = ({ gameType, onEndTournament, onClick }) => {
  return (
    <>
      <ButtonContainer btnColor={"#4B7BFF"} onClick={() => onClick(gameType)}>
        <ButtonText color={"#FFF"}>
          {gameType === "game"
            ? "Next Game"
            : gameType == "tournament"
            ? "Play Again"
            : "Undo Step"}
        </ButtonText>
      </ButtonContainer>
      <ButtonContainer btnColor={"#FFF"} onClick={onEndTournament}>
        <ButtonText color={"#CC0000"}>End Tournament</ButtonText>
      </ButtonContainer>
    </>
  );
};

export default GameBottomContainer;
