import React from "react";

import {
  GameHeader,
  GameSubHeader,
  CongratulationText,
  NameStyle,
} from "../../container/connect-four-game/ConnectFourGame.style";

const GameHeaderContainer = ({
  formState,
  gameType,
  subHeaderText,
  currentWinnerName,
}) => {
  return (
    <>
      <GameHeader>{`${formState.noGame?.value} Games Tournament`}</GameHeader>
      {gameType ? (
        <CongratulationText>Congratulation!</CongratulationText>
      ) : null}
      <GameSubHeader>
        {gameType ? <NameStyle>{currentWinnerName}</NameStyle> : null}
        {subHeaderText}
      </GameSubHeader>
    </>
  );
};

export default GameHeaderContainer;
