import React from "react";

import {
  GameDetailContainer,
  Border,
} from "../../container/connect-four-game/ConnectFourGame.style";
import PlayerTile from "../player/PlayerTile";
import {
  checkForWinnerPlayerAndTournament,
  getScore,
} from "../../util/gameUtil";
import GameHeaderContainer from "./GameHeaderContainer";
import GameBottomContainer from "./GameBottomContainer";

import avatar1Image from "../../assets/icons/avatar01.png";
import avatar2Image from "../../assets/icons/avatar02.png";

const GameContentContainer = ({
  playersState,
  playerTurn,
  formState,
  onEndTournament,
  onClick,
}) => {
  const {
    type,
    subHeaderText,
    currentWinnerName,
  } = checkForWinnerPlayerAndTournament(playersState, formState);
  return (
    <>
      <GameDetailContainer>
        <GameHeaderContainer
          currentWinnerName={currentWinnerName}
          gameType={type}
          playersState={playersState}
          formState={formState}
          subHeaderText={subHeaderText}
        />
        <PlayerTile
          label={"Player 01"}
          score={getScore(playersState.winnersList, 1)}
          playerName={formState.player1}
          isPlayerTurn={playerTurn == 1}
          tileColor={"#DCF6E4"}
          image={avatar1Image}
          circleColor={"#37AC5D"}
        />
        <PlayerTile
          label={"Player 02"}
          score={getScore(playersState.winnersList, 2)}
          playerName={formState.player2}
          isPlayerTurn={playerTurn == 2}
          tileColor={"#F6EFD5"}
          image={avatar2Image}
          circleColor={"#F8D146"}
        />
        <Border />
        <GameBottomContainer
          gameType={type}
          onEndTournament={onEndTournament}
          onClick={onClick}
        />
      </GameDetailContainer>
    </>
  );
};

export default GameContentContainer;
