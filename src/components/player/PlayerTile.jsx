import React from "react";

import {
  PlayerRingContainer,
  PlayerTileContainer,
  PlayerDetailContainer,
  PlayerDetailSubContainer,
  PlayerDetailTitle,
  PlayerDetailTitleValue,
} from "./PlayerTile.style";

const PlayerTile = ({
  image,
  circleColor,
  tileColor,
  isPlayerTurn,
  playerName,
  score,
  label,
}) => {
  return (
    <PlayerTileContainer color={tileColor}>
      <PlayerRingContainer color={circleColor} isPlayerTurn={isPlayerTurn}>
        <img src={image} />
      </PlayerRingContainer>
      <PlayerDetailContainer>
        <PlayerDetailSubContainer>
          <PlayerDetailTitle>{label}</PlayerDetailTitle>
          <PlayerDetailTitleValue>{playerName}</PlayerDetailTitleValue>
        </PlayerDetailSubContainer>
        <PlayerDetailSubContainer>
          <PlayerDetailTitle>Score</PlayerDetailTitle>
          <PlayerDetailTitleValue>{score}</PlayerDetailTitleValue>
        </PlayerDetailSubContainer>
      </PlayerDetailContainer>
    </PlayerTileContainer>
  );
};

export default PlayerTile;
