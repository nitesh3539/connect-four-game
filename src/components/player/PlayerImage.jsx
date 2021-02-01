import React from "react";

import {
  PlayerCell,
  ImageStyle,
  PlayerInnerCell,
} from "../game-panel/GamePanel.style";

const PlayerImage = ({ color, image, backImg, winnerTile }) => {
  return (
    <PlayerCell color={color} winnerTile={winnerTile}>
      <PlayerInnerCell backImg={backImg}>
        <ImageStyle winnerTile={winnerTile} src={image} />
      </PlayerInnerCell>
    </PlayerCell>
  );
};

export default PlayerImage;
